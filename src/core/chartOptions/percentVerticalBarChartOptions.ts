import { Options } from 'highcharts';
import { View } from "../types/view";
import { commonStackedVerticalBarChartOptions, commonDatalabelsOptions } from './chartOptions';
import { getTimeSeriesOptions } from './Utility/timeIntervals';
import { getFormattedUnits } from './Utility/formatters';

export const percentVerticalBarChartOptions = (view: View, locale: string): Options => {
    return {
        ...commonStackedVerticalBarChartOptions(view, locale),
        yAxis: {
            min: 0,
            title: {
                text: '%',
            }
        },
        series: view.series.map(s => ({
            animation: false,
            type: 'column',
            name: s.rowNameGroup.map(n => n[locale]).join(', '),
            data: s.series.map((data, index) => ({
                y: data.value,
                name: view.columnNameGroups[index].map(n => n[locale]).join(', '),
                unit: getFormattedUnits(view.units, locale),
                custom: { preliminary: data.preliminary, precision: 1 }
            }))
        })),
        plotOptions: {
            column: {
                stacking: 'percent',
                dataLabels: {
                    ...commonDatalabelsOptions(view, locale)
                }
            },
            series: getTimeSeriesOptions(view.visualizationSettings.timeVariableIntervals, view.visualizationSettings.timeSeriesStartingPoint),
        }
    };
}