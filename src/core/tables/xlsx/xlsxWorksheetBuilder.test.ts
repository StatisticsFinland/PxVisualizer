import { describe, expect, it } from '@jest/globals';
import { XLSX_FIXTURES_COMPLEX_VIEW_ROW_AND_COL_VARS, XLSX_FIXTURES_ONE_CELL_ESCAPE_CHARACTERS } from "../fixtures/xlsxFixtures";
import { buildXMLSheet } from "./xlsxWorksheetBuilder";

describe('Worksheet xml generation tests', () => {
    it.each(['fi', 'sv', 'en'] as const)('Should generate expected xml output with the provided fixture with %s locale', (locale) => {
        const sheet: string = buildXMLSheet(XLSX_FIXTURES_COMPLEX_VIEW_ROW_AND_COL_VARS[locale]);
        expect(sheet).toMatchSnapshot();
    });

    it('Should generate expected xml output with provided fixture with en locale including special characters', () => {
        const sheet: string = buildXMLSheet(XLSX_FIXTURES_ONE_CELL_ESCAPE_CHARACTERS['en']);
        expect(sheet).toMatchSnapshot();
    });
});
