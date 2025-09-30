import { getFormattedUnits } from "../../core/chartOptions/Utility/formatters";
import { Translations } from "../../core/conversion/translations";
import { TMultiLanguageString } from "../../core/types/queryVisualizationResponse";
import { IDataSeries, View } from "../../core/types/view";
import { formatMissingData, formatNumericValue } from "./tableUtils";

export function renderHtmlTable(view: View, locale: string, showTitles: boolean, showUnits: boolean, showSources: boolean, containerId: string, footnote?: string): void {

    const container = document.getElementById(containerId);
    if (!container) throw new Error("No container with matching id found in the DOM tree");

    try {
        // Table content
        const table = generateTable(view, locale);

        if (showTitles) {
            
            const caption = document.createElement('caption');
            caption.textContent = view.header[locale];
            if (view.subheaderValues.length > 0) {
                const subtitle: string = view.subheaderValues.map(value => value[locale]).join(' | ');
                caption.append(document.createElement('br'), subtitle);
            }
            caption.className = 'tableChart-caption';
            table.prepend(caption);
        }

        container.append(table);

        // Units
        if (showUnits) {
            const pUnits = document.createElement('p');
            const unitName = getFormattedUnits(view.units, locale);
            const units: string = `${Translations.unit[locale]}: ${unitName}`;
            pUnits.append(units);
            container.append(pUnits);
        }

        // Footnote
        if (footnote) {
            const pFootnote = document.createElement('p');
            pFootnote.append(footnote);
            container.append(pFootnote);
        }

        // Sources
        if (showSources) {
            const pSources = document.createElement('p');
            const sources: string = `${Translations.source[locale]}: ${view.sources.map(source => source[locale]).join(', ')}`;
            pSources.append(sources);
            container.append(pSources);
        }

    } catch (error) {
        console.error(error);
        container.replaceChildren();
        const errorMessage = document.createElement('h1');
        errorMessage.append(Translations.graphCreationError[locale]);
        container.append(errorMessage);
    }
}

export function renderHtmlKeyFigure(view: View, locale: string, containerId: string, timeVariableValue: string, lastUpdated: string, className?: string): void {
    const container = document.getElementById(containerId);
    if (!container) throw new Error("No container with matching id found in the DOM tree");

    try {
        // Create the key figure display container
        const keyFigureContainer = document.createElement('div');
        keyFigureContainer.className = className ? `keyFigure-container ${className}` : 'keyFigure-container';
        
        // Add title if available
        const title = document.createElement('div');
        title.className = className ? `keyFigure-title ${className}` : 'keyFigure-title';
        title.textContent = view.header[locale];
        keyFigureContainer.append(title);

        const dataCell = view.series[0].series[0];
        const valueContainer = document.createElement('div');
        valueContainer.className = className ? `keyFigure-value ${className}` : 'keyFigure-value';

        // Format the value or show missing data message
        if (dataCell.value === null) {
            valueContainer.textContent = formatMissingData(dataCell.missingCode, locale, true);
        } else {
            const valueSpan = document.createElement('span');
            valueSpan.className = 'keyFigure-value-main';
            valueSpan.textContent = formatNumericValue(dataCell.value, dataCell.precision, locale, true);
            valueContainer.append(valueSpan);
            // If show units is enabled, append the unit to the value in a span
            if (view.visualizationSettings.showUnit && view.units.length > 0) {
                const unitName = getFormattedUnits(view.units, locale);
                const unitSpan = document.createElement('span');
                unitSpan.className = 'keyFigure-unit';
                unitSpan.textContent = ` ${unitName}`;
                valueContainer.append(unitSpan);
            }
        }
            
        keyFigureContainer.append(valueContainer);

        const timeElem = document.createElement('div');
        timeElem.className = className ? `keyFigure-time ${className}` : 'keyFigure-time';
        timeElem.textContent = dataCell.preliminary
            ? `${timeVariableValue} ${Translations.preliminaryData[locale]}`
            : timeVariableValue;
        keyFigureContainer.append(timeElem);

        const lastUpdatedElem = document.createElement('div');
        lastUpdatedElem.className = className ? `keyFigure-lastupdated ${className}` : 'keyFigure-lastupdated';
        lastUpdatedElem.textContent = lastUpdated;
        keyFigureContainer.append(lastUpdatedElem);

        container.append(keyFigureContainer);

    } catch (error) {
        console.error(error);
        container.replaceChildren();
        const errorMessage = document.createElement('h1');
        errorMessage.append(Translations.graphCreationError[locale]);
        container.append(errorMessage);
    }
}

export function generateTable(view: View, locale: string): HTMLTableElement {
    const colHeaderRows = view.columnNameGroups[0]?.length ?? 0;
    const rowHeaderCols = view.series[0]?.rowNameGroup.length ?? 0;

    const table: HTMLTableElement = Object.assign(document.createElement('table'), { tabIndex: 0 });

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
            else td.textContent = formatNumericValue(dataCell.value, dataCell.precision, locale, true);
            tableRow.append(td);
        }

        dataRows.push(tableRow);
    };
    return dataRows;
}

const compare = (a: TMultiLanguageString, b: TMultiLanguageString) =>
    Object.keys(a).every(lang => a[lang] === b[lang]);

const calculateRowSpans = (series: IDataSeries[]): number[] => {
    if (!series[0].rowNameGroup || series[0].rowNameGroup.length === 0) return [];
    const rowSpans: number[] = Array(series[0].rowNameGroup.length).fill(1);

    for (let col = 0; col < series[0].rowNameGroup.length; col++) {
        let span = 1;
        for (let row = 0; row < series.length - 1; row++) {
            if (compare(series[row].rowNameGroup[col], series[row+1].rowNameGroup[col])) span++;
            else break;
        }
        rowSpans[col] = span;
    }
    return rowSpans;
}

const calculateColSpans = (columnNameGroups: TMultiLanguageString[][]): number[] => {
    if (!columnNameGroups || columnNameGroups.length === 0) return []; 
    const colSpans: number[] = Array(columnNameGroups[0].length).fill(1);

    for (let row = 0; row < columnNameGroups[0].length; row++) {
        let span = 1;
        for (let col = 0; col < columnNameGroups.length - 1; col++) {
            if (compare(columnNameGroups[col][row], columnNameGroups[col + 1][row])) span++;
            else break;
        }
        colSpans[row] = span;
    }
    return colSpans;
}