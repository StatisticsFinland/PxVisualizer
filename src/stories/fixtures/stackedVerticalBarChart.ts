import { EVariableType, EVisualizationType, IQueryVisualizationResponse } from "../../core"
import { ETimeVariableInterval } from "../../core/types/queryVisualizationResponse"
import { TVariableSelections } from "../../core/types/variableSelections"

export const STACKED_VERTICAL_BAR_CHART: { pxGraphData: IQueryVisualizationResponse, selectedVariableCodes: TVariableSelections | undefined } = {
    pxGraphData: {
        tableReference: { name: "table.px", hierarchy: ["foo", "bar"] },
        "data": [
            11096.0,
            11625.0,
            4845.0,
            5174.0
        ],
        missingDataInfo: {},
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
            }
        ],
        "selectableVariableCodes": [],
        "rowVariableCodes": [
            "Rahoitusmuoto"
        ],
        "columnVariableCodes": [
            "Vuosineljännes"
        ],
        "header": {
            "fi": "Lukumäärä, Pääkaupunkiseutu (PKS), Yksiöt 2015Q1-2015Q2 muuttujana Rahoitusmuoto",
            "sv": "Antal, Huvudstadsregionen, Enrumslägenhet 2015Q1-2015Q2 efter Finansieringssätt",
            "en": "Number, Greater Helsinki, One-room flat 2015Q1-2015Q2 by Type of funding"
        },
        visualizationSettings: {
            showLastLabel: false,
            timeVariableIntervals: ETimeVariableInterval.Quarter,
            timeSeriesStartingPoint: '2015-01-01T00:00:00',
            visualizationType: EVisualizationType.StackedVerticalBarChart,
            defaultSelectableVariableCodes: null
        }
    },
    selectedVariableCodes: undefined
}

export const STACKED_VERTICAL_BAR_CHART_WITH_SELECTABLES: { pxGraphData: IQueryVisualizationResponse, selectedVariableCodes: TVariableSelections | undefined } = {
    pxGraphData: {
        tableReference: { name: "table.px", hierarchy: ["foo", "bar"] },
        "data": [
            11096.0,
            11625.0,
            4845.0,
            5174.0,
            21.81,
            21.98,
            13.91,
            14.04,
            11596.0,
            12016.0,
            11700.0,
            12665.0,
            15.38,
            15.55,
            12.26,
            12.42,
            29948.0,
            30484.0,
            14009.0,
            14669.0,
            14.03,
            14.08,
            11.31,
            11.43,
            29473.0,
            31047.0,
            30318.0,
            32329.0,
            10.35,
            10.44,
            10.22,
            10.32
        ],
        missingDataInfo: {},
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
            }
        ],
        "selectableVariableCodes": [
            "Alue",
            "Huoneluku",
            "Tiedot"
        ],
        "rowVariableCodes": [
            "Rahoitusmuoto"
        ],
        "columnVariableCodes": [
            "Vuosineljännes"
        ],
        "header": {
            "fi": "Tiedot 2015Q1-2015Q2 muuttujina Tiedot, Alue, Huoneluku, Rahoitusmuoto",
            "sv": "Uppgifter 2015Q1-2015Q2 efter Uppgifter, Område, Antal rum, Finansieringssätt",
            "en": "Information 2015Q1-2015Q2 by Information, Region, Number of rooms, Type of funding"
        },
        visualizationSettings: {
            showLastLabel: false,
            timeVariableIntervals: ETimeVariableInterval.Quarter,
            timeSeriesStartingPoint: '2015-01-01T00:00:00',
            visualizationType: EVisualizationType.StackedVerticalBarChart,
            defaultSelectableVariableCodes: null
        }
    },
    selectedVariableCodes: { 'Alue': ['pks'], 'Huoneluku': ['01'], 'Tiedot': ['lkm'] }
}

