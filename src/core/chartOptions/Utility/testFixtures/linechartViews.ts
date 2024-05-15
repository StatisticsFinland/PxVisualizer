import { ETimeVariableInterval, EVisualizationType } from "../../../types";
import { View } from "../../../types/view";

export const simpleQuarterLinechartViewFixture: View = {
    header: {
        "fi": "Muutos edelliseen neljännekseen (indeksi 2015=100), Koko maa, Talotyypit yhteensä 2020Q1-2023Q1",
        "sv": "Kvartalsförändring (index 2015=100), Hela landet, Hustyp totalt 2020Q1-2023Q1",
        "en": "Quarterly change (index 2015=100), Whole country, Building types total 2020Q1-2023Q1"
    },
    tableReferenceName: "table.px",
    subheaderValues: [],
    units: [
        {
            name: {
                "fi": "Muutos edelliseen neljännekseen (indeksi 2015=100)",
                "sv": "Kvartalsförändring (index 2015=100)",
                "en": "Quarterly change (index 2015=100)"
            },
            unit: {
                "fi": "%",
                "sv": "%",
                "en": "%"
            }
        }
    ],
    sources: [
        {
            "fi": "PxVisualizer-fi",
            "sv": "PxVisualizer-sv",
            "en": "PxVisualizer-en"
        }
    ],
    columnNameGroups: [
        [
            {
                "fi": "2020Q1",
                "sv": "2020Q1",
                "en": "2020Q1"
            }
        ],
        [
            {
                "fi": "2020Q2",
                "sv": "2020Q2",
                "en": "2020Q2"
            }
        ],
        [
            {
                "fi": "2020Q3",
                "sv": "2020Q3",
                "en": "2020Q3"
            }
        ],
        [
            {
                "fi": "2020Q4",
                "sv": "2020Q4",
                "en": "2020Q4"
            }
        ],
        [
            {
                "fi": "2021Q1",
                "sv": "2021Q1",
                "en": "2021Q1"
            }
        ],
        [
            {
                "fi": "2021Q2",
                "sv": "2021Q2",
                "en": "2021Q2"
            }
        ],
        [
            {
                "fi": "2021Q3",
                "sv": "2021Q3",
                "en": "2021Q3"
            }
        ],
        [
            {
                "fi": "2021Q4",
                "sv": "2021Q4",
                "en": "2021Q4"
            }
        ],
        [
            {
                "fi": "2022Q1",
                "sv": "2022Q1",
                "en": "2022Q1"
            }
        ],
        [
            {
                "fi": "2022Q2",
                "sv": "2022Q2",
                "en": "2022Q2"
            }
        ],
        [
            {
                "fi": "2022Q3",
                "sv": "2022Q3",
                "en": "2022Q3"
            }
        ],
        [
            {
                "fi": "2022Q4",
                "sv": "2022Q4",
                "en": "2022Q4"
            }
        ],
        [
            {
                "fi": "2023Q1",
                "sv": "2023Q1",
                "en": "2023Q1"
            }
        ]
    ],
    series: [
        {
            rowNameGroup: [],
            series: [
                {
                    "value": 0.6,
                    "precision": 1,
                    "preliminary": false
                },
                {
                    "value": 0.6,
                    "precision": 1,
                    "preliminary": false
                },
                {
                    "value": -0.3,
                    "precision": 1,
                    "preliminary": false
                },
                {
                    "value": 3.3,
                    "precision": 1,
                    "preliminary": false
                },
                {
                    "value": 1.5,
                    "precision": 1,
                    "preliminary": false
                },
                {
                    "value": 2.1,
                    "precision": 1,
                    "preliminary": false
                },
                {
                    "value": -0.4,
                    "precision": 1,
                    "preliminary": false
                },
                {
                    "value": 0.7,
                    "precision": 1,
                    "preliminary": false
                },
                {
                    "value": 3.3,
                    "precision": 1,
                    "preliminary": false
                },
                {
                    "value": 0,
                    "precision": 1,
                    "preliminary": false
                },
                {
                    "value": 1.9,
                    "precision": 1,
                    "preliminary": false
                },
                {
                    "value": -3.4,
                    "precision": 1,
                    "preliminary": false
                },
                {
                    "value": -0.5,
                    "precision": 1,
                    "preliminary": false
                }
            ]
        }
    ],
    colVarNames: [
        {
            "fi": "Vuosineljännes",
            "sv": "Kvartal",
            "en": "Quarter"
        }
    ],
    rowVarNames: [],
    selectableVarNames: [],
    visualizationSettings: {
        visualizationType: EVisualizationType.LineChart,
        timeVariableIntervals: ETimeVariableInterval.Quarter,
        timeSeriesStartingPoint: "2020-01-01T00:00:00",
        cutValueAxis: false,
        showLastLabel: false,
        showDataPoints: true
    },
    seriesType: 0
}