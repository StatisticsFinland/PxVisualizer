import { AxisLabelsFormatterCallbackFunction, DataLabelsFormatterCallbackFunction, FormatterCallbackFunction, Point, ScreenReaderFormatterCallbackFunction, Series, TooltipFormatterCallbackFunction } from "highcharts";
import { Translations, GetAllLanguages, ArrayTranslations } from "../../conversion/translations";
import { IUnitInfo, View } from "../../types/view";
import { EVisualizationType } from "../../types";
import { onlyUnique } from "../../conversion/utilityFunctions";
import { formatNumericValue } from "../../tables/tableUtils";

export function getToolTipFormatterFunction(view: View, locale: string): TooltipFormatterCallbackFunction {
    return function () {
        const tooltipLines = [];

        if (view.rowVarNames && view.rowVarNames.length > 0 && this.series.name) {
            tooltipLines.push(`${view.rowVarNames?.map(rvn => rvn[locale]).join(', ')}: ${this.series.name}`);
        }

        if (view.colVarNames && view.colVarNames.length > 0 && this.name) {
            tooltipLines.push(`${view.colVarNames?.map(cvn => cvn[locale]).join(', ')}: ${this.name}`);
        }

        const precision: number = this.options.custom?.['precision'] ?? 0;
        tooltipLines.push(getDataFormattedForChartType(view, this, locale, precision))

        if (this.options.custom?.['preliminary']) {
            tooltipLines.push(Translations.preliminaryData[locale]);
        }

        return tooltipLines.join('<br/>');
    };
}

// ignored functions run deeply in the context of highcharts, and are difficult to test
// Some of these seem to be testable, we should try to test them when modifying / working with them in the future

/* c8 ignore start */
export function getScreenReaderFormatterCallbackFunction(view: View, locale: string): ScreenReaderFormatterCallbackFunction<Point> {
    return function (point) {
        const tooltipLines = [];

        if (view.rowVarNames && view.rowVarNames.length > 0 && point.series.name) {
            tooltipLines.push(`${view.rowVarNames?.map(rvn => rvn[locale]).join(', ')}: ${parseScreenReaderFriendlyTimePeriods(point.series.name, locale)}`);
        }

        if (view.colVarNames && view.colVarNames.length > 0 && point.name) {
            tooltipLines.push(`${view.colVarNames?.map(cvn => cvn[locale]).join(', ')}: ${parseScreenReaderFriendlyTimePeriods(point.name, locale)}`);
        }

        const precision: number = point.options.custom?.['precision'] ?? 0;
        tooltipLines.push(getDataFormattedForChartType(view, point, locale, precision))

        if (point.options.custom?.['preliminary']) {
            tooltipLines.push(Translations.preliminaryData[locale]);
        }

        return tooltipLines.join(', ');
    };
}
/* c8 ignore end */

/* c8 ignore start */
export function getAxisLabelFormatterFunction(locale: string): AxisLabelsFormatterCallbackFunction {        
    return function () {
        return this.value.toLocaleString(locale);
    }
}
/* c8 ignore end */

export const formatLocale = (locale: string): string => {
    return GetAllLanguages().indexOf(locale.toLowerCase().trim()) > -1 ? locale.toLowerCase().trim() : GetAllLanguages()[0];
}

/* c8 ignore start */
export function getAxisLabelShorteningFunction(valueAmount: number | null = null): AxisLabelsFormatterCallbackFunction {
    const VALUE_AMOUNT_LIMIT = 15;
    const MAX_LENGTH = (valueAmount && valueAmount >= VALUE_AMOUNT_LIMIT) ? 25 : 50;
    return function () {
        return shortenStringValue(this.value, MAX_LENGTH);
    }
}
/* c8 ignore end */

/* c8 ignore start */
export function getDataLabelShorteningFunction(showData: boolean): DataLabelsFormatterCallbackFunction {
    return function () {
        const value: string = showData ? ` (${Math.round(this.percentage ?? 0)}%)` : "";
        return shortenStringValue(this.name, 20) + value;
    }
}
/* c8 ignore end */

