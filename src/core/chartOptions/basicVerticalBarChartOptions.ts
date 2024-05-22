import { Options } from "highcharts";
import { View } from "../types/view";
import { getFormattedUnits } from "./Utility/formatters";
import { getTimeSeriesOptions } from "./Utility/timeIntervals";
import { defaultTheme } from "../highcharts/themes";
import { TExtendedPoint } from '../types/highchartsExtensions';
import { commonBasicVerticalBarChartOptions, commonYAxisOptions } from './barChartOptions';

export const basicVerticalBarChartOptions = (view: View, locale: string): Options => {
    const theme = defaultTheme(locale);
    const dataValueLabelStyle = theme.tooltip?.style;

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
                    enabled: view.visualizationSettings.showDataPoints,
                    style: dataValueLabelStyle,
                    useHTML: true,
                    formatter: function () {
                        const point = this.point as TExtendedPoint;
                        let bg = point.updateNeeded ? 'rgb(255, 255, 255)' : 'rgba(0, 0, 0, 0)';
                        let bdg = point.updateNeeded ? 'rgba(0, 0, 0, 1)' : 'rgba(0, 0, 0, 0)';
                        return `<span style="background-color: ${bg}; border: 1px solid ${bdg};">${this.y}</span>`
                    }
                }
            }
        },
        exporting: {
            enabled: false
        }
    }
    return highChartsOptions;
};