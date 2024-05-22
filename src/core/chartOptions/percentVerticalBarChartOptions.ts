import { Options } from 'highcharts';
import { View } from "../types/view";
import { commonStackedVerticalBarChartOptions, commonDatalabelsOptions } from './barChartOptions';
import { getTimeSeriesOptions } from './Utility/timeIntervals';

export const percentVerticalBarChartOptions = (view: View, locale: string): Options => {
    const highChartsOptions: Options = {
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
    }
    return highChartsOptions;
};