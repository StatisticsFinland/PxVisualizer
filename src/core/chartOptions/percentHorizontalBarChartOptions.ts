import { Options } from 'highcharts';
import { View } from "../types/view";
import { CommonStackedHorizontalBarChartOptions, commonDatalabelsOptions } from './chartOptions';


export const percentHorizontalBarChartOptions = (view: View, locale: string): Options => {
    return new PercentHorizontalBarChartOptions(view, locale).getOptions();
};

class PercentHorizontalBarChartOptions extends CommonStackedHorizontalBarChartOptions {
    getOptions(): Options {
        const baseOptions = super.getOptions();
        return {
            ...baseOptions,
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
                    stacking: 'percent'
                },
                series: {
                    dataLabels: {
                        ...commonDatalabelsOptions(this.view, this.locale)
                    }
                }
            }
        };
    }
}