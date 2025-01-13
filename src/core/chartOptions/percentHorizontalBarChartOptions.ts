import { Options } from 'highcharts';
import { View } from "../types/view";
import { commonStackedHorizontalBarChartOptions, commonDatalabelsOptions, buildDataSeries } from './chartOptions';

export const percentHorizontalBarChartOptions = (view: View, locale: string): Options => {
    return {
        ...commonStackedHorizontalBarChartOptions(view, locale),
        yAxis: {
            min: 0,
            title: {
                text: '%',
                style: {
                    textAlign: 'center',
                },
                align: 'middle',
                textAlign: "center",
                y: 10,
                x: 0,
            }
        },
        series: buildDataSeries(view, locale, 'bar', 1),
        plotOptions: {
            bar: {
                stacking: 'percent'
            },
            series: {
                dataLabels: {
                    ...commonDatalabelsOptions(view, locale)
                }
            }
        }
    };
};