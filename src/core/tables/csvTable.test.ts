import { VIEW_WITH_COMPLEX_ROW_AND_COLUMN_VARIABLES } from "../conversion/TestFixtures/exportingUtils";
import { generateCsv } from "./csvTable";
import { CSV_FIXTURES_COMPLEX_VIEW_ROW_AND_COL_VARS, CSV_FIXTURES_COL_VARS, CSV_FIXTURES_ROW_VARS, CSV_FIXTURES_ONE_CELL, CSV_FIXTURES_ROW_AND_COL_VARS } from "./fixtures/csvFixtures";
import { extractSelectableVariableValues } from "../conversion";
import { convertPxGrafResponseToView } from "../conversion/viewUtils";
import { TABLE_WITH_ONLY_COLUMN_VARIABLES } from "../conversion/TestFixtures/tableChart";
import { TABLE_WITH_ONE_CELL, TABLE_WITH_ONLY_ROW_VARIABLES, TABLE_WITH_ROW_AND_COLUMN_VARIABLES } from "../../stories/fixtures/table";

const locales = ['fi', 'sv', 'en'];

describe('csv', () => {
   
    it.each(locales)('should generate valid output matching the fixture for %p locale', (locale) => {
        const view = VIEW_WITH_COMPLEX_ROW_AND_COLUMN_VARIABLES;
        const csv = generateCsv(view, locale);

        expect(csv).toEqual(CSV_FIXTURES_COMPLEX_VIEW_ROW_AND_COL_VARS[locale]);
    });

    it.each(locales)('should generate valid output matching the fixture for %p locale with input with only col vars', (locale) => {
        const mockVarSelections = extractSelectableVariableValues(
            TABLE_WITH_ONLY_COLUMN_VARIABLES.pxGraphData.selectableVariableCodes,
            TABLE_WITH_ONLY_COLUMN_VARIABLES.pxGraphData.metaData,
            TABLE_WITH_ONLY_COLUMN_VARIABLES.pxGraphData.visualizationSettings.defaultSelectableVariableCodes,
            TABLE_WITH_ONLY_COLUMN_VARIABLES.selectedVariableCodes);
        const mockView = convertPxGrafResponseToView(TABLE_WITH_ONLY_COLUMN_VARIABLES.pxGraphData, mockVarSelections);
        const csv = generateCsv(mockView, locale);

        expect(csv).toEqual(CSV_FIXTURES_COL_VARS[locale]);
    });

    it.each(locales)('should generate valid output matching the fixture for %p locale with input with only col vars', (locale) => {
        const mockVarSelections = extractSelectableVariableValues(
            TABLE_WITH_ONLY_ROW_VARIABLES.pxGraphData.selectableVariableCodes,
            TABLE_WITH_ONLY_ROW_VARIABLES.pxGraphData.metaData,
            TABLE_WITH_ONLY_ROW_VARIABLES.pxGraphData.visualizationSettings.defaultSelectableVariableCodes,
            TABLE_WITH_ONLY_ROW_VARIABLES.selectedVariableCodes);
        const mockView = convertPxGrafResponseToView(TABLE_WITH_ONLY_ROW_VARIABLES.pxGraphData, mockVarSelections);
        const csv = generateCsv(mockView, locale);

        expect(csv).toEqual(CSV_FIXTURES_ROW_VARS[locale]);
    });

    it.each(locales)('should generate valid output matching the fixture for %p locale with row and col vars', (locale) => {
        const mockVarSelections = extractSelectableVariableValues(
            TABLE_WITH_ROW_AND_COLUMN_VARIABLES.pxGraphData.selectableVariableCodes,
            TABLE_WITH_ROW_AND_COLUMN_VARIABLES.pxGraphData.metaData,
            TABLE_WITH_ROW_AND_COLUMN_VARIABLES.pxGraphData.visualizationSettings.defaultSelectableVariableCodes,
            TABLE_WITH_ROW_AND_COLUMN_VARIABLES.selectedVariableCodes);
        const mockView = convertPxGrafResponseToView(TABLE_WITH_ROW_AND_COLUMN_VARIABLES.pxGraphData, mockVarSelections);
        const csv = generateCsv(mockView, locale);

        expect(csv).toEqual(CSV_FIXTURES_ROW_AND_COL_VARS[locale]);
    });

    it.each(locales)('should generate valid output matching the fixture for %p locale with input that has only one cell', (locale) => {
        const mockVarSelections = extractSelectableVariableValues(
            TABLE_WITH_ONE_CELL.pxGraphData.selectableVariableCodes,
            TABLE_WITH_ONE_CELL.pxGraphData.metaData,
            TABLE_WITH_ONE_CELL.pxGraphData.visualizationSettings.defaultSelectableVariableCodes,
            TABLE_WITH_ONE_CELL.selectedVariableCodes);
        const mockView = convertPxGrafResponseToView(TABLE_WITH_ONE_CELL.pxGraphData, mockVarSelections);
        const csv = generateCsv(mockView, locale);

        expect(csv).toEqual(CSV_FIXTURES_ONE_CELL[locale]);
    });
});