import { Options } from 'highcharts';
import { View } from "../types/view";
import { commonHorizontalBarChartOptions, commonBasicHorizontalBarChartYAxisOptions, commonDatalabelsOptions, commonLegendStyleOptions, commonBarOptions } from './chartOptions';
import { buildBarChartSeries } from './Utility/seriesDataBuilder';
import { IChartOptions } from '../types/chartOptions';

export const groupHorizontalBarChartOptions = (view: View, locale: string, options?: IChartOptions): Options => {
    return {
        ...commonHorizontalBarChartOptions(view, locale),
        series: buildBarChartSeries(view, locale, false, options?.accessibilityMode),
        yAxis: {
            ...commonBasicHorizontalBarChartYAxisOptions(view, locale),
            softMin: 0,
            softMax: 0
        },
        legend: {
            ...commonLegendStyleOptions,
            enabled: true,
            layout: 'vertical',
            margin: 30
        },
        plotOptions: {
            series: {
                dataLabels: {
                    ...commonDatalabelsOptions(view, locale)
                }
            },
            bar: {
                ...commonBarOptions,
            }
        }
    };
}