import { Options } from "highcharts";
import { View } from "../types/view";
import { getFormattedUnits } from "./Utility/formatters";
import { getTimeSeriesOptions } from "./Utility/timeIntervals";
import { commonBasicVerticalBarChartOptions, commonYAxisOptions, commonDatalabelsOptions } from './barChartOptions';

export const basicVerticalBarChartOptions = (view: View, locale: string): Options => {

    const highChartsOptions: Options = {
        ...commonBasicVerticalBarChartOptions(view, locale),
        yAxis: {
            ...commonYAxisOptions,
            softMin: 0,
            softMax: 0,
            title: { text: getFormattedUnits(view.units, locale) },
        },
        plotOptions: {
            series: {
                ...getTimeSeriesOptions(view.visualizationSettings.timeVariableIntervals, view.visualizationSettings.timeSeriesStartingPoint),
                dataLabels: {
                    ...commonDatalabelsOptions(view, locale)
                }
            }
        },
        exporting: {
            enabled: false
        }
    }
    return highChartsOptions;
};