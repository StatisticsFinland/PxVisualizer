import { FlateCallback, strToU8, zip } from 'fflate';
import { buildXMLSheet } from './xlsxWorksheetBuilder';
import { contentTypesTemplate, relationsTemplate, workbookRelationsTemplate, workbookTemplate } from './xlsxTemplates';
import { View } from '../../types/view';
import { buildCellRows } from './xlsxDataBuilder';
import { Translations } from '../../conversion/translations';
import { generateFilename } from '../exportingUtils';

export const viewToDownloadXLSOption = (view: View, locale: string): { onClick: () => Promise<void>, text: string } => ({
    onClick: async () => {
        const blob = await buildMinimalXlsxBlobAsync(view, locale);

        // Create download link and click it
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.setAttribute('href', url);
        link.setAttribute('download', generateFilename(view.tableReferenceName) + '.xlsx');

        // Required for FF
        document.body.appendChild(link);

        // This will download the CSV file
        link.click();
    },
    text: Translations.downloadXLSX[locale],
});

export async function buildMinimalXlsxBlobAsync(view : View, locale: string) : Promise<Blob> {

    const rows = buildCellRows(view, locale);
    const worksheet = buildXMLSheet(rows);

    const content = {
        xl: {
            'worksheets/sheet1.xml': strToU8(worksheet),
            'workbook.xml': strToU8(workbookTemplate),
            '_rels/workbook.xml.rels': strToU8(workbookRelationsTemplate),
        },
        '_rels/.rels': strToU8(relationsTemplate),
        '[Content_Types].xml': strToU8(contentTypesTemplate),
    };

    return new Promise<Blob>((resolve, reject) => {
        const callback: FlateCallback = (err, data) => {
            if (err) return reject(err);
            const blob = new Blob(
                [data.buffer instanceof ArrayBuffer ? data.buffer : new Uint8Array(data)],
                { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' }
            );
            return resolve(blob);
        };
        zip(content, callback);
    });
};