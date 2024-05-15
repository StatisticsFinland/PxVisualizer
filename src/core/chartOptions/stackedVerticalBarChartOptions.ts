import { Options } from 'highcharts';
import { View } from "../types/view";
import { getFormattedUnits, getScreenReaderFormatterCallbackFunction, getToolTipFormatterFunction } from './Utility/formatters';
import { getTimeSeriesOptions, getXAxisOptions } from './Utility/timeIntervals';
import Translations from '../conversion/translations';
import { buildHighchartSeries } from './Utility/seriesDataBuilder';
import { defaultTheme } from "../highcharts/themes";

export const stackedVerticalBarChartOptions = (view: View, locale: string): Options => {
    const theme = defaultTheme(locale);
    const dataValueLabelStyle = theme.tooltip?.style;

    return (
        {
            accessibility: {
                point: {
                    descriptionFormatter: getScreenReaderFormatterCallbackFunction(view, locale)
                }
            },
            chart: { type: 'column' },
            title: { text: view.header[locale] },
            subtitle: { text: view.subheaderValues.map(sv => sv[locale]).join(' | ') },
            xAxis: getXAxisOptions(view, locale),
            yAxis: {
                softMin: 0,
                softMax: 0,
                title: {
                    text: getFormattedUnits(view.units, locale),
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
                column: {
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
                },
                series: getTimeSeriesOptions(view.visualizationSettings.timeVariableIntervals, view.visualizationSettings.timeSeriesStartingPoint)
            },
            legend: {
                enabled: true,
                layout: 'vertical'
            },
            series: buildHighchartSeries(view, 'column', locale, true),
            credits: { text: `${Translations.source[locale]}: ${view.sources.map(s => s[locale]).join(', ')}` },
            tooltip: {
                formatter: getToolTipFormatterFunction(view, locale)
            }
        }
    )
};