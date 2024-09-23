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

    constructor(responseObj: IQueryVisualizationResponse, selectedValueCodes: TVariableSelections) {
        this.responseObj = responseObj;
        const completeMap: IVariableMeta[] = responseObj.metaData;
        const variableSizes: number[] = completeMap.map(v => v.values.length);
        this.selectedViewMeta = this.getSelectedView(responseObj, selectedValueCodes);
        this.coordinates = Array.from({ length: this.selectedViewMeta.length });
        this.variableOrder = this.getVariableOrder();
        for (let targetIndex = 0; targetIndex < this.selectedViewMeta.length; targetIndex++) {
            const variableIndex: number = this.variableOrder[targetIndex];
            const targetVariableCode = this.selectedViewMeta[targetIndex].code;
            const values: IVariableValueMeta[] | undefined = completeMap.find(v => v.code === targetVariableCode)?.values;
            if (!values) throw new Error("Provided variable code can not be found from the metadata");
            const targetVariable: IVariableMeta | undefined = this.selectedViewMeta.find(v => v.code === targetVariableCode);
            if (!targetVariable) throw new Error("Provided variable code can not be found from the target map");
            this.coordinates[variableIndex] = Array.from({ length: targetVariable.values.length });
            for (let mapIndex = 0; mapIndex < targetVariable.values.length; mapIndex++) {
                for (let valueIndex = 0; valueIndex < values.length; valueIndex++) {
                    if (values[valueIndex] === targetVariable.values[mapIndex]) {
                        this.coordinates[variableIndex][mapIndex] = valueIndex;
                    }
                }
            }
        }
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
        const rowNames: TMultiLanguageString[] = [];
        const rowVariableAmount: number = this.responseObj.rowVariableCodes.length + (this.responseObj.visualizationSettings.multiselectableVariableCode ? 1 : 0);
        for (let i = 0; i < rowVariableAmount; i++) {
            const variableIndex = this.variableOrder[i];
            rowNames.push(this.responseObj.metaData[variableIndex].values[this.indices[variableIndex]].name);
        }
        return rowNames;
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
        const rowVariables: IVariableMeta[] = responseObj.metaData.filter(v => responseObj.rowVariableCodes.includes(v.code));
        const columnVariables: IVariableMeta[] = responseObj.metaData.filter(v => responseObj.columnVariableCodes.includes(v.code));
        const selectableVariables: IVariableMeta[] = responseObj.metaData.filter(v => responseObj.selectableVariableCodes.includes(v.code)).map((variable) => {
            const values: IVariableValueMeta[] = variable.values.filter((value) =>
                selectedValueCodes[variable.code].includes(value.code)
            );
            if (values.length === 0) {
                throw new Error("Provided selected value code can not be found from the metadata");
            }
            return variable;
        });
        const multiselectedVariables: IVariableMeta[] = selectableVariables.filter(v => selectedValueCodes[v.code].length > 1);
        const unassignedVariables: IVariableMeta[] = responseObj.metaData.filter(v => !responseObj.rowVariableCodes.includes(v.code) && !responseObj.columnVariableCodes.includes(v.code) && !multiselectedVariables.includes(v));
        const targetMap: IVariableMeta[] = multiselectedVariables.concat(rowVariables).concat(columnVariables).concat(unassignedVariables);
        this.rowLength = cartesianProduct(columnVariables.map(v => v.values)).length;
        return targetMap;
    }

    getVariableOrder(): number[] {
        const sourceCodes: string[] = this.responseObj.metaData.map(v => v.code);
        const codes = this.selectedViewMeta.map(v => sourceCodes.indexOf(v.code));
        return codes;
    }

    generateRCP(variableSizes: number[]): number[] {
        let numOfDims: number = variableSizes.length;
        const cnt: number[] = Array.from({ length: numOfDims });
        let cumulativeMultiplier: number = 1;
        for (let i = numOfDims - 1; i >= 0; i--) {
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