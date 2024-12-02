import { buildHighchartSeries } from "./seriesDataBuilder";
import { simpleGroupHorizontalBarchartViewFixture } from "./testFixtures/grouphorizontalbarchartViews";
import { simpleQuarterLinechartViewFixture } from "./testFixtures/linechartViews";

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

        expect(buildHighchartSeries(simpleQuarterLinechartViewFixture, 'line', 'fi')).toEqual(expectedSeries);
    });

    it('Should return valid series for group horizontal bar charts', () => {
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

        expect(buildHighchartSeries(simpleGroupHorizontalBarchartViewFixture, 'bar', 'fi')).toEqual(expectedSeries);
    });
});