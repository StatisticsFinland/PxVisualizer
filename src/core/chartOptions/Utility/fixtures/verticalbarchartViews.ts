import { ETimeVariableInterval, EVisualizationType } from "../../../types";
import { View } from "../../../types/view";

export const simpleQuarterVerticalBarchartViewFixture: View = {
    header: {
        "fi": "Muutos edelliseen neljännekseen (indeksi 2015=100), Koko maa, Talotyypit yhteensä 2023Q1-2023Q4",
        "sv": "Kvartalsförändring (index 2015=100), Hela landet, Hustyp totalt 2023Q1-2023Q4",
        "en": "Quarterly change (index 2015=100), Whole country, Building types total 2023Q1-2023Q4"
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
                "fi": "2023Q1",
                "sv": "2023Q1",
                "en": "2023Q1"
            }
        ],
        [
            {
                "fi": "2023Q2",
                "sv": "2023Q2",
                "en": "2023Q2"
            }
        ],
        [
            {
                "fi": "2023Q3",
                "sv": "2023Q3",
                "en": "2023Q3"
            }
        ],
        [
            {
                "fi": "2023Q4",
                "sv": "2023Q4",
                "en": "2023Q4"
            }
        ]
    ],
    series: [
        {
            rowNameGroup: [],
            series: [
                {
                    "value": 1.2,
                    "precision": 1,
                    "preliminary": false
                },
                {
                    "value": -0.8,
                    "precision": 1,
                    "preliminary": false
                },
                {
                    "value": 2.5,
                    "precision": 1,
                    "preliminary": false
                },
                {
                    "value": 0.3,
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
        visualizationType: EVisualizationType.VerticalBarChart,
        timeVariableIntervals: ETimeVariableInterval.Quarter,
        timeSeriesStartingPoint: "2023-01-01T00:00:00",
        cutValueAxis: false,
        showLastLabel: true,
        showDataPoints: true
    },
    seriesType: 0
};
