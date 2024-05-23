import { Options, YAxisOptions } from 'highcharts';
import { View } from "../types/view";
import { getAxisLabelShorteningFunction, getFormattedUnits, getToolTipFormatterFunction, getScreenReaderFormatterCallbackFunction } from './Utility/formatters';
import Translations from '../conversion/translations';
import { buildHighchartSeries } from './Utility/seriesDataBuilder';
import {  getXAxisOptions } from './Utility/timeIntervals';
import { getLinearAxisTickPositionerFunction } from './Utility/tickPositioners';
import { defaultTheme } from "../highcharts/themes";

export abstract class CommonChartOptions {
    protected view: View;
    protected locale: string;

    constructor(view: View, locale: string) {
        this.view = view;
        this.locale = locale;
    }

    getOptions(): Options {
        return {
            accessibility: {
                point: {
                    descriptionFormatter: getScreenReaderFormatterCallbackFunction(this.view, this.locale)
                }
            },
            title: { text: this.view.header[this.locale] },
            subtitle: { text: this.view.subheaderValues.map(sv => sv[this.locale]).join(' | ') },
            credits: { text: `${Translations.source[this.locale]}: ${this.view.sources.map(s => s[this.locale]).join(', ')}` },
            tooltip: {
                formatter: getToolTipFormatterFunction(this.view, this.locale)
            },
            yAxis: [commonYAxisOptions]
        };
    }
}

export const commonYAxisOptions: YAxisOptions = {
    plotLines: [
        {
            value: 0,
            color: '#000',
            width: 1
        }
    ]
}

export const commonDatalabelsOptions = (view: View, locale: string) => {
    const theme = defaultTheme(locale);
    const dataValueLabelStyle = theme.tooltip?.style;

    const dataLabelOptions = {
        enabled: view.visualizationSettings.showDataPoints,
        style: dataValueLabelStyle
    }
    return dataLabelOptions;
}

export const commonBasicHorizontalBarChartYAxisOptions = (view: View, locale: string): YAxisOptions => {
    const yAxisOptions: YAxisOptions = {
        ...commonYAxisOptions,
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
        }
    }
    return yAxisOptions;
}

export abstract class CommonHorizontalBarChartOptions extends CommonChartOptions {
    getOptions(): Options {
        const baseOptions = super.getOptions();
        return {
            ...baseOptions,
            chart: { type: 'bar' },
            xAxis: {
                categories: this.view.columnNameGroups.map(cng => cng.map(n => n[this.locale]).join(', ')),
                labels: {
                    formatter: getAxisLabelShorteningFunction(this.view.columnNameGroups.length),
                    style: {
                        width: 200
                    }
                }
            }
        }
    }
};

export abstract class CommonStackedHorizontalBarChartOptions extends CommonHorizontalBarChartOptions {
    getOptions(): Options {
        const baseOptions = super.getOptions();
        return {
            ...baseOptions,
            series: buildHighchartSeries(this.view, 'bar', this.locale, true),
            legend: {
                enabled: true,
                layout: 'horizontal',
                reversed: true,
                margin: 30
            }
        }
    }
}

abstract class CommonVerticalBarChartOptions extends CommonChartOptions {
    getOptions(): Options {
        const baseOptions = super.getOptions();
        return {
            ...baseOptions,
            chart: { type: 'column' },
            xAxis: getXAxisOptions(this.view, this.locale),
        }
    }
};

export abstract class CommonBasicVerticalBarChartOptions extends CommonVerticalBarChartOptions {
    getOptions(): Options {
        const baseOptions = super.getOptions();
        return {
            ...baseOptions,
            series: buildHighchartSeries(this.view, 'column', this.locale),
            yAxis: {
                softMin: 0,
                softMax: 0,
                title: {
                    text: getFormattedUnits(this.view.units, this.locale),
                }
            }
        }
    }
}

export abstract class CommonStackedVerticalBarChartOptions extends CommonVerticalBarChartOptions {
    getOptions(): Options {
        const baseOptions = super.getOptions();
        return {
            ...baseOptions,
            series: buildHighchartSeries(this.view, 'column', this.locale, true),
            legend: {
                enabled: true,
                layout: 'vertical'
            }
        }
    }
}

