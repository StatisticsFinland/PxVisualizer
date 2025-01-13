import { EVisualizationType } from "../types";
import { generateFilename, getRelativePrecision } from "./exportingUtils";

describe('filenme tests', () => {
    it('should return expected filename', () => {
        const tableName = 'foobar.px';
        const filename = generateFilename(tableName);
        expect(filename.slice(0, 7)).toBe('foobar_');
    });
});

describe('precision tests', () => {
    it('should return precision of 1 for percentage horizontal bar chart', () => {
        const precision = getRelativePrecision(EVisualizationType.PercentHorizontalBarChart);
        expect(precision).toBe(1);
    })

    it('should return precision of 1 for percentage vertical bar chart', () => {
        const precision = getRelativePrecision(EVisualizationType.PercentVerticalBarChart);
        expect(precision).toBe(1);
    });

    it('should return null precision for every other visualization type', () => {
        const absoluteVisualizationTypes: EVisualizationType[] =
            [
                EVisualizationType.GroupHorizontalBarChart,
                EVisualizationType.GroupVerticalBarChart,
                EVisualizationType.HorizontalBarChart,
                EVisualizationType.LineChart,
                EVisualizationType.PieChart,
                EVisualizationType.PyramidChart,
                EVisualizationType.ScatterPlot,
                EVisualizationType.StackedHorizontalBarChart,
                EVisualizationType.StackedVerticalBarChart,
                EVisualizationType.Table,
                EVisualizationType.VerticalBarChart
            ];

        absoluteVisualizationTypes.forEach(visualizationType => {
            const precision = getRelativePrecision(visualizationType);
            expect(precision).toBeNull();
        });
    });
});
