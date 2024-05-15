import { EVariableType, ETimeVariableInterval, EVisualizationType, IQueryVisualizationResponse } from "../../core";

export const TABLE_WITH_ONLY_COLUMN_VARIABLES: { pxGraphData: IQueryVisualizationResponse, selectedVariableCodes: {[key: string]: string[]} | undefined} = {
    pxGraphData: {
        "tableReference": { name: "table.px", hierarchy: ["foo", "bar"] },
        "data": [
            242.0,
            62.0,
            0.0,
            0.0,
            0.0,
            0.0,
            240.0,
            85.0,
            0.0,
            0.0,
            0.0,
            0.0,
            216.0,
            91.0,
            0.0,
            0.0,
            0.0,
            0.0
        ],
        missingDataInfo: {},
        "dataNotes": {},
        "metaData": [
            {
                "code": "Vuosi",
                "name": {
                    "fi": "Vuosi",
                    "sv": "År",
                    "en": "Year"
                },
                "note": null,
                "type": EVariableType.Time,
                "values": [
                    {
                        "code": "1987",
                        "name": {
                            "fi": "1987",
                            "sv": "1987",
                            "en": "1987"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "1988",
                        "name": {
                            "fi": "1988",
                            "sv": "1988",
                            "en": "1988"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "1989",
                        "name": {
                            "fi": "1989",
                            "sv": "1989",
                            "en": "1989"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    }
                ]
            },
            {
                "code": "Syntymävaltio",
                "name": {
                    "fi": "Syntymävaltio",
                    "sv": "Födelseland",
                    "en": "Country of birth"
                },
                "note": null,
                "type": EVariableType.OtherClassificatory,
                "values": [
                    {
                        "code": "246",
                        "name": {
                            "fi": "Suomi",
                            "sv": "Finland",
                            "en": "Finland"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "724",
                        "name": {
                            "fi": "Espanja",
                            "sv": "Spanien",
                            "en": "Spain"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "380",
                        "name": {
                            "fi": "Italia",
                            "sv": "Italien",
                            "en": "Italy"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    }
                ]
            },
            {
                "code": "Adoptiotyyppi",
                "name": {
                    "fi": "Adoptiotyyppi",
                    "sv": "Typ av adoption",
                    "en": "Adoption type"
                },
                "note": null,
                "type": EVariableType.OtherClassificatory,
                "values": [
                    {
                        "code": "SSS",
                        "name": {
                            "fi": "Yhteensä",
                            "sv": "Totalt",
                            "en": "Total"
                        },
                        "note": null,
                        "isSum": true,
                        "contentComponent": null
                    }
                ]
            },
            {
                "code": "Ikä",
                "name": {
                    "fi": "Ikä",
                    "sv": "Ålder",
                    "en": "Age"
                },
                "note": null,
                "type": EVariableType.OtherClassificatory,
                "values": [
                    {
                        "code": "0-17",
                        "name": {
                            "fi": "0 - 17",
                            "sv": "0 - 17",
                            "en": "0 - 17"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "18-",
                        "name": {
                            "fi": "18 -",
                            "sv": "18 -",
                            "en": "18 -"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    }
                ]
            },
            {
                "code": "Sukupuoli",
                "name": {
                    "fi": "Sukupuoli",
                    "sv": "Kön",
                    "en": "Sex"
                },
                "note": null,
                "type": EVariableType.OtherClassificatory,
                "values": [
                    {
                        "code": "SSS",
                        "name": {
                            "fi": "Yhteensä",
                            "sv": "Totalt",
                            "en": "Total"
                        },
                        "note": null,
                        "isSum": true,
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
                        "code": "vm61",
                        "name": {
                            "fi": "Adoptiot",
                            "sv": "Adoptioner",
                            "en": "Adoptions"
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
                            "lastUpdated": "2022-08-31T05:00:00Z"
                        }
                    }
                ]
            }
        ],
        "selectableVariableCodes": [],
        "rowVariableCodes": [],
        "columnVariableCodes": [
            "Vuosi",
            "Syntymävaltio",
            "Adoptiotyyppi",
            "Ikä",
            "Sukupuoli",
            "Tiedot"
        ],
        "header": {
            "fi": "Adoptiot 1987-1989 muuttujina Syntymävaltio, Ikä",
            "sv": "Adoptioner 1987-1989 efter Födelseland, Ålder",
            "en": "Adoptions 1987-1989 by Country of birth, Age"
        },
        "visualizationSettings": {
            "visualizationType": EVisualizationType.Table,
            "timeVariableIntervals": ETimeVariableInterval.Year,
            "timeSeriesStartingPoint": "1987-01-01T00:00:00",
            "cutValueAxis": false
        }
    },
    selectedVariableCodes: { 'Vuosineljännes': ['2015Q1'], 'Alue': ['pks'], 'Rahoitusmuoto': ['1'] }
};

export const TABLE_WITH_ONE_CELL: { pxGraphData: IQueryVisualizationResponse, selectedVariableCodes: {[key: string]: string[]} | undefined} = {
    pxGraphData: {
        "tableReference": { name: "table.px", hierarchy: ["foo", "bar"] },
        "data": [
            2548.0
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
                        "code": "092",
                        "name": {
                            "fi": "Vantaa",
                            "sv": "Vanda",
                            "en": "Vantaa"
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
        ],
        "selectableVariableCodes": [],
        "rowVariableCodes": [],
        "columnVariableCodes": [
            "Huoneluku",
            "Tiedot",
            "Rahoitusmuoto",
            "Vuosineljännes",
            "Alue"
        ],
        "header": {
            "fi": "Lukumäärä, Vantaa, Yksiöt, Vapaarahoitteinen 2022Q4",
            "sv": "Antal, Vanda, Enrumslägenhet, Fri finansierad 2022Q4",
            "en": "Number, Vantaa, One-room flat, Non subsidised 2022Q4"
        },
        "visualizationSettings": {
            "visualizationType": EVisualizationType.Table,
            "timeVariableIntervals": ETimeVariableInterval.Quarter,
            "timeSeriesStartingPoint": "2022-10-01T00:00:00",
            "cutValueAxis": false
        }
    },
    selectedVariableCodes: { 'Vuosineljännes': ['2015Q1'], 'Alue': ['pks'], 'Rahoitusmuoto': ['1'] }
};

export const TABLE_WITH_ONLY_ROW_VARIABLES: { pxGraphData: IQueryVisualizationResponse, selectedVariableCodes: {[key: string]: string[]} | undefined} = {
    pxGraphData: {
        "tableReference": { name: "table.px", hierarchy: ["foo", "bar"] },
        "data": [
            3043.0,
            5261.0,
            941.0,
            2083.0,
            2679.0,
            5017.0,
            846.0,
            1902.0,
            2533.0,
            4925.0,
            763.0,
            1778.0,
            2548.0,
            4882.0,
            767.0,
            1744.0,
            5534.0,
            4267.0,
            1292.0,
            1782.0,
            4437.0,
            3666.0,
            1149.0,
            1642.0,
            4014.0,
            3329.0,
            1107.0,
            1554.0,
            4195.0,
            3414.0,
            1161.0,
            1557.0
        ],
        "missingDataInfo": {},
        "dataNotes": {},
        "metaData": [
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
                    }
                ]
            }
        ],
        "selectableVariableCodes": [],
        "rowVariableCodes": [
            "Alue",
            "Vuosineljännes",
            "Rahoitusmuoto",
            "Tiedot",
            "Huoneluku"
        ],
        "columnVariableCodes": [],
        "header": {
            "fi": "Lukumäärä 2022Q1-2022Q4 muuttujina Alue, Huoneluku, Rahoitusmuoto",
            "sv": "Antal 2022Q1-2022Q4 efter Område, Antal rum, Finansieringssätt",
            "en": "Number 2022Q1-2022Q4 by Region, Number of rooms, Type of funding"
        },
        "visualizationSettings": {
            "visualizationType": EVisualizationType.Table,
            "timeVariableIntervals": ETimeVariableInterval.Quarter,
            "timeSeriesStartingPoint": "2022-01-01T00:00:00",
            "cutValueAxis": false
        }
    },
    selectedVariableCodes: { 'Vuosineljännes': ['2015Q1'], 'Alue': ['pks'], 'Rahoitusmuoto': ['1'] }
};

export const TABLE_WITH_ROW_AND_COLUMN_VARIABLES: { pxGraphData: IQueryVisualizationResponse, selectedVariableCodes: {[key: string]: string[]}} = {
    pxGraphData: {
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
    },
    selectedVariableCodes: { 'Vuosineljännes': ['2015Q1'], 'Alue': ['pks'], 'Rahoitusmuoto': ['1'] }
};