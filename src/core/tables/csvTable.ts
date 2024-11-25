import { getFormattedUnits } from "../chartOptions/Utility/formatters";
import { Translations } from "../conversion/translations";
import { convertToRelative } from "../conversion/viewUtils";
import { EVisualizationType } from "../types";
import { View } from "../types/view";
import { generateFilename } from "./exportingUtils";
import { formatMissingData, formatNumericValue } from "./tableUtils";

export const generateCsv = (view: View, locale: string): string => {
    const relativeChart =
        view.visualizationSettings?.visualizationType === EVisualizationType.PercentHorizontalBarChart
        || view.visualizationSettings?.visualizationType === EVisualizationType.PercentVerticalBarChart;

    if (relativeChart) view = convertToRelative(view);

    const colHeaderRows = view.columnNameGroups[0]?.length ?? 0;
    const rowHeaderCols = view.series[0]?.rowNameGroup.length ?? 0;
    const gridWidth = (view.series[0]?.series.length ?? 0) + rowHeaderCols;

    // Excel expects different delimiters by the locale
    const delimiter = Translations.decimalPoint[locale] == ',' ? ';' : ',';
    const lineBreak = '\n';

    let csv = buildCSVRow([`"${view.header[locale]}"`], 0, gridWidth, delimiter, lineBreak);

    // Add subheader
    if (view.subheaderValues.length > 0) {
        csv += buildCSVRow([`"${view.subheaderValues.map(value => value[locale]).join(' | ')}"`], 0, gridWidth, delimiter, lineBreak);
    }

    // Add column variables
    for (let index = 0; index < colHeaderRows; index++) {
        csv += buildCSVRow(view.columnNameGroups.map(group => `"${group[index][locale]}"`), rowHeaderCols, gridWidth, delimiter, lineBreak);
    }

    // Add row variables + data
    view.series.forEach((serie) => {
        let row: string[] = []
        if (serie.rowNameGroup.length > 0) row = serie.rowNameGroup.map(name => `"${name[locale]}"`);

        // Set display precision and decimal separator
        row = row.concat(serie.series.map(n => {
            if (n.value === null) return formatMissingData(n.missingCode, locale);
            else return formatNumericValue(n, locale);
        }));

        csv += buildCSVRow(row, 0, gridWidth, delimiter, lineBreak);
    });

    // Add unit information
    csv += buildCSVRow([`"${Translations.unit[locale]}: ${getFormattedUnits(view.units, locale)}"`], 0, gridWidth, delimiter, lineBreak);

    // Add source and no linebreak after the last line
    csv += buildCSVRow([`"${Translations.source[locale]}: ${view.sources.map(source => source[locale]).join(', ')}"`], 0, gridWidth, delimiter);

    return csv;
}

export const viewToDownloadCSVOption = (view: View, locale: string): { onClick: () => void, text: string } => ({
    onClick: () => {
        const csv = generateCsv(view, locale);
        const blob = generateCsvBlob(csv);

        // Create download link and click it
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.setAttribute('href', url);
        link.setAttribute('download', generateFilename(view.tableReferenceName) + '.csv');

        // Required for FF
        document.body.appendChild(link);

        // This will download the CSV file
        link.click();
    },
    text: Translations.downloadCSV[locale],
});

function generateCsvBlob(data: string): Blob {
    const BOM = '\uFEFF';
    return new Blob([BOM, data], { type: 'text/csv;charset=utf-8;' });
}

function buildCSVRow(data: string[], startIndex: number, rowLen: number, delimiter: string, lineBrak: string = ''): string {
    let csv = '';
    for (let i = 0; i < rowLen; i++) {
        if (i >= startIndex && i < startIndex + data.length) {
            csv += data[i - startIndex];
        }
        if (i < rowLen - 1) csv += delimiter;
    }
    return csv + lineBrak;
}