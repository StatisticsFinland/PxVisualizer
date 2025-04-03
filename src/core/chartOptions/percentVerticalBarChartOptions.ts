import { Options } from 'highcharts';
import { View } from "../types/view";
import { commonStackedVerticalBarChartOptions, commonDatalabelsOptions } from './chartOptions';
import { getTimeSeriesOptions } from './Utility/timeIntervals';
import { IChartOptions } from '../types/chartOptions';

export const percentVerticalBarChartOptions = (view: View, locale: string, options?: IChartOptions): Options => {
    return {
        ...commonStackedVerticalBarChartOptions(view, locale, options),
        yAxis: {
            min: 0,
            title: {
                text: '%',
            }
        },
        plotOptions: {
            column: {
                stacking: 'percent'
            },
            series: {
                ...getTimeSeriesOptions(view.visualizationSettings.timeVariableIntervals, view.visualizationSettings.timeSeriesStartingPoint),
                dataLabels: {
                    ...commonDatalabelsOptions(view, locale)
                }
            }
        }
    };
}