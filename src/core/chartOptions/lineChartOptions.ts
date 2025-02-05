import { Options } from "highcharts";
import { View } from "../types/view";
import { getTimeSeriesOptions, getXAxisOptions } from "./Utility/timeIntervals";
import { getFormattedUnits, getLegendLabelShorteningFunction, getLineChartToolTipFormatterFunction } from "./Utility/formatters";
import { buildHighchartSeries } from "./Utility/seriesDataBuilder";
import { commonChartOptions, commonDatalabelsOptions, commonYAxisOptions } from "./chartOptions";

export const lineChartOptions = (view: View, locale: string): Options => {
    const cutValueAxis = !view.visualizationSettings?.cutValueAxis ? 0 : undefined;
    return {
        ...commonChartOptions(view, locale),
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
        series: buildHighchartSeries(view, 'line', locale),
        exporting: {
            enabled: false
        }
    };
}
