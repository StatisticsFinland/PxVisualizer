import { generateCsv } from "./csvTable";
import { BlobDataType, generateBlob } from "./exportingUtils";
import { SIMPLE_VIEW } from "../conversion/TestFixtures/exportingUtils";
import { generateExcel } from "./xlsxTable";

describe('blob', () => {
    it('should have expected content type for cvs file', () => {
        const csv = generateCsv(SIMPLE_VIEW, 'fi');
        const blob = generateBlob(csv, BlobDataType.Csv);
        expect(blob.type).toBe('text/csv;charset=utf-8;');
    });

    it('should have expected content type for xslx file', () => {
        const excel = generateExcel(SIMPLE_VIEW, 'fi');
        const blob = generateBlob(excel, BlobDataType.Excel);
        expect(blob.type).toBe('application/octet-stream');
    });
});