export const LONG_STACKED_VERTICAL_BAR_CHART: { pxGraphData: IQueryVisualizationResponse, selectedVariableCodes: TVariableSelections | undefined } = {
    pxGraphData: {
        tableReference: { name: "table.px", hierarchy: ["foo", "bar"] },
        "data": [
            23.89,
            24.07,
            24.08,
            24.45,
            24.55,
            24.54,
            24.65,
            24.72,
            25.13,
            25.09,
            25.22,
            25.44,
            25.87,
            26.15,
            26.27,
            26.36,
            26.51,
            26.59,
            26.68,
            26.72,
            26.75,
            26.64,
            26.82,
            26.93,
            26.93,
            14.47,
            14.51,
            14.63,
            14.95,
            14.98,
            15.07,
            15.13,
            15.2,
            15.16,
            15.21,
            15.23,
            15.26,
            15.37,
            15.41,
            15.66,
            15.86,
            15.84,
            15.57,
            15.63,
            15.63,
            15.76,
            15.9,
            15.97
        ],
        missingDataInfo: {},
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
                        "code": "2016Q4",
                        "name": {
                            "fi": "2016Q4",
                            "sv": "2016Q4",
                            "en": "2016Q4"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "2017Q1",
                        "name": {
                            "fi": "2017Q1",
                            "sv": "2017Q1",
                            "en": "2017Q1"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "2017Q2",
                        "name": {
                            "fi": "2017Q2",
                            "sv": "2017Q2",
                            "en": "2017Q2"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "2017Q3",
                        "name": {
                            "fi": "2017Q3",
                            "sv": "2017Q3",
                            "en": "2017Q3"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "2017Q4",
                        "name": {
                            "fi": "2017Q4",
                            "sv": "2017Q4",
                            "en": "2017Q4"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "2018Q1",
                        "name": {
                            "fi": "2018Q1",
                            "sv": "2018Q1",
                            "en": "2018Q1"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "2018Q2",
                        "name": {
                            "fi": "2018Q2",
                            "sv": "2018Q2",
                            "en": "2018Q2"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "2018Q3",
                        "name": {
                            "fi": "2018Q3",
                            "sv": "2018Q3",
                            "en": "2018Q3"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "2018Q4",
                        "name": {
                            "fi": "2018Q4",
                            "sv": "2018Q4",
                            "en": "2018Q4"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "2019Q1",
                        "name": {
                            "fi": "2019Q1",
                            "sv": "2019Q1",
                            "en": "2019Q1"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "2019Q2",
                        "name": {
                            "fi": "2019Q2",
                            "sv": "2019Q2",
                            "en": "2019Q2"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "2019Q3",
                        "name": {
                            "fi": "2019Q3",
                            "sv": "2019Q3",
                            "en": "2019Q3"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "2019Q4",
                        "name": {
                            "fi": "2019Q4",
                            "sv": "2019Q4",
                            "en": "2019Q4"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "2020Q1",
                        "name": {
                            "fi": "2020Q1",
                            "sv": "2020Q1",
                            "en": "2020Q1"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "2020Q2",
                        "name": {
                            "fi": "2020Q2",
                            "sv": "2020Q2",
                            "en": "2020Q2"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "2020Q3",
                        "name": {
                            "fi": "2020Q3",
                            "sv": "2020Q3",
                            "en": "2020Q3"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "2020Q4",
                        "name": {
                            "fi": "2020Q4",
                            "sv": "2020Q4",
                            "en": "2020Q4"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "2021Q1",
                        "name": {
                            "fi": "2021Q1",
                            "sv": "2021Q1",
                            "en": "2021Q1"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
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
                    }
                ]
            }
        ],
        "selectableVariableCodes": [],
        "rowVariableCodes": [
            "Rahoitusmuoto"
        ],
        "columnVariableCodes": [
            "Vuosineljännes"
        ],
        "header": {
            "fi": "Neliövuokra (eur/m2), Helsinki, Yksiöt 2016Q4-2022Q4 muuttujana Rahoitusmuoto",
            "sv": "Kvadratmeterspris (eur/m2), Helsingfors, Enrumslägenhet 2016Q4-2022Q4 efter Finansieringssätt",
            "en": "Rents per square meter (eur/m2), Helsinki, One-room flat 2016Q4-2022Q4 by Type of funding"
        },
        "visualizationSettings": {
            "visualizationType": EVisualizationType.StackedVerticalBarChart,
            "timeVariableIntervals": ETimeVariableInterval.Quarter,
            "timeSeriesStartingPoint": "2016-10-01T00:00:00",
            "cutValueAxis": false,
            "showLastLabel": false
        }
    },
    selectedVariableCodes: undefined
}