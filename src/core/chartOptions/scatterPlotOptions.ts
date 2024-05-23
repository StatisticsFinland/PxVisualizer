import { Options } from 'highcharts';
import { IDataSeries, View } from "../types/view";
import { getScatterPlotTooltipFormatterFunction } from './Utility/formatters';
import { CommonChartOptions, commonYAxisOptions } from './chartOptions';

export const scatterPlotOptions = (view: View, locale: string): Options => {
    return new ScatterPlotOptions(view, locale).getOptions();
};

class ScatterPlotOptions extends CommonChartOptions {
    getOptions(): Options {
        const baseOptions = super.getOptions();
        const X_INDEX = 1; const Y_INDEX = 0;
        const cutValueAxis = !this.view.visualizationSettings?.cutValueAxis ? 0 : undefined;
        return {
            ...baseOptions,
            chart: { type: 'scatter' },
            xAxis: {
                softMin: 0,
                softMax: 0,
                title: {
                    text: this.view.series[X_INDEX].rowNameGroup.map(s => s[this.locale]).join(', ')
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
                    text: this.view.series[Y_INDEX].rowNameGroup.map(s => s[this.locale]).join(', ')
                }
            },
            series: [
                {
                    animation: false,
                    type: 'scatter',
                    data: this.view.series[0].series.map((_, index) => ({
                        x: this.view.series[X_INDEX].series[index].value ?? undefined,
                        y: this.view.series[Y_INDEX].series[index].value ?? undefined,
                        marker: {
                            symbol: 'circle',
                        },
                        custom: { preliminary: this.view.series[X_INDEX].series[index].preliminary || this.view.series[Y_INDEX].series[index].preliminary }
                    })),
                }
            ],
            tooltip: {
                headerFormat: '',
                pointFormat: tooltipPointFormat(this.view.series, this.locale),
                formatter: getScatterPlotTooltipFormatterFunction(this.view, this.locale)
            },
            plotOptions: {
                scatter: {
                    marker: {
                        radius: 5 * (this.view.visualizationSettings.markerSize ? this.view.visualizationSettings.markerSize * 0.01 : 1)
                    }
                }
            },
            exporting: {
                enabled: false
            }
        };
    }
}

const tooltipPointFormat = (series: IDataSeries[], locale: string) => `
    ${series[1].rowNameGroup.map(s => s[locale]).join(', ')}: {point.x}<br/>
    ${series[0].rowNameGroup.map(s => s[locale]).join(', ')}: {point.y}
    `;