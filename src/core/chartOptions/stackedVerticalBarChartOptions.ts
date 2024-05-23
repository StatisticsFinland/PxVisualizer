import { Options } from 'highcharts';
import { View } from "../types/view";
import { getFormattedUnits } from './Utility/formatters';
import { CommonStackedVerticalBarChartOptions, commonDatalabelsOptions } from './chartOptions';
import { getTimeSeriesOptions } from './Utility/timeIntervals';

export const stackedVerticalBarChartOptions = (view: View, locale: string): Options => {
    return new StackedVerticalBarChartOptions(view, locale).getOptions();
};

class StackedVerticalBarChartOptions extends CommonStackedVerticalBarChartOptions {
    getOptions(): Options {
        const baseOptions = super.getOptions();
        return {
            ...baseOptions,
            yAxis: {
                softMin: 0,
                softMax: 0,
                title: {
                    text: getFormattedUnits(this.view.units, this.locale),
                }
            },
            plotOptions: {
                column: {
                    stacking: 'normal',
                    dataLabels: {
                        ...commonDatalabelsOptions(this.view, this.locale)
                    }
                },
                series: getTimeSeriesOptions(this.view.visualizationSettings.timeVariableIntervals, this.view.visualizationSettings.timeSeriesStartingPoint)
            }
        };
    }
}