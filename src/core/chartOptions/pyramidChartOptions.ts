import { Options } from 'highcharts';
import { View } from "../types/view";
import { getFormattedUnits } from './Utility/formatters';
import { commonChartOptions, commonDatalabelsOptions, commonLegendStyleOptions, commonYAxisOptions } from './chartOptions';
import { IChartOptions } from '../types/chartOptions';
import { buildPatternObject } from './Utility/patternFill';

export const pyramidChartOptions = (view: View, locale: string, options?: IChartOptions): Options => {
    const categories = view.columnNameGroups.map(cng => cng.map(n => n[locale]).join(', '));
    const maxValue = Math.max(...view.series.map(s => Math.max(...s.series.map(dataCell => dataCell.value ?? 0))));
    return {
        ...commonChartOptions(view, locale, options),
        chart: { type: 'bar' },
        xAxis: {
            categories: categories,
            reversed: false,
            labels: {
                style: {
                    width: 200
                }
            }
        },
        yAxis: {
            ...commonYAxisOptions,
            min: -Math.abs(maxValue),
            max: Math.abs(maxValue),
            title: {
                text: getFormattedUnits(view.units, locale),
                style: {
                    textAlign: 'center',
                },
                align: 'middle',
                textAlign: "center",
                y: 10,
                x: 0,
            },
            labels: {
                formatter: function () {
                    return Math.abs(this.value as number).toLocaleString(locale);
                }
            }
        },
        legend: {
            ...commonLegendStyleOptions,
            enabled: true,
            margin: 30
        },
        series: view.series.map((s, i) => {
            return ({
                animation: false,
                type: 'bar',
                name: s.rowNameGroup.map(n => n[locale]).join(', '),
                ...(options?.accessibilityMode && buildPatternObject(i)),
                data: s.series.map((dataCell, index) => ({
                    y: i === 0 && dataCell.value ? -dataCell.value : dataCell.value,
                    name: view.columnNameGroups[index].map(n => n[locale]).join(', '),
                    custom: { preliminary: dataCell.preliminary, precision: dataCell.precision }
                }))
            })
        }),
        plotOptions: {
            series: {
                stacking: 'normal',
                dataLabels: {
                    ...commonDatalabelsOptions(view, locale)
                }
            }
        },
        exporting: {
            enabled: false
        }
    };
}