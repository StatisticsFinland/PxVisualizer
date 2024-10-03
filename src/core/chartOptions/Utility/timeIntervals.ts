import { ETimeVariableInterval } from "../../types/queryVisualizationResponse"
import Highcharts, { PlotSeriesOptions, XAxisOptions } from "highcharts";
import { ESeriesType, View } from "../../types/view";
import { getBiannualSeriesTickPositionerFunction, getQuarterlySeriesTickPositionerFunction } from "./tickPositioners";
import { getOrdinalOptions } from "./ordinalIntervals";

export function getTimeSeriesOptions(interval: ETimeVariableInterval, startingPoint: string | null | undefined): PlotSeriesOptions | undefined {
    if (!startingPoint) return undefined;
    else {
        const startingDate = new Date(startingPoint);
        switch (interval) {
            case ETimeVariableInterval.Irregular:
                return undefined;
            case ETimeVariableInterval.Week:
                return undefined;
            case ETimeVariableInterval.Month:
                return {
                    pointStart: startingDate.getTime(),
                    pointIntervalUnit: 'month'
                };
            case ETimeVariableInterval.Quarter:
                return undefined;
            case ETimeVariableInterval.HalfYear:
                return undefined;
            case ETimeVariableInterval.Year:
                return {
                    pointStart: startingDate.getTime(),
                    pointIntervalUnit: 'year'
                };
        }
    }
}

export function getXAxisOptions(view: View, locale: string): XAxisOptions {
    if (view.seriesType === ESeriesType.Time) {
        switch (view.visualizationSettings.timeVariableIntervals) {
            case ETimeVariableInterval.Week:
                return weeklyOptions(view, locale);
            case ETimeVariableInterval.Month:
                return monthlyOptions(view, locale);
            case ETimeVariableInterval.Quarter:
                return quarterlyOptions(view, locale);
            case ETimeVariableInterval.HalfYear:
                return biannualOptions(view, locale);
            case ETimeVariableInterval.Year:
                return {
                    type: 'datetime'
                };
            default:
                return {
                    type: 'category',
                    categories: view.columnNameGroups.map(cng => cng.map(n => n[locale]).join(', '))
                };
        }
    }
    else {
        const labels: string[] = view.columnNameGroups.map(cng => cng.map(n => n[locale]).join(', '));
        const numeric: boolean = !labels.some(l => /[a-zA-Z]/.test(l));
        if (view.seriesType === ESeriesType.Ordinal && numeric) {
            return getOrdinalOptions(view, locale);
        }
        else { // Nominal or non-numeric ordinal
            return {
                type: 'category',
                categories: labels,
                labels: {
                    autoRotation: [-45]
                }
            };
        }
    }
}

const weeklyOptions: (view: View, locale: string) => XAxisOptions = (view, locale) => {
    return {
        type: 'linear',
        ordinal: false,
        labels: {
            formatter: function () {
                return view.columnNameGroups[Number(this.value)].map(n => n[locale]).join(', ');
            }
        }
    };
};

const monthlyOptions: (view: View, locale: string) => XAxisOptions = (view, locale) => {
    return {
        type: 'datetime',
        ordinal: false,
        labels: {
            formatter: function () {
                /* c8 ignore start */
                return Highcharts.dateFormat(`%YM%m`, Number(this.value));
                /* c8 ignore end */
            }
        }
    };
};

const quarterlyOptions: (view: View, locale: string) => XAxisOptions = (view, locale) => {
    return {
        type: 'linear',
        ordinal: false,
        labels: {
            formatter: function () {
                return Number.isInteger(this.value)
                    ? view.columnNameGroups[Number(this.value)].map(n => n[locale]).join(', ')
                    : '';
            }
        },
        tickPositioner: getQuarterlySeriesTickPositionerFunction(
            Math.max(...view.series.map(s => s.series.length)),
            new Date(view.visualizationSettings.timeSeriesStartingPoint ?? ""))
    };
};

const biannualOptions: (view: View, locale: string) => XAxisOptions = (view, locale) => {
    return {
        type: 'linear',
        ordinal: false,
        labels: {
            formatter: function () {
                return Number.isInteger(this.value)
                    ? view.columnNameGroups[Number(this.value)].map(n => n[locale]).join(', ')
                    : '';
            }
        },
        tickPositioner: getBiannualSeriesTickPositionerFunction(
            Math.max(...view.series.map(s => s.series.length)),
            new Date(view.visualizationSettings.timeSeriesStartingPoint ?? ""))
    };
};