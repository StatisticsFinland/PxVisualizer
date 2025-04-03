import { SeriesBarOptions, SeriesColumnOptions, SeriesLineOptions } from "highcharts";
import { IDataSeries, View } from "../../types/view";
import { buildPatternObject } from "./patternFill";

export const buildLineChartSeries = (view: View, locale: string): SeriesLineOptions[] =>
    view.series.map((s, sIndex) => ({
        ...commonSeriesOptions(s, view, locale),
        index: sIndex,
        type: 'line',
    }));

export const buildBarChartSeries = (view: View, locale: string, reverseOrder: boolean = false, patternFill: boolean = false): SeriesBarOptions[] =>
    view.series.map((s, sIndex) => ({
        ...commonSeriesOptions(s, view, locale),
        ...(patternFill && buildPatternObject(sIndex)),
        index: reverseOrder ? view.series.length - 1 - sIndex : sIndex,
        type: 'bar',
    }));

export const buildColumnChartSeries = (view: View, locale: string, reverseOrder: boolean = false, patternFill: boolean = false): SeriesColumnOptions[] =>
    view.series.map((s, sIndex) => ({
        ...commonSeriesOptions(s, view, locale),
        ...(patternFill && buildPatternObject(sIndex)),
        index: reverseOrder ? view.series.length - 1 - sIndex : sIndex,
        type: 'column'
    }));

function commonSeriesOptions(ser: IDataSeries, view: View, locale: string) {
    return {
        animation: false,
        name: ser.rowNameGroup.map(n => n[locale]).join(', '),
        data: ser.series.map((dataPoint, dIndex) => ({
            y: dataPoint.value,
            name: view.columnNameGroups[dIndex].map(n => n[locale]).join(', '),
            custom: { preliminary: dataPoint.preliminary, precision: dataPoint.precision },
        }))
    }
};