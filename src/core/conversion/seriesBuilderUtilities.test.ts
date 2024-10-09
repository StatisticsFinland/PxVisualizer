import { EVariableType } from "../types";
import { IVariableMeta } from "../types/queryVisualizationResponse";
import { TVariableSelections } from "../types/variableSelections";
import { getValuesForVariableInView } from "./seriesBuilderUtilities";

describe('assertion tests', () => {
    it('should return all values for a non-selectable variable', () => {
        const variable: IVariableMeta = {
            code: 'foo',
            name: {},
            type: EVariableType.OtherClassificatory,
            values: [
                { code: '1', name: {}, contentComponent: null, note: null, isSum: false },
                { code: '2', name: {}, contentComponent: null, note: null, isSum: false }
            ],
            note: null
        };
        const selectedValueCodes: TVariableSelections = {};
        const result = getValuesForVariableInView(variable, selectedValueCodes);
        expect(result).toEqual(variable.values);
    });

    it('should return selected value for a selectable variable', () => {
        const variable: IVariableMeta = {
            code: 'foo',
            name: {},
            type: EVariableType.OtherClassificatory,
            values: [
                { code: '1', name: {}, contentComponent: null, note: null, isSum: false },
                { code: '2', name: {}, contentComponent: null, note: null, isSum: false }
            ],
            note: null
        };
        const selectedValueCodes: TVariableSelections = { foo: ['1'] };
        const result = getValuesForVariableInView(variable, selectedValueCodes);
        expect(result).toEqual([variable.values[0]]);
    });

    it('should return all selected values for a multiselectable variable', () => {
        const variable: IVariableMeta = {
            code: 'foo',
            name: {},
            type: EVariableType.OtherClassificatory,
            values: [
                { code: '1', name: {}, contentComponent: null, note: null, isSum: false },
                { code: '2', name: {}, contentComponent: null, note: null, isSum: false }
            ],
            note: null
        };
        const selectedValueCodes: TVariableSelections = { foo: ['1', '2'] };
        const result = getValuesForVariableInView(variable, selectedValueCodes);
        expect(result).toEqual(variable.values);
    });

    it('should throw an error if selected value is not found', () => {
        const variable: IVariableMeta = {
            code: 'foo',
            name: {},
            type: EVariableType.OtherClassificatory,
            values: [
                { code: '1', name: {}, contentComponent: null, note: null, isSum: false },
                { code: '2', name: {}, contentComponent: null, note: null, isSum: false }
            ],
            note: null
        };
        const selectedValueCodes: TVariableSelections = { foo: ['3'] };
        expect(() => getValuesForVariableInView(variable, selectedValueCodes)).toThrow('Provided selected value code can not be found from the metadata');
    });
});