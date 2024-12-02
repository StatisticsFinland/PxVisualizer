import { Options } from 'highcharts';
import { IDataSeries, View } from "../types/view";
import { getScatterPlotTooltipFormatterFunction } from './Utility/formatters';
import { commonChartOptions, commonYAxisOptions } from './chartOptions';

export const scatterPlotOptions = (view: View, locale: string): Options => {
    const X_INDEX = 1; const Y_INDEX = 0;
    const cutValueAxis = !view.visualizationSettings?.cutValueAxis ? 0 : undefined;
    return {
        ...commonChartOptions(view, locale),
        chart: { type: 'scatter' },
        xAxis: {
            softMin: 0,
            softMax: 0,
            title: {
                text: view.series[X_INDEX].rowNameGroup.map(s => s[locale]).join(', ')
            },
            gridLineColor: 'hsl(0, 0%, 35%)',
            gridLineWidth: 0.5,
            plotLines: [
                {
                    value: 0,
                    color: '#000',
                    width: 1
                }
            ]
        },
        yAxis: {
            ...commonYAxisOptions,
            softMin: cutValueAxis,
            softMax: cutValueAxis,
            title: {
                text: view.series[Y_INDEX].rowNameGroup.map(s => s[locale]).join(', ')
            }
        },
        series: [
            {
                animation: false,
                type: 'scatter',
                data: view.series[0].series.map((_, index) => ({
                    x: view.series[X_INDEX].series[index].value ?? undefined,
                    y: view.series[Y_INDEX].series[index].value ?? undefined,
                    marker: {
                        symbol: 'circle',
                    },
                    custom: {
                        preliminary: view.series[X_INDEX].series[index].preliminary || view.series[Y_INDEX].series[index].preliminary,
                        precision: Math.max(view.series[X_INDEX].series[index].precision, view.series[Y_INDEX].series[index].precision)
                    }
                })),
            }
        ],
        tooltip: {
            headerFormat: '',
            pointFormat: tooltipPointFormat(view.series, locale),
            formatter: getScatterPlotTooltipFormatterFunction(view, locale)
        },
        plotOptions: {
            scatter: {
                marker: {
                    radius: 5 * (view.visualizationSettings.markerSize ? view.visualizationSettings.markerSize * 0.01 : 1)
                }
            }
        },
        exporting: {
            enabled: false
        }
    };
}

const tooltipPointFormat = (series: IDataSeries[], locale: string) => `
    ${series[1].rowNameGroup.map(s => s[locale]).join(', ')}: {point.x}<br/>
    ${series[0].rowNameGroup.map(s => s[locale]).join(', ')}: {point.y}
    `;