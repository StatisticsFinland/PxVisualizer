import { Options } from 'highcharts';
import { View } from "../types/view";
import { commonHorizontalBarChartOptions, commonBasicHorizontalBarChartYAxisOptions, commonDatalabelsOptions } from './chartOptions';
import { buildBarChartSeries } from './Utility/seriesDataBuilder';
import { IChartOptions } from '../types/chartOptions';

export const basicHorizontalBarChartOptions = (view: View, locale: string, options?: IChartOptions): Options => {
    return {
        ...commonHorizontalBarChartOptions(view, locale, options),
        series: buildBarChartSeries(view, locale, false, options?.accessibilityMode),
        chart: { type: 'bar', spacingBottom: 60 },
        yAxis: {
            ...commonBasicHorizontalBarChartYAxisOptions(view, locale),
            softMin: 0,
            max: 100,
        },
        caption: {
            ...commonHorizontalBarChartOptions(view, locale, options).caption,
            y: 30
        },
        legend: { enabled: false },
        plotOptions: {
            series: {
                dataLabels: {
                    ...commonDatalabelsOptions(view, locale)
                }
            }
        }
    };
}