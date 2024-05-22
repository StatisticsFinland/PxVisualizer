import { Options } from 'highcharts';
import { View } from "../types/view";
import { getFormattedUnits, getScreenReaderFormatterCallbackFunction, getToolTipFormatterFunction } from './Utility/formatters';
import Translations from '../conversion/translations';
import { defaultTheme } from "../highcharts/themes";

export const pyramidChartOptions = (view: View, locale: string): Options => {
    const categories = view.columnNameGroups.map(cng => cng.map(n => n[locale]).join(', '));
    const maxValue = Math.max(...view.series.map(s => Math.max(...s.series.map(dataCell => dataCell.value ?? 0))));
    const theme = defaultTheme(locale);
    const dataValueLabelStyle = theme.tooltip?.style;
    return (
        {
            accessibility: {
                point: {
                    descriptionFormatter: getScreenReaderFormatterCallbackFunction(view, locale)
                }
            },
            chart: { type: 'bar' },
            title: { text: view.header[locale] },
            subtitle: { text: view.subheaderValues.map(sv => sv[locale]).join(' | ') },
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
                },
                plotLines: [
                    {
                        value: 0,
                        color: '#000',
                        width: 1
                    }
                ]
            },
            legend: {
                enabled: true,
                margin: 30
            },
            series: view.series.map((s, i) => {
                return ({
                    animation: false,
                    type: 'bar',
                    name: s.rowNameGroup.map(n => n[locale]).join(', '),
                    data: s.series.map((dataCell, index) => ({
                        y: i === 0 && dataCell.value ? -dataCell.value : dataCell.value,
                        name: view.columnNameGroups[index].map(n => n[locale]).join(', '),
                        custom: { preliminary: dataCell.preliminary }
                    }))
                })
            }),
            credits: { text: `${Translations.source[locale]}: ${view.sources.map(s => s[locale]).join(', ')}` },
            plotOptions: {
                series: {
                    stacking: 'normal',
                    dataLabels: {
                        enabled: view.visualizationSettings.showDataPoints,
                        style: dataValueLabelStyle
                    }
                }
            },
            tooltip: {
                formatter: getToolTipFormatterFunction(view, locale)
            },
            exporting: {
                enabled: false
            }
        }
    )
};
