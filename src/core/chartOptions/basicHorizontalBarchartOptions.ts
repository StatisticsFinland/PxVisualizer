import { Options } from 'highcharts';
import { View } from "../types/view";
import { getAxisLabelShorteningFunction, getFormattedUnits, getScreenReaderFormatterCallbackFunction, getToolTipFormatterFunction } from './Utility/formatters';
import Translations from '../conversion/translations';
import { buildHighchartSeries } from './Utility/seriesDataBuilder';
import { getLinearAxisTickPositionerFunction } from './Utility/tickPositioners';
import { defaultTheme } from "../highcharts/themes";
import { TExtendedPoint } from '../types/highchartsExtensions';

export const basicHorizontalBarChartOptions = (view: View, locale: string): Options => {
    const theme = defaultTheme(locale);
    const dataValueLabelStyle = theme.tooltip?.style;

    const highChartsOptions: Options = {
        accessibility: {
            point: {
                descriptionFormatter: getScreenReaderFormatterCallbackFunction(view, locale)
            }
        },
        chart: { type: 'bar', spacingBottom: 60},
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
            max: 100,
            tickPositioner: getLinearAxisTickPositionerFunction(view.series.map(s => s.series)),
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
        legend: { enabled: false },
        series: buildHighchartSeries(view, 'bar', locale),
        credits: { text: `${Translations.source[locale]}: ${view.sources.map(s => s[locale]).join(', ')}` },
        tooltip: {
            formatter: getToolTipFormatterFunction(view, locale)
        },
        plotOptions: {
            series: {
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
        }
    }
    return highChartsOptions;
};