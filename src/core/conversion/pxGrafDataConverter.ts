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

export const convertPxGraphDataToChartOptions = (locale: string, view: View): Options => {
    switch (view.visualizationSettings.visualizationType) {
        case EVisualizationType.LineChart:
            return lineChartOptions(view, locale);
        case EVisualizationType.VerticalBarChart:
            return basicVerticalBarChartOptions(view, locale);
        case EVisualizationType.HorizontalBarChart:
            return basicHorizontalBarChartOptions(view, locale);
        case EVisualizationType.GroupVerticalBarChart:
            return groupVerticalBarChartOptions(view, locale);
        case EVisualizationType.GroupHorizontalBarChart:
            return groupHorizontalBarChartOptions(view, locale);
        case EVisualizationType.StackedVerticalBarChart:
            return stackedVerticalBarChartOptions(view, locale);
        case EVisualizationType.StackedHorizontalBarChart:
            return stackedHorizontalBarChartOptions(view, locale);
        case EVisualizationType.PercentVerticalBarChart:
            return percentVerticalBarChartOptions(view, locale);
        case EVisualizationType.PercentHorizontalBarChart:
            return percentHorizontalBarChartOptions(view, locale);
        case EVisualizationType.PieChart:
            return pieChartOptions(view, locale);
        case EVisualizationType.PyramidChart:
            return pyramidChartOptions(view, locale);
        case EVisualizationType.ScatterPlot:
            return scatterPlotOptions(view, locale);
        default:
            throw new Error('Unsupported chart type');
    }
}