export function getDataLabelFormatterFunction(locale: string): DataLabelsFormatterCallbackFunction {
    return function () {
        if (!this.y) return '';

        const precision: number = this.options.custom?.['precision'] ?? 0;
        return formatNumericValue(this.y, precision, locale, true);
    }
}

/* c8 ignore start */
export function getLegendLabelShorteningFunction(): FormatterCallbackFunction<Series | Point> {
    return function () {
        return shortenStringValue(this.name, 200);
    }
}
/* c8 ignore end */

export const shortenStringValue = (value: string | number, limit: number = 50) => {
    const totalLength = value.toString().length;
    const parsedString = `${value.toString().slice(0, limit).trim()}${totalLength > limit ? '...' : ''}`;
    return parsedString;
}

/* c8 ignore start */
export function getScatterPlotScreenReaderFormatterCallbackFunction(view: View, locale: string): ScreenReaderFormatterCallbackFunction<Point> {
    return function (point) {
        const xVarValue = view.series[1].rowNameGroup.map(s => s[locale]).join(', ');
        const yVarValue = view.series[0].rowNameGroup.map(s => s[locale]).join(', ');
        const colVarName = view.colVarNames?.map(cvn => cvn[locale]).join(', ');
        let renderString = '';
        if (xVarValue && xVarValue.length > 0 && point.series.name) {
            const rowVar = `${xVarValue}: ${parseScreenReaderFriendlyTimePeriods(point.x.toLocaleString(locale), locale)}, `;
            renderString += rowVar;
        }

        if (yVarValue && yVarValue.length > 0) {
            const colVar = `${yVarValue}: ${point.y && parseScreenReaderFriendlyTimePeriods(point.y.toLocaleString(locale), locale)}, `;
            renderString += colVar;
        }

        if (colVarName && colVarName.length > 0 && view.columnNameGroups && view.columnNameGroups.length > 0) {
            const colVar = `${colVarName}: ${parseScreenReaderFriendlyTimePeriods(view.columnNameGroups[point.index].map((cng) => cng[locale]).join(', '), locale)}`;
            renderString += colVar;
        }

        if (point.options.custom?.['preliminary']) {
            renderString += `, ${Translations.preliminaryData[locale]}`;
        }

        return renderString;
    }
}
/* c8 ignore end */

/* c8 ignore start */
export function getScatterPlotTooltipFormatterFunction(view: View, locale: string): TooltipFormatterCallbackFunction {
    return function () {
        const xVarValue = view.series[1].rowNameGroup.map(s => s[locale]).join(', ');
        const yVarValue = view.series[0].rowNameGroup.map(s => s[locale]).join(', ');
        const colVarName = view.colVarNames?.map(cvn => cvn[locale]).join(', ');
        let renderString = '';
        if (xVarValue && xVarValue.length > 0 && this.series.name) {
            const rowVar = `${xVarValue}: ${this.x.toLocaleString(locale)}<br />`;
            renderString += rowVar;
        }

        if (yVarValue && yVarValue.length > 0 && this.key) {
            const colVar = `${yVarValue}: ${this.y?.toLocaleString(locale)}<br />`;
            renderString += colVar;
        }

        if (colVarName && colVarName.length > 0 && view.columnNameGroups && view.columnNameGroups.length > 0) {
            const colVar = `${colVarName}: ${view.columnNameGroups[this.index].map((cng) => cng[locale]).join(', ')}`;
            renderString += colVar;
        }

        if (this.options.custom?.['preliminary']) {
            renderString += `<br />${Translations.preliminaryData[locale]}`;
        }

        return renderString;
    }
}
/* c8 ignore end */

export function getLineChartToolTipFormatterFunction(view: View, locale: string): Highcharts.TooltipFormatterCallbackFunction {
    return function () {
        const tooltipLines = [];

        if (view.rowVarNames && view.rowVarNames.length > 0) {
            for (let i = 0; i < view.rowVarNames.length; i++) {
                const rowVarName = view.rowVarNames[i];
                const rowVarValue = view.series[this.series.index].rowNameGroup[i];
                tooltipLines.push(`${rowVarName[locale]}: ${rowVarValue[locale]}`);
            }
        }

        if (view.colVarNames && view.colVarNames.length > 0 && this.name) {
            tooltipLines.push(`${view.colVarNames?.map(cvn => cvn[locale]).join(', ')}: ${this.name}`);
        }

        const precision: number = this.options.custom?.['precision'] ?? 0;
        tooltipLines.push(getDataFormattedForChartType(view, this, locale, precision))

        if (this.options.custom?.['preliminary']) {
            tooltipLines.push(Translations.preliminaryData[locale]);
        }

        return tooltipLines.join('<br/>');
    };
}

