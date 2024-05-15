import { Options } from 'highcharts';
import { View } from "../types/view";
import { getAxisLabelShorteningFunction, getFormattedUnits, getScreenReaderFormatterCallbackFunction, getToolTipFormatterFunction } from './Utility/formatters';
import Translations from '../conversion/translations';
import { getLinearSumAxisTickPositionerFunction } from './Utility/tickPositioners';
import { buildHighchartSeries } from './Utility/seriesDataBuilder';
import { defaultTheme } from "../highcharts/themes";

export const stackedHorizontalBarChartOptions = (view: View, locale: string): Options => {
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
                categories: view.columnNameGroups.map(cng => cng.map(n => n[locale]).join(', ')),
                labels: {
                    formatter: getAxisLabelShorteningFunction(view.columnNameGroups.length),
                    style: {
                        width: 200
                    }
                }
            },
            yAxis: {
                softMin: 0,
                softMax: 0,
                tickPositioner: getLinearSumAxisTickPositionerFunction(view.series.map(s => s.series)),
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
                    stacking: 'normal',
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
    )
};