import * as Highcharts from "highcharts";
import { convertPxGraphDataToChartOptions } from "../conversion";
import { IQueryVisualizationResponse } from "../types";
import { defaultTheme } from "./themes";
import { TVariableSelections } from "../types/variableSelections";
import { extractSelectableVariableValues } from "../conversion/helpers";
import { convertPxGrafResponseToView } from "../conversion/viewUtils";
import { formatLocale } from "../chartOptions/Utility/formatters";
import { IChartOptions } from "../types/chartOptions";

// Only load Highcharts modules in a browser environment
const loadHighchartsModules = () => {
    if (typeof window !== 'undefined') {
        try {
            require('highcharts/modules/pattern-fill.js');
            require('highcharts/modules/accessibility.js');
            require('highcharts/modules/exporting.js');
            require('highcharts/modules/offline-exporting.js');
        } catch (e) {
            console.error('Error loading Highcharts modules:', e);
        }
    }
};

export const drawChart = (
    container: string,
    pxGraphData: IQueryVisualizationResponse,
    locale: string,
    selectedVariableCodes: TVariableSelections | null = null,
    options: IChartOptions) =>
{
    loadHighchartsModules();
    const validLocale = formatLocale(locale);
    Highcharts.setOptions(defaultTheme(validLocale, options?.fontFamily));
    const variableSelections = extractSelectableVariableValues(pxGraphData.selectableVariableCodes, pxGraphData.metaData, pxGraphData.visualizationSettings.defaultSelectableVariableCodes, selectedVariableCodes);
    const view = convertPxGrafResponseToView(pxGraphData, variableSelections);
    const highChartOptions = convertPxGraphDataToChartOptions(validLocale, view, options);
    return Highcharts.chart(container, highChartOptions);
}