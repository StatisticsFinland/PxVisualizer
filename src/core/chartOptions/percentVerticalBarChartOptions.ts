import { Options } from 'highcharts';
import { View } from "../types/view";
import { commonStackedVerticalBarChartOptions, commonDatalabelsOptions, buildDataSeries } from './chartOptions';
import { getTimeSeriesOptions } from './Utility/timeIntervals';

export const percentVerticalBarChartOptions = (view: View, locale: string): Options => {
    return {
        ...commonStackedVerticalBarChartOptions(view, locale),
        yAxis: {
            min: 0,
            title: {
                text: '%',
            }
        },
        series: buildDataSeries(view, locale, 'column', 1),
        plotOptions: {
            column: {
                stacking: 'percent',
                dataLabels: {
                    ...commonDatalabelsOptions(view, locale)
                }
            },
            series: getTimeSeriesOptions(view.visualizationSettings.timeVariableIntervals, view.visualizationSettings.timeSeriesStartingPoint),
        }
    };
}