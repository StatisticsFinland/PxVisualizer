import { XLSX_FIXTURES_COMPLEX_VIEW_ROW_AND_COL_VARS } from "../fixtures/xlsxFixtures";
import { buildXMLSheet } from "./xlsxWorksheetBuilder";

describe('Worksheet xml generation tests', () => {
    it('Should generate expexted xml output with the provided fixture with fi locale', () => {
        const sheet : string = buildXMLSheet(XLSX_FIXTURES_COMPLEX_VIEW_ROW_AND_COL_VARS['fi']);
        expect(sheet).toMatchSnapshot();
    });

    it('Should generate expexted xml output with the provided fixture with sv locale', () => {
        const sheet : string = buildXMLSheet(XLSX_FIXTURES_COMPLEX_VIEW_ROW_AND_COL_VARS['sv']);
        expect(sheet).toMatchSnapshot();
    });

    it('Should generate expexted xml output with the provided fixture with en locale', () => {
        const sheet : string = buildXMLSheet(XLSX_FIXTURES_COMPLEX_VIEW_ROW_AND_COL_VARS['en']);
        expect(sheet).toMatchSnapshot();
    });
});
