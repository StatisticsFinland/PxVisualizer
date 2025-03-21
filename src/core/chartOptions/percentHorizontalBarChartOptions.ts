import { Options } from 'highcharts';
import { View } from "../types/view";
import { commonStackedHorizontalBarChartOptions, commonDatalabelsOptions, commonBarOptions } from './chartOptions';
import { IChartOptions } from '../types/chartOptions';


export const percentHorizontalBarChartOptions = (view: View, locale: string, options?: IChartOptions): Options => {
    return {
        ...commonStackedHorizontalBarChartOptions(view, locale, options),
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
        plotOptions: {
            bar: {
                ...commonBarOptions,
                stacking: 'percent',
            },
            series: {
                dataLabels: {
                    ...commonDatalabelsOptions(view, locale)
                }
            }
        }
    };
};