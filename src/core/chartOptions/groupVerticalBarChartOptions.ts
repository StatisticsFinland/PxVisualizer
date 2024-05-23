import { Options } from 'highcharts';
import { View } from "../types/view";
import { getLegendLabelShorteningFunction } from './Utility/formatters';
import { getTimeSeriesOptions } from './Utility/timeIntervals';
import { CommonBasicVerticalBarChartOptions, commonDatalabelsOptions } from './chartOptions';

export const groupVerticalBarChartOptions = (view: View, locale: string): Options => {
    return new GroupVerticalBarChartOptions(view, locale).getOptions();
};

class GroupVerticalBarChartOptions extends CommonBasicVerticalBarChartOptions {
    getOptions(): Options {
        const baseOptions = super.getOptions();
        return {
            ...baseOptions,
            plotOptions: {
                series: {
                    ...getTimeSeriesOptions(this.view.visualizationSettings.timeVariableIntervals, this.view.visualizationSettings.timeSeriesStartingPoint),
                    dataLabels: {
                        ...commonDatalabelsOptions(this.view, this.locale)
                    }
                }
            },
            legend: {
                enabled: true,
                labelFormatter: getLegendLabelShorteningFunction()
            },
        };
    }
}