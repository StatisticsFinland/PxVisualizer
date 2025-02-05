import { IQueryVisualizationResponse } from "../types";
import { EVariableType, IVariableMeta, IVariableValueMeta, TMultiLanguageString } from "../types/queryVisualizationResponse";
import { TVariableSelections } from "../types/variableSelections";
import { IDataCell, IDataSeries } from "../types/view";
import { getValuesForVariableInView, sortVariables } from "./seriesBuilderUtilities";
import { cartesianProduct } from "./utilityFunctions";

export class SeriesBuilder {
    public dataIndex: number;
    public dataLength: number;

    private readonly responseObj: IQueryVisualizationResponse;
    private readonly coordinates: number[][];
    private readonly lastIndices: number[];
    private readonly indices: number[];
    private readonly variableOrder: number[];
    private readonly lastCoordinateIndex: number;
    private readonly reverseCumulativeProducts: number[];
    private readonly selectedViewContentVariableIndex: number;
    private readonly selectedViewTimeVariableIndex: number;
    private readonly selectedViewMeta: IVariableMeta[];

    private rowLength: number = 0;
    private rowAmount: number = 0;

    constructor(responseObj: IQueryVisualizationResponse, selectedValueCodes: TVariableSelections) {
        this.responseObj = responseObj;
        const completeMap: IVariableMeta[] = responseObj.metaData;
        const variableSizes: number[] = completeMap.map(v => v.values.length);
        this.selectedViewMeta = this.getSelectedView(responseObj, selectedValueCodes);
        this.coordinates = Array.from({ length: this.selectedViewMeta.length }, () => []);
        this.variableOrder = this.getVariableOrder();
        this.initializeCoordinates(completeMap);
        this.selectedViewContentVariableIndex = this.selectedViewMeta.findIndex(v => v.type === EVariableType.Content);
        this.selectedViewTimeVariableIndex = this.selectedViewMeta.findIndex(v => v.type === EVariableType.Time);
        this.indices = Array.from({ length: completeMap.length }, () => 0);
        this.lastIndices = this.selectedViewMeta.map(v => v.values.length - 1);
        this.lastCoordinateIndex = this.coordinates.length - 1;
        this.reverseCumulativeProducts = this.generateRCP(variableSizes);
        this.dataLength = this.selectedViewMeta.map(v => v.values.length).reduce((acc, val) => acc * val, 1);
        this.dataIndex = 0;
        this.setCurrentIndex();
    }

    private initializeCoordinates(completeMap: IVariableMeta[]): void {
        for (let targetIndex = 0; targetIndex < this.selectedViewMeta.length; targetIndex++) {
            const variableIndex: number = this.variableOrder[targetIndex];
            const targetVariableCode: string = this.selectedViewMeta[targetIndex].code;
            const values: IVariableValueMeta[] = completeMap.find(v => v.code === targetVariableCode)?.values as IVariableValueMeta[];
            const targetVariable: IVariableMeta = this.selectedViewMeta.find(v => v.code === targetVariableCode) as IVariableMeta;
            this.coordinates[variableIndex] = targetVariable.values.map(tv => values.findIndex(v => v === tv));
        }
    }

    public getViewSeries(): IDataSeries[] {
        let rowIndex = 0;
        let currentSeries: IDataCell[] = [];
        const viewSeries: IDataSeries[] = [];
        do {
            const dataCell: IDataCell = this.createDataCell();
            currentSeries.push(dataCell);
            rowIndex++;
            if (rowIndex >= this.rowLength) {
                viewSeries.push({ rowNameGroup: this.generateRowNameGroup(), series: currentSeries });
                currentSeries = [];
                rowIndex = 0;
            }
        } while (this.next());

        return viewSeries;
    }

    generateRowNameGroup(): TMultiLanguageString[] {
        return this.selectedViewMeta.slice(0, this.rowAmount).map((rowVariable, index) => {
            return rowVariable.values[this.indices[this.variableOrder[index]]].name
        });
    }

    next(): boolean {
        for (let i = this.lastCoordinateIndex; i >= 0; i--) {
            const variableIndex: number = this.variableOrder[i];
            if (this.indices[variableIndex] < this.lastIndices[i]) {
                this.indices[variableIndex]++;
                this.setCurrentIndex();
                return true;
            }
            else {
                this.indices[variableIndex] = 0;
            }
        }
        return false;
    }

