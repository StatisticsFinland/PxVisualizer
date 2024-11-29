import { getFormattedUnits } from "../chartOptions/Utility/formatters";
import { Translations } from "../conversion/translations";
import { TMultiLanguageString } from "../types/queryVisualizationResponse";
import { IDataSeries, View } from "../types/view";
import { formatMissingData, formatNumericValue } from "./tableUtils";

export function renderHtmlTable(view: View, locale: string, showTitles: boolean, showUnits: boolean, showSources: boolean, containerId: string, footnote?: string): void {

    const container = document.getElementById(containerId);
    if (!container) throw new Error("No container with matching id found in the DOM tree");

    try {
        if (showTitles) {
            // Headings
            const title = document.createElement('span');
            title.classList.add('title');
            title.append(view.header[locale]);
            container.append(title);

            if (view.subheaderValues.length > 0) {
                const subtitle = document.createElement('span');
                subtitle.classList.add('subtitle');
                subtitle.append(view.subheaderValues.map(value => value[locale]).join(' | '));
                container.append(subtitle);
            }
        }

        // Table content
        const table = generateTable(view, locale);
        container.append(table);

        // Units
        if(showUnits) {
            const pUnits = document.createElement('p');
            const unitName = getFormattedUnits(view.units, locale);
            const units: string = `${Translations.unit[locale]}: ${unitName}`;
            pUnits.append(units);
            container.append(pUnits);
        }

        // Sources
        if(showSources) {
            const pSources = document.createElement('p');
            const sources: string = `${Translations.source[locale]}: ${view.sources.map(source => source[locale]).join(', ')}`;
            pSources.append(sources);
            container.append(pSources);
        }

        // Footnote
        if(footnote) {
            const pFootnote = document.createElement('p');
            pFootnote.append(footnote);
            container.append(pFootnote);
        }

    } catch (error) {
        console.error(error);
        container.replaceChildren();
        const errorMessage = document.createElement('h1');
        errorMessage.append(Translations.graphCreationError[locale]);
        container.append(errorMessage);
    }
}

export function generateTable(view: View, locale: string): HTMLTableElement {
    const colHeaderRows = view.columnNameGroups[0].length ?? 0;
    const rowHeaderCols = view.series[0].rowNameGroup.length ?? 0;

    const table = document.createElement('table');

    if (colHeaderRows > 0) {
        const columnHeaders = buildColumnHeaderRows(view.columnNameGroups, locale);

        // Add empty cell to top left corner
        if (rowHeaderCols > 0) {
            const td = document.createElement('td');
            td.setAttribute('colSpan', rowHeaderCols.toString());
            td.setAttribute('rowSpan', colHeaderRows.toString());
            columnHeaders[0].prepend(td);
        }

        const thead = document.createElement('thead');
        thead.append(...columnHeaders);
        table.append(thead);
    }

    if (view.series.length > 0) {
        const tbody = document.createElement('tbody');
        tbody.append(...buildDataRows(view.series, locale));
        table.append(tbody);
    }

    return table;
}

function buildColumnHeaderRows(colNameGroups: TMultiLanguageString[][], locale: string): HTMLTableRowElement[] {
    const colSpans = calculateColSpans(colNameGroups);
    const colHeaderRows: HTMLTableRowElement[] = [];
    for (let row = 0; row < colNameGroups[0].length; row++) {
        const tableRow = document.createElement('tr');
        for (let col = 0; col < colNameGroups.length; col += colSpans[row]) {
            const th = document.createElement('th');
            th.setAttribute('colSpan', colSpans[row].toString());
            th.setAttribute('scope', 'col');
            th.textContent = colNameGroups[col][row][locale];
            tableRow.append(th);
        }
        colHeaderRows.push(tableRow);
    };
    return colHeaderRows;
}

function buildDataRows(series: IDataSeries[], locale: string): HTMLTableRowElement[] {
    const dataRows: HTMLTableRowElement[] = [];
    const rowSpans = calculateRowSpans(series);

    for (let row = 0; row < series.length; row++) {
        const tableRow = document.createElement('tr');

        // Add row headers
        for (let hCol = 0; hCol < series[row].rowNameGroup.length; hCol++) {
            if (row % rowSpans[hCol] === 0) {
                const th = document.createElement('th');
                th.setAttribute('rowSpan', rowSpans[hCol].toString());
                th.setAttribute('scope', 'row');
                th.textContent = series[row].rowNameGroup[hCol][locale];
                tableRow.append(th);
            }
        }

        // Add data cells
        for (const dataCell of series[row].series) {
            const td = document.createElement('td');
            if (dataCell.value === null) td.textContent = formatMissingData(dataCell.missingCode, locale, true);
            else td.textContent = formatNumericValue(dataCell, locale, true);
            tableRow.append(td);
        }

        dataRows.push(tableRow);
    };
    return dataRows;
}

const compare = (a: TMultiLanguageString, b: TMultiLanguageString) =>
    Object.keys(a).every(lang => a[lang] == b[lang]);

const calculateRowSpans = (series: IDataSeries[]): number[] => {
    if (!series[0].rowNameGroup || series[0].rowNameGroup.length === 0) return [];
    const rowSpans: number[] = Array(series[0].rowNameGroup.length).fill(1);

    for (let col = 0; col < series[0].rowNameGroup.length; col++) {
        for (let row = 0; row < series.length - 1; row++) {
            if (compare(series[row].rowNameGroup[col], series[row+1].rowNameGroup[col])) rowSpans[col]++;
            else break;
        }
    }
    return rowSpans;
}

const calculateColSpans = (columnNameGroups: TMultiLanguageString[][]): number[] => {
    if (!columnNameGroups || columnNameGroups.length === 0) return []; 
    const colSpans: number[] = Array(columnNameGroups[0].length).fill(1);

    for (let row = 0; row < columnNameGroups[0].length; row++) {
        for (let col = 0; col < columnNameGroups.length - 1; col++) {
            if (compare(columnNameGroups[col][row], columnNameGroups[col + 1][row])) colSpans[row]++;
            else break;
        }
    }
    return colSpans;
}