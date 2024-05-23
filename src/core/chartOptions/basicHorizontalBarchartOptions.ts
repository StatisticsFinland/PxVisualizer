import { Options } from 'highcharts';
import { View } from "../types/view";
import { CommonHorizontalBarChartOptions, commonBasicHorizontalBarChartYAxisOptions, commonDatalabelsOptions } from './chartOptions';
import { buildHighchartSeries } from './Utility/seriesDataBuilder';

export const basicHorizontalBarChartOptions = (view: View, locale: string): Options => {
    return new BasicHorizontalBarChartOptions(view, locale).getOptions();
};

class BasicHorizontalBarChartOptions extends CommonHorizontalBarChartOptions {
    getOptions(): Options {
        const baseOptions = super.getOptions();
        return {
            ...baseOptions,
            series: buildHighchartSeries(this.view, 'bar', this.locale),
            chart: { type: 'bar', spacingBottom: 60 },
            yAxis: {
                ...commonBasicHorizontalBarChartYAxisOptions(this.view, this.locale),
                softMin: 0,
                max: 100
            },
            legend: { enabled: false },
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