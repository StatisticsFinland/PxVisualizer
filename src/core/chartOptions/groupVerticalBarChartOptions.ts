import { Options } from 'highcharts';
import { View } from "../types/view";
import { getLegendLabelShorteningFunction } from './Utility/formatters';
import { getTimeSeriesOptions } from './Utility/timeIntervals';
import { commonBasicVerticalBarChartOptions } from './barChartOptions';

export const groupVerticalBarChartOptions = (view: View, locale: string): Options => {

    const highChartsOptions: Options = {
        ...commonBasicVerticalBarChartOptions(view, locale),
        plotOptions: {
            series: {
                ...getTimeSeriesOptions(view.visualizationSettings.timeVariableIntervals, view.visualizationSettings.timeSeriesStartingPoint)
            }
        },
        legend: {
            enabled: true,
            labelFormatter: getLegendLabelShorteningFunction()
        },
    }
    return highChartsOptions;
};