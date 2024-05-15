import { Options } from 'highcharts';
import { View } from "../types/view";
import { getAxisLabelShorteningFunction, getScreenReaderFormatterCallbackFunction, getToolTipFormatterFunction } from './Utility/formatters';
import Translations from '../conversion/translations';
import { buildHighchartSeries } from './Utility/seriesDataBuilder';
import { defaultTheme } from "../highcharts/themes";

export const percentHorizontalBarChartOptions = (view: View, locale: string): Options => {
    const theme = defaultTheme(locale);
    const dataValueLabelStyle = theme.tooltip?.style;
    
    const highChartsOptions: Options = {
        accessibility: {
            point: {
                descriptionFormatter: getScreenReaderFormatterCallbackFunction(view, locale)
            }
        },
        chart: { type: 'bar' },
        title: { text: view.header[locale] },
        subtitle: { text: view.subheaderValues.map(sv => sv[locale]).join(' | ') },
        xAxis: {
            categories: view.columnNameGroups.map(cng => cng.map(n => n[locale]).join(', ')),
            labels: {
                formatter: getAxisLabelShorteningFunction(view.columnNameGroups.length),
                style: {
                    width: 200
                }
            }
        },
        yAxis: {
            min : 0,
            title: {
                text: '%',
                style: {
                    textAlign: 'center',
                },
                align: 'middle',
                textAlign: "center",
                y: 10,
                x: 0,
            },
            plotLines: [
                {
                    value: 0,
                    color: '#000',
                    width: 1
                }
            ]
        },
        plotOptions: {
            bar: {
                stacking: 'percent',
                dataLabels: {
                    enabled: view.visualizationSettings.showDataPoints,
                    style: dataValueLabelStyle,
                    useHTML: true,
                    formatter: function () {
                        let bg = 'rgb(255, 255, 255)';
                        let bdg = 'rgba(0, 0, 0, 1)';
                        return `<span style="background-color: ${bg}; border: 1px solid ${bdg};">${this.y}</span>`
                    }
                }
            }
        },
        legend: {
            enabled: true,
            layout: 'horizontal',
            reversed: true,
            margin: 30
        },
        series: buildHighchartSeries(view, 'bar', locale, true),
        credits: { text: `${Translations.source[locale]}: ${view.sources.map(s => s[locale]).join(', ')}` },
        tooltip: {
            formatter: getToolTipFormatterFunction(view, locale)
        }
    }
    return highChartsOptions;
};