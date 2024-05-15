import { XAxisOptions } from "highcharts";
import { View } from "../../types/view";
import { getOrdinalAxisTickPositionerFunction } from "./tickPositioners";
import { TMultiLanguageString } from "../../types/queryVisualizationResponse";

export const getOrdinalOptions: (view: View, locale: string) => XAxisOptions = (view, locale) => {
    
    return {
        type: 'category',
        categories: view.columnNameGroups.map(cng => cng.map(n => n[locale]).join(', ')),
        ordinal: true,
        tickPositioner: getOrdinalAxisTickPositionerFunction(
            Math.max(...view.series.map(s => s.series.length)),
            Math.max(...view.columnNameGroups.map(cng =>
                cng.reduce((acc: number, mls: TMultiLanguageString) => {
                    return (acc > 0 ? 1 : 0) +  acc + mls[locale].length
                }, 0))))
    };
};