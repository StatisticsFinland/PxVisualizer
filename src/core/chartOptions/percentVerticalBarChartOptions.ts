import { Options } from 'highcharts';
import { View } from "../types/view";
import { commonStackedVerticalBarChartOptions, commonDatalabelsOptions } from './chartOptions';
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