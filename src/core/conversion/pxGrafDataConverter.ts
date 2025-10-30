import { Options } from 'highcharts';
import { EVisualizationType } from "../types/queryVisualizationResponse";
import { basicHorizontalBarChartOptions } from "../chartOptions/basicHorizontalBarchartOptions";
import { groupHorizontalBarChartOptions } from "../chartOptions/groupHorizontalBarChartOptions";
import { basicVerticalBarChartOptions } from "../chartOptions/basicVerticalBarChartOptions";
import { groupVerticalBarChartOptions } from "../chartOptions/groupVerticalBarChartOptions";
import { pieChartOptions } from "../chartOptions/pieChartOptions";
import { stackedVerticalBarChartOptions } from "../chartOptions/stackedVerticalBarChartOptions";
import { stackedHorizontalBarChartOptions } from "../chartOptions/stackedHorizontalBarChartOptions";
import { percentVerticalBarChartOptions } from "../chartOptions/percentVerticalBarChartOptions";
import { percentHorizontalBarChartOptions } from "../chartOptions/percentHorizontalBarChartOptions";
import { pyramidChartOptions } from "../chartOptions/pyramidChartOptions";
import { scatterPlotOptions } from "../chartOptions/scatterPlotOptions";
import { lineChartOptions } from "../chartOptions/lineChartOptions";
import { View } from "../types/view";
import { IChartOptions } from '../types/chartOptions';

export const convertPxGraphDataToChartOptions = (locale: string, view: View, options?: IChartOptions): Options => {

    switch (view.visualizationSettings.visualizationType) {
        case EVisualizationType.LineChart:
            return lineChartOptions(view, locale, options);
        case EVisualizationType.VerticalBarChart:
            return basicVerticalBarChartOptions(view, locale, options);
        case EVisualizationType.HorizontalBarChart:
            return basicHorizontalBarChartOptions(view, locale, options);
        case EVisualizationType.GroupVerticalBarChart:
            return groupVerticalBarChartOptions(view, locale, options);
        case EVisualizationType.GroupHorizontalBarChart:
            return groupHorizontalBarChartOptions(view, locale, options);
        case EVisualizationType.StackedVerticalBarChart:
            return stackedVerticalBarChartOptions(view, locale, options);
        case EVisualizationType.StackedHorizontalBarChart:
            return stackedHorizontalBarChartOptions(view, locale, options);
        case EVisualizationType.PercentVerticalBarChart:
            return percentVerticalBarChartOptions(view, locale, options);
        case EVisualizationType.PercentHorizontalBarChart:
            return percentHorizontalBarChartOptions(view, locale, options);
        case EVisualizationType.PieChart:
            return pieChartOptions(view, locale, options);
        case EVisualizationType.PyramidChart:
            return pyramidChartOptions(view, locale, options);
        case EVisualizationType.ScatterPlot:
            return scatterPlotOptions(view, locale, options);
        default:
            throw new Error('Unsupported chart type');
    }
}