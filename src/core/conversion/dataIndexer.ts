import { IQueryVisualizationResponse } from "../types";
import { EVariableType, IVariableMeta, IVariableValueMeta, TMultiLanguageString } from "../types/queryVisualizationResponse";
import { TVariableSelections } from "../types/variableSelections";
import { IDataCell, IDataSeries } from "../types/view";
import { cartesianProduct } from "./utilityFunctions";
import { isEqual } from "lodash";

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
    private contentVariableIndex: number;
    private timeVariableIndex: number;
    private targetMap: IVariableMeta[];

    constructor(responseObj: IQueryVisualizationResponse, selectedValueCodes: TVariableSelections) {
        this.responseObj = responseObj;
        const completeMap: IVariableMeta[] = responseObj.metaData;
        const variableSizes: number[] = completeMap.map(v => v.values.length);
        this.targetMap = this.getTargetMap(responseObj, selectedValueCodes);
        this.coordinates = Array.from({ length: this.targetMap.length });
        this.variableOrder = this.getVariableOrder(completeMap, this.targetMap);
        for (let targetIndex = 0; targetIndex < this.targetMap.length; targetIndex++) {
            const variableIndex: number = this.variableOrder[targetIndex];
            const targetVariableCode = this.targetMap[targetIndex].code;
            const values: IVariableValueMeta[] | undefined = completeMap.find(v => v.code === targetVariableCode)?.values;
            if (!values) throw new Error("Provided variable code can not be found from the metadata");
            const targetVariable: IVariableMeta | undefined = this.targetMap.find(v => v.code === targetVariableCode);
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
        this.contentVariableIndex = this.variableOrder.indexOf(this.targetMap.findIndex(v => v.type === EVariableType.Content));
        this.timeVariableIndex = this.variableOrder.indexOf(this.targetMap.findIndex(v => v.type === EVariableType.Time));
        this.indices = Array.from({ length: completeMap.length }, () => 0);
        this.lastIndices = this.targetMap.map(v => v.values.length - 1);
        this.lastCoordinateIndex = this.coordinates.length - 1;
        this.reverseCumulativeProducts = this.generateRCP(variableSizes);
        this.dataLength = this.targetMap.map(v => v.values.length).reduce((acc, val) => acc * val, 1);
        this.dataIndex = 0;
        this.setCurrentIndex();
    }

    public getViewSeries(): IDataSeries[] {
        const viewSeries: IDataSeries[] = this.generateViewSeries();
        do {
            const dataCell = this.createDataCell();
            const rowNames: TMultiLanguageString[] = this.getRowNames();
            this.getRowNameGroup(viewSeries, rowNames).series.push(dataCell);
        } while (this.next());

        return viewSeries;
    }

    generateViewSeries(): IDataSeries[] {
        const rowValues: IVariableValueMeta[][] = this.targetMap.filter(v =>
            this.responseObj.rowVariableCodes.includes(v.code) &&
            (v.values.length > 1)).map(v => v.values);
        const multiSelectableValues: IVariableValueMeta[][] = this.targetMap.filter(v =>
            this.responseObj.visualizationSettings.multiselectableVariableCode === v.code).map(v => v.values);
        const nameGroupValues: IVariableValueMeta[][] = multiSelectableValues.concat(rowValues);
        const cartesianRowValues: IVariableValueMeta[][] = cartesianProduct(nameGroupValues);
        const viewSeries: IDataSeries[] = cartesianRowValues.reduce((acc, row) => {
            const nameGroup: TMultiLanguageString[] = row.map(v => v.name);
            acc.push({ rowNameGroup: nameGroup, series: [] });
            return acc;
        }, [] as IDataSeries[]);
        return viewSeries;
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
            precision: this.getCurrentContentValue().contentComponent?.numberOfDecimals ?? 0,
            preliminary: timeVal ? Object.values(timeVal.name)[0].trim().endsWith('*') : false
        };
        if (!dataCell.value) dataCell.missingCode = this.responseObj.missingDataInfo[this.dataIndex];
        return dataCell;
    }

    getRowNames(): TMultiLanguageString[] {
        let rowNames: TMultiLanguageString[] = [];
        for (let i = 0; i < this.indices.length; i++) {
            const variable: IVariableMeta = this.targetMap[i];
            const value: IVariableValueMeta = variable.values[this.indices[i]];
            if ((this.responseObj.rowVariableCodes.includes(variable.code) ||
                this.responseObj.visualizationSettings.multiselectableVariableCode === variable.code) &&
                variable.values.length > 1) {
                rowNames.push(value.name);
            }
        }
        return rowNames;
    }

    getRowNameGroup(viewSeries: IDataSeries[], rowNames: TMultiLanguageString[]): IDataSeries {
        const match: IDataSeries | undefined = viewSeries.find(vs => isEqual(vs.rowNameGroup, rowNames));
        if (match) {
            return match;
        }
        throw new Error("Provided row name group can not be found from the view series");
    }

    getTargetMap(responseObj: IQueryVisualizationResponse, selectedValueCodes: TVariableSelections): IVariableMeta[] {
        const targetMap: IVariableMeta[] = responseObj.metaData.map((variable) => {
            if (responseObj.selectableVariableCodes.includes(variable.code)) {
                const values: IVariableValueMeta[] = variable.values.filter((value) =>
                    selectedValueCodes[variable.code].includes(value.code)
                );
                if (values.length === 0) {
                    throw new Error("Provided selected value code can not be found from the metadata");
                }
                return { ...variable, values };
            }
            return variable;
        });
        return targetMap;
    }

    getVariableOrder(completeMap: IVariableMeta[], targetMap: IVariableMeta[]): number[] {
        const sourceCodes: string[] = completeMap.map(v => v.code);
        return targetMap.map(v => sourceCodes.indexOf(v.code));
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

    getCurrentContentValue(): IVariableValueMeta {
        return this.targetMap[this.contentVariableIndex].values[this.indices[this.contentVariableIndex]];
    }

    getCurrentTimeValue(): IVariableValueMeta | undefined {
        if (this.timeVariableIndex == -1) {
            return undefined;
        }
        return this.targetMap[this.timeVariableIndex].values[this.indices[this.timeVariableIndex]];
    }
}