import { Options } from 'highcharts';
import { View } from "../types/view";
import { commonBasicHorizontalBarChartOptions, commonBasicHorizontalBarChartYAxisOptions, commonDatalabelsOptions } from './barChartOptions';

export const groupHorizontalBarChartOptions = (view: View, locale: string): Options => {
    const highChartsOptions: Options = {
        ...commonBasicHorizontalBarChartOptions(view, locale),
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
                dataLabels: [commonDatalabelsOptions(view, locale)]
            }
        }
    }
    return highChartsOptions;
};