import { Options } from 'highcharts';
import { View } from "../types/view";
import { getDataLabelShorteningFunction } from './Utility/formatters';
import { buildDataSeries, commonChartOptions } from './chartOptions';

export const pieChartOptions = (view: View, locale: string): Options => {
    return {
        ...commonChartOptions(view, locale),
        chart: { type: 'pie' },
        plotOptions: {
            pie: {
                dataLabels: {
                    formatter: getDataLabelShorteningFunction(view.visualizationSettings.showDataPoints ?? false)
                }
            }
        },
        series: buildDataSeries(view, locale, 'pie', null)
    };
}