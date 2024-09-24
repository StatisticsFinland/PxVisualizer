import { IQueryVisualizationResponse } from "../types";
import { EVariableType, IVariableMeta, IVariableValueMeta, TMultiLanguageString } from "../types/queryVisualizationResponse";
import { TVariableSelections } from "../types/variableSelections";
import { IDataCell, IDataSeries } from "../types/view";
import { cartesianProduct } from "./utilityFunctions";

export class DataIndexer {
    public dataIndex: number;
    public dataLength: number;

    private responseObj: IQueryVisualizationResponse;
    private coordinates: number[][];
    private lastIndices: number[];
    private indices: number[];
    private variableOrder: number[];
    private lastCoordinateIndex: number;
    private reverseCumulativeProducts: number[];
    private selectedViewContentVariableIndex: number;
    private selectedViewVariableIndex: number;
    private completeViewContentVariableIndex: number;
    private completeViewTimeVariableIndex: number;
    private selectedViewMeta: IVariableMeta[];
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
        this.selectedViewVariableIndex = this.selectedViewMeta.findIndex(v => v.type === EVariableType.Time);
        this.completeViewContentVariableIndex = this.variableOrder[this.selectedViewContentVariableIndex];
        this.completeViewTimeVariableIndex = this.variableOrder[this.selectedViewVariableIndex];
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
            const targetVariableCode = this.selectedViewMeta[targetIndex].code;
            const values = completeMap.find(v => v.code === targetVariableCode)?.values;
            if (!values) throw new Error("Provided variable code can not be found from the metadata");
            const targetVariable = this.selectedViewMeta.find(v => v.code === targetVariableCode);
            if (!targetVariable) throw new Error("Provided variable code can not be found from the target map");
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

        if (currentSeries.length > 0) {
            viewSeries.push({ rowNameGroup: this.generateRowNameGroup(), series: currentSeries });
        }

        return viewSeries;
    }

    generateRowNameGroup(): TMultiLanguageString[] {
        return this.variableOrder.slice(0, this.rowAmount).map(variableIndex =>
            this.responseObj.metaData[variableIndex].values[this.indices[variableIndex]].name
        );
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
            precision: this.selectedViewMeta[this.selectedViewContentVariableIndex].values[this.indices[this.completeViewContentVariableIndex]].contentComponent?.numberOfDecimals ?? 0,
            preliminary: timeVal ? Object.values(timeVal.name)[0].trim().endsWith('*') : false
        };
        if (!dataCell.value) dataCell.missingCode = this.responseObj.missingDataInfo[this.dataIndex];
        return dataCell;
    }

    getSelectedView(responseObj: IQueryVisualizationResponse, selectedValueCodes: TVariableSelections): IVariableMeta[] {
        const selectableVariables: IVariableMeta[] = responseObj.metaData.filter(v => responseObj.selectableVariableCodes.includes(v.code) || responseObj.visualizationSettings.multiselectableVariableCode == v.code).map((variable) => {
            const values: IVariableValueMeta[] = variable.values.filter((value) =>
                selectedValueCodes[variable.code].includes(value.code)
            );
            if (values.length === 0) {
                throw new Error("Provided selected value code can not be found from the metadata");
            }
            return { ...variable, values };
        });
        const multiSelectedVariables: IVariableMeta[] = selectableVariables.filter(v => v.values.length > 1);
        const singleSelectedVariables: IVariableMeta[] = selectableVariables.filter(v => !multiSelectedVariables.includes(v));
        const rowVariables: IVariableMeta[] = responseObj.metaData.filter(v => !selectableVariables.some(sv => sv.code == v.code) && responseObj.rowVariableCodes.includes(v.code) && v.values.length > 1);
        const unassignedVariables: IVariableMeta[] = responseObj.metaData.filter(v => !rowVariables.some(rv => rv.code == v.code) && !selectableVariables.some(sv => sv.code == v.code));
        const targetMap: IVariableMeta[] = [...multiSelectedVariables, ...rowVariables, ...singleSelectedVariables, ...unassignedVariables];
        this.rowLength = cartesianProduct(responseObj.metaData.filter(v => responseObj.columnVariableCodes.includes(v.code)).map(v => v.values)).length;
        this.rowAmount = rowVariables.length + multiSelectedVariables.length;
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
        if (this.selectedViewVariableIndex == -1) {
            return undefined;
        }
        return this.selectedViewMeta[this.selectedViewVariableIndex].values[this.indices[this.completeViewTimeVariableIndex]];
    }
}