import { EVariableType, EVisualizationType, IQueryVisualizationResponse } from "../../types"
import { ETimeVariableInterval } from "../../types/queryVisualizationResponse"
import { TVariableSelections } from "../../types/variableSelections"
import { ESeriesType, View } from "../../types/view";

export const PERCENT_HORIZONTAL_BAR_CHART: { pxGraphData: IQueryVisualizationResponse, selectedVariableCodes: TVariableSelections } = {
    pxGraphData: {
        "tableReference": { name: "table.px", hierarchy: ["foo", "bar"] },
        "data": [
            10272.0,
            4195.0,
            5258.0,
            2944.0,
            3323.0,
            1161.0,
            1528.0,
            1007.0
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
        "selectableVariableCodes": [],
        "rowVariableCodes": [
            "Rahoitusmuoto"
        ],
        "columnVariableCodes": [
            "Alue"
        ],
        "header": {
            "fi": "Lukumäärä, Yksiöt 2022Q4 muuttujina Alue, Rahoitusmuoto",
            "sv": "Antal, Enrumslägenhet 2022Q4 efter Område, Finansieringssätt",
            "en": "Number, One-room flat 2022Q4 by Region, Type of funding"
        },
        "visualizationSettings": {
            "visualizationType": EVisualizationType.PercentHorizontalBarChart,
            "timeVariableIntervals": ETimeVariableInterval.Quarter,
            "timeSeriesStartingPoint": "2022-10-01T00:00:00Z",
            "cutValueAxis": false,
            "sorting": "1"
        }
    },
    selectedVariableCodes: {}
}

export const PERCENT_HORIZONTAL_BAR_CHART_VIEW: View = {
    tableReferenceName: "table.px",
    header: {
        "fi": "Lukumäärä, Yksiöt 2022Q4 muuttujina Alue, Rahoitusmuoto",
        "sv": "Antal, Enrumslägenhet 2022Q4 efter Område, Finansieringssätt",
        "en": "Number, One-room flat 2022Q4 by Region, Type of funding"
    },
    lastUpdated: "2023-01-19T06:00:00Z",
    subheaderValues: [],
    units: [
        {
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
                "fi": "Helsinki",
                "sv": "Helsingfors",
                "en": "Helsinki"
            },
        ],
        [
            {
                "fi": "Oulu",
                "sv": "Uleåborg",
                "en": "Oulu"
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
                {value: 4195, preliminary: false, precision: 0},
                { value: 5258, preliminary: false, precision: 0}, 
                { value: 10272, preliminary: false, precision: 0}, 
                { value: 2944, preliminary: false, precision: 0} 
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
                { value: 1161, preliminary: false, precision: 0},
                { value: 1528, preliminary: false, precision: 0},
                { value: 3323, preliminary: false, precision: 0},
                { value: 1007, preliminary: false, precision: 0 }
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
        }
    ],
    selectableVarNames: [],
    visualizationSettings: {
        visualizationType: EVisualizationType.PercentHorizontalBarChart,
        cutValueAxis: false,
        sorting: "1",
        timeSeriesStartingPoint: "2022-10-01T00:00:00Z",
        timeVariableIntervals: ETimeVariableInterval.Quarter,
    },
    seriesType: ESeriesType.Nominal
};

export const PERCENT_HORIZONTAL_BAR_CHART_WITH_SELECTABLES: { pxGraphData: IQueryVisualizationResponse, selectedVariableCodes: TVariableSelections } = {
    pxGraphData: {
        "tableReference": { name: "table.px", hierarchy: ["foo", "bar"] },
        "data": [
            10272.0,
            4195.0,
            267.0,
            5258.0,
            3323.0,
            1161.0,
            134.0,
            1528.0,
            8805.0,
            3414.0,
            243.0,
            4582.0,
            5265.0,
            1557.0,
            148.0,
            1635.0,
            4849.0,
            1032.0,
            86.0,
            1474.0,
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
            "Huoneluku"
        ],
        "rowVariableCodes": [
            "Rahoitusmuoto"
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
            "visualizationType": EVisualizationType.PercentHorizontalBarChart,
            "defaultSelectableVariableCodes": {
                "Huoneluku": [
                    "03"
                ]
            },
            "timeVariableIntervals": ETimeVariableInterval.Quarter,
            "timeSeriesStartingPoint": "2022-10-01T00:00:00Z",
            "cutValueAxis": false,
            "sorting": "1"
        }
    },
    selectedVariableCodes: { 'Huoneluku': ['02'] }
};

export const PERCENT_HORIZONTAL_BAR_CHART_WITH_SELECTABLES_VIEW: View = {
    tableReferenceName: "table.px",
    header: {
        "fi": "Lukumäärä 2022Q4 muuttujina Alue, Huoneluku, Rahoitusmuoto",
        "sv": "Antal 2022Q4 efter Område, Antal rum, Finansieringssätt",
        "en": "Number 2022Q4 by Region, Number of rooms, Type of funding"
    },
    "lastUpdated": "2023-01-19T06:00:00Z",
    subheaderValues: [
        {
            "fi": "Kaksiot",
            "sv": "Tvårumslägenhet",
            "en": "Two-room flat"
        },
    ],
    units: [
        {
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
                "fi": "Tampere",
                "sv": "Tammerfors",
                "en": "Tampere"
            }
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
                "fi": "Helsinki",
                "sv": "Helsingfors",
                "en": "Helsinki"
            },
        ],
        [
            {
                "fi": "Riihimäki",
                "sv": "Riihimäki",
                "en": "Riihimäki"
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
                { value: 4582, preliminary: false, precision: 0},
                { value: 3414, preliminary: false, precision: 0},
                { value: 8805, preliminary: false, precision: 0},
                { value: 243,   preliminary: false, precision: 0 }
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
                { value: 1635, preliminary: false, precision: 0},
                { value: 1557, preliminary: false, precision: 0},
                { value: 5265, preliminary: false, precision: 0},
                { value: 148,   preliminary: false, precision: 0 }
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
        }
    ],
    selectableVarNames:
        [
            {
                "fi": "Huoneluku",
                "sv": "Antal rum",
                "en": "Number of rooms"
            }
        ],
    visualizationSettings: {
        visualizationType: EVisualizationType.PercentHorizontalBarChart,
        defaultSelectableVariableCodes: {
            "Huoneluku": ["03"]
        },
        cutValueAxis: false,
        sorting: "1",
        timeSeriesStartingPoint: "2022-10-01T00:00:00Z",
        timeVariableIntervals: ETimeVariableInterval.Quarter,
    },
    seriesType: ESeriesType.Nominal
};