import { IQueryVisualizationResponse } from "../types";
import { EVariableType, EVisualizationType, IContentComponent, IVariableMeta, IVariableValueMeta, TMultiLanguageString } from "../types/queryVisualizationResponse";
import { ESeriesType, IDataCell, IDataSeries, IUnitInfo, TValueSelectionAmounts, View } from "../types/view";
import { ASCENDING, ASCENDING_SORTING_FUNC, DESCENDING, DESCENDING_SORTING_FUNC, NO_SORTING, SUM, REVERSED, sortViewBasedOnSeries, sortViewBasedOnSeriesRelative, sortViewBasedOnSum, reverseViewOrder } from "./viewSorting";
import { cartesianProduct, onlyUnique } from "./utilityFunctions";
import { TVariableSelections } from "../types/variableSelections";
import { Translations } from "./translations";
import { SeriesBuilder } from "./seriesBuilder";
import { getValuesForVariableInView, sortVariables } from "./seriesBuilderUtilities";

export function convertPxGrafResponseToView(
    responseObj: IQueryVisualizationResponse, selectedValueCodes: TVariableSelections
): View {
    const view: View = convert(responseObj, selectedValueCodes, getValueSelectAmounts(selectedValueCodes));

    const isRelativeChart =
        view.visualizationSettings?.visualizationType === EVisualizationType.PercentHorizontalBarChart
        || view.visualizationSettings?.visualizationType === EVisualizationType.PercentVerticalBarChart;

    switch (responseObj.visualizationSettings?.sorting) {
        case null: return view;
        case undefined: return view;
        case NO_SORTING: return view;
        case REVERSED: return reverseViewOrder(view);
        case SUM: return sortViewBasedOnSum(view, DESCENDING_SORTING_FUNC);
        case ASCENDING: return sortViewBasedOnSeries(view, 0, ASCENDING_SORTING_FUNC);
        case DESCENDING: return sortViewBasedOnSeries(view, 0, DESCENDING_SORTING_FUNC);
        default:
            if (isRelativeChart) return sortViewBasedOnSeriesRelative(view, convertToRelative(view), getSortingIndex(responseObj), DESCENDING_SORTING_FUNC);
            else return sortViewBasedOnSeries(view, getSortingIndex(responseObj), DESCENDING_SORTING_FUNC);
    };
}

export function convertToRelative(input: View): View {
    const newSeries = input.series.map(s => ({
        ...s,
        series: s.series.map((dataCell, index) => {
            const sum = input.series.reduce((sum, series) => sum + (series.series[index].value ?? 0), 0);
            const value = (!sum || sum === 0) ? null : Math.round((100 * (dataCell.value ?? 0) / sum) * 10) / 10;
            const newCell: IDataCell = { value, precision: 1, preliminary: dataCell.preliminary };
            if (value === null) newCell.missingCode = dataCell.missingCode;
            return newCell;
        }),
    }));

    const convertUnit = (unit: TMultiLanguageString) => {
        return Object.keys(unit).reduce((acc: TMultiLanguageString, lang: string) => {
            acc[lang] = '%';
            return acc;
        }, {})
    };

    return {...input, units: input.units.map(u => ({name: u.name, unit: convertUnit(u.unit) })) , series: newSeries};
}

function getValueSelectAmounts(selectedValueCodes: TVariableSelections): TValueSelectionAmounts {
    const result: TValueSelectionAmounts = {};
    Object.entries(selectedValueCodes).forEach(([key, value]) => result[key] = value.length);
    return result;
}

function convert(responseObj: IQueryVisualizationResponse, selectedValueCodes: TVariableSelections, selectedValueAmounts: TValueSelectionAmounts): View {
    const { metaData, selectableVariableCodes } = responseObj;
    const selectableVariables = getSelectableVariables(metaData, selectableVariableCodes);
    const contentVar = getContentVariable(metaData);
    const unsortedSeries = buildSeries(responseObj, selectedValueCodes);
    // Row variable names are derived from both directionless multiselected selectable and row variables
    const directionlessMultiselectVarNames = responseObj.selectableVariableCodes.filter(code =>
        selectedValueAmounts[code] > 1 &&
        !responseObj.rowVariableCodes.includes(code) &&
        !responseObj.columnVariableCodes.includes(code));
    const rowVarNames = getVariableNames(directionlessMultiselectVarNames, metaData)
        .concat(getVariableNames(responseObj.rowVariableCodes, responseObj.metaData));

    const lastUpdated = getLastUpdated(contentVar, selectedValueCodes);

    return {
        header: responseObj.header,
        tableReferenceName: responseObj.tableReference.name,
        subheaderValues: getSubheaderValues(selectableVariables, selectedValueCodes, selectedValueAmounts),
        units: getUnitInformation(contentVar, selectedValueCodes),
        sources: getContentProperty(contentVar, selectedValueCodes, (cc) => cc?.source ?? Translations.empty),
        lastUpdated: lastUpdated,
        columnNameGroups: unsortedSeries.columnNameGroups,
        series: unsortedSeries.series,
        rowVarNames: rowVarNames,
        colVarNames: getVariableNames(responseObj.columnVariableCodes, responseObj.metaData),
        selectableVarNames: getVariableNames(responseObj.selectableVariableCodes, responseObj.metaData),
        visualizationSettings: responseObj.visualizationSettings,
        seriesType: getSeriesType(responseObj.columnVariableCodes, responseObj.metaData)
    };
}

