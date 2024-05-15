import { Options } from 'highcharts';
import { View } from "../types/view";
import { getDataLabelShorteningFunction, getFormattedUnits, getScreenReaderFormatterCallbackFunction, getToolTipFormatterFunction } from './Utility/formatters';
import Translations from '../conversion/translations';

export const pieChartOptions = (view: View, locale: string): Options => ({
    accessibility: {
        point: {
            descriptionFormatter: getScreenReaderFormatterCallbackFunction(view, locale)
        }
    },
    chart: { type: 'pie' },
    title: { text: view.header[locale] },
    subtitle: { text: view.subheaderValues.map(sv => sv[locale]).join(' | ') },
    plotOptions: {
        pie: {
            dataLabels: {
                formatter: getDataLabelShorteningFunction(view.visualizationSettings.showDataPoints ?? false)
            }
        }
    },
    tooltip: {
        formatter: getToolTipFormatterFunction(view, locale)
    },
    series: view.series.map(s => ({
        animation: false,
        type: 'pie',
        name: s.rowNameGroup.map(n => n[locale]).join(', '),
        data: s.series.map((data, index) => ({
            y: data.value,
            name: view.columnNameGroups[index].map(n => n[locale]).join(', '),
            unit: getFormattedUnits(view.units, locale),
            custom: { preliminary: data.preliminary }
        }))
    })),
    credits: { text: `${Translations.source[locale]}: ${view.sources.map(s => s[locale]).join(', ')}` }
});