    createDataCell(): IDataCell {
        const timeVal: IVariableValueMeta | undefined = this.getCurrentTimeValue();
        const dataCell: IDataCell = {
            value: this.responseObj.data[this.dataIndex],
            precision: this.selectedViewMeta[this.selectedViewContentVariableIndex]
                .values[this.indices[this.variableOrder[this.selectedViewContentVariableIndex]]]
                .contentComponent?.numberOfDecimals ?? 0,
            preliminary: timeVal ? Object.values(timeVal.name)[0].trim().endsWith('*') : false
        };
        if (!dataCell.value) dataCell.missingCode = this.responseObj.missingDataInfo[this.dataIndex];
        return dataCell;
    }

    getSelectedView(responseObj: IQueryVisualizationResponse, selectedValueCodes: TVariableSelections): IVariableMeta[] {
        const filteredVariables: IVariableMeta[] = responseObj.metaData.map((variable) => {
            return { ...variable, values: getValuesForVariableInView(variable, selectedValueCodes) }
        });
        const rowVariables: IVariableMeta[] = sortVariables(filteredVariables.filter(v => responseObj.rowVariableCodes.includes(v.code) && v.values.length > 1), responseObj.rowVariableCodes);
        const columnVariables: IVariableMeta[] = sortVariables(filteredVariables.filter(v => responseObj.columnVariableCodes.includes(v.code) && v.values.length > 1), responseObj.columnVariableCodes);
        const selectableVariables: IVariableMeta[] = sortVariables(filteredVariables.filter(v => responseObj.selectableVariableCodes.includes(v.code)), responseObj.selectableVariableCodes);
        const directionlessMultiselectVariables: IVariableMeta[] = selectableVariables.filter(v => v.values.length > 1 && !rowVariables.some(rv => rv.code == v.code) && !columnVariables.some(cv => cv.code == v.code));
        const singleSelectedVariables: IVariableMeta[] = selectableVariables.filter(v => v.values.length == 1);
        const unassignedVariables: IVariableMeta[] = filteredVariables.filter(v => !rowVariables.some(rv => rv.code == v.code) && !columnVariables.some(cv => cv.code == v.code) && !selectableVariables.some(sv => sv.code == v.code));
        const targetMap: IVariableMeta[] = [
            ...directionlessMultiselectVariables,
            ...rowVariables,
            ...columnVariables,
            ...singleSelectedVariables,
            ...unassignedVariables];
        this.rowLength = cartesianProduct(filteredVariables.filter(v => responseObj.columnVariableCodes.includes(v.code)).map(v => v.values)).length;
        this.rowAmount = rowVariables.length + directionlessMultiselectVariables.length;
        return targetMap;
    }

    getVariableOrder(): number[] {
        const sourceCodes: string[] = this.responseObj.metaData.map(v => v.code);
        const codes = this.selectedViewMeta.map(v => sourceCodes.indexOf(v.code));
        return codes;
    }

    generateRCP(variableSizes: number[]): number[] {
        const cnt: number[] = Array.from({ length: variableSizes.length });
        let cumulativeMultiplier: number = 1;
        for (let i = variableSizes.length - 1; i >= 0; i--) {
            cnt[i] = cumulativeMultiplier;
            cumulativeMultiplier *= variableSizes[i];
        }
        return cnt;
    }

    setCurrentIndex() {
        this.dataIndex = 0;
        for (let i = 0; i <= this.lastCoordinateIndex; i++) {
            const variableIndex: number = this.variableOrder[i];
            this.dataIndex += this.reverseCumulativeProducts[variableIndex] * this.coordinates[variableIndex][this.indices[variableIndex]];
        }
    }

    getCurrentTimeValue(): IVariableValueMeta | undefined {
        if (this.selectedViewTimeVariableIndex == -1) {
            return undefined;
        }
        return this.selectedViewMeta[this.selectedViewTimeVariableIndex]
            .values[this.indices[this.variableOrder[this.selectedViewTimeVariableIndex]]];
    }
}