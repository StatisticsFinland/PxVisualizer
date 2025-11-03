import { EVariableType, EVisualizationType, IQueryVisualizationResponse } from "../../core"
import { ETimeVariableInterval } from "../../core/types/queryVisualizationResponse"
import { TVariableSelections } from "../../core/types/variableSelections"

export const PERCENT_HORIZONTAL_BAR_CHART: { pxGraphData: IQueryVisualizationResponse, selectedVariableCodes: TVariableSelections | undefined, showLastUpdated: boolean  } = {
    pxGraphData: {
        tableReference: { name: "table.px", hierarchy: ["foo", "bar"] },
        data: [
            23926.0,
            8641.0,
            11314.0,
            14656.0,
            3826.0,
            4223.0
        ],
        missingDataInfo: {},
        dataNotes: {},
        metaData: [
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
                        "code": "00",
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
            "fi": "Lukumäärä 2022Q4 muuttujina Alue, Rahoitusmuoto",
            "sv": "Antal 2022Q4 efter Område, Finansieringssätt",
            "en": "Number 2022Q4 by Region, Type of funding"
        },
        "visualizationSettings": {
            "visualizationType": EVisualizationType.PercentHorizontalBarChart,
            "timeVariableIntervals": ETimeVariableInterval.Quarter,
            "timeSeriesStartingPoint": "2022-10-01T00:00:00Z",
            "cutValueAxis": false,
            "sorting": "1"
        }
    },
    selectedVariableCodes: undefined,
    showLastUpdated: true
}

export const PERCENT_HORIZONTAL_BAR_CHART_WITH_SELECTABLES: { pxGraphData: IQueryVisualizationResponse, selectedVariableCodes: TVariableSelections | undefined } = {
    pxGraphData: {
        tableReference: { name: "table.px", hierarchy: ["foo", "bar"] },
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
        "dataNotes": {
            "3": {
                "fi": "Tieto on salassapitosäännön alainen",
                "en": "Data is subject to secrecy",
                "sv": "Uppgift är sekretessbelagd"
            },
            "7": {
                "fi": "Tieto on salassapitosäännön alainen",
                "en": "Data is subject to secrecy",
                "sv": "Uppgift är sekretessbelagd"
            },
            "11": {
                "fi": "Tieto on salassapitosäännön alainen",
                "en": "Data is subject to secrecy",
                "sv": "Uppgift är sekretessbelagd"
            },
            "15": {
                "fi": "Tieto on salassapitosäännön alainen",
                "en": "Data is subject to secrecy",
                "sv": "Uppgift är sekretessbelagd"
            },
            "19": {
                "fi": "Tieto on salassapitosäännön alainen",
                "en": "Data is subject to secrecy",
                "sv": "Uppgift är sekretessbelagd"
            },
            "23": {
                "fi": "Tieto on salassapitosäännön alainen",
                "en": "Data is subject to secrecy",
                "sv": "Uppgift är sekretessbelagd"
            },
            "27": {
                "fi": "Tieto on salassapitosäännön alainen",
                "en": "Data is subject to secrecy",
                "sv": "Uppgift är sekretessbelagd"
            },
            "31": {
                "fi": "Tieto on salassapitosäännön alainen",
                "en": "Data is subject to secrecy",
                "sv": "Uppgift är sekretessbelagd"
            }
        },
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
            timeVariableIntervals: ETimeVariableInterval.Quarter,
            visualizationType: EVisualizationType.PercentHorizontalBarChart,
            defaultSelectableVariableCodes: null
        }
    },
    selectedVariableCodes: {'Alue': ['pks'], 'Huoneluku': ['01'], 'Vuosineljännes': ['2015Q1']}
}

export const PERCENT_HORIZONTAL_BAR_CHART_PIVOTED_WITH_SELECTABLES: { pxGraphData: IQueryVisualizationResponse, selectedVariableCodes: TVariableSelections | undefined } = {
    pxGraphData: {
        tableReference: { name: "table.px", hierarchy: ["foo", "bar"] },
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
        "dataNotes": {
            "3": {
                "fi": "Tieto on salassapitosäännön alainen",
                "en": "Data is subject to secrecy",
                "sv": "Uppgift är sekretessbelagd"
            },
            "7": {
                "fi": "Tieto on salassapitosäännön alainen",
                "en": "Data is subject to secrecy",
                "sv": "Uppgift är sekretessbelagd"
            },
            "11": {
                "fi": "Tieto on salassapitosäännön alainen",
                "en": "Data is subject to secrecy",
                "sv": "Uppgift är sekretessbelagd"
            },
            "15": {
                "fi": "Tieto on salassapitosäännön alainen",
                "en": "Data is subject to secrecy",
                "sv": "Uppgift är sekretessbelagd"
            },
            "19": {
                "fi": "Tieto on salassapitosäännön alainen",
                "en": "Data is subject to secrecy",
                "sv": "Uppgift är sekretessbelagd"
            },
            "23": {
                "fi": "Tieto on salassapitosäännön alainen",
                "en": "Data is subject to secrecy",
                "sv": "Uppgift är sekretessbelagd"
            },
            "27": {
                "fi": "Tieto on salassapitosäännön alainen",
                "en": "Data is subject to secrecy",
                "sv": "Uppgift är sekretessbelagd"
            },
            "31": {
                "fi": "Tieto on salassapitosäännön alainen",
                "en": "Data is subject to secrecy",
                "sv": "Uppgift är sekretessbelagd"
            }
        },
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
            visualizationType: EVisualizationType.PercentHorizontalBarChart,
            defaultSelectableVariableCodes: null
        }
    },
    selectedVariableCodes: {'Alue': ['pks'], 'Huoneluku': ['01'], 'Vuosineljännes': ['2015Q1']}
}