import { Options } from 'highcharts';
import { View } from "../types/view";
import { getFormattedUnits } from './Utility/formatters';
import { CommonChartOptions, commonDatalabelsOptions, commonYAxisOptions } from './chartOptions';

export const pyramidChartOptions = (view: View, locale: string): Options => {
    return new PyramidChartOptions(view, locale).getOptions();
};

class PyramidChartOptions extends CommonChartOptions {
    getOptions(): Options {
        const baseOptions = super.getOptions();
        const locale = this.locale;
        const categories = this.view.columnNameGroups.map(cng => cng.map(n => n[locale]).join(', '));
        const maxValue = Math.max(...this.view.series.map(s => Math.max(...s.series.map(dataCell => dataCell.value ?? 0))));
        return {
            ...baseOptions,
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
                    text: getFormattedUnits(this.view.units, locale),
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
                enabled: true,
                margin: 30
            },
            series: this.view.series.map((s, i) => {
                return ({
                    animation: false,
                    type: 'bar',
                    name: s.rowNameGroup.map(n => n[locale]).join(', '),
                    data: s.series.map((dataCell, index) => ({
                        y: i === 0 && dataCell.value ? -dataCell.value : dataCell.value,
                        name: this.view.columnNameGroups[index].map(n => n[locale]).join(', '),
                        custom: { preliminary: dataCell.preliminary }
                    }))
                })
            }),
            plotOptions: {
                series: {
                    stacking: 'normal',
                    dataLabels: {
                        ...commonDatalabelsOptions
                    }
                }
            },
            exporting: {
                enabled: false
            }
        }
    }   
}