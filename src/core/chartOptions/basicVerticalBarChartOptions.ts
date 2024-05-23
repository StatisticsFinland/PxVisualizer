import { Options } from "highcharts";
import { View } from "../types/view";
import { getFormattedUnits } from "./Utility/formatters";
import { getTimeSeriesOptions } from "./Utility/timeIntervals";
import { CommonBasicVerticalBarChartOptions, commonYAxisOptions, commonDatalabelsOptions } from './chartOptions';

export const basicVerticalBarChartOptions = (view: View, locale: string): Options => {
    return new BasicVerticalBarChartOptions(view, locale).getOptions();
}

class BasicVerticalBarChartOptions extends CommonBasicVerticalBarChartOptions {
    getOptions(): Options {
        const baseOptions = super.getOptions();
        return {
            ...baseOptions,
            series: [],
            yAxis: {
                ...commonYAxisOptions,
                softMin: 0,
                softMax: 0,
                title: { text: getFormattedUnits(this.view.units, this.locale) }
            },
            plotOptions: {
                series: {
                    ...getTimeSeriesOptions(this.view.visualizationSettings.timeVariableIntervals, this.view.visualizationSettings.timeSeriesStartingPoint),
                    dataLabels: {
                        ...commonDatalabelsOptions(this.view, this.locale)
                    }
                }
            },
            exporting: {
                enabled: false
            }
        };
    }
}