import { buildLineChartSeries, buildBarChartSeries, buildColumnChartSeries } from "./seriesDataBuilder";
import { simpleGroupHorizontalBarchartViewFixture } from "./fixtures/grouphorizontalbarchartViews";
import { simpleQuarterLinechartViewFixture } from "./fixtures/linechartViews";
import { simpleQuarterVerticalBarchartViewFixture } from "./fixtures/verticalbarchartViews";

describe('Highcharts series builder tests', () => {

    it('Should return valid series for line charts', () => {
        const expectedSeries = [
            {
                animation: false,
                data: [
                    {
                        custom: { "precision": 1, "preliminary": false },
                        name: "2020Q1",
                        "y": 0.6
                    },
                    {
                        custom: { "precision": 1, "preliminary": false },
                        name: "2020Q2",
                        y: 0.6
                    },
                    {
                        custom: { "precision": 1, "preliminary": false },
                        name: "2020Q3",
                        y: -0.3
                    },
                    {
                        custom: { "precision": 1, "preliminary": false },
                        name: "2020Q4",
                        y: 3.3
                    },
                    {
                        custom: { "precision": 1, "preliminary": false },
                        name: "2021Q1",
                        y: 1.5
                    },
                    {
                        custom: { "precision": 1, "preliminary": false },
                        name: "2021Q2",
                        y: 2.1
                    },
                    {
                        custom: { "precision": 1, "preliminary": false },
                        name: "2021Q3",
                        y: -0.4
                    },
                    {
                        custom: { "precision": 1, "preliminary": false },
                        name: "2021Q4",
                        y: 0.7
                    },
                    {
                        custom: { "precision": 1, "preliminary": false },
                        name: "2022Q1",
                        y: 3.3
                    },
                    {
                        custom: { "precision": 1, "preliminary": false },
                        name: "2022Q2",
                        y: 0
                    },
                    {
                        custom: { "precision": 1, "preliminary": false },
                        name: "2022Q3",
                        y: 1.9,
                    },
                    {
                        custom: { "precision": 1, "preliminary": false },
                        name: "2022Q4",
                        y: -3.4,
                    },
                    {
                        custom: { "precision": 1, "preliminary": false },
                        name: "2023Q1",
                        y: -0.5,
                    }
                ],
                index: 0,
                name: "",
                type: "line"
            }
        ];

        expect(buildLineChartSeries(simpleQuarterLinechartViewFixture, 'fi')).toEqual(expectedSeries);
    });

    it('Should return valid series for group horizontal bar charts with accessibility patterns', () => {
        const expectedSeries = [
            {
                animation: false,
                color: {
                    pattern: {
                        backgroundColor: "#1a56ec",
                        height: 10,
                        path: {
                            d: "M 0 5 L 10 5 M 5 0 L 5 10",
                            stroke: "white",
                            strokeWidth: 2,
                        },
                        width: 10,
                    }
                },
                data: [
                    {
                        custom: { "precision": 0, "preliminary": false },
                        name: "Vapaarahoitteinen",
                        "y": 11096
                    },
                    {
                        custom: { "precision": 0, "preliminary": false },
                        name: "ARA",
                        y: 4845
                    }
                ],
                index: 0,
                name: "2015Q1",
                type: "bar"
            },
            {
                animation: false,
                color: {
                    pattern: {
                        backgroundColor: "#f2644c",
                        height: 10,
                        path: {
                            d: "M 0 0 L 10 10 M 10 0 L 0 10",
                            stroke: "white",
                            strokeWidth: 2,
                        },
                        width: 10,
                    },
                },
                data: [
                    {
                        custom: { "precision": 0, "preliminary": false },
                        name: "Vapaarahoitteinen",
                        "y": 11625
                    },
                    {
                        custom: { "precision": 0, "preliminary": false },
                        name: "ARA",
                        y: 5174
                    }
                ],
                index: 1,
                name: "2015Q2",
                type: "bar"
            }
        ];

        expect(buildBarChartSeries(simpleGroupHorizontalBarchartViewFixture, 'fi', false, true)).toEqual(expectedSeries);
    });

    it('Should return valid series for vertical bar chart with accesibility patterns', () => {
        const expectedSeries = [
            {
                animation: false,
                color: {
                    pattern: {
                        backgroundColor: "#1a56ec",
                        height: 10,
                        path: {
                            d: "M 0 5 L 10 5 M 5 0 L 5 10",
                            stroke: "white",
                            strokeWidth: 2,
                        },
                        width: 10,
                    },
                },
                data: [
                    {
                        custom: { "precision": 1, "preliminary": false },
                        name: "2023Q1",
                        "y": 1.2
                    },
                    {
                        custom: { "precision": 1, "preliminary": false },
                        name: "2023Q2",
                        y: -0.8
                    },
                    {
                        custom: { "precision": 1, "preliminary": false },
                        name: "2023Q3",
                        y: 2.5
                    },
                    {
                        custom: { "precision": 1, "preliminary": false },
                        name: "2023Q4",
                        y: 0.3
                    }
                ],
                index: 0,
                name: "",
                type: "column"
            }
        ];

        expect(buildColumnChartSeries(simpleQuarterVerticalBarchartViewFixture, 'fi', false, true)).toEqual(expectedSeries);
    });
    
    it('Should return valid series for group horizontal bar charts without patterns', () => {
        const expectedSeries = [
            {
                animation: false,
                data: [
                    {
                        custom: { "precision": 0, "preliminary": false },
                        name: "Vapaarahoitteinen",
                        "y": 11096
                    },
                    {
                        custom: { "precision": 0, "preliminary": false },
                        name: "ARA",
                        y: 4845
                    }
                ],
                index: 0,
                name: "2015Q1",
                type: "bar"
            },
            {
                animation: false,
                data: [
                    {
                        custom: { "precision": 0, "preliminary": false },
                        name: "Vapaarahoitteinen",
                        "y": 11625
                    },
                    {
                        custom: { "precision": 0, "preliminary": false },
                        name: "ARA",
                        y: 5174
                    }
                ],
                index: 1,
                name: "2015Q2",
                type: "bar"
            }
        ];

        expect(buildBarChartSeries(simpleGroupHorizontalBarchartViewFixture, 'fi')).toEqual(expectedSeries);
    });

    it('Should return valid series for vertical bar chart without patterns', () => {
        const expectedSeries = [
            {
                animation: false,
                data: [
                    {
                        custom: { "precision": 1, "preliminary": false },
                        name: "2023Q1",
                        "y": 1.2
                    },
                    {
                        custom: { "precision": 1, "preliminary": false },
                        name: "2023Q2",
                        y: -0.8
                    },
                    {
                        custom: { "precision": 1, "preliminary": false },
                        name: "2023Q3",
                        y: 2.5
                    },
                    {
                        custom: { "precision": 1, "preliminary": false },
                        name: "2023Q4",
                        y: 0.3
                    }
                ],
                index: 0,
                name: "",
                type: "column"
            }
        ];

        expect(buildColumnChartSeries(simpleQuarterVerticalBarchartViewFixture, 'fi')).toEqual(expectedSeries);
    });
});