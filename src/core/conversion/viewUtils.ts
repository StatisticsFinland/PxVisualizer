import { IQueryVisualizationResponse } from "../types";
import { EVariableType, EVisualizationType, IContentComponent, IVariableMeta, IVariableValueMeta, TMultiLanguageString } from "../types/queryVisualizationResponse";
import { ESeriesType, IDataCell, IDataSeries, IUnitInfo, TValueSelectionAmounts, View } from "../types/view";
import { ASCENDING, ASCENDING_SORTING_FUNC, DESCENDING, DESCENDING_SORTING_FUNC, NO_SORTING, SUM, REVERSED, sortViewBasedOnSeries, sortViewBasedOnSeriesRelative, sortViewBasedOnSum, reverseViewOrder } from "./viewSorting";
import { cartesianProduct, onlyUnique } from "./utilityFunctions";
import { TVariableSelections } from "../types/variableSelections";
import Translations from "./translations";

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

    return {
        header: responseObj.header,
        tableReferenceName: responseObj.tableReference.name,
        subheaderValues: getSubheaderValues(selectableVariables, selectedValueCodes, selectedValueAmounts),
        units: getUnitInformation(contentVar, selectedValueCodes),
        sources: getContentProperty(contentVar, selectedValueCodes, (cc) => cc?.source ?? Translations.empty),
        columnNameGroups: unsortedSeries.columnNameGroups,
        series: unsortedSeries.series,
        colVarNames: getVariableNames(responseObj.columnVariableCodes, responseObj.metaData),
        rowVarNames: getVariableNames(responseObj.rowVariableCodes, responseObj.metaData),
        selectableVarNames: getVariableNames(responseObj.selectableVariableCodes, responseObj.metaData),
        visualizationSettings: responseObj.visualizationSettings,
        seriesType: getSeriesType(responseObj.columnVariableCodes, responseObj.metaData)
    };
}

export function buildSeries(responseObj: IQueryVisualizationResponse, selectedValueCodes: TVariableSelections): { columnNameGroups: TMultiLanguageString[][], series: IDataSeries[] } {
    const valuesInView: Set<string> = new Set(getValuesInView(responseObj, selectedValueCodes).map(v => v.code));
    const rowVarValues: IVariableValueMeta[][] = getVariableValues(responseObj, responseObj.rowVariableCodes);
    const columnVarValues: IVariableValueMeta[][] = getVariableValues(responseObj, responseObj.columnVariableCodes);
    const selectableValues: IVariableValueMeta[][] = getVariableValues(responseObj, responseObj.selectableVariableCodes);
    const cartesianColumnVarValues: IVariableValueMeta[][] = cartesianProduct(columnVarValues);
    const cartesianRowVarValues: IVariableValueMeta[][] = cartesianProduct(rowVarValues);
    const cartesianSelectableVarValues: IVariableValueMeta[][] = cartesianProduct(selectableValues);
    const viewPrecision: number | null = getViewPrecision(responseObj, selectedValueCodes);
    const multiselectValues: IVariableValueMeta[] = responseObj.metaData.find(v => v.code === responseObj.visualizationSettings.multiselectableVariableCode)?.values ?? [];

    let dataIndex: number = 0;
    const viewSeries: IDataSeries[] = [];

    cartesianSelectableVarValues.forEach(selectableVarValueGroup => {
        const multiselects = selectableVarValueGroup.filter(v => multiselectValues.includes(v));
        cartesianRowVarValues.forEach(rowVarValueGroup => {
            const preliminaryRow: boolean = rowVarValueGroup.some(v => Object.values(v.name)[0].trim().endsWith('*'));
            const rowPrecision: number | null = viewPrecision ?? rowVarValueGroup.find(v => v.contentComponent)?.contentComponent?.numberOfDecimals ?? null;
            const rowSeries: IDataCell[] = [];

            cartesianColumnVarValues.forEach(colVarValueGroup => {
                const combinedValues: IVariableValueMeta[] = [...rowVarValueGroup, ...colVarValueGroup, ...selectableVarValueGroup];
                const dataCell: IDataCell | null = createDataCell(
                    combinedValues,
                    valuesInView,
                    responseObj,
                    dataIndex,
                    rowPrecision,
                    preliminaryRow,
                    colVarValueGroup);
                if (dataCell) {
                    rowSeries.push(dataCell);
                }
                dataIndex++;
            });

            if (rowSeries.length > 0) {
                viewSeries.push({
                    rowNameGroup: [...multiselects.map(value => value.name), ...rowVarValueGroup.map(value => value.name)],
                    series: rowSeries
                });
            }
        });
    });

    return {
        columnNameGroups: cartesianColumnVarValues.map(columnVarValueGroup => columnVarValueGroup.map(value => value.name)),
        series: viewSeries
    };
}

function createDataCell(
    combinedValues: IVariableValueMeta[],
    valuesInView: Set<string>,
    responseObj: IQueryVisualizationResponse,
    dataIndex: number,
    rowPrecision: number | null,
    preliminaryRow: boolean,
    colVarValueGroup: IVariableValueMeta[]
): IDataCell | null {
    if (combinedValues.every(value => valuesInView.has(value.code))) {
        const dataCell: IDataCell = {
            value: responseObj.data[dataIndex],
            precision: rowPrecision ?? colVarValueGroup.find(v => v.contentComponent)?.contentComponent?.numberOfDecimals ?? 0,
            preliminary: preliminaryRow || colVarValueGroup.some(v => Object.values(v.name)[0].trim().endsWith('*'))
        };

        if (!dataCell.value) dataCell.missingCode = responseObj.missingDataInfo[dataIndex];
        return dataCell;
    }
    else {
        return null;
    }
}

function getValuesInView(responseObj: IQueryVisualizationResponse, selectedValueCodes: TVariableSelections): IVariableValueMeta[] {
    return responseObj.metaData.flatMap(variable => {
        if (responseObj.selectableVariableCodes.includes(variable.code) ||
            Object.keys(selectedValueCodes).includes(variable.code)) {
            const values: IVariableValueMeta[] = variable.values.filter(value => selectedValueCodes[variable.code].includes(value.code));
            if (values.length === 0) throw new Error("Provided selected value code can not be found from the metadata");
            return values;
        }
        else {
            return variable.values;
        }
    });
}

function getVariableValues(responseObj: IQueryVisualizationResponse, variableCodes: string[]): IVariableValueMeta[][] {
    return responseObj.metaData
        .filter(vm => variableCodes.includes(vm.code))
        .filter(vm => vm.values.length > 1)
        .map(vm => vm.values);
}

function getViewPrecision(responseObj: IQueryVisualizationResponse, selectedValueCodes: TVariableSelections): number | null {
    const contentVar = getContentVariable(responseObj.metaData);

    // Only one content variable value
    if (contentVar.values.length === 1) {
        return contentVar.values[0].contentComponent?.numberOfDecimals ?? null

    // Content variable in selection
    } else if (responseObj.selectableVariableCodes.includes(contentVar.code) && responseObj.visualizationSettings.multiselectableVariableCode !== contentVar.code) {
        return contentVar.values.find(value => selectedValueCodes[contentVar.code].includes(value.code))?.contentComponent?.numberOfDecimals ?? null;

    } else {
        return null;
    }
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

function getSeriesType (varCodes: string[], meta: IVariableMeta[]) {
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