import * as Highcharts from "highcharts";
import { convertJsonStat2ToPxVisualizerResponse } from "../conversion/jsonStat2Converter";
import { IJsonStat2Dataset } from "../types/jsonStat2";
import { EVisualizationType } from "../types/queryVisualizationResponse";
import { TVariableSelections } from "../types/variableSelections";
import { drawChart } from "./drawChart";
import { IChartOptions } from "../types/chartOptions";

export interface IJsonStat2ChartWrapperOptions {
    container: string;
    jsonStatData: IJsonStat2Dataset;
    visualizationType: EVisualizationType;
    locale?: string;
    selectedVariableCodes?: TVariableSelections;
    chartOptions?: IChartOptions;
}

/**
 * Creates a chart from JSON-Stat 2.0 dataset using PxVisualizer
 * @param options Configuration options for the chart wrapper
 * @returns Highcharts chart instance
 */
export const drawJsonStat2Chart = (options: IJsonStat2ChartWrapperOptions): Highcharts.Chart => {
    const {
        container,
        jsonStatData,
        visualizationType,
        locale = "fi",
        selectedVariableCodes,
        chartOptions = {}
    } = options;

    // Convert JSON-Stat 2 data to PxVisualizer format
    const pxVisualizerData = convertJsonStat2ToPxVisualizerResponse(
        jsonStatData,
        visualizationType,
        selectedVariableCodes
    );

    // Use existing drawChart function (convert undefined to null for compatibility)
    return drawChart(
        container,
        pxVisualizerData,
        locale,
        selectedVariableCodes || null,
        chartOptions
    );
};

/**
 * JsonStat2ChartWrapper class for creating charts from JSON-Stat 2.0 datasets
 */
export class JsonStat2ChartWrapper {
    private container: string;
    private jsonStatData: IJsonStat2Dataset;
    private visualizationType: EVisualizationType;
    private locale: string;
    private selectedVariableCodes: TVariableSelections | undefined;
    private chartOptions: IChartOptions;
    private chart: Highcharts.Chart | null = null;

    constructor(options: IJsonStat2ChartWrapperOptions) {
        this.container = options.container;
        this.jsonStatData = options.jsonStatData;
        this.visualizationType = options.visualizationType;
        this.locale = options.locale || "fi";
        this.selectedVariableCodes = options.selectedVariableCodes;
        this.chartOptions = options.chartOptions || {};
    }

    /**
     * Renders the chart
     */
    render(): Highcharts.Chart {
        this.chart = drawJsonStat2Chart({
            container: this.container,
            jsonStatData: this.jsonStatData,
            visualizationType: this.visualizationType,
            locale: this.locale,
            selectedVariableCodes: this.selectedVariableCodes,
            chartOptions: this.chartOptions
        });

        return this.chart;
    }

    /**
     * Updates the visualization type and re-renders the chart
     */
    updateVisualizationType(newVisualizationType: EVisualizationType): Highcharts.Chart {
        this.visualizationType = newVisualizationType;
        return this.render();
    }

    /**
     * Updates the selected variable codes and re-renders the chart
     */
    updateSelectedVariableCodes(newSelectedVariableCodes: TVariableSelections): Highcharts.Chart {
        this.selectedVariableCodes = newSelectedVariableCodes;
        return this.render();
    }

    /**
     * Updates the locale and re-renders the chart
     */
    updateLocale(newLocale: string): Highcharts.Chart {
        this.locale = newLocale;
        return this.render();
    }

    /**
     * Updates chart options and re-renders the chart
     */
    updateChartOptions(newChartOptions: IChartOptions): Highcharts.Chart {
        this.chartOptions = { ...this.chartOptions, ...newChartOptions };
        return this.render();
    }

    /**
     * Destroys the current chart
     */
    destroy(): void {
        if (this.chart) {
            this.chart.destroy();
            this.chart = null;
        }
    }

    /**
     * Gets the current chart instance
     */
    getChart(): Highcharts.Chart | null {
        return this.chart;
    }

    /**
     * Gets the converted PxVisualizer data
     */
    getPxVisualizerData() {
        return convertJsonStat2ToPxVisualizerResponse(
            this.jsonStatData,
            this.visualizationType,
            this.selectedVariableCodes
        );
    }
}