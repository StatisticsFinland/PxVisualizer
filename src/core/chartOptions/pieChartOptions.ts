import { Options } from 'highcharts';
import { View } from "../types/view";
import { getDataLabelShorteningFunction, getFormattedUnits } from './Utility/formatters';
import { commonChartOptions } from './chartOptions';

export const pieChartOptions = (view: View, locale: string): Options => ({
    ...commonChartOptions(view, locale),
    chart: { type: 'pie' },
    plotOptions: {
        pie: {
            dataLabels: {
                formatter: getDataLabelShorteningFunction(view.visualizationSettings.showDataPoints ?? false)
            }
        }
    },
    series: view.series.map(s => ({
        animation: false,
        type: 'pie',
        name: s.rowNameGroup.map(n => n[locale]).join(', '),
        data: s.series.map((data, index) => ({
            y: data.value,
            name: view.columnNameGroups[index].map(n => n[locale]).join(', '),
            unit: getFormattedUnits(view.units, locale),
            custom: { preliminary: data.preliminary }
        }))
    })),
});