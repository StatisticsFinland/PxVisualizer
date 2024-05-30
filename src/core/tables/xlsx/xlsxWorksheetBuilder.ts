import { worksheetProperties } from "./xlsxPropertyConstants";

export const buildXMLSheet = (cols: IColumn[], rows: ICell[][]) => {
    const xmlColumns = buildColumns(cols);
    const xmlRows = buildRows(rows);
    return wrapInSheetTemplate(xmlColumns, xmlRows);
};

// Columns format from: https://msdn.microsoft.com/en-us/library/office/documentformat.openxml.spreadsheet.columns
// Column format from: https://msdn.microsoft.com/en-us/library/office/documentformat.openxml.spreadsheet.column
function buildColumns(cols: IColumn[])
{
    const result: string[] = cols && cols.map((col, colIndex) =>
        `<col min="${colIndex + 1}" max="${colIndex + 1}" width="${col.pixelWidth}" style="${col.style}" />`);
    return result ? `<cols>${result}</cols>` : '';
};

// Row format from: https://learn.microsoft.com/en-us/dotnet/api/documentformat.openxml.spreadsheet.row
function buildRows(rows: ICell[][])
{
    return rows.map((row, rowIndex) => {
        const rowCells = row
        .map((cell, cellIndex) => buildCell(cell, cellIndex, rowIndex + 1))
        .join('');
        return `<row r="${rowIndex + 1}">${rowCells}</row>`;
    }).join('');
}

// Cell format from: https://learn.microsoft.com/en-us/dotnet/api/documentformat.openxml.spreadsheet.cell
function buildCell(cell: ICell, columnNumber: number, rowNumber: number)
{    
    return (
        typeof(cell.value) === 'string'
        ? `<c r="${getColumnLetter(columnNumber)}${rowNumber}" t="inlineStr"><is><t>${cell.value}</t></is></c>`
        : `<c r="$${getColumnLetter(columnNumber)}${rowNumber}"><v>${cell.value}</v></c>`
    );
}

function getColumnLetter(colIndex: number) : string {  
    
    // If we run out of letters, we combine new letters after the prevous "prefix" ie. AA, AB, AC etc.
    const prefix = Math.floor(colIndex / 26);
    const letter = String.fromCharCode(97 + (colIndex % 26)).toUpperCase();
    
    if (prefix === 0) return letter;
    else return getColumnLetter(prefix - 1) + letter;
};

const wrapInSheetTemplate = (xmlColumns: string, xmlRows: string) => `<?xml version="1.0" ?>
<worksheet ${worksheetProperties.join(' ')}>
    ${xmlColumns}
    <sheetData>
        ${xmlRows}
    </sheetData>
</worksheet>`;