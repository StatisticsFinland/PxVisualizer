import { EVariableType, IVariableMeta } from "../types/queryVisualizationResponse";
import { TVariableSelections } from "../types/variableSelections";

type TNullableVariableSelections = TVariableSelections | null | undefined;

export const extractSelectableVariableValues = (selectableVariableCodes: string[], metaData: IVariableMeta[], defaultSelectableVariableCodes: TNullableVariableSelections, selectedValueCodes: TNullableVariableSelections) => {
    if (selectableVariableCodes.length === 0) {
        return {};
    }

    let selectableVariableCodesCheckList = selectableVariableCodes;
    let currentSelectableVariableValues: { [key: string]: string[] } = {};

    if (selectedValueCodes) {
        const { parsedValues, updatedArray } = parseSelected(selectableVariableCodesCheckList, selectedValueCodes);
        selectableVariableCodesCheckList = updatedArray;
        currentSelectableVariableValues = {...currentSelectableVariableValues, ...parsedValues};
        if (selectableVariableCodesCheckList.length === 0) {
            return currentSelectableVariableValues;
        }
    }

    if (defaultSelectableVariableCodes) {
        const { parsedValues, updatedArray } = parseDefault(selectableVariableCodesCheckList, defaultSelectableVariableCodes);
        selectableVariableCodesCheckList = updatedArray;
        currentSelectableVariableValues = {...currentSelectableVariableValues, ...parsedValues};
        if (selectableVariableCodesCheckList.length === 0) {
            return currentSelectableVariableValues;
        }
    }

    selectableVariableCodesCheckList.forEach((variableCode) => {
        const variableIndex = metaData.findIndex(metaDataObject => metaDataObject.code === variableCode);
        if (variableIndex > -1) {
            if (metaData[variableIndex].type === EVariableType.Time) {
                currentSelectableVariableValues[variableCode] = [metaData[variableIndex].values[metaData[variableIndex].values.length - 1].code];
            } else {
                currentSelectableVariableValues[variableCode] = [metaData[variableIndex].values[0].code];
            }
        }
    });

    return currentSelectableVariableValues;
}

const parseSelected = (selectableVariableCodesCheckList: string[], selectedValueCodes: TVariableSelections) => {
    const selectedVariables = Object.keys(selectedValueCodes);
    const parsedValues: { [key: string]: string[] } = {};
    const updatedArray = selectableVariableCodesCheckList.map((code) => {
        const variableIndex = selectedVariables.findIndex(variableCode => variableCode === code);
        if (variableIndex > -1) {
            if (selectedValueCodes[code].length > 0) {
                parsedValues[code] = selectedValueCodes[code];
                return '';
            } else {
                return code;
            }
        } else {
            return code;
        }
    }).filter(element => element.length > 0);

    return {parsedValues, updatedArray};
};

const parseDefault = (selectableVariableCodesCheckList: string[], defaultSelectableVariableCodes: TVariableSelections) => {
    const defaultVariables = Object.keys(defaultSelectableVariableCodes);
    const parsedValues: { [key: string]: string[] } = {};
    const updatedArray = selectableVariableCodesCheckList.map((code) => {
            const variableIndex = defaultVariables.findIndex(variableCode => variableCode === code);
            if (variableIndex > -1) {
                parsedValues[code] = defaultSelectableVariableCodes[defaultVariables[variableIndex]];
                return '';
            } else {
                return code;
            }
        }).filter(element => element.length > 0);

    return {parsedValues, updatedArray};
};