import { Options } from "highcharts";
import { View } from "../types/view";
import { getTimeSeriesOptions, getXAxisOptions } from "./Utility/timeIntervals";
import { getFormattedUnits, getLegendLabelShorteningFunction, getScreenReaderFormatterCallbackFunction, getToolTipFormatterFunction } from "./Utility/formatters";
import { buildHighchartSeries } from "./Utility/seriesDataBuilder";
import { CommonChartOptions, commonDatalabelsOptions, commonYAxisOptions } from "./chartOptions";

export const lineChartOptions = (view: View, locale: string): Options => {
    return new LineChartOptions(view, locale).getOptions();
};

class LineChartOptions extends CommonChartOptions {
    getOptions(): Options {
        const cutValueAxis = !this.view.visualizationSettings?.cutValueAxis ? 0 : undefined;
        const baseOptions = super.getOptions();
        return {
            ...baseOptions,
            chart: { type: 'line' },
            xAxis: {
                ...getXAxisOptions(this.view, this.locale),
                gridLineColor: 'hsl(0, 0%, 35%)',
                gridLineWidth: 0.5,
            },
            yAxis: {
                ...commonYAxisOptions,
                softMin: cutValueAxis,
                softMax: cutValueAxis,
                title: { text: getFormattedUnits(this.view.units, this.locale) }
            },
            plotOptions: {
                line: {
                    dataLabels: {
                        ...commonDatalabelsOptions(this.view, this.locale)
                    },
                    marker: {
                        enabled: false
                    }
                },
                series: getTimeSeriesOptions(this.view.visualizationSettings.timeVariableIntervals, this.view.visualizationSettings.timeSeriesStartingPoint)
            },
            legend: {
                enabled: this.view.series.length > 1,
                labelFormatter: getLegendLabelShorteningFunction()
            },
            series: buildHighchartSeries(this.view, 'line', this.locale),
            exporting: {
                enabled: false
            }
        };
    }
}