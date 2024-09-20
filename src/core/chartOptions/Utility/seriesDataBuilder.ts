import { View } from "../../types/view";

export type SeriesType = 'bar' | 'column' | 'line';

export const buildHighchartSeries = (view: View, type: SeriesType, locale: string, reverseOrder: boolean = false) =>
    view.series.map((s, sIndex) => ({
        index: reverseOrder ? view.series.length - 1 - sIndex : sIndex,
        animation: false,
        type: type,
        name: s.rowNameGroup.map(n => n[locale]).join(', '),
        data: s.series.map((dataPoint, dIndex) => {
            return {
                y: dataPoint.value,
                name: view.columnNameGroups[dIndex].map(n => n[locale]).join(', '),
                custom: { preliminary: dataPoint.preliminary }
            };
        })
    }));
