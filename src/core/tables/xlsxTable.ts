import { getFormattedUnits } from "../chartOptions/Utility/formatters";
import Translations from "../conversion/translations";
import { convertToRelative } from "../conversion/viewUtils";
import { EVisualizationType } from "../types";
import { View } from "../types/view";
import { BlobDataType, generateBlob, generateFilename } from "./exportingUtils";
import { formatMissingData, formatNumericValue } from "./tableUtils";
import * as XLSX from "xlsx";

export const generateExcel = (view: View, locale: string) => {

    const wb = XLSX.utils.book_new();
    const ws = XLSX.utils.aoa_to_sheet(buildStringTableForExcel(view, locale));

    XLSX.utils.book_append_sheet(wb, ws, "Sheet1");

    return XLSX.write(wb, { bookType: 'xlsx', type: 'binary' });
}

// This is a separate function to allow for unit testing
export const buildStringTableForExcel: (view: View, locale: string) => (string | null)[][] = (view, locale) => {

    const relativeChart =
        view.visualizationSettings?.visualizationType === EVisualizationType.PercentHorizontalBarChart
        || view.visualizationSettings?.visualizationType === EVisualizationType.PercentVerticalBarChart;

    if (relativeChart) view = convertToRelative(view);

    const colHeaderRows = view.columnNameGroups[0]?.length ?? 0;
    const rowHeaderCols = view.series[0]?.rowNameGroup.length ?? 0;
    const gridWidth = (view.series[0]?.series.length ?? 0) + rowHeaderCols;

    let stringTable: (string | null)[][] = [buildStringArrayRow([view.header[locale]], 0, gridWidth)];

    // Add subheader
    if (view.subheaderValues.length > 0) {
        stringTable.push(buildStringArrayRow([view.subheaderValues.map(value => value[locale]).join(' | ')], 0, gridWidth));
    }

    // Add column variables
    for (let index = 0; index < colHeaderRows; index++) {
        stringTable.push(buildStringArrayRow(view.columnNameGroups.map(group => group[index][locale]), rowHeaderCols, gridWidth));
    }

    // Add row variables + data
    view.series.forEach((serie) => {
        let row: string[] = []
        if (serie.rowNameGroup.length > 0) row = serie.rowNameGroup.map(name => name[locale]);

        // Set display precision and decimal separator
        row = row.concat(serie.series.map(n => {
            if (n.value === null) return formatMissingData(n.missingCode, locale);
            else return formatNumericValue(n, locale);
        }));

        stringTable.push(buildStringArrayRow(row, 0, gridWidth));
    });

    // Add unit information
    stringTable.push(buildStringArrayRow([`${Translations.unit[locale]}: ${getFormattedUnits(view.units, locale)}`], 0, gridWidth));

    // Add source
    stringTable.push(buildStringArrayRow([`${Translations.source[locale]}: ${view.sources.map(source => source[locale]).join(', ')}`], 0, gridWidth));

    return stringTable;
}

export const viewToDownloadXLSOption = (view: View, locale: string): { onClick: () => void, text: string } => ({
    onClick: () => {
        const excel = generateExcel(view, locale);
        const blob = generateBlob(excel, BlobDataType.Excel);

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

function buildStringArrayRow(data: string[], startIndex: number, rowLen: number): (string | null)[] {
    const stringRow: (string | null)[] = Array(rowLen);
    for (let i = 0; i < rowLen; i++) {
        if (i >= startIndex && i < startIndex + data.length) stringRow[i] = data[i - startIndex];
        else stringRow[i] = null;
    }
    return stringRow;
}