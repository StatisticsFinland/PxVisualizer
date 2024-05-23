import { Options } from 'highcharts';
import { View } from "../types/view";
import { getFormattedUnits } from './Utility/formatters';
import { commonStackedVerticalBarChartOptions, commonDatalabelsOptions } from './chartOptions';
import { getTimeSeriesOptions } from './Utility/timeIntervals';



export const stackedVerticalBarChartOptions = (view: View, locale: string): Options => {
    const highChartsOptions: Options = {
        ...commonStackedVerticalBarChartOptions(view, locale),
        yAxis: {
            softMin: 0,
            softMax: 0,
            title: {
                text: getFormattedUnits(view.units, locale),
            }
        },
        plotOptions: {
            column: {
                stacking: 'normal',
                dataLabels: {
                    ...commonDatalabelsOptions(view, locale)
                }
            },
            series: getTimeSeriesOptions(view.visualizationSettings.timeVariableIntervals, view.visualizationSettings.timeSeriesStartingPoint)
        }
    }
    return highChartsOptions;
};