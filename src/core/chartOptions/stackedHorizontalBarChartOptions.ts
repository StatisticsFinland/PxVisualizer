import { Options } from 'highcharts';
import { View } from "../types/view";
import { getFormattedUnits } from './Utility/formatters';
import { getLinearSumAxisTickPositionerFunction } from './Utility/tickPositioners';
import { commonStackedHorizontalBarChartOptions, commonDatalabelsOptions } from './chartOptions';
import { IChartOptions } from '../types/chartOptions';

export const stackedHorizontalBarChartOptions = (view: View, locale: string, options?: IChartOptions): Options => {
    return {
        ...commonStackedHorizontalBarChartOptions(view, locale, options),
        yAxis: {
            softMin: 0,
            softMax: 0,
            tickPositioner: getLinearSumAxisTickPositionerFunction(view.series.map(s => s.series)),
            title: {
                text: getFormattedUnits(view.units, locale),
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
                stacking: 'normal',
            },
            series: {
                dataLabels: {
                    ...commonDatalabelsOptions(view, locale)
                }
            }
        }
    };
}