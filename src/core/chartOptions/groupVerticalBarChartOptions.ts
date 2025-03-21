import { Options } from 'highcharts';
import { View } from "../types/view";
import { getLegendLabelShorteningFunction } from './Utility/formatters';
import { getTimeSeriesOptions } from './Utility/timeIntervals';
import { commonBarOptions, commonBasicVerticalBarChartOptions, commonDatalabelsOptions, commonLegendStyleOptions } from './chartOptions';
import { IChartOptions } from '../types/chartOptions';

export const groupVerticalBarChartOptions = (view: View, locale: string, options?: IChartOptions): Options => {
    return {
        ...commonBasicVerticalBarChartOptions(view, locale, options),
        plotOptions: {
            series: {
                ...getTimeSeriesOptions(view.visualizationSettings.timeVariableIntervals, view.visualizationSettings.timeSeriesStartingPoint),
                dataLabels: {
                    ...commonDatalabelsOptions(view, locale)
                }
            },
            column: {
                ...commonBarOptions,
            }
        },
        legend: {
            ...commonLegendStyleOptions,
            enabled: true,
            labelFormatter: getLegendLabelShorteningFunction()
        }
    };
}