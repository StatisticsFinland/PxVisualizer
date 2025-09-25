import { Options } from "highcharts";
import { View } from "../types/view";
import { getTimeSeriesOptions, getXAxisOptions } from "./Utility/timeIntervals";
import { getFormattedUnits, getLegendLabelShorteningFunction, getLineChartToolTipFormatterFunction } from "./Utility/formatters";
import { buildLineChartSeries } from "./Utility/seriesDataBuilder";
import { commonChartOptions, commonDatalabelsOptions, commonLegendStyleOptions, commonYAxisOptions } from "./chartOptions";
import { IChartOptions } from "../types/chartOptions";

export const lineChartOptions = (view: View, locale: string, options?: IChartOptions): Options => {
    const cutValueAxis = !view.visualizationSettings?.cutValueAxis ? 0 : undefined;
    const markerSettings = options?.accessibilityMode ? { enabledThreshold: 3 } : { enabled: false };
    return {
        ...commonChartOptions(view, locale, options),
        chart: { type: 'line' },
        tooltip: {
            formatter: getLineChartToolTipFormatterFunction(view, locale)
        },
        xAxis: {
            ...getXAxisOptions(view, locale),
            gridLineColor: 'hsl(0, 0%, 35%)',
            gridLineWidth: 0.5,
        },
        yAxis: {
            ...commonYAxisOptions,
            softMin: cutValueAxis,
            softMax: cutValueAxis,
            title: { text: getFormattedUnits(view.units, locale) }
        },
        plotOptions: {
            line: {
                dataLabels: {
                    ...commonDatalabelsOptions(view, locale)
                },
                marker: markerSettings,
            },
            series: getTimeSeriesOptions(view.visualizationSettings.timeVariableIntervals, view.visualizationSettings.timeSeriesStartingPoint)
        },
        legend: {
            ...commonLegendStyleOptions,
            enabled: view.series.length > 1,
            labelFormatter: getLegendLabelShorteningFunction()
        },
        series: buildLineChartSeries(view, locale),
        exporting: {
            enabled: false,
        },
    };
}
