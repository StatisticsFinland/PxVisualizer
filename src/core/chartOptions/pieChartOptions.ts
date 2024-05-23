import { Options } from 'highcharts';
import { View } from "../types/view";
import { getDataLabelShorteningFunction, getFormattedUnits } from './Utility/formatters';
import { CommonChartOptions } from './chartOptions';

export const pieChartOptions = (view: View, locale: string): Options => {
    return new PieChartOptions(view, locale).getOptions();
};

class PieChartOptions extends CommonChartOptions {
    getOptions(): Options {
        const baseOptions = super.getOptions();
        return {
            ...baseOptions,
            chart: { type: 'pie' },
            plotOptions: {
                pie: {
                    dataLabels: {
                        formatter: getDataLabelShorteningFunction(this.view.visualizationSettings.showDataPoints ?? false)
                    }
                }
            },
            series: this.view.series.map(s => ({
                animation: false,
                type: 'pie',
                name: s.rowNameGroup.map(n => n[this.locale]).join(', '),
                data: s.series.map((data, index) => ({
                    y: data.value,
                    name: this.view.columnNameGroups[index].map(n => n[this.locale]).join(', '),
                    unit: getFormattedUnits(this.view.units, this.locale),
                    custom: { preliminary: data.preliminary }
                }))
            }))
        };
    }
}