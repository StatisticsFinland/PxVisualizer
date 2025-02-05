import { EVariableType, EVisualizationType, IQueryVisualizationResponse } from "../../types";
import { ETimeVariableInterval } from "../../types/queryVisualizationResponse";

export const PIE_CHART_WITH_SELECTABLES: IQueryVisualizationResponse =
{
    "tableReference": { name: "table.px", hierarchy: ["foo", "bar"] },
    "data": [
        109.6,
        113.6,
        112.6,
        13595.0,
        5356.0,
        6786.0,
        24.84,
        17.85,
        18.95,
        109.3,
        111.1,
        111.4,
        14070.0,
        4971.0,
        6217.0,
        18.41,
        13.85,
        14.65,
        110.6,
        109.2,
        110.7,
        10917.0,
        2140.0,
        2534.0,
        15.9,
        11.91,
        13.02
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
                    "code": "2",
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
                    "code": "ketj_Tor",
                    "name": {
                        "fi": "Indeksi (2015=100)",
                        "sv": "Index (2015=100)",
                        "en": "Index (2015=100)"
                    },
                    "note": null,
                    "isSum": false,
                    "contentComponent": {
                        "unit": {
                            "fi": "indeksipisteluku",
                            "sv": "indextal",
                            "en": "index point"
                        },
                        "source": {
                            "fi": "PxVisualizer-fi",
                            "sv": "PxVisualizer-sv",
                            "en": "PxVisualizer-en"
                        },
                        "numberOfDecimals": 1,
                        "lastUpdated": "2023-01-19T06:00:00Z"
                    }
                },
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
                }
            ]
        }
    ],
    "selectableVariableCodes": [
        "Huoneluku",
        "Tiedot"
    ],
    "rowVariableCodes": [],
    "columnVariableCodes": [
        "Alue"
    ],
    "header": {
        "fi": "Tiedot 2022Q4 muuttujina Tiedot, Alue, Huoneluku",
        "sv": "Uppgifter 2022Q4 efter Uppgifter, Område, Antal rum",
        "en": "Information 2022Q4 by Information, Region, Number of rooms"
    },
    visualizationSettings: {
        sorting: "descending",
        visualizationType: EVisualizationType.PieChart,
        timeVariableIntervals: ETimeVariableInterval.Quarter,
        defaultSelectableVariableCodes: {
            "Tiedot": [
                "lkm"
            ],
            "Huoneluku": [
                "01"
            ]
        }
    }
};

export const PIE_CHART_ASCENDING: IQueryVisualizationResponse =
{
    "tableReference": { name: "table.px", hierarchy: ["foo", "bar"] },
    "data": [
        13595.0,
        5356.0,
        6786.0
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
                    "code": "2",
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
                }
            ]
        }
    ],
    "selectableVariableCodes": [],
    "rowVariableCodes": [],
    "columnVariableCodes": [
        "Alue"
    ],
    "header": {
        "fi": "Lukumäärä, Yksiöt 2022Q4 muuttujana Alue",
        "sv": "Antal, Enrumslägenhet 2022Q4 efter Område",
        "en": "Number, One-room flat 2022Q4 by Region"
    },
    "visualizationSettings": {
        sorting: "ascending",
        visualizationType: EVisualizationType.PieChart,
        timeVariableIntervals: ETimeVariableInterval.Quarter,
        defaultSelectableVariableCodes: {
            "Tiedot": [
                "lkm"
            ],
            "Huoneluku": [
                "01"
            ]
        }
    }
}