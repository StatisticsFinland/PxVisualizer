import { getFormattedUnits } from "../../chartOptions/Utility/formatters";
import { Translations } from "../../conversion/translations";
import { convertToRelative } from "../../conversion/viewUtils";
import { EVisualizationType } from "../../types";
import { View } from "../../types/view";
import { formatMissingData } from "../tableUtils";
import { TCell } from "./xlsxTypes";

// This is a separate function to allow for unit testing
export const buildCellRows: (view: View, locale: string) => TCell[][] = (view, locale) => {

    const relativeChart =
        view.visualizationSettings?.visualizationType === EVisualizationType.PercentHorizontalBarChart
        || view.visualizationSettings?.visualizationType === EVisualizationType.PercentVerticalBarChart;

    if (relativeChart) view = convertToRelative(view);

    const colHeaderRows = view.columnNameGroups[0]?.length ?? 0;
    const rowHeaderCols = view.series[0]?.rowNameGroup.length ?? 0;
    const gridWidth = (view.series[0]?.series.length ?? 0) + rowHeaderCols;

    // Add header
    const stringTable: TCell[][] = [buildCellRow([view.header[locale]], 0, gridWidth)];

    // Add subheader
    if (view.subheaderValues.length > 0) {
        stringTable.push(buildCellRow([view.subheaderValues.map(value => value[locale]).join(' | ')], 0, gridWidth));
    }

    // Add column variables
    for (let index = 0; index < colHeaderRows; index++) {
        stringTable.push(buildCellRow(view.columnNameGroups.map(group => group[index][locale]), rowHeaderCols, gridWidth));
    }

    // Add row variables + data
    view.series.forEach((serie) => {
        let row: (string | number)[] = []
        if (serie.rowNameGroup.length > 0) row = serie.rowNameGroup.map(name => name[locale]);

        // Set display precision and decimal separator
        row = row.concat(serie.series.map(n => {
            if (n.value === null) return formatMissingData(n.missingCode, locale);
            else return n.value;
        }));

        stringTable.push(buildCellRow(row, 0, gridWidth));
    });

    // Add unit information
    stringTable.push(buildCellRow([`${Translations.unit[locale]}: ${getFormattedUnits(view.units, locale)}`], 0, gridWidth));

    // Add source
    stringTable.push(buildCellRow([`${Translations.source[locale]}: ${view.sources.map(source => source[locale]).join(', ')}`], 0, gridWidth));

    return stringTable;
}

function buildCellRow(data: (number | string)[], startIndex: number, rowLen: number): TCell[] {
    const cellRow: TCell[] = Array(rowLen);
    for (let i = 0; i < rowLen; i++) {
        if (i >= startIndex && i < startIndex + data.length) cellRow[i] = data[i - startIndex];
        else cellRow[i] = null;
    }
    return cellRow;
}