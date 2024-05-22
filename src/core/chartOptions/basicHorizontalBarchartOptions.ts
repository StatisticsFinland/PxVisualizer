import { Options } from 'highcharts';
import { View } from "../types/view";
import { commonBasicHorizontalBarChartOptions, commonBasicHorizontalBarChartYAxisOptions, commonDatalabelsOptions } from './barChartOptions';

export const basicHorizontalBarChartOptions = (view: View, locale: string): Options => {
    const highChartsOptions: Options = {
        ...commonBasicHorizontalBarChartOptions(view, locale),
        chart: { type: 'bar', spacingBottom: 60 },
        yAxis: {
            ...commonBasicHorizontalBarChartYAxisOptions(view, locale),
            softMin: 0,
            max: 100
        },
        legend: { enabled: false },
        plotOptions: {
            series: {
                dataLabels: [commonDatalabelsOptions(view, locale)]
            }
        }
    }
    return highChartsOptions;
};