import { FlateCallback, strToU8, zip } from 'fflate';
import FileSaver from 'file-saver';
import { buildXMLSheet } from './xlsxWorksheetBuilder';
import { contentTypesTemplate, relationsTemplate, workbookRelationsTemplate, workbookTemplate } from './xlsxTemplates';

export async function buildMinimalXlsx(cols: IColumn[], rows: ICell[][], filename: string) {

    const worksheet = buildXMLSheet(cols, rows);

    const content = {
        xl: {
            'worksheets/sheet1.xml': strToU8(worksheet),
            'workbook.xml': strToU8(workbookTemplate),
            '_rels/workbook.xml.rels': strToU8(workbookRelationsTemplate),
        },
        '_rels/.rels': strToU8(relationsTemplate),
        '[Content_Types].xml': strToU8(contentTypesTemplate),
    };

    const blob_1 = await new Promise<Blob>((resolve, reject) => {
        const callback: FlateCallback = (err_2, data) => {
            if (err_2) return reject(err_2);
            const blob = new Blob(
                [data.buffer],
                { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' }
            );
            return resolve(blob);
        };
        zip(content, callback);
    });
    return FileSaver.saveAs(blob_1, `${filename}.xlsx`);
};