import { IQueryVisualizationResponse } from "../types";
import { EVariableType, EVisualizationType, IContentComponent, IVariableMeta, IVariableValueMeta, TMultiLanguageString } from "../types/queryVisualizationResponse";
import { ESeriesType, IDataCell, IDataSeries, IUnitInfo, TSingleSelections, TValueSelectionAmounts, View } from "../types/view";
import { ASCENDING, ASCENDING_SORTING_FUNC, DESCENDING, DESCENDING_SORTING_FUNC, NO_SORTING, SUM, REVERSED, sortViewBasedOnSeries, sortViewBasedOnSeriesRelative, sortViewBasedOnSum, reverseViewOrder } from "./viewSorting";
import { cartesianProduct, onlyUnique } from "./utilityFunctions";
import { TVariableSelections } from "../types/variableSelections";
import Translations from "./translations";

export function convertPxGrafResponseToView(
    responseObj: IQueryVisualizationResponse, selectedValueCodes: TVariableSelections
): View {
    const view: View = responseObj.visualizationSettings?.multiselectableVariableCode
        ? combineMultiselectionViews(responseObj, selectedValueCodes)
        : convert(responseObj, collapseSelections(selectedValueCodes), getValueSelectAmounts(selectedValueCodes));

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

function combineMultiselectionViews(responseObj: IQueryVisualizationResponse, selectedValueCodes: TVariableSelections): View {
    const multiselectVarCode = responseObj.visualizationSettings?.multiselectableVariableCode ?? '';
    const valueSelectAmounts = getValueSelectAmounts(selectedValueCodes);
    const singleSelections = collapseSelections(selectedValueCodes);

    const views = selectedValueCodes[multiselectVarCode].map(code => {
        const view = convert(responseObj, { ...singleSelections, [multiselectVarCode]: code }, valueSelectAmounts);
        const valName = responseObj.metaData
            .find(variable => variable.code === multiselectVarCode)?.values
            .find(value => value.code === code)?.name ?? Translations.empty;

        return addRowNameToView(valName, view);
    });

    return combineViews(views);
}

function getValueSelectAmounts(selectedValueCodes: TVariableSelections): TValueSelectionAmounts {
    const result: TValueSelectionAmounts = {};
    Object.entries(selectedValueCodes).forEach(([key, value]) => result[key] = value.length);
    return result;
}

function convert(responseObj: IQueryVisualizationResponse, selectedValueCodes: TSingleSelections, selectedValueAmounts: TValueSelectionAmounts): View {
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

function getViewSize( responseObj: IQueryVisualizationResponse ) : number {
    const { metaData, selectableVariableCodes } = responseObj;
    return metaData
        .filter(varMeta => !selectableVariableCodes.includes(varMeta.code))
        .map(nonSelectableVariable => nonSelectableVariable.values.length)
        .reduce((a, b) => a * b, 1);
}

export function buildSeries(responseObj: IQueryVisualizationResponse, selectedValueCodes: TSingleSelections): { columnNameGroups: TMultiLanguageString[][], series: IDataSeries[] } {

    const selectableVariables = getSelectableVariables(responseObj.metaData, responseObj.selectableVariableCodes);

    const rowVarValues = responseObj.metaData
        .filter(vm => responseObj.rowVariableCodes.includes(vm.code))
        .filter(vm => vm.values.length > 1)
        .map(vm => vm.values);

    const columnVarValues = responseObj.metaData
        .filter(vm => responseObj.columnVariableCodes.includes(vm.code))
        .filter(vm => vm.values.length > 1)
        .map(vm => vm.values);

    const cartesianColumnVarValues = cartesianProduct(columnVarValues);
    const cartesianRowVarValues = cartesianProduct(rowVarValues);

    const viewIndex = computeViewIndex(selectableVariables, selectedValueCodes, getViewSize(responseObj));
    const viewPrecision = getViewPrecision(responseObj, selectedValueCodes);
    let dataIndex = 0;
    const viewSeries = cartesianRowVarValues.map((rowVarValueGroup) => {
        const preliminaryRow = rowVarValueGroup.some(v => Object.values(v.name)[0].trim().endsWith('*'));
        const rowPrecision = viewPrecision ?? rowVarValueGroup.find(v => v.contentComponent)?.contentComponent?.numberOfDecimals ?? null
        const rowSeries: IDataCell[] = cartesianColumnVarValues.map((colVarValueGroup) => {
            const dataCell: IDataCell = {
                value: responseObj.data[viewIndex + dataIndex],
                precision: rowPrecision ?? colVarValueGroup.find(v => v.contentComponent)?.contentComponent?.numberOfDecimals ?? 0,
                preliminary: preliminaryRow || colVarValueGroup.some(v => Object.values(v.name)[0].trim().endsWith('*'))
            }
            if (!dataCell.value) dataCell.missingCode = responseObj.missingDataInfo[viewIndex + dataIndex]; // This has different indexing than viewData
            dataIndex++;
            return dataCell;
        });

        return { rowNameGroup: rowVarValueGroup.map(value => value.name), series: rowSeries };
    });

    return {
        columnNameGroups: cartesianColumnVarValues.map(columnVarValueGroup => columnVarValueGroup.map(value => value.name)),
        series: viewSeries
    };
}

function getViewPrecision(responseObj: IQueryVisualizationResponse, selectedValueCodes: TSingleSelections): number | null {
    const contentVar = getContentVariable(responseObj.metaData);

    // Only one content variable value
    if (contentVar.values.length === 1) {
        return contentVar.values[0].contentComponent?.numberOfDecimals ?? null

    // Content variable in selection
    } else if (responseObj.selectableVariableCodes.includes(contentVar.code) && responseObj.visualizationSettings.multiselectableVariableCode !== contentVar.code) {
        return contentVar.values.find(value => value.code === selectedValueCodes[contentVar.code])?.contentComponent?.numberOfDecimals ?? null;

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

function computeViewIndex(selectableVariables: IVariableMeta[], selectedValueCodes: TSingleSelections, viewSize: number): number {
    let viewIndex = 0;
    let product = 1;

    // OBS: Loop in reverse order: the last variable in the list affects the index the least and the first one the most.
    for (let i = selectableVariables.length - 1; i >= 0; i--) {
        const selectedValueIndex = selectableVariables[i].values.findIndex(value => value.code === selectedValueCodes[selectableVariables[i].code]);
        if (selectedValueIndex < 0) throw new Error("Provided selected value code can not be found from the metadata");
        viewIndex += selectedValueIndex * viewSize * product;
        product *= selectableVariables[i].values.length;
    }

    return viewIndex;
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

function getSubheaderValues(selectableVariables: IVariableMeta[], selectedValueCodes: TSingleSelections, selectedValueAmounts: TValueSelectionAmounts): TMultiLanguageString[] {
    const subheaderValues: TMultiLanguageString[] = [];
    selectableVariables.forEach(selectableVariable => {
        // We only want to show the value name if there is exactly one selected.
        if (selectedValueAmounts[selectableVariable.code] == 1) {
            // Find the value whose code matches selected value code for this variable and add it to subheaderValues
            subheaderValues.push(selectableVariable.values.find(v => v.code === selectedValueCodes[selectableVariable.code])?.name ?? {})
        }
    });
    return subheaderValues;
}

function getUnitInformation(contentVar: IVariableMeta, selectedValueCodes: TSingleSelections): IUnitInfo[] {
    const values = contentVar.code in selectedValueCodes
        ? contentVar.values.filter(v => selectedValueCodes[contentVar.code] === v.code)
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
    selectedValueCodes: TSingleSelections,
    extractorFunc: (cc: IContentComponent | null) => TMultiLanguageString
): TMultiLanguageString[] {
    if (contentVar.code in selectedValueCodes) {
        return contentVar.values
            .filter(v => selectedValueCodes[contentVar.code] === v.code)
            .map(cvv => extractorFunc(cvv.contentComponent))
            .filter(onlyUnique);
    } else {
        return contentVar.values.map(cvv => extractorFunc(cvv.contentComponent)).filter(onlyUnique);
    }
}

function collapseSelections(selections: TVariableSelections): TSingleSelections {
    const result: TSingleSelections = {};
    Object.entries(selections).forEach(([key, value]) => result[key] = value[0]);
    return result;
}

function combineViews(views: View[]): View {
    return {
        header: views[0].header,
        tableReferenceName: views[0].tableReferenceName,
        subheaderValues: views[0].subheaderValues,
        units: views.reduce((combined: IUnitInfo[], view: View) =>
            combined.concat(view.units), []).filter(onlyUnique),
        sources: views.reduce((combined: TMultiLanguageString[], view: View) =>
            combined.concat(view.sources), []).filter(onlyUnique),
        colVarNames: views[0].colVarNames,
        rowVarNames: views[0].rowVarNames,
        selectableVarNames: views[0].selectableVarNames,
        columnNameGroups: views[0].columnNameGroups,
        series: views.reduce((combined: IDataSeries[], view: View) =>
            combined.concat(view.series), []),
        visualizationSettings: views[0].visualizationSettings,
        seriesType: views[0].seriesType
    };
}

function addRowNameToView(name: TMultiLanguageString, view: View): View {
    return {
        ...view,
        series: view.series.map(serie => ({
            ...serie,
            rowNameGroup: [name].concat(serie.rowNameGroup)
        }))
    };
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