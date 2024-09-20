import { worksheetProperties } from "./xlsxPropertyConstants";
import { TCell } from "./xlsxTypes";
import { escapeXmlFunctionChars } from "./xlsxUtils";

export const buildXMLSheet = (rows: TCell[][]) : string => {
    const xmlColumns = buildColumns(Math.max(...rows.map(r => r.length)));
    const xmlRows = buildRows(rows);
    return wrapInSheetTemplate(xmlColumns, xmlRows);
};

// Columns format from: https://msdn.microsoft.com/en-us/library/office/documentformat.openxml.spreadsheet.columns
// Column format from: https://msdn.microsoft.com/en-us/library/office/documentformat.openxml.spreadsheet.column
function buildColumns(numOfcols: number) : string
{
    const cols: string[] = [];
    for(let i = 1; i <= numOfcols; i++ ) {
        cols.push(`<col min="${i}" max="${i}" width="20"/>`)
    }
    return cols ? `<cols>${cols}</cols>` : '';
};

// Row format from: https://learn.microsoft.com/en-us/dotnet/api/documentformat.openxml.spreadsheet.row
function buildRows(rows: TCell[][])
{
    return rows.map((row, rowIndex) => {
        const rowCells = row
            .map((cell, cellIndex) => buildCell(cell, cellIndex, rowIndex + 1))
            .filter(cell => cell !== null)
            .join('');
        return `<row r="${rowIndex + 1}">${rowCells}</row>`;
    }).join('');
}

// Cell format from: https://learn.microsoft.com/en-us/dotnet/api/documentformat.openxml.spreadsheet.cell
function buildCell(cell: TCell, columnNumber: number, rowNumber: number) : string | null
{    
    if (cell === null) return null;

    return (
        typeof(cell) === 'string'
            ? `<c r="${getColumnLetter(columnNumber)}${rowNumber}" t="inlineStr"><is><t>${escapeXmlFunctionChars(cell)}</t></is></c>`
        : `<c r="$${getColumnLetter(columnNumber)}${rowNumber}"><v>${cell}</v></c>`
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