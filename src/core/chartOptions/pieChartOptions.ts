import { Options } from 'highcharts';
import { View } from "../types/view";
import { getDataLabelShorteningFunction, getFormattedUnits } from './Utility/formatters';
import { commonChartOptions } from './chartOptions';
import { IChartOptions } from '../types/chartOptions';
import { buildPatternObject } from './Utility/patternFill';

export const pieChartOptions = (view: View, locale: string, options?: IChartOptions): Options => {
    return {
        ...commonChartOptions(view, locale),
        chart: { type: 'pie' },
        plotOptions: {
            pie: {
                dataLabels: {
                    formatter: getDataLabelShorteningFunction(view.visualizationSettings.showDataPoints ?? false)
                }
            }
        },
        series: view.series.map(s => ({
            animation: false,
            type: 'pie',
            name: s.rowNameGroup.map(n => n[locale]).join(', '),
            data: s.series.map((data, index) => ({
                y: data.value,
                name: view.columnNameGroups[index].map(n => n[locale]).join(', '),
                unit: getFormattedUnits(view.units, locale),
                ...(options?.accessibilityMode && buildPatternObject(index)),
                custom: { preliminary: data.preliminary, precision: data.precision }
            }))
        }))
    };
}