import { EVariableType, EVisualizationType, IQueryVisualizationResponse } from "../../types"
import { ETimeVariableInterval } from "../../types/queryVisualizationResponse"
import { TVariableSelections } from "../../types/variableSelections"
import { ESeriesType, View } from "../../types/view";


export const PERCENT_VERTICAL_BAR_CHART: { pxGraphData: IQueryVisualizationResponse, selectedVariableCodes: TVariableSelections | undefined } = {
    pxGraphData: {
        tableReference: { name: "table.px", hierarchy: ["foo", "bar"] },
        data: [
            11779.0,
            10619.0,
            10641.0,
            13021.0,
            11231.0,
            10269.0,
            10272.0,
            9387.0,
            8951.0,
            8812.0,
            10080.0,
            9326.0,
            8907.0,
            8805.0,
            4806.0,
            4723.0,
            4671.0,
            5182.0,
            4977.0,
            4870.0,
            4849.0
        ],
        missingDataInfo: {},
        dataNotes: {},
        metaData: [
            {
                "code": "Alue",
                "name": {
                    "fi": "Alue",
                    "sv": "Område",
                    "en": "Region"
                },
                "note": null,
                "type": EVariableType.Geological,
                "values": [
                    {
                        "code": "091",
                        "name": {
                            "fi": "Helsinki",
                            "sv": "Helsingfors",
                            "en": "Helsinki"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    }
                ]
            },
            {
                "code": "Rahoitusmuoto",
                "name": {
                    "fi": "Rahoitusmuoto",
                    "sv": "Finansieringssätt",
                    "en": "Type of funding"
                },
                "note": null,
                "type": EVariableType.OtherClassificatory,
                "values": [
                    {
                        "code": "1",
                        "name": {
                            "fi": "Vapaarahoitteinen",
                            "sv": "Fri finansierad",
                            "en": "Non subsidised"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    }
                ]
            },
            {
                "code": "Tiedot",
                "name": {
                    "fi": "Tiedot",
                    "sv": "Uppgifter",
                    "en": "Information"
                },
                "note": null,
                "type": EVariableType.Content,
                "values": [
                    {
                        "code": "lkm",
                        "name": {
                            "fi": "Lukumäärä",
                            "sv": "Antal",
                            "en": "Number"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": {
                            "unit": {
                                "fi": "lukumäärä",
                                "sv": "antal",
                                "en": "number"
                            },
                            "source": {
                                "fi": "PxVisualizer-fi",
                                "sv": "PxVisualizer-sv",
                                "en": "PxVisualizer-en"
                            },
                            "numberOfDecimals": 0,
                            "lastUpdated": "2023-01-19T06:00:00Z"
                        }
                    }
                ]
            },
            {
                "code": "Huoneluku",
                "name": {
                    "fi": "Huoneluku",
                    "sv": "Antal rum",
                    "en": "Number of rooms"
                },
                "note": null,
                "type": EVariableType.Ordinal,
                "values": [
                    {
                        "code": "01",
                        "name": {
                            "fi": "Yksiöt",
                            "sv": "Enrumslägenhet",
                            "en": "One-room flat"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "02",
                        "name": {
                            "fi": "Kaksiot",
                            "sv": "Tvårumslägenhet",
                            "en": "Two-room flat"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "03",
                        "name": {
                            "fi": "Kolmiot+",
                            "sv": "Trerumslägenhet+",
                            "en": "Three-room flat+"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    }
                ]
            },
            {
                "code": "Vuosineljännes",
                "name": {
                    "fi": "Vuosineljännes",
                    "sv": "Kvartal",
                    "en": "Quarter"
                },
                "note": null,
                "type": EVariableType.Time,
                "values": [
                    {
                        "code": "2021Q2",
                        "name": {
                            "fi": "2021Q2",
                            "sv": "2021Q2",
                            "en": "2021Q2"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "2021Q3",
                        "name": {
                            "fi": "2021Q3",
                            "sv": "2021Q3",
                            "en": "2021Q3"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "2021Q4",
                        "name": {
                            "fi": "2021Q4",
                            "sv": "2021Q4",
                            "en": "2021Q4"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "2022Q1",
                        "name": {
                            "fi": "2022Q1",
                            "sv": "2022Q1",
                            "en": "2022Q1"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "2022Q2",
                        "name": {
                            "fi": "2022Q2",
                            "sv": "2022Q2",
                            "en": "2022Q2"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "2022Q3",
                        "name": {
                            "fi": "2022Q3",
                            "sv": "2022Q3",
                            "en": "2022Q3"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "2022Q4",
                        "name": {
                            "fi": "2022Q4",
                            "sv": "2022Q4",
                            "en": "2022Q4"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    }
                ]
            }
        ],
        "selectableVariableCodes": [],
        "rowVariableCodes": [
            "Huoneluku"
        ],
        "columnVariableCodes": [
            "Vuosineljännes"
        ],
        "header": {
            "fi": "Lukumäärä, Helsinki, Vapaarahoitteinen 2021Q2-2022Q4 muuttujana Huoneluku",
            "sv": "Antal, Helsingfors, Fri finansierad 2021Q2-2022Q4 efter Antal rum",
            "en": "Number, Helsinki, Non subsidised 2021Q2-2022Q4 by Number of rooms"
        },
        "visualizationSettings": {
            "visualizationType": EVisualizationType.PercentVerticalBarChart,
            "timeVariableIntervals": ETimeVariableInterval.Quarter,
            "timeSeriesStartingPoint": "2021-04-01T00:00:00Z",
            "cutValueAxis": false,
            "showLastLabel": false
        }
    },
    selectedVariableCodes: {}
}

export const PERCENT_VERTICAL_BAR_CHART_VIEW: View = {
    tableReferenceName: "table.px",
    header: {
        "fi": "Lukumäärä, Helsinki, Vapaarahoitteinen 2021Q2-2022Q4 muuttujana Huoneluku",
        "sv": "Antal, Helsingfors, Fri finansierad 2021Q2-2022Q4 efter Antal rum",
        "en": "Number, Helsinki, Non subsidised 2021Q2-2022Q4 by Number of rooms"
    },
    subheaderValues: [],
    units: [{
        name: {
            "fi": "Lukumäärä",
            "sv": "Antal",
            "en": "Number"
        },
        unit: {
            "fi": "lukumäärä",
            "sv": "antal",
            "en": "number"
        },
    }],
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
                "en": "2021Q2",
                "fi": "2021Q2",
                "sv": "2021Q2",
            },
        ],
        [
            {
                "en": "2021Q3",
                "fi": "2021Q3",
                "sv": "2021Q3",
            },
        ],
        [
            {

                "en": "2021Q4",
                "fi": "2021Q4",
                "sv": "2021Q4",
            },
        ],
        [
            {
                "en": "2022Q1",
                "fi": "2022Q1",
                "sv": "2022Q1",
            },
        ],
        [
            {
                "en": "2022Q2",
                "fi": "2022Q2",
                "sv": "2022Q2",
            },
        ],
        [
            {

                "en": "2022Q3",
                "fi": "2022Q3",
                "sv": "2022Q3",
            },
        ],
        [
            {

                "en": "2022Q4",
                "fi": "2022Q4",
                "sv": "2022Q4",
            },
        ]
    ],
    series: [
        {
            "rowNameGroup": [
                {
                    "fi": "Yksiöt",
                    "sv": "Enrumslägenhet",
                    "en": "One-room flat"
                },
            ],
            "series": [
                { value: 11779, preliminary: false, precision: 0},
                { value: 10619, preliminary: false, precision: 0},
                { value: 10641, preliminary: false, precision: 0},
                { value: 13021, preliminary: false, precision: 0},
                { value: 11231, preliminary: false, precision: 0},
                { value: 10269, preliminary: false, precision: 0},
                { value: 10272, preliminary: false, precision: 0}
            ]
        },
        {
            "rowNameGroup": [
                {
                    "fi": "Kaksiot",
                    "sv": "Tvårumslägenhet",
                    "en": "Two-room flat"
                },
            ],
            "series": [
                { value: 9387, preliminary: false, precision: 0 },
                { value: 8951, preliminary: false, precision: 0 },
                { value: 8812, preliminary: false, precision: 0 },
                { value: 10080, preliminary: false, precision: 0 },
                { value: 9326, preliminary: false, precision: 0 },
                { value: 8907, preliminary: false, precision: 0 },
                { value: 8805, preliminary: false, precision: 0 }
            ]
        },
        {
            "rowNameGroup": [
                {
                    "fi": "Kolmiot+",
                    "sv": "Trerumslägenhet+",
                    "en": "Three-room flat+"
                },
            ],
            "series": [
                { value: 4806, preliminary: false, precision: 0},
                { value: 4723, preliminary: false, precision: 0},
                { value: 4671, preliminary: false, precision: 0},
                { value: 5182, preliminary: false, precision: 0},
                { value: 4977, preliminary: false, precision: 0},
                { value: 4870, preliminary: false, precision: 0},
                { value: 4849, preliminary: false, precision: 0 }
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
    rowVarNames: [
        {
            "fi": "Huoneluku",
            "sv": "Antal rum",
            "en": "Number of rooms"
        }
    ],
    selectableVarNames: [],
    visualizationSettings: {
        cutValueAxis: false,
        showLastLabel: false,
        timeSeriesStartingPoint: "2021-04-01T00:00:00Z",
        timeVariableIntervals: ETimeVariableInterval.Quarter,
        visualizationType: EVisualizationType.PercentVerticalBarChart,
    },
    seriesType: ESeriesType.Time
};

export const PERCENT_VERTICAL_BAR_CHART_WITH_SELECTABLES: { pxGraphData: IQueryVisualizationResponse, selectedVariableCodes: TVariableSelections } = {
    pxGraphData: {
        "tableReference": { name: "table.px", hierarchy: ["foo", "bar"] },
        "data": [
            10641.0,
            4629.0,
            5767.0,
            3236.0,
            3265.0,
            1169.0,
            1491.0,
            1003.0,
            8812.0,
            3488.0,
            4614.0,
            2801.0,
            5278.0,
            1519.0,
            1688.0,
            1680.0,
            4671.0,
            1088.0,
            1510.0,
            930.0,
            6297.0,
            1149.0,
            1131.0,
            874.0,
            13021.0,
            5534.0,
            6812.0,
            3997.0,
            3810.0,
            1292.0,
            1689.0,
            1097.0,
            10080.0,
            4267.0,
            5322.0,
            3538.0,
            6176.0,
            1782.0,
            1928.0,
            1915.0,
            5182.0,
            1245.0,
            1628.0,
            1108.0,
            6937.0,
            1297.0,
            1270.0,
            1019.0,
            11231.0,
            4437.0,
            5619.0,
            3283.0,
            3552.0,
            1149.0,
            1555.0,
            1013.0,
            9326.0,
            3666.0,
            4874.0,
            2974.0,
            5749.0,
            1642.0,
            1712.0,
            1692.0,
            4977.0,
            1094.0,
            1534.0,
            969.0,
            6609.0,
            1187.0,
            1146.0,
            900.0,
            10269.0,
            4014.0,
            5156.0,
            2750.0,
            3249.0,
            1107.0,
            1476.0,
            949.0,
            8907.0,
            3329.0,
            4595.0,
            2345.0,
            5280.0,
            1554.0,
            1617.0,
            1495.0,
            4870.0,
            1037.0,
            1499.0,
            772.0,
            6188.0,
            1136.0,
            1093.0,
            810.0,
            10272.0,
            4195.0,
            5258.0,
            2944.0,
            3323.0,
            1161.0,
            1528.0,
            1007.0,
            8805.0,
            3414.0,
            4582.0,
            2436.0,
            5265.0,
            1557.0,
            1635.0,
            1584.0,
            4849.0,
            1032.0,
            1474.0,
            780.0,
            6068.0,
            1108.0,
            1060.0,
            801.0
        ],
        missingDataInfo: {},
        "dataNotes": {},
        "metaData": [
            {
                "code": "Tiedot",
                "name": {
                    "fi": "Tiedot",
                    "sv": "Uppgifter",
                    "en": "Information"
                },
                "note": null,
                "type": EVariableType.Content,
                "values": [
                    {
                        "code": "lkm",
                        "name": {
                            "fi": "Lukumäärä",
                            "sv": "Antal",
                            "en": "Number"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": {
                            "unit": {
                                "fi": "lukumäärä",
                                "sv": "antal",
                                "en": "number"
                            },
                            "source": {
                                "fi": "PxVisualizer-fi",
                                "sv": "PxVisualizer-sv",
                                "en": "PxVisualizer-en"
                            },
                            "numberOfDecimals": 0,
                            "lastUpdated": "2023-01-19T06:00:00Z"
                        }
                    }
                ]
            },
            {
                "code": "Vuosineljännes",
                "name": {
                    "fi": "Vuosineljännes",
                    "sv": "Kvartal",
                    "en": "Quarter"
                },
                "note": null,
                "type": EVariableType.Time,
                "values": [
                    {
                        "code": "2021Q4",
                        "name": {
                            "fi": "2021Q4",
                            "sv": "2021Q4",
                            "en": "2021Q4"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "2022Q1",
                        "name": {
                            "fi": "2022Q1",
                            "sv": "2022Q1",
                            "en": "2022Q1"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "2022Q2",
                        "name": {
                            "fi": "2022Q2",
                            "sv": "2022Q2",
                            "en": "2022Q2"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "2022Q3",
                        "name": {
                            "fi": "2022Q3",
                            "sv": "2022Q3",
                            "en": "2022Q3"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "2022Q4",
                        "name": {
                            "fi": "2022Q4",
                            "sv": "2022Q4",
                            "en": "2022Q4"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    }
                ]
            },
            {
                "code": "Huoneluku",
                "name": {
                    "fi": "Huoneluku",
                    "sv": "Antal rum",
                    "en": "Number of rooms"
                },
                "note": null,
                "type": EVariableType.Ordinal,
                "values": [
                    {
                        "code": "01",
                        "name": {
                            "fi": "Yksiöt",
                            "sv": "Enrumslägenhet",
                            "en": "One-room flat"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "02",
                        "name": {
                            "fi": "Kaksiot",
                            "sv": "Tvårumslägenhet",
                            "en": "Two-room flat"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "03",
                        "name": {
                            "fi": "Kolmiot+",
                            "sv": "Trerumslägenhet+",
                            "en": "Three-room flat+"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    }
                ]
            },
            {
                "code": "Rahoitusmuoto",
                "name": {
                    "fi": "Rahoitusmuoto",
                    "sv": "Finansieringssätt",
                    "en": "Type of funding"
                },
                "note": null,
                "type": EVariableType.OtherClassificatory,
                "values": [
                    {
                        "code": "1",
                        "name": {
                            "fi": "Vapaarahoitteinen",
                            "sv": "Fri finansierad",
                            "en": "Non subsidised"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "0",
                        "name": {
                            "fi": "ARA",
                            "sv": "ARA",
                            "en": "Government subsidised"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    }
                ]
            },
            {
                "code": "Alue",
                "name": {
                    "fi": "Alue",
                    "sv": "Område",
                    "en": "Region"
                },
                "note": null,
                "type": EVariableType.Geological,
                "values": [
                    {
                        "code": "091",
                        "name": {
                            "fi": "Helsinki",
                            "sv": "Helsingfors",
                            "en": "Helsinki"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "853",
                        "name": {
                            "fi": "Turku",
                            "sv": "Åbo",
                            "en": "Turku"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "837",
                        "name": {
                            "fi": "Tampere",
                            "sv": "Tammerfors",
                            "en": "Tampere"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "564",
                        "name": {
                            "fi": "Oulu",
                            "sv": "Uleåborg",
                            "en": "Oulu"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    }
                ]
            }
        ],
        "selectableVariableCodes": [
            "Vuosineljännes",
            "Huoneluku"
        ],
        "rowVariableCodes": [
            "Rahoitusmuoto"
        ],
        "columnVariableCodes": [
            "Alue"
        ],
        "header": {
            "fi": "Lukumäärä 2021Q4 muuttujina Alue, Huoneluku, Rahoitusmuoto",
            "sv": "Antal 2021Q4 efter Område, Antal rum, Finansieringssätt",
            "en": "Number 2021Q4 by Region, Number of rooms, Type of funding"
        },
        "visualizationSettings": {
            "visualizationType": EVisualizationType.PercentVerticalBarChart,
            "defaultSelectableVariableCodes": {
                "Vuosineljännes": [
                    "2022Q1"
                ],
                "Huoneluku": [
                    "01"
                ]
            },
            "timeVariableIntervals": ETimeVariableInterval.Quarter,
            "timeSeriesStartingPoint": "2021-10-01T00:00:00Z",
            "cutValueAxis": false,
            "sorting": "1"
        }
    },
    selectedVariableCodes: { 'Vuosineljännes': ['2022Q1'], 'Huoneluku': ['01'] }
}

export const PERCENT_VERTICAL_BAR_CHART_WITH_SELECTABLES_VIEW: View = {
    tableReferenceName: "table.px",
    header: {
        "fi": "Lukumäärä 2021Q4 muuttujina Alue, Huoneluku, Rahoitusmuoto",
        "sv": "Antal 2021Q4 efter Område, Antal rum, Finansieringssätt",
        "en": "Number 2021Q4 by Region, Number of rooms, Type of funding"
    },
    subheaderValues: [
        {
            "fi": "2022Q1",
            "sv": "2022Q1",
            "en": "2022Q1"
        },
        {
            "fi": "Yksiöt",
            "sv": "Enrumslägenhet",
            "en": "One-room flat"
        },
    ],
    units: [
        {
            "name": {
                "en": "Number",
                "fi": "Lukumäärä",
                "sv": "Antal",
            },
            "unit": {
                "en": "number",
                "fi": "lukumäärä",
                "sv": "antal",
            },
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
                "fi": "Turku",
                "sv": "Åbo",
                "en": "Turku"
            },
        ],
        [
            {
                "fi": "Tampere",
                "sv": "Tammerfors",
                "en": "Tampere"
            },
        ],
        [
            {
                "fi": "Oulu",
                "sv": "Uleåborg",
                "en": "Oulu"
            },
        ],
        [
            {
                "fi": "Helsinki",
                "sv": "Helsingfors",
                "en": "Helsinki"
            },
        ],
    ],
    series: [
        {
            rowNameGroup: [
                {
                    "fi": "Vapaarahoitteinen",
                    "sv": "Fri finansierad",
                    "en": "Non subsidised"
                },
            ],
            series: [
                { value: 5534, preliminary: false, precision: 0},
                { value: 6812, preliminary: false, precision: 0},
                { value: 3997, preliminary: false, precision: 0},
                { value: 13021, preliminary: false, precision: 0 }
            ]
        },
        {
            rowNameGroup: [
                {
                    "fi": "ARA",
                    "sv": "ARA",
                    "en": "Government subsidised"
                },
            ],
            series: [
                { value: 1292, preliminary: false, precision: 0},
                { value: 1689, preliminary: false, precision: 0},
                { value: 1097, preliminary: false, precision: 0},
                { value: 3810, preliminary: false, precision: 0 }
            ]
        },
    ],
    colVarNames: [
        {
            "fi": "Alue",
            "sv": "Område",
            "en": "Region"
        }
    ],
    rowVarNames: [
        {
            "fi": "Rahoitusmuoto",
            "sv": "Finansieringssätt",
            "en": "Type of funding"
        },
    ],

    selectableVarNames: [
        {
            "fi": "Vuosineljännes",
            "sv": "Kvartal",
            "en": "Quarter"
        },
        {
            "fi": "Huoneluku",
            "sv": "Antal rum",
            "en": "Number of rooms"
        }],
    visualizationSettings: {
        cutValueAxis: false,
        sorting: "1",
        defaultSelectableVariableCodes: {
            "Huoneluku": [
                "01",
            ],
            "Vuosineljännes": [
                "2022Q1",
            ],
        },
        visualizationType: EVisualizationType.PercentVerticalBarChart,
        timeVariableIntervals: ETimeVariableInterval.Quarter,
        timeSeriesStartingPoint: "2021-10-01T00:00:00Z"
    },
    seriesType: ESeriesType.Nominal
};

export const PERCENT_VERTICAL_BAR_CHART_PIVOTED_WITH_SELECTABLES: { pxGraphData: IQueryVisualizationResponse, selectedVariableCodes: TVariableSelections } = {
    pxGraphData: {
        "tableReference": { name: "table.px", hierarchy: ["foo", "bar"] },
        "data": [
            10272.0,
            4195.0,
            267.0,
            5258.0,
            8805.0,
            3414.0,
            243.0,
            4582.0,
            4849.0,
            1032.0,
            86.0,
            1474.0,
            3323.0,
            1161.0,
            134.0,
            1528.0,
            5265.0,
            1557.0,
            148.0,
            1635.0,
            6068.0,
            1108.0,
            110.0,
            1060.0
        ],
        missingDataInfo: {},
        "dataNotes": {},
        "metaData": [
            {
                "code": "Vuosineljännes",
                "name": {
                    "fi": "Vuosineljännes",
                    "sv": "Kvartal",
                    "en": "Quarter"
                },
                "note": null,
                "type": EVariableType.Time,
                "values": [
                    {
                        "code": "2022Q4",
                        "name": {
                            "fi": "2022Q4",
                            "sv": "2022Q4",
                            "en": "2022Q4"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    }
                ]
            },
            {
                "code": "Tiedot",
                "name": {
                    "fi": "Tiedot",
                    "sv": "Uppgifter",
                    "en": "Information"
                },
                "note": null,
                "type": EVariableType.Content,
                "values": [
                    {
                        "code": "lkm",
                        "name": {
                            "fi": "Lukumäärä",
                            "sv": "Antal",
                            "en": "Number"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": {
                            "unit": {
                                "fi": "lukumäärä",
                                "sv": "antal",
                                "en": "number"
                            },
                            "source": {
                                "fi": "PxVisualizer-fi",
                                "sv": "PxVisualizer-sv",
                                "en": "PxVisualizer-en"
                            },
                            "numberOfDecimals": 0,
                            "lastUpdated": "2023-01-19T06:00:00Z"
                        }
                    }
                ]
            },
            {
                "code": "Rahoitusmuoto",
                "name": {
                    "fi": "Rahoitusmuoto",
                    "sv": "Finansieringssätt",
                    "en": "Type of funding"
                },
                "note": null,
                "type": EVariableType.OtherClassificatory,
                "values": [
                    {
                        "code": "1",
                        "name": {
                            "fi": "Vapaarahoitteinen",
                            "sv": "Fri finansierad",
                            "en": "Non subsidised"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "0",
                        "name": {
                            "fi": "ARA",
                            "sv": "ARA",
                            "en": "Government subsidised"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    }
                ]
            },
            {
                "code": "Huoneluku",
                "name": {
                    "fi": "Huoneluku",
                    "sv": "Antal rum",
                    "en": "Number of rooms"
                },
                "note": null,
                "type": EVariableType.Ordinal,
                "values": [
                    {
                        "code": "01",
                        "name": {
                            "fi": "Yksiöt",
                            "sv": "Enrumslägenhet",
                            "en": "One-room flat"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "02",
                        "name": {
                            "fi": "Kaksiot",
                            "sv": "Tvårumslägenhet",
                            "en": "Two-room flat"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "03",
                        "name": {
                            "fi": "Kolmiot+",
                            "sv": "Trerumslägenhet+",
                            "en": "Three-room flat+"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    }
                ]
            },
            {
                "code": "Alue",
                "name": {
                    "fi": "Alue",
                    "sv": "Område",
                    "en": "Region"
                },
                "note": null,
                "type": EVariableType.Geological,
                "values": [
                    {
                        "code": "091",
                        "name": {
                            "fi": "Helsinki",
                            "sv": "Helsingfors",
                            "en": "Helsinki"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "853",
                        "name": {
                            "fi": "Turku",
                            "sv": "Åbo",
                            "en": "Turku"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "694",
                        "name": {
                            "fi": "Riihimäki",
                            "sv": "Riihimäki",
                            "en": "Riihimäki"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "837",
                        "name": {
                            "fi": "Tampere",
                            "sv": "Tammerfors",
                            "en": "Tampere"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    }
                ]
            }
        ],
        "selectableVariableCodes": [
            "Rahoitusmuoto"
        ],
        "rowVariableCodes": [
            "Huoneluku"
        ],
        "columnVariableCodes": [
            "Alue"
        ],
        "header": {
            "fi": "Lukumäärä 2022Q4 muuttujina Alue, Huoneluku, Rahoitusmuoto",
            "sv": "Antal 2022Q4 efter Område, Antal rum, Finansieringssätt",
            "en": "Number 2022Q4 by Region, Number of rooms, Type of funding"
        },
        "visualizationSettings": {
            "visualizationType": EVisualizationType.PercentVerticalBarChart,
            "timeVariableIntervals": ETimeVariableInterval.Quarter,
            "timeSeriesStartingPoint": "2022-10-01T00:00:00Z",
            "cutValueAxis": false,
            "showLastLabel": false
        }
    },
    selectedVariableCodes: { 'Rahoitusmuoto': ['1'] }
};

export const PERCENT_VERTICAL_BAR_CHART_PIVOTED_WITH_SELECTABLES_VIEW: View = {
    tableReferenceName: "table.px",
    header: {
        "fi": "Lukumäärä 2022Q4 muuttujina Alue, Huoneluku, Rahoitusmuoto",
        "sv": "Antal 2022Q4 efter Område, Antal rum, Finansieringssätt",
        "en": "Number 2022Q4 by Region, Number of rooms, Type of funding"
    },
    subheaderValues: [
        {
            "fi": "Vapaarahoitteinen",
            "sv": "Fri finansierad",
            "en": "Non subsidised"
        }
    ],
    units: [{
        name: {
            "fi": "Lukumäärä",
            "sv": "Antal",
            "en": "Number"
        },
        unit: {
            "fi": "lukumäärä",
            "sv": "antal",
            "en": "number"
        },
    }],
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
                "fi": "Helsinki",
                "sv": "Helsingfors",
                "en": "Helsinki"
            },
        ],
        [
            {
                "fi": "Turku",
                "sv": "Åbo",
                "en": "Turku"
            },
        ],
        [
            {
                "fi": "Riihimäki",
                "sv": "Riihimäki",
                "en": "Riihimäki"
            },
        ],
        [
            {
                "fi": "Tampere",
                "sv": "Tammerfors",
                "en": "Tampere"
            },
        ]
    ],
    series: [
        {
            "rowNameGroup": [
                {
                    "fi": "Yksiöt",
                    "sv": "Enrumslägenhet",
                    "en": "One-room flat"
                },
            ],
            "series": [
                { value: 10272,preliminary: false, precision: 0},
                { value: 4195, preliminary: false, precision: 0},
                { value: 267, preliminary: false, precision: 0},
                { value: 5258, preliminary: false, precision: 0 }
            ]
        },
        {
            "rowNameGroup": [
                {
                    "fi": "Kaksiot",
                    "sv": "Tvårumslägenhet",
                    "en": "Two-room flat"
                },
            ],
            "series": [
                { value: 8805, preliminary: false, precision: 0},
                { value: 3414, preliminary: false, precision: 0},
                { value: 243,  preliminary: false, precision: 0},
                { value: 4582, preliminary: false, precision: 0 }
            ]
        },
        {
            "rowNameGroup": [
                {
                    "fi": "Kolmiot+",
                    "sv": "Trerumslägenhet+",
                    "en": "Three-room flat+"
                },
            ],
            "series": [
                { value: 4849, preliminary: false, precision: 0},
                { value: 1032, preliminary: false, precision: 0},
                { value: 86, preliminary: false, precision: 0},
                { value: 1474, preliminary: false, precision: 0 }
            ]
        }
    ],
    colVarNames: [
        {
            "fi": "Alue",
            "sv": "Område",
            "en": "Region"
        }
    ],
    rowVarNames: [
        {
            "fi": "Huoneluku",
            "sv": "Antal rum",
            "en": "Number of rooms"
        }
    ],
    selectableVarNames: [
        {
            "fi": "Rahoitusmuoto",
            "sv": "Finansieringssätt",
            "en": "Type of funding"
        }
    ],
    visualizationSettings: {
        cutValueAxis: false,
        showLastLabel: false,
        timeSeriesStartingPoint: "2022-10-01T00:00:00Z",
        timeVariableIntervals: ETimeVariableInterval.Quarter,
        visualizationType: EVisualizationType.PercentVerticalBarChart,
    },
    seriesType: ESeriesType.Nominal
};