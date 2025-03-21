import { Options } from 'highcharts';
import { View } from "../types/view";
import { getFormattedUnits } from './Utility/formatters';
import { commonStackedVerticalBarChartOptions, commonDatalabelsOptions, commonBarOptions } from './chartOptions';
import { getTimeSeriesOptions } from './Utility/timeIntervals';
import { IChartOptions } from '../types/chartOptions';

export const stackedVerticalBarChartOptions = (view: View, locale: string, options?: IChartOptions): Options => {
    return {
        ...commonStackedVerticalBarChartOptions(view, locale, options),
        yAxis: {
            softMin: 0,
            softMax: 0,
            title: {
                text: getFormattedUnits(view.units, locale),
            }
        },
        plotOptions: {
            column: {
                ...commonBarOptions,
                stacking: 'normal',
            },
            series: {
                ...getTimeSeriesOptions(view.visualizationSettings.timeVariableIntervals, view.visualizationSettings.timeSeriesStartingPoint),
                dataLabels: {
                    ...commonDatalabelsOptions(view, locale)
                }
            }
        }
    };
};