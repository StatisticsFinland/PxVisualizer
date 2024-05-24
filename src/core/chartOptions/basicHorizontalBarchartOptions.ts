import { Options } from 'highcharts';
import { View } from "../types/view";
import { commonHorizontalBarChartOptions, commonBasicHorizontalBarChartYAxisOptions, commonDatalabelsOptions } from './chartOptions';
import { buildHighchartSeries } from './Utility/seriesDataBuilder';

export const basicHorizontalBarChartOptions = (view: View, locale: string): Options => {
    return {
        ...commonHorizontalBarChartOptions(view, locale),
        series: buildHighchartSeries(view, 'bar', locale),
        chart: { type: 'bar', spacingBottom: 60 },
        yAxis: {
            ...commonBasicHorizontalBarChartYAxisOptions(view, locale),
            softMin: 0,
            max: 100
        },
        legend: { enabled: false },
        plotOptions: {
            series: {
                dataLabels: {
                    ...commonDatalabelsOptions(view, locale)
                }
            }
        }
    };
}