import { Options } from 'highcharts';
import { View } from "../types/view";
import { commonStackedHorizontalBarChartOptions, commonDatalabelsOptions } from './chartOptions';
import { getFormattedUnits } from './Utility/formatters';

export const percentHorizontalBarChartOptions = (view: View, locale: string): Options => {
    return {
        ...commonStackedHorizontalBarChartOptions(view, locale),
        yAxis: {
            min: 0,
            title: {
                text: '%',
                style: {
                    textAlign: 'center',
                },
                align: 'middle',
                textAlign: "center",
                y: 10,
                x: 0,
            }
        },
        series: view.series.map(s => ({
            animation: false,
            type: 'bar',
            name: s.rowNameGroup.map(n => n[locale]).join(', '),
            data: s.series.map((data, index) => ({
                y: data.value,
                name: view.columnNameGroups[index].map(n => n[locale]).join(', '),
                unit: getFormattedUnits(view.units, locale),
                custom: { preliminary: data.preliminary, precision: 1 }
            }))
        })),
        plotOptions: {
            bar: {
                stacking: 'percent'
            },
            series: {
                dataLabels: {
                    ...commonDatalabelsOptions(view, locale)
                }
            }
        }
    };
};