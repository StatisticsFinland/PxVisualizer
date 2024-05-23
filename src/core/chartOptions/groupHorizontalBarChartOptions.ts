import { Options } from 'highcharts';
import { View } from "../types/view";
import { CommonHorizontalBarChartOptions, commonBasicHorizontalBarChartYAxisOptions, commonDatalabelsOptions } from './chartOptions';
import { buildHighchartSeries } from './Utility/seriesDataBuilder';

export const groupHorizontalBarChartOptions = (view: View, locale: string): Options => {
    return new GroupHorizontalBarChartOptions(view, locale).getOptions();
};

class GroupHorizontalBarChartOptions extends CommonHorizontalBarChartOptions {
    getOptions(): Options {
        const baseOptions = super.getOptions();
        return {
            ...baseOptions,
            series: buildHighchartSeries(this.view, 'bar', this.locale),
            yAxis: {
                ...commonBasicHorizontalBarChartYAxisOptions(this.view, this.locale),
                softMin: 0,
                softMax: 0
            },
            legend: {
                enabled: true,
                layout: 'vertical',
                margin: 30
            },
            plotOptions: {
                series: {
                    dataLabels: {
                        ...commonDatalabelsOptions(this.view, this.locale)
                    }
                }
            }
        };
    }
}