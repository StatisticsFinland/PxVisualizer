import { IQueryVisualizationResponse } from "../types";
import { IVariableMeta, IVariableValueMeta, TMultiLanguageString } from "../types/queryVisualizationResponse";
import { TVariableSelections } from "../types/variableSelections";
import { IDataCell, IDataSeries } from "../types/view";
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
    constructor(responseObj: IQueryVisualizationResponse, selectedValueCodes: TVariableSelections) {
        this.responseObj = responseObj;
        const completeMap: TVariableSelections = this.getCompleteMap(responseObj);
        const variableSizes: number[] = Object.keys(completeMap).map(v => completeMap[v].length);
        const targetMap: TVariableSelections = this.getTargetMap(responseObj, selectedValueCodes);
        this.coordinates = Array.from({ length: Object.keys(targetMap).length });
        this.variableOrder = this.getVariableOrder(completeMap, targetMap);
        for (let targetIndex = 0; targetIndex < Object.keys(targetMap).length; targetIndex++) {
            const variableIndex: number = this.variableOrder[targetIndex];
            const targetVariableCode = Object.keys(targetMap)[targetIndex];
            const variable: string[] = completeMap[targetVariableCode];
            if (!variable) throw new Error("Provided variable code can not be found from the metadata");
            this.coordinates[variableIndex] = Array.from({ length: targetMap[targetVariableCode].length });
            for (let mapIndex = 0; mapIndex < targetMap[targetVariableCode].length; mapIndex++) {
                for (let valueIndex = 0; valueIndex < variable.length; valueIndex++) {
                    if (variable[valueIndex] === targetMap[targetVariableCode][mapIndex]) {
                        this.coordinates[variableIndex][mapIndex] = valueIndex;
                    }
                }
            }
        }
        this.indices = Array.from({ length: Object.keys(completeMap).length }, () => 0);
        this.lastIndices = Object.keys(targetMap).map(v => targetMap[v].length - 1);
        console.log('lasts:', this.lastIndices);
        this.lastCoordinateIndex = this.coordinates.length - 1;
        this.reverseCumulativeProducts = this.generateRCP(variableSizes);
        this.dataLength = Object.keys(targetMap).map(v => targetMap[v].length).reduce((acc, val) => acc * val, 1);
        this.dataIndex = 0;
        this.setCurrentIndex();
    }

    public getViewSeries(viewPrecision: number | null): IDataSeries[] {
        const viewSeries: IDataSeries[] = [];

        do {
            const { rowNameGroup, dataCell } = this.calculateIndex(viewPrecision);
            const group: IDataSeries | undefined = viewSeries.find(s => s.rowNameGroup.every(g => rowNameGroup.includes(g) && rowNameGroup.every(g => s.rowNameGroup.includes(g))));
            if (group) {
                group.series.push(dataCell);
            }
            else {
                viewSeries.push({
                    rowNameGroup: rowNameGroup,
                    series: [dataCell]
                })
            }
        } while (this.next());

        console.log('series:', viewSeries);

        return viewSeries;
    }

    next(): boolean {
        for (let i = this.lastCoordinateIndex; i >= 0; i--) {
            const variableIndex: number = this.variableOrder[i];
            if (this.indices[variableIndex] < this.lastIndices[i]) {
                this.indices[variableIndex]++;
                console.log('indices', this.indices);
                this.setCurrentIndex();
                return true;
            }
            else {
                this.indices[variableIndex] = 0;
            }
        }
        return false;
    }

    calculateIndex(viewPrecision: number | null): { rowNameGroup: TMultiLanguageString[], dataCell: IDataCell } {
        let values: IVariableValueMeta[] = [];
        let rowNameGroup: TMultiLanguageString[] = [];
        for (let i = 0; i < this.indices.length; i++) {
            const variable: IVariableMeta = this.responseObj.metaData[i];
            const value: IVariableValueMeta = variable.values[this.indices[i]];
            values.push(value);
            if ((this.responseObj.rowVariableCodes.includes(variable.code) ||
                this.responseObj.visualizationSettings.multiselectableVariableCode === variable.code) &&
                variable.values.length > 1) {
                rowNameGroup.push(value.name);
            }
        }
        console.log('handling values:', values.map(val => val.code).join(', '));
        const dataCell: IDataCell = {
            value: this.responseObj.data[this.dataIndex],
            precision: viewPrecision ?? values.find(v => v.contentComponent)?.contentComponent?.numberOfDecimals ?? 0,
            preliminary: values.some(v => Object.values(v.name)[0].trim().endsWith('*'))
        };
        if (!dataCell.value) dataCell.missingCode = this.responseObj.missingDataInfo[this.dataIndex];
        const item = {
            rowNameGroup: rowNameGroup,
            dataCell: dataCell
        }
        return item;
    }


    getCompleteMap(responseObj: IQueryVisualizationResponse): TVariableSelections {
        console.log(responseObj.metaData.map(v => v.code).join(', '));
        return responseObj.metaData.reduce((acc, variable) => {
            acc[variable.code] = variable.values.map(v => v.code);
            return acc;
        }, {} as TVariableSelections);
    }

    getTargetMap(responseObj: IQueryVisualizationResponse, selectedValueCodes: TVariableSelections): TVariableSelections {
        return responseObj.metaData.reduce((acc, variable) => {
            if (responseObj.selectableVariableCodes.includes(variable.code) ||
                Object.keys(selectedValueCodes).includes(variable.code)) {
                const values: string[] = variable.values
                    .filter(value => selectedValueCodes[variable.code]
                        .includes(value.code))
                    .map(v => v.code);
                if (values.length === 0) throw new Error("Provided selected value code can not be found from the metadata");
                acc[variable.code] = values;
            }
            else {
                const values: string[] = variable.values.map(v => v.code);
                acc[variable.code] = values;
            }
            return acc;
        }, {} as TVariableSelections);
    }

    getVariableOrder(completeMap: TVariableSelections, targetMap: TVariableSelections): number[] {
        const sourceCodes: string[] = Object.keys(completeMap);
        return Object.keys(targetMap).map(v => sourceCodes.indexOf(v));
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
        console.log('dataIndex', this.dataIndex);
    }
}