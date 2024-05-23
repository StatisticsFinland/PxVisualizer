import { Options } from 'highcharts';
import { View } from "../types/view";
import { CommonStackedVerticalBarChartOptions, commonDatalabelsOptions } from './chartOptions';
import { getTimeSeriesOptions } from './Utility/timeIntervals';

export const percentVerticalBarChartOptions = (view: View, locale: string): Options => {
    return new PercentVerticalBarChartOptions(view, locale).getOptions();
};

class PercentVerticalBarChartOptions extends CommonStackedVerticalBarChartOptions {
    getOptions(): Options {
        const baseOptions = super.getOptions();
        return {
            ...baseOptions,
            yAxis: {
                min: 0,
                title: {
                    text: '%',
                }
            },
            plotOptions: {
                column: {
                    stacking: 'percent',
                    dataLabels: {
                        ...commonDatalabelsOptions(this.view, this.locale)
                    }
                },
                series: getTimeSeriesOptions(this.view.visualizationSettings.timeVariableIntervals, this.view.visualizationSettings.timeSeriesStartingPoint),
            }
        };
    }
}