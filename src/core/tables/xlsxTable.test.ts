import { VIEW_WITH_COMPLEX_ROW_AND_COLUMN_VARIABLES } from "../conversion/TestFixtures/exportingUtils";
import { extractSelectableVariableValues } from "../conversion";
import { convertPxGrafResponseToView } from "../conversion/viewUtils";
import { TABLE_WITH_ONLY_COLUMN_VARIABLES } from "../conversion/TestFixtures/tableChart";
import { TABLE_WITH_ONE_CELL, TABLE_WITH_ONLY_ROW_VARIABLES, TABLE_WITH_ROW_AND_COLUMN_VARIABLES } from "../../stories/fixtures/table";
import { buildStringTableForExcel } from "./xlsxTable";
import { XLSX_FIXTURES_COL_VARS, XLSX_FIXTURES_COMPLEX_VIEW_ROW_AND_COL_VARS, XLSX_FIXTURES_ONE_CELL, XLSX_FIXTURES_ROW_AND_COL_VARS, XLSX_FIXTURES_ROW_VARS } from "./fixtures/xlsxFixtures";

const locales = ['fi', 'sv', 'en'];

describe('xlsx', () => {

    it.each(locales)('should generate valid output matching the fixture for %p locale', (locale) => {
        const view = VIEW_WITH_COMPLEX_ROW_AND_COLUMN_VARIABLES;
        const stringTable = buildStringTableForExcel(view, locale);

        expect(stringTable).toEqual(XLSX_FIXTURES_COMPLEX_VIEW_ROW_AND_COL_VARS[locale]);
    });

    it.each(locales)('should generate valid output matching the fixture for %p locale with input with only col vars', (locale) => {
        const mockVarSelections = extractSelectableVariableValues(
            TABLE_WITH_ONLY_COLUMN_VARIABLES.pxGraphData.selectableVariableCodes,
            TABLE_WITH_ONLY_COLUMN_VARIABLES.pxGraphData.metaData,
            TABLE_WITH_ONLY_COLUMN_VARIABLES.pxGraphData.visualizationSettings.defaultSelectableVariableCodes,
            TABLE_WITH_ONLY_COLUMN_VARIABLES.selectedVariableCodes);
        const view = convertPxGrafResponseToView(TABLE_WITH_ONLY_COLUMN_VARIABLES.pxGraphData, mockVarSelections);
        const stringTable = buildStringTableForExcel(view, locale);

        expect(stringTable).toEqual(XLSX_FIXTURES_COL_VARS[locale]);
    });

    it.each(locales)('should generate valid output matching the fixture for %p locale with input with only col vars', (locale) => {
        const mockVarSelections = extractSelectableVariableValues(
            TABLE_WITH_ONLY_ROW_VARIABLES.pxGraphData.selectableVariableCodes,
            TABLE_WITH_ONLY_ROW_VARIABLES.pxGraphData.metaData,
            TABLE_WITH_ONLY_ROW_VARIABLES.pxGraphData.visualizationSettings.defaultSelectableVariableCodes,
            TABLE_WITH_ONLY_ROW_VARIABLES.selectedVariableCodes);
        const view = convertPxGrafResponseToView(TABLE_WITH_ONLY_ROW_VARIABLES.pxGraphData, mockVarSelections);
        const stringTable = buildStringTableForExcel(view, locale);

        expect(stringTable).toEqual(XLSX_FIXTURES_ROW_VARS[locale]);
    });

    it.each(locales)('should generate valid output matching the fixture for %p locale with row and col vars', (locale) => {
        const mockVarSelections = extractSelectableVariableValues(
            TABLE_WITH_ROW_AND_COLUMN_VARIABLES.pxGraphData.selectableVariableCodes,
            TABLE_WITH_ROW_AND_COLUMN_VARIABLES.pxGraphData.metaData,
            TABLE_WITH_ROW_AND_COLUMN_VARIABLES.pxGraphData.visualizationSettings.defaultSelectableVariableCodes,
            TABLE_WITH_ROW_AND_COLUMN_VARIABLES.selectedVariableCodes);
        const view = convertPxGrafResponseToView(TABLE_WITH_ROW_AND_COLUMN_VARIABLES.pxGraphData, mockVarSelections);
        const stringTable = buildStringTableForExcel(view, locale);

        expect(stringTable).toEqual(XLSX_FIXTURES_ROW_AND_COL_VARS[locale]);
    });

    it.each(locales)('should generate valid output matching the fixture for %p locale with input that has only one cell', (locale) => {
        const mockVarSelections = extractSelectableVariableValues(
            TABLE_WITH_ONE_CELL.pxGraphData.selectableVariableCodes,
            TABLE_WITH_ONE_CELL.pxGraphData.metaData,
            TABLE_WITH_ONE_CELL.pxGraphData.visualizationSettings.defaultSelectableVariableCodes,
            TABLE_WITH_ONE_CELL.selectedVariableCodes);
        const view = convertPxGrafResponseToView(TABLE_WITH_ONE_CELL.pxGraphData, mockVarSelections);
        const stringTable = buildStringTableForExcel(view, locale);

        expect(stringTable).toEqual(XLSX_FIXTURES_ONE_CELL[locale]);
    });
});