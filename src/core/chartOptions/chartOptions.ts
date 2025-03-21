import { LegendOptions, Options, PlotBarOptions, PlotColumnOptions, PlotOptions, PlotSeriesDataLabelsOptions, YAxisOptions } from 'highcharts';
import { View } from "../types/view";
import { getAxisLabelShorteningFunction, getFormattedUnits, getToolTipFormatterFunction, getScreenReaderFormatterCallbackFunction, getDataLabelFormatterFunction } from './Utility/formatters';
import { Translations } from '../conversion/translations';
import { getXAxisOptions } from './Utility/timeIntervals';
import { getLinearAxisTickPositionerFunction } from './Utility/tickPositioners';
import { IChartOptions } from '../types/chartOptions';
import { buildBarChartSeries, buildColumnChartSeries } from './Utility/seriesDataBuilder';

export const commonChartOptions = (view: View, locale: string): Options  => {
    return {
        accessibility: {
            point: {
                descriptionFormatter: getScreenReaderFormatterCallbackFunction(view, locale)
            }
        },
        title: { text: view.header[locale] },
        subtitle: { text: view.subheaderValues.map(sv => sv[locale]).join(' | ') },
        credits: { text: `${Translations.source[locale]}: ${view.sources.map(s => s[locale]).join(', ')}` },
        tooltip: {
            formatter: getToolTipFormatterFunction(view, locale)
        },
        yAxis: [commonYAxisOptions]
    };
}

export const commonYAxisOptions: YAxisOptions = {
    plotLines: [
        {
            value: 0,
            color: '#000',
            width: 1
        }
    ],
}

export const commonDatalabelsOptions = (view: View, locale: string): PlotSeriesDataLabelsOptions => {
    const dataLabelOptions = {
        enabled: view.visualizationSettings.showDataPoints,
        style: {
            color: '#000',
            fontSize: '1rem',
            fontWeight: '400',
        },
        formatter: getDataLabelFormatterFunction(locale)
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

export const commonHorizontalBarChartOptions = (view: View, locale: string): Options => {
    return {
        ...commonChartOptions(view, locale),
        chart: { type: 'bar' },
        xAxis: {
            categories: view.columnNameGroups.map(cng => cng.map(n => n[locale]).join(', ')),
            labels: {
                formatter: getAxisLabelShorteningFunction(view.columnNameGroups.length),
                style: {
                    width: 200
                }
            }
        },
    };
}

export const commonStackedHorizontalBarChartOptions = (view: View, locale: string, options?: IChartOptions): Options => {
    return {
        ...commonHorizontalBarChartOptions(view, locale),
        series: buildBarChartSeries(view, locale, true, options?.accessibilityMode),
        legend: {
            ...commonLegendStyleOptions,
            enabled: true,
            layout: 'horizontal',
            reversed: true,
            margin: 30
        }
    };
}

export const commonVerticalBarChartOptions = (view: View, locale: string): Options => {
    const result = {
        ...commonChartOptions(view, locale),
        chart: { type: 'column' },
        xAxis: getXAxisOptions(view, locale),
    };
    return result;
}

export const commonBasicVerticalBarChartOptions = (view: View, locale: string, options?: IChartOptions): Options => {
    return {
        ...commonVerticalBarChartOptions(view, locale),
        series: buildColumnChartSeries(view, locale, false, options?.accessibilityMode),
        yAxis: {
            softMin: 0,
            softMax: 0,
            title: {
                text: getFormattedUnits(view.units, locale),
            }
        }
    };
}

export const commonStackedVerticalBarChartOptions = (view: View, locale: string, options?: IChartOptions): Options => {
    return {
        ...commonVerticalBarChartOptions(view, locale),
        series: buildColumnChartSeries(view, locale, true, options?.accessibilityMode),
        legend: {
            ...commonLegendStyleOptions,
            enabled: true,
            layout: 'vertical'
        }
    };
}

export const commonLegendStyleOptions: LegendOptions = {
    itemHiddenStyle: {
        color: 'black',
    }
};

export const commonBarOptions: PlotBarOptions | PlotColumnOptions = {
    borderWidth: 0,
}
