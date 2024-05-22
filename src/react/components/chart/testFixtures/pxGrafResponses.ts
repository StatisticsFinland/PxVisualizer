import { ETimeVariableInterval, EVariableType, EVisualizationType, IQueryVisualizationResponse } from "../../../../core/types";

export const GROUP_VERTICAL_BAR_CHART_CHART_FIXTURE: IQueryVisualizationResponse  =  {
        tableReference: { name: "table.px", hierarchy: ["foo", "bar"] },
        data: [
            11096.0,
            11625.0,
            4845.0,
            5174.0
        ],
        missingDataInfo: {},
        dataNotes: {},
        metaData: [
            {
                code: "Alue",
                name: {
                    "fi": "Alue",
                    "sv": "Område",
                    "en": "Region"
                },
                note: null,
                type: EVariableType.Geological,
                values: [
                    {
                        code: "pks",
                        name: {
                            "fi": "Pääkaupunkiseutu (PKS)",
                            "sv": "Huvudstadsregionen",
                            "en": "Greater Helsinki"
                        },
                        note: null,
                        isSum: false,
                        contentComponent: null
                    }
                ]
            },
            {
                code: "Huoneluku",
                name: {
                    "fi": "Huoneluku",
                    "sv": "Antal rum",
                    "en": "Number of rooms"
                },
                note: null,
                type: EVariableType.Ordinal,
                values: [
                    {
                        code: "01",
                        name: {
                            "fi": "Yksiöt",
                            "sv": "Enrumslägenhet",
                            "en": "One-room flat"
                        },
                        note: null,
                        isSum: false,
                        contentComponent: null
                    }
                ]
            },
            {
                code: "Tiedot",
                name: {
                    "fi": "Tiedot",
                    "sv": "Uppgifter",
                    "en": "Information"
                },
                note: null,
                type: EVariableType.Content,
                values: [
                    {
                        code: "lkm",
                        name: {
                            "fi": "Lukumäärä",
                            "sv": "Antal",
                            "en": "Number"
                        },
                        note: null,
                        isSum: false,
                        contentComponent: {
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
                code: "Rahoitusmuoto",
                name: {
                    "fi": "Rahoitusmuoto",
                    "sv": "Finansieringssätt",
                    "en": "Type of funding"
                },
                note: null,
                type: EVariableType.OtherClassificatory,
                values: [
                    {
                        code: "1",
                        name: {
                            "fi": "Vapaarahoitteinen",
                            "sv": "Fri finansierad",
                            "en": "Non subsidised"
                        },
                        note: null,
                        isSum: false,
                        contentComponent: null
                    },
                    {
                        code: "0",
                        name: {
                            "fi": "ARA",
                            "sv": "ARA",
                            "en": "Government subsidised"
                        },
                        note: null,
                        isSum: false,
                        contentComponent: null
                    }
                ]
            },
            {
                code: "Vuosineljännes",
                name: {
                    "fi": "Vuosineljännes",
                    "sv": "Kvartal",
                    "en": "Quarter"
                },
                note: null,
                type: EVariableType.Time,
                values: [
                    {
                        code: "2015Q1",
                        name: {
                            "fi": "2015Q1",
                            "sv": "2015Q1",
                            "en": "2015Q1"
                        },
                        note: null,
                        isSum: false,
                        contentComponent: null
                    },
                    {
                        code: "2015Q2",
                        name: {
                            "fi": "2015Q2",
                            "sv": "2015Q2",
                            "en": "2015Q2"
                        },
                        note: null,
                        isSum: false,
                        contentComponent: null
                    }
                ]
            }
        ],
        selectableVariableCodes: [],
        rowVariableCodes: [
            "Rahoitusmuoto"
        ],
        columnVariableCodes: [
            "Vuosineljännes"
        ],
        header: {
            "fi": "Lukumäärä, Pääkaupunkiseutu (PKS), Yksiöt 2015Q1-2015Q2 muuttujana Rahoitusmuoto",
            "sv": "Antal, Huvudstadsregionen, Enrumslägenhet 2015Q1-2015Q2 efter Finansieringssätt",
            "en": "Number, Greater Helsinki, One-room flat 2015Q1-2015Q2 by Type of funding"
        },
        visualizationSettings: {
            showLastLabel: false,
            timeVariableIntervals: ETimeVariableInterval.Quarter,
            timeSeriesStartingPoint: '2015-01-01T00:00:00',
            visualizationType: EVisualizationType.GroupVerticalBarChart,
            defaultSelectableVariableCodes: null,
            showDataPoints: true
        }
};

export const TABLE_WITH_ROW_AND_COLUMN_VARIABLES_CHART_FIXTURE: IQueryVisualizationResponse = {
        tableReference: { name: "table.px", hierarchy: ["foo", "bar"] },
        data: [
            13021.0,
            26.64,
            10080.0,
            20.22,
            3810.0,
            15.9,
            6176.0,
            13.74,
            11231.0,
            26.82,
            9326.0,
            20.45,
            3552.0,
            15.97,
            5749.0,
            13.78,
            10269.0,
            26.93,
            8907.0,
            20.59,
            3249.0,
            15.99,
            5280.0,
            13.79,
            10272.0,
            26.93,
            8805.0,
            20.66,
            3323.0,
            16.08,
            5265.0,
            13.8,
            3043.0,
            23.48,
            5261.0,
            17.62,
            941.0,
            16.13,
            2083.0,
            13.96,
            2679.0,
            23.64,
            5017.0,
            17.79,
            846.0,
            16.05,
            1902.0,
            13.91,
            2533.0,
            23.68,
            4925.0,
            17.85,
            763.0,
            15.97,
            1778.0,
            13.9,
            2548.0,
            23.77,
            4882.0,
            17.99,
            767.0,
            15.98,
            1744.0,
            13.97,
            5534.0,
            18.16,
            4267.0,
            14.07,
            1292.0,
            13.91,
            1782.0,
            11.81,
            4437.0,
            18.32,
            3666.0,
            14.27,
            1149.0,
            14.02,
            1642.0,
            11.87,
            4014.0,
            18.44,
            3329.0,
            14.37,
            1107.0,
            14.06,
            1554.0,
            11.86,
            4195.0,
            18.53,
            3414.0,
            14.48,
            1161.0,
            14.11,
            1557.0,
            11.96
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
                    },
                    {
                        "code": "092",
                        "name": {
                            "fi": "Vantaa",
                            "sv": "Vanda",
                            "en": "Vantaa"
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
                    },
                    {
                        "code": "keskivuokra",
                        "name": {
                            "fi": "Neliövuokra (eur/m2)",
                            "sv": "Kvadratmeterspris (eur/m2)",
                            "en": "Rents per square meter (eur/m2)"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": {
                            "unit": {
                                "fi": "eur / m2",
                                "sv": "eur / m2",
                                "en": "eur / m2"
                            },
                            "source": {
                                "fi": "PxVisualizer-fi",
                                "sv": "PxVisualizer-sv",
                                "en": "PxVisualizer-en"
                            },
                            "numberOfDecimals": 2,
                            "lastUpdated": "2023-01-19T06:00:00Z"
                        }
                    }
                ]
            }
        ],
        "selectableVariableCodes": [],
        "rowVariableCodes": [
            "Alue",
            "Vuosineljännes",
            "Rahoitusmuoto"
        ],
        "columnVariableCodes": [
            "Huoneluku",
            "Tiedot"
        ],
        "header": {
            "fi": "Tiedot 2022Q1-2022Q4 muuttujina Tiedot, Alue, Huoneluku, Rahoitusmuoto",
            "sv": "Uppgifter 2022Q1-2022Q4 efter Uppgifter, Område, Antal rum, Finansieringssätt",
            "en": "Information 2022Q1-2022Q4 by Information, Region, Number of rooms, Type of funding"
        },
        "visualizationSettings": {
            "visualizationType": EVisualizationType.Table,
            "timeVariableIntervals": ETimeVariableInterval.Quarter,
            "timeSeriesStartingPoint": "2022-01-01T00:00:00",
            "cutValueAxis": false
        }
};

export const TOTALLY_BROKEN_CHART_FIXTURE: IQueryVisualizationResponse = {
    foo: "bar"
} as unknown as IQueryVisualizationResponse;