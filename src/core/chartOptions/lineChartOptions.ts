import { Options } from "highcharts";
import { View } from "../types/view";
import { getTimeSeriesOptions, getXAxisOptions } from "./Utility/timeIntervals";
import { getFormattedUnits, getLegendLabelShorteningFunction, getScreenReaderFormatterCallbackFunction, getToolTipFormatterFunction } from "./Utility/formatters";
import Translations from "../conversion/translations";
import { buildHighchartSeries } from "./Utility/seriesDataBuilder";
import { defaultTheme } from "../highcharts/themes";

export const lineChartOptions = (view: View, locale: string): Options => {
    const theme = defaultTheme(locale);
    const dataValueLabelStyle = theme.tooltip?.style;
    const cutValueAxis = !view.visualizationSettings?.cutValueAxis ? 0 : undefined;

    const highChartsOptions: Options = {
        accessibility: {
            point: {
                descriptionFormatter: getScreenReaderFormatterCallbackFunction(view, locale)
            }
        },
        chart: { type: 'line' },
        title: { text: view.header[locale] },
        subtitle: { text: view.subheaderValues.map(sv => sv[locale]).join(' | ') },
        xAxis: {
            ...getXAxisOptions(view, locale),
            gridLineColor: 'hsl(0, 0%, 35%)',
            gridLineWidth: 0.5,
        },
        yAxis: {
            softMin: cutValueAxis,
            softMax: cutValueAxis,
            title: { text: getFormattedUnits(view.units, locale) },
            plotLines: [
                {
                    value: 0,
                    color: '#000',
                    width: 1
                }
            ]
        },
        tooltip: {
            formatter: getToolTipFormatterFunction(view, locale)
        },
        plotOptions: {
            line: {
                dataLabels: {
                    enabled: view.visualizationSettings.showDataPoints,
                    format: '{point.y}',
                    style: dataValueLabelStyle
                },
                marker: {
                    enabled: false
                }
            },
            series: getTimeSeriesOptions(view.visualizationSettings.timeVariableIntervals, view.visualizationSettings.timeSeriesStartingPoint)
        },
        legend: {
            enabled: view.series.length > 1,
            labelFormatter: getLegendLabelShorteningFunction()
        },
        credits: { text: `${Translations.source[locale]}: ${view.sources.map(s => s[locale]).join(', ')}` },
        series: buildHighchartSeries(view, 'line', locale),
        exporting: {
            enabled: false
        }
    }
    return highChartsOptions;
};