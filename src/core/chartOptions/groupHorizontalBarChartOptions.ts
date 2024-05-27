import { Options } from 'highcharts';
import { View } from "../types/view";
import { commonHorizontalBarChartOptions, commonBasicHorizontalBarChartYAxisOptions, commonDatalabelsOptions } from './chartOptions';
import { buildHighchartSeries } from './Utility/seriesDataBuilder';

export const groupHorizontalBarChartOptions = (view: View, locale: string): Options => {
    return {
        ...commonHorizontalBarChartOptions(view, locale),
        series: buildHighchartSeries(view, 'bar', locale),
        yAxis: {
            ...commonBasicHorizontalBarChartYAxisOptions(view, locale),
            softMin: 0,
            softMax: 0
        },
        legend: {
            enabled: true,
            layout: 'vertical',
            margin: 30
        },
        plotOptions: {
            series: {
                dataLabels: {
                    ...commonDatalabelsOptions(view, locale)
                }
            }
        }
    };
}