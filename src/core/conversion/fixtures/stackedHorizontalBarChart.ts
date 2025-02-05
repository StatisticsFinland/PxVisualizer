import { EVariableType, EVisualizationType, IQueryVisualizationResponse } from "../../types";
import { ETimeVariableInterval } from "../../types/queryVisualizationResponse";
import { TVariableSelections } from "../../types/variableSelections";

export const STACKED_HORIZONTAL_BAR_CHART: { pxGraphData: IQueryVisualizationResponse, selectedVariableCodes: TVariableSelections | undefined } = {
    pxGraphData: {
        "tableReference": { name: "table.px", hierarchy: ["foo", "bar"] },
        "data": [
            21.81,
            23.45,
            13.91,
            null
        ],
        missingDataInfo: {
            "3": 3
        },
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
                        "code": "2015Q1",
                        "name": {
                            "fi": "2015Q1",
                            "sv": "2015Q1",
                            "en": "2015Q1"
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
                        "code": "pks",
                        "name": {
                            "fi": "Pääkaupunkiseutu (PKS)",
                            "sv": "Huvudstadsregionen",
                            "en": "Greater Helsinki"
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
                    },
                    {
                        "code": "keskivuokra_uudet",
                        "name": {
                            "fi": "Neliövuokra uusille vuokrasuhteille (eur/m2)",
                            "sv": "Kvadratmeterspris vid nya hyresförhållanden  (eur/m2)",
                            "en": "Rents per square meter for new tenancy agreements (eur/m2)"
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
            "Rahoitusmuoto"
        ],
        "columnVariableCodes": [
            "Tiedot"
        ],
        "header": {
            "fi": "Tiedot, Pääkaupunkiseutu (PKS), Yksiöt 2015Q1 muuttujina Tiedot, Rahoitusmuoto",
            "sv": "Uppgifter, Huvudstadsregionen, Enrumslägenhet 2015Q1 efter Uppgifter, Finansieringssätt",
            "en": "Information, Greater Helsinki, One-room flat 2015Q1 by Information, Type of funding"
        },
        visualizationSettings: {
            sorting: "1",
            visualizationType: EVisualizationType.StackedHorizontalBarChart,
            timeVariableIntervals: ETimeVariableInterval.Quarter,
            defaultSelectableVariableCodes: null
        }
    },
    selectedVariableCodes: undefined
}

export const STACKED_HORIZONTAL_BAR_CHART_WITH_SELECTABLES: { pxGraphData: IQueryVisualizationResponse, selectedVariableCodes: TVariableSelections | undefined } = {
    pxGraphData: {
        "tableReference": { name: "table.px", hierarchy: ["foo", "bar"] },
        "data": [
            21.81,
            23.45,
            13.91,
            null,
            15.38,
            18.16,
            12.26,
            null,
            14.03,
            14.63,
            11.31,
            null,
            10.35,
            11.46,
            10.22,
            null,
            21.98,
            23.82,
            14.04,
            null,
            15.55,
            18.25,
            12.42,
            null,
            14.08,
            14.76,
            11.43,
            null,
            10.44,
            11.44,
            10.32,
            null
        ],
        missingDataInfo: {
            "3": 3,
            "7": 3,
            "11": 3,
            "15": 3,
            "19": 3,
            "23": 3,
            "27": 3,
            "31": 3
        },
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
                        "code": "2015Q1",
                        "name": {
                            "fi": "2015Q1",
                            "sv": "2015Q1",
                            "en": "2015Q1"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "2015Q2",
                        "name": {
                            "fi": "2015Q2",
                            "sv": "2015Q2",
                            "en": "2015Q2"
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
                        "code": "pks",
                        "name": {
                            "fi": "Pääkaupunkiseutu (PKS)",
                            "sv": "Huvudstadsregionen",
                            "en": "Greater Helsinki"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "msu",
                        "name": {
                            "fi": "Muu Suomi (koko maa pl. PKS)",
                            "sv": "Övriga Finland (Hela landet utan Huvudstadsregionen)",
                            "en": "Whole country excluding Greater Helsinki"
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
                    },
                    {
                        "code": "keskivuokra_uudet",
                        "name": {
                            "fi": "Neliövuokra uusille vuokrasuhteille (eur/m2)",
                            "sv": "Kvadratmeterspris vid nya hyresförhållanden  (eur/m2)",
                            "en": "Rents per square meter for new tenancy agreements (eur/m2)"
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
        "selectableVariableCodes": [
            "Vuosineljännes",
            "Alue",
            "Huoneluku"
        ],
        "rowVariableCodes": [
            "Rahoitusmuoto"
        ],
        "columnVariableCodes": [
            "Tiedot"
        ],
        "header": {
            "fi": "Tiedot 2015Q1 muuttujina Tiedot, Alue, Huoneluku, Rahoitusmuoto",
            "sv": "Uppgifter 2015Q1 efter Uppgifter, Område, Antal rum, Finansieringssätt",
            "en": "Information 2015Q1 by Information, Region, Number of rooms, Type of funding"
        },
        visualizationSettings: {
            sorting: "1",
            visualizationType: EVisualizationType.StackedHorizontalBarChart,
            timeVariableIntervals: ETimeVariableInterval.Quarter,
            defaultSelectableVariableCodes: null
        }
    },
    selectedVariableCodes: { 'Alue': ['pks'], 'Huoneluku': ['01'], 'Vuosineljännes': ['2015Q1'] }
}

export const STACKED_HORIZONTAL_BAR_CHART_PIVOTED_WITH_SELECTABLES: { pxGraphData: IQueryVisualizationResponse, selectedVariableCodes: TVariableSelections | undefined } = {
    pxGraphData: {
        "tableReference": { name: "table.px", hierarchy: ["foo", "bar"] },
        "data": [
            21.81,
            13.91,
            23.45,
            null,
            15.38,
            12.26,
            18.16,
            null,
            14.03,
            11.31,
            14.63,
            null,
            10.35,
            10.22,
            11.46,
            null,
            21.98,
            14.04,
            23.82,
            null,
            15.55,
            12.42,
            18.25,
            null,
            14.08,
            11.43,
            14.76,
            null,
            10.44,
            10.32,
            11.44,
            null
        ],
        missingDataInfo: {
            "3": 3,
            "7": 3,
            "11": 3,
            "15": 3,
            "19": 3,
            "23": 3,
            "27": 3,
            "31": 3
        },
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
                        "code": "2015Q1",
                        "name": {
                            "fi": "2015Q1",
                            "sv": "2015Q1",
                            "en": "2015Q1"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "2015Q2",
                        "name": {
                            "fi": "2015Q2",
                            "sv": "2015Q2",
                            "en": "2015Q2"
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
                        "code": "pks",
                        "name": {
                            "fi": "Pääkaupunkiseutu (PKS)",
                            "sv": "Huvudstadsregionen",
                            "en": "Greater Helsinki"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "msu",
                        "name": {
                            "fi": "Muu Suomi (koko maa pl. PKS)",
                            "sv": "Övriga Finland (Hela landet utan Huvudstadsregionen)",
                            "en": "Whole country excluding Greater Helsinki"
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
                    },
                    {
                        "code": "keskivuokra_uudet",
                        "name": {
                            "fi": "Neliövuokra uusille vuokrasuhteille (eur/m2)",
                            "sv": "Kvadratmeterspris vid nya hyresförhållanden  (eur/m2)",
                            "en": "Rents per square meter for new tenancy agreements (eur/m2)"
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
            }
        ],
        "selectableVariableCodes": [
            "Vuosineljännes",
            "Alue",
            "Huoneluku"
        ],
        "rowVariableCodes": [
            "Tiedot"
        ],
        "columnVariableCodes": [
            "Rahoitusmuoto"
        ],
        "header": {
            "fi": "Tiedot 2015Q1 muuttujina Tiedot, Alue, Huoneluku, Rahoitusmuoto",
            "sv": "Uppgifter 2015Q1 efter Uppgifter, Område, Antal rum, Finansieringssätt",
            "en": "Information 2015Q1 by Information, Region, Number of rooms, Type of funding"
        },
        visualizationSettings: {
            sorting: "keskivuokra",
            timeVariableIntervals: ETimeVariableInterval.Quarter,
            visualizationType: EVisualizationType.StackedHorizontalBarChart,
            defaultSelectableVariableCodes: null
        }
    },
    selectedVariableCodes: { 'Alue': ['pks'], 'Huoneluku': ['01'], 'Vuosineljännes': ['2015Q1'] }
}