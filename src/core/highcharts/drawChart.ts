import * as Highcharts from "highcharts";
import 'highcharts/modules/pattern-fill';
import { convertPxGraphDataToChartOptions } from "../conversion";
import { IQueryVisualizationResponse } from "../types";
import { defaultTheme } from "./themes";
import highchartsAccessibility from "highcharts/modules/accessibility.js";
import highchartsExporting from 'highcharts/modules/exporting.js';
import highchartsOfflineExporting from 'highcharts/modules/offline-exporting.js';
import { TVariableSelections } from "../types/variableSelections";
import { extractSelectableVariableValues } from "../conversion/helpers";
import { convertPxGrafResponseToView } from "../conversion/viewUtils";
import { formatLocale } from "../chartOptions/Utility/formatters";
import { IChartOptions } from "../types/chartOptions";

export const drawChart = (
    container: string,
    pxGraphData: IQueryVisualizationResponse,
    locale: string,
    selectedVariableCodes: TVariableSelections | null = null,
    options: IChartOptions) =>
{
    const validLocale = formatLocale(locale);

    if (typeof Highcharts === 'object') {
        highchartsAccessibility(Highcharts);
        highchartsExporting(Highcharts);
        highchartsOfflineExporting(Highcharts);
    }
    Highcharts.setOptions(defaultTheme(validLocale));
    const variableSelections = extractSelectableVariableValues(pxGraphData.selectableVariableCodes, pxGraphData.metaData, pxGraphData.visualizationSettings.defaultSelectableVariableCodes, selectedVariableCodes);
    const view = convertPxGrafResponseToView(pxGraphData, variableSelections);
    const highChartOptions = convertPxGraphDataToChartOptions(validLocale, view, options);

    return Highcharts.chart(container, highChartOptions);
}