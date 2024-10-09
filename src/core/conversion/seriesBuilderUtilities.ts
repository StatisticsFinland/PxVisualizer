import { IVariableMeta, IVariableValueMeta } from "../types/queryVisualizationResponse";
import { TVariableSelections } from "../types/variableSelections";

export function getValuesForVariableInView(variable: IVariableMeta, selectedValueCodes: TVariableSelections): IVariableValueMeta[] {
    if (Object.keys(selectedValueCodes).includes(variable.code)) {
        const values: IVariableValueMeta[] = variable.values.filter(v => selectedValueCodes[variable.code].includes(v.code));
        if (values.length === 0) throw new Error("Provided selected value code can not be found from the metadata");
        return values;
    } else {
        return variable.values;
    }
}

export function sortVariables(variables: IVariableMeta[], codes: string[]): IVariableMeta[] {
    let sorted: IVariableMeta[] = [];
    for (const code of codes) {
        const variable = variables.find(v => v.code === code);
        if (variable) {
            sorted.push(variable);
        }
    }
    return sorted;
}