export function buildSeries(responseObj: IQueryVisualizationResponse, selectedValueCodes: TVariableSelections): { columnNameGroups: TMultiLanguageString[][], series: IDataSeries[] } {
    const seriesBuilder: SeriesBuilder = new SeriesBuilder(responseObj, selectedValueCodes);
    const viewSeries: IDataSeries[] = seriesBuilder.getViewSeries();
    const columnVarValues: IVariableValueMeta[][] = sortVariables(responseObj.metaData
        .filter(vm => responseObj.columnVariableCodes.includes(vm.code))
        .filter(vm => vm.values.length > 1), responseObj.columnVariableCodes)
        .map(vm => getValuesForVariableInView(vm, selectedValueCodes));
    const cartesianColumnVarValues: IVariableValueMeta[][] = cartesianProduct(columnVarValues);
    return {
        columnNameGroups: cartesianColumnVarValues.map(columnVarValueGroup => columnVarValueGroup.map(value => value.name)),
        series: viewSeries
    };
}

function getVariableNames(varCodes: string[], meta: IVariableMeta[]): TMultiLanguageString[] {
    return varCodes.reduce((acc: TMultiLanguageString[], code: string) => {
        const name = meta.find(v => v.code === code)?.name;
        if (name) acc.push(name);
        return acc;
    }, [])
}

function getSelectableVariables(metaData: IVariableMeta[], selectableVariableCodes: string[]): IVariableMeta[] {
    return metaData.filter(varMeta => selectableVariableCodes.includes(varMeta.code));
}

function getSortingIndex(responseObj: IQueryVisualizationResponse): number {
    const sortingVar = responseObj.metaData.find(v => v.code == responseObj.rowVariableCodes[0]);
    const valIndex = sortingVar?.values.findIndex(v => v.code === responseObj.visualizationSettings?.sorting);
    return (!valIndex || valIndex < 0) ? 0 : valIndex;
}

function getContentVariable(varMeta: IVariableMeta[]): IVariableMeta {
    const contentVar = varMeta.find(v => v.type === EVariableType.Content);
    if (contentVar) return contentVar;
    else throw new Error('Content variable is not defined');
}

function getSubheaderValues(selectableVariables: IVariableMeta[], selectedValueCodes: TVariableSelections, selectedValueAmounts: TValueSelectionAmounts): TMultiLanguageString[] {
    const subheaderValues: TMultiLanguageString[] = [];
    selectableVariables.forEach(selectableVariable => {
        // We only want to show the value name if there is exactly one selected.
        if (selectedValueAmounts[selectableVariable.code] == 1) {
            // Find the value whose code matches selected value code for this variable and add it to subheaderValues
            subheaderValues.push(selectableVariable.values.find(v => v.code === selectedValueCodes[selectableVariable.code][0])?.name ?? {})
        }
    });
    return subheaderValues;
}

function getUnitInformation(contentVar: IVariableMeta, selectedValueCodes: TVariableSelections): IUnitInfo[] {
    const values = contentVar.code in selectedValueCodes
        ? contentVar.values.filter(v => selectedValueCodes[contentVar.code].includes(v.code))
        : contentVar.values

    return values.reduce((accum: IUnitInfo[], valMeta: IVariableValueMeta) => {
        if(valMeta.contentComponent) accum.push({
            name: valMeta.name,
            unit: valMeta.contentComponent.unit
        });
        return accum;
    }, []);
}

function getContentProperty(
    contentVar: IVariableMeta,
    selectedValueCodes: TVariableSelections,
    extractorFunc: (cc: IContentComponent | null) => TMultiLanguageString
): TMultiLanguageString[] {
    if (contentVar.code in selectedValueCodes) {
        return contentVar.values
            .filter(v => selectedValueCodes[contentVar.code].includes(v.code))
            .map(cvv => extractorFunc(cvv.contentComponent))
            .filter(onlyUnique);
    } else {
        return contentVar.values.map(cvv => extractorFunc(cvv.contentComponent)).filter(onlyUnique);
    }
}

function getLastUpdated(
    contentVar: IVariableMeta,
    selectedValueCodes: TVariableSelections
): string {
    let dates: (string | undefined)[];

    if (contentVar.code in selectedValueCodes) {
        dates = contentVar.values
            .filter(v => selectedValueCodes[contentVar.code].includes(v.code))
            .map(cvv => cvv.contentComponent?.lastUpdated)
            .filter(onlyUnique);
    } else {
        dates = contentVar.values
            .map(cvv => cvv.contentComponent?.lastUpdated)
            .filter(onlyUnique);
    }

    // Filter out undefined values and get the most recent date
    const validDates = dates.filter((date): date is string => date !== undefined);

    if (validDates.length === 0) {
        return '';
    }

    if (validDates.length === 1) {
        return validDates[0];
    }

    // Find the most recent date
    return validDates.reduce((latest, current) => {
        const latestDate = new Date(latest);
        const currentDate = new Date(current);
        return currentDate > latestDate ? current : latest;
    }, '');
}

function getSeriesType(varCodes: string[], meta: IVariableMeta[]) {
    if (varCodes.length > 1 || varCodes.length === 0) {
        return ESeriesType.Nominal;
    }

    const metaDataType = meta.find(v => v.code === varCodes[0])?.type;

    switch (metaDataType) {
        case EVariableType.Time:
            return ESeriesType.Time;
        case EVariableType.Ordinal:
            return ESeriesType.Ordinal;
        default:
            return ESeriesType.Nominal;
    }
}