export function getFormattedUnits(unitInfos: IUnitInfo[], locale: string): string {
    const uniqueUnits = unitInfos.map(ui => ui.unit).filter(onlyUnique)
    if(uniqueUnits.length === 1) {
        return uniqueUnits[0][locale];
    }
    else if(uniqueUnits.length > 1) {
        return unitInfos.map(ui => `${ui.name[locale]}: ${ui.unit[locale]}`).join(', ');
    }
    else throw new Error('Missing required unit data');
}

export function getDataFormattedForChartType(view: View, point: Point, locale: string, precision: number): string {
    if (point.y === null || point.y === undefined) return '';
    const value = Number(point.y.toFixed(precision));

    if (view.visualizationSettings.visualizationType === EVisualizationType.PyramidChart) {
        return Math.abs(value).toLocaleString(locale);
    }
    else if (view.visualizationSettings.visualizationType == EVisualizationType.PercentHorizontalBarChart ||
        view.visualizationSettings.visualizationType == EVisualizationType.PercentVerticalBarChart) {
        return `${formatNumericValue(point.percentage ?? 0, 1, locale)}% (${value.toLocaleString(locale)} ${getFormattedUnits(view.units, locale)})`;
    } 
    else {
        return value.toLocaleString(locale) ?? '';
    }
}

export function parseScreenReaderFriendlyTimePeriods(value: string, locale: string) {
    const generalRegex = /^\d{4}[M,Q]\d{1,2}\*?$/; // regex for checking matching patterns for month series and quarter series strings, including preliminary data

    if (generalRegex.test(value)) {
        const strippedValue = value.split('*')[0];
        const monthRegex = /^\d{4}M\d{1,2}$/; // month regex pattern
        const quarterRegex = /^\d{4}Q\d{1,2}$/; // quarter regex pattern
        if (monthRegex.test(strippedValue)) {
            const splitValues = strippedValue.split('M');
            return `${splitValues[0]} ${ArrayTranslations.months[locale][Number(splitValues[1]) - 1]}`;
        } else if (quarterRegex.test(strippedValue)) {
            const splitValues = strippedValue.split('Q');
            return `${splitValues[0]} ${parsePlacementSuffix(splitValues[1], locale)} ${Translations.quarter[locale]}`;
        } else {
            console.log('Unsupported time pattern');
        }
    }
    return value;
}

function parsePlacementSuffix(value: string, locale: string) {
    // If the language has ordinal suffices, use them, otherwise use a dot
    // The value is expected to be a string representation of a number. Its parsed value is reduced by one to match the index of the ordinal suffix in the array
    const ordinalSuffices = ArrayTranslations.ordinalSuffices[locale];
    const index = parseInt(value) - 1;
    if (ordinalSuffices?.[index]) {
        return `${value}${ordinalSuffices[index]}`;
    } else {
        return `${value}.`;
    }
}

/**
 * Formats the last updated text based on the provided date string and locale.
 * @param lastUpdated Date string representing the last updated date.
 * @param locale Locale string for formatting the date.
 * @returns Formatted last updated text or undefined if input is invalid.
 */
export function getFormattedLastUpdatedText(lastUpdated: string | undefined, locale: string): string | undefined {
    if (!lastUpdated) return undefined;

    try {
        const date = new Date(lastUpdated);
        if (Number.isNaN(date.getTime())) return undefined;

        const dateLocale = locale === 'en' ? 'en-GB' : locale; // Use en-GB for English to get DD/MM/YYYY format if not specified
        const formattedDate: string = Intl.DateTimeFormat(dateLocale).format(date);

        return `${Translations.lastUpdated[locale]}: ${formattedDate}`;
    } catch (error) {
        console.error('Error formatting date:', error);
        return undefined;
    }
}