import { Options } from 'highcharts';
import { View } from "../types/view";
import { getFormattedUnits, getLegendLabelShorteningFunction, getScreenReaderFormatterCallbackFunction, getToolTipFormatterFunction } from './Utility/formatters';
import { getTimeSeriesOptions, getXAxisOptions } from './Utility/timeIntervals';
import Translations from '../conversion/translations';
import { buildHighchartSeries } from './Utility/seriesDataBuilder';
import { defaultTheme } from "../highcharts/themes";
import { TExtendedPoint } from '../types/highchartsExtensions';

export const groupVerticalBarChartOptions = (view: View, locale: string): Options => {
    const theme = defaultTheme(locale);
    const dataValueLabelStyle = theme.tooltip?.style;
    
    const highChartsOptions: Options = {
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
            series: {
            ...getTimeSeriesOptions(view.visualizationSettings.timeVariableIntervals, view.visualizationSettings.timeSeriesStartingPoint),
                dataLabels: {
                    enabled: view.visualizationSettings.showDataPoints,
                    style: dataValueLabelStyle,
                    useHTML: true,
                    formatter: function () {
                        const point = this.point as TExtendedPoint;
                        let bg = point.updateNeeded ? 'rgb(255, 255, 255)' : 'rgba(0, 0, 0, 0)';
                        let bdg = point.updateNeeded ? 'rgba(0, 0, 0, 1)' : 'rgba(0, 0, 0, 0)';
                        return `<span style="background-color: ${bg}; border: 1px solid ${bdg};">${this.y}</span>`
                    }
                }
            }
        
        },
        legend: {
            enabled: true,
            labelFormatter: getLegendLabelShorteningFunction()
        },
        series: buildHighchartSeries(view, 'column', locale),
        credits: { text: `${Translations.source[locale]}: ${view.sources.map(s => s[locale]).join(', ')}` },
        tooltip: {
            formatter: getToolTipFormatterFunction(view, locale)
        }
    }
    return highChartsOptions;
};