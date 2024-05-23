import { Options } from 'highcharts';
import { View } from "../types/view";
import { getFormattedUnits } from './Utility/formatters';
import { getLinearSumAxisTickPositionerFunction } from './Utility/tickPositioners';
import { CommonStackedHorizontalBarChartOptions, commonDatalabelsOptions } from './chartOptions';

export const stackedHorizontalBarChartOptions = (view: View, locale: string): Options => {
    return new StackedHorizontalBarChartOptions(view, locale).getOptions();
};

class StackedHorizontalBarChartOptions extends CommonStackedHorizontalBarChartOptions {
    getOptions(): Options {
        const baseOptions = super.getOptions();
        return {
            ...baseOptions,
            yAxis: {
                softMin: 0,
                softMax: 0,
                tickPositioner: getLinearSumAxisTickPositionerFunction(this.view.series.map(s => s.series)),
                title: {
                    text: getFormattedUnits(this.view.units, this.locale),
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
                    stacking: 'normal'
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