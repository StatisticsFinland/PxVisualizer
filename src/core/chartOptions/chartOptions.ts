import { LegendOptions, Options, PlotSeriesDataLabelsOptions, YAxisOptions } from 'highcharts';
import { View } from "../types/view";
import { getAxisLabelShorteningFunction, getFormattedUnits, getToolTipFormatterFunction, getScreenReaderFormatterCallbackFunction, getDataLabelFormatterFunction, getFormattedLastUpdatedText } from './Utility/formatters';
import { getXAxisOptions } from './Utility/timeIntervals';
import { getLinearAxisTickPositionerFunction } from './Utility/tickPositioners';
import { IChartOptions } from '../types/chartOptions';
import { buildBarChartSeries, buildColumnChartSeries } from './Utility/seriesDataBuilder';
import { Translations } from "../conversion/translations";

export const commonChartOptions = (view: View, locale: string, options?: IChartOptions): Options => {
    const showTitles: boolean = options?.showTitles ?? true;

    const sourceText = Translations.source[locale];
    let creditsText = `${sourceText}: ${view.sources.map(s => s[locale]).join(', ')}`;
    const hasLastUpdated = options?.showLastUpdated && view.lastUpdated;
    
    if (hasLastUpdated) {
        const lastUpdatedText = getFormattedLastUpdatedText(view.lastUpdated, locale);
        if (lastUpdatedText) {
            creditsText = `${lastUpdatedText}<br>${sourceText}: ${view.sources.map(s => s[locale]).join(', ')}`;
        }
    }

    return {
        chart: {
            spacingBottom: hasLastUpdated ? 50 : 30  // Conditional spacing based on lastUpdated presence
        },
        accessibility: {
            point: {
                descriptionFormatter: getScreenReaderFormatterCallbackFunction(view, locale)
            }
        },
        title: { text: showTitles ? view.header[locale] : undefined },
        subtitle: { text: view.subheaderValues.map(sv => sv[locale]).join(' | ') },
        credits: { enabled: false },
        caption: { text: creditsText },
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

export const commonHorizontalBarChartOptions = (view: View, locale: string, options?: IChartOptions): Options => {
    return {
        ...commonChartOptions(view, locale, options),
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
        ...commonHorizontalBarChartOptions(view, locale, options),
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

export const commonVerticalBarChartOptions = (view: View, locale: string, options?: IChartOptions): Options => {
    const result = {
        ...commonChartOptions(view, locale, options),
        chart: { type: 'column' },
        xAxis: getXAxisOptions(view, locale),
    };
    return result;
}

export const commonBasicVerticalBarChartOptions = (view: View, locale: string, options?: IChartOptions): Options => {
    return {
        ...commonVerticalBarChartOptions(view, locale, options),
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
        ...commonVerticalBarChartOptions(view, locale, options),
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
