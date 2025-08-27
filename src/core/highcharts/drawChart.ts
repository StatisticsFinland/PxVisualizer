import * as Highcharts from "highcharts";
import 'highcharts/modules/pattern-fill.js';
import 'highcharts/modules/accessibility.js';
import 'highcharts/modules/exporting.js';
import 'highcharts/modules/offline-exporting.js';
import { convertPxGraphDataToChartOptions } from "../conversion";
import { IQueryVisualizationResponse } from "../types";
import { defaultTheme } from "./themes";
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
    Highcharts.setOptions(defaultTheme(validLocale));
    const variableSelections = extractSelectableVariableValues(pxGraphData.selectableVariableCodes, pxGraphData.metaData, pxGraphData.visualizationSettings.defaultSelectableVariableCodes, selectedVariableCodes);
    const view = convertPxGrafResponseToView(pxGraphData, variableSelections);
    const highChartOptions = convertPxGraphDataToChartOptions(validLocale, view, options);

    return Highcharts.chart(container, highChartOptions);
}