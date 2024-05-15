import { EVariableType, EVisualizationType, IQueryVisualizationResponse } from "../../core";
import { ETimeVariableInterval } from "../../core/types/queryVisualizationResponse";
import { TVariableSelections } from "../../core/types/variableSelections";

export const SCATTER_PLOT: { pxGraphData: IQueryVisualizationResponse, selectedVariableCodes: TVariableSelections | undefined } = {
    pxGraphData: {
        tableReference: { name: "table.px", hierarchy: ["foo", "bar"] },
        data: [
            15.38,
            15.55,
            15.73,
            15.65,
            15.97,
            16.24,
            16.39,
            16.37,
            16.65,
            16.83,
            17.84,
            18.04,
            17.78,
            17.81,
            17.92,
            18.24,
            18.02,
            18.15,
            18.3,
            18.8,
            18.98,
            19.09,
            19.18,
            19.23,
            19.13,
            19.25,
            19.31,
            19.29,
            19.27,
            19.48,
            19.6,
            19.71,
            18.16,
            18.25,
            18.59,
            18.45,
            18.66,
            18.44,
            18.68,
            18.52,
            18.76,
            18.6,
            18.32,
            18.54,
            18.87,
            19.1,
            18.98,
            18.93,
            19.3,
            19.58,
            19.61,
            19.84,
            20.08,
            19.94,
            19.98,
            20.03,
            19.56,
            19.68,
            20.07,
            19.85,
            19.65,
            20.0,
            20.59,
            20.74
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
                    },
                    {
                        "code": "2015Q3",
                        "name": {
                            "fi": "2015Q3",
                            "sv": "2015Q3",
                            "en": "2015Q3"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "2015Q4",
                        "name": {
                            "fi": "2015Q4",
                            "sv": "2015Q4",
                            "en": "2015Q4"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "2016Q1",
                        "name": {
                            "fi": "2016Q1",
                            "sv": "2016Q1",
                            "en": "2016Q1"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "2016Q2",
                        "name": {
                            "fi": "2016Q2",
                            "sv": "2016Q2",
                            "en": "2016Q2"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "2016Q3",
                        "name": {
                            "fi": "2016Q3",
                            "sv": "2016Q3",
                            "en": "2016Q3"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
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
            "Tiedot"
        ],
        "columnVariableCodes": [
            "Vuosineljännes"
        ],
        "header": {
            "fi": "Tiedot, Pääkaupunkiseutu (PKS), Kaksiot, Vapaarahoitteinen 2015Q1-2022Q4 muuttujana Tiedot",
            "sv": "Uppgifter, Huvudstadsregionen, Tvårumslägenhet, Fri finansierad 2015Q1-2022Q4 efter Uppgifter",
            "en": "Information, Greater Helsinki, Two-room flat, Non subsidised 2015Q1-2022Q4 by Information"
        },
        visualizationSettings: {
            cutYAxis: false,
            markerSize: 52,
            visualizationType: EVisualizationType.ScatterPlot,
            timeVariableIntervals: ETimeVariableInterval.Quarter,
            defaultSelectableVariableCodes: null
        }
    },
    selectedVariableCodes: undefined
};

export const SCATTER_PLOT_WITH_SELECTABLES : { pxGraphData: IQueryVisualizationResponse, selectedVariableCodes: TVariableSelections | undefined } = {
    pxGraphData: {
        tableReference: { name: "table.px", hierarchy: ["foo", "bar"] },
        "data": [
            21.81,
            21.98,
            22.18,
            22.3,
            22.61,
            22.75,
            22.84,
            22.95,
            23.15,
            23.18,
            23.48,
            23.59,
            23.54,
            23.62,
            23.67,
            24.06,
            24.09,
            24.21,
            24.37,
            24.78,
            25.05,
            25.25,
            25.35,
            25.48,
            25.54,
            25.62,
            25.68,
            25.72,
            25.57,
            25.74,
            25.83,
            25.86,
            23.45,
            23.82,
            23.89,
            24.0,
            24.22,
            24.29,
            24.39,
            24.47,
            24.32,
            24.16,
            24.3,
            24.62,
            25.08,
            25.58,
            25.27,
            25.36,
            25.67,
            25.76,
            26.05,
            26.66,
            26.66,
            26.63,
            26.79,
            26.69,
            26.48,
            26.31,
            26.45,
            26.69,
            26.23,
            26.44,
            26.91,
            26.9,
            13.91,
            14.04,
            14.1,
            14.2,
            14.25,
            14.39,
            14.48,
            14.57,
            14.64,
            14.73,
            14.99,
            15.02,
            15.09,
            15.08,
            15.16,
            15.15,
            15.23,
            15.25,
            15.31,
            15.39,
            15.44,
            15.64,
            15.78,
            15.78,
            15.69,
            15.73,
            15.76,
            15.85,
            16.04,
            16.09,
            16.1,
            16.17,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            15.38,
            15.55,
            15.73,
            15.65,
            15.97,
            16.24,
            16.39,
            16.37,
            16.65,
            16.83,
            17.84,
            18.04,
            17.78,
            17.81,
            17.92,
            18.24,
            18.02,
            18.15,
            18.3,
            18.8,
            18.98,
            19.09,
            19.18,
            19.23,
            19.13,
            19.25,
            19.31,
            19.29,
            19.27,
            19.48,
            19.6,
            19.71,
            18.16,
            18.25,
            18.59,
            18.45,
            18.66,
            18.44,
            18.68,
            18.52,
            18.76,
            18.6,
            18.32,
            18.54,
            18.87,
            19.1,
            18.98,
            18.93,
            19.3,
            19.58,
            19.61,
            19.84,
            20.08,
            19.94,
            19.98,
            20.03,
            19.56,
            19.68,
            20.07,
            19.85,
            19.65,
            20.0,
            20.59,
            20.74,
            12.26,
            12.42,
            12.52,
            12.52,
            12.54,
            12.65,
            12.7,
            12.72,
            12.79,
            12.9,
            13.14,
            13.21,
            13.26,
            13.33,
            13.37,
            13.38,
            13.36,
            13.4,
            13.44,
            13.45,
            13.5,
            13.64,
            13.68,
            13.7,
            13.6,
            13.64,
            13.66,
            13.71,
            13.81,
            13.83,
            13.84,
            13.87,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            14.26,
            14.4,
            14.5,
            14.43,
            14.82,
            15.1,
            15.22,
            15.17,
            15.49,
            15.58,
            16.16,
            16.16,
            15.76,
            15.84,
            15.97,
            16.46,
            16.14,
            16.25,
            16.34,
            16.83,
            17.0,
            17.15,
            17.25,
            17.25,
            17.15,
            17.3,
            17.48,
            17.49,
            17.48,
            17.81,
            18.0,
            18.16,
            16.04,
            15.83,
            16.06,
            16.21,
            16.62,
            16.45,
            16.66,
            16.6,
            16.8,
            16.88,
            16.66,
            16.46,
            16.36,
            16.82,
            17.11,
            17.23,
            16.94,
            17.0,
            16.92,
            17.56,
            17.83,
            18.55,
            18.58,
            18.37,
            17.86,
            18.13,
            18.66,
            18.54,
            18.34,
            18.67,
            19.14,
            19.19,
            11.49,
            11.59,
            11.66,
            11.69,
            11.71,
            11.8,
            11.88,
            11.91,
            11.94,
            11.99,
            12.09,
            12.12,
            12.16,
            12.2,
            12.23,
            12.25,
            12.27,
            12.32,
            12.36,
            12.42,
            12.41,
            12.51,
            12.54,
            12.57,
            12.57,
            12.61,
            12.64,
            12.69,
            12.76,
            12.75,
            12.77,
            12.8,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            14.03,
            14.08,
            14.22,
            14.26,
            14.29,
            14.41,
            14.55,
            14.62,
            15.05,
            15.13,
            15.33,
            15.38,
            15.32,
            15.4,
            15.56,
            15.75,
            15.74,
            15.78,
            15.9,
            16.13,
            16.29,
            16.05,
            16.1,
            16.16,
            16.26,
            16.35,
            16.44,
            16.46,
            16.66,
            16.83,
            16.98,
            17.0,
            14.63,
            14.76,
            14.99,
            14.7,
            14.96,
            15.11,
            15.29,
            15.19,
            15.88,
            16.09,
            16.21,
            16.07,
            16.36,
            16.68,
            16.74,
            16.59,
            16.74,
            16.64,
            16.94,
            16.87,
            17.02,
            16.76,
            17.0,
            16.84,
            16.83,
            17.19,
            17.39,
            17.19,
            17.32,
            17.72,
            18.35,
            17.85,
            11.31,
            11.43,
            11.5,
            11.53,
            11.55,
            11.6,
            11.67,
            11.69,
            11.76,
            11.82,
            11.94,
            11.99,
            11.94,
            11.99,
            12.03,
            12.11,
            12.09,
            12.12,
            12.15,
            12.23,
            12.24,
            12.23,
            12.27,
            12.31,
            12.35,
            12.38,
            12.41,
            12.43,
            12.52,
            12.57,
            12.62,
            12.66,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            10.35,
            10.44,
            10.51,
            10.51,
            10.62,
            10.78,
            10.87,
            10.9,
            11.21,
            11.31,
            11.96,
            12.08,
            11.98,
            12.01,
            12.07,
            12.29,
            12.16,
            12.19,
            12.24,
            12.49,
            12.55,
            12.39,
            12.42,
            12.45,
            12.47,
            12.54,
            12.59,
            12.61,
            12.76,
            12.93,
            13.02,
            13.08,
            11.46,
            11.44,
            11.63,
            11.59,
            11.8,
            11.84,
            11.97,
            11.99,
            12.32,
            12.51,
            12.58,
            12.58,
            12.66,
            12.94,
            12.81,
            12.82,
            12.79,
            12.79,
            13.02,
            13.07,
            13.04,
            12.83,
            13.01,
            12.92,
            12.76,
            13.03,
            13.31,
            13.19,
            13.28,
            13.64,
            14.01,
            13.87,
            10.22,
            10.32,
            10.36,
            10.35,
            10.35,
            10.41,
            10.46,
            10.46,
            10.55,
            10.6,
            10.74,
            10.77,
            10.69,
            10.74,
            10.75,
            10.85,
            10.79,
            10.84,
            10.86,
            10.97,
            10.97,
            11.02,
            11.04,
            11.06,
            11.05,
            11.07,
            11.08,
            11.11,
            11.18,
            11.22,
            11.25,
            11.28,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            9.84,
            9.85,
            9.9,
            9.88,
            10.01,
            10.11,
            10.2,
            10.21,
            10.44,
            10.48,
            10.77,
            10.79,
            10.65,
            10.7,
            10.76,
            10.96,
            10.81,
            10.88,
            10.93,
            11.18,
            11.21,
            11.01,
            11.04,
            11.06,
            10.97,
            11.08,
            11.17,
            11.17,
            11.31,
            11.55,
            11.66,
            11.74,
            10.47,
            10.44,
            10.54,
            10.42,
            10.73,
            10.81,
            10.87,
            10.72,
            11.06,
            11.22,
            11.13,
            11.03,
            11.0,
            11.27,
            11.3,
            11.34,
            11.32,
            11.51,
            11.52,
            11.61,
            11.63,
            11.51,
            11.53,
            11.43,
            11.36,
            11.75,
            11.86,
            11.63,
            11.88,
            12.61,
            12.73,
            12.63,
            9.85,
            9.94,
            9.99,
            9.99,
            10.0,
            10.03,
            10.07,
            10.09,
            10.13,
            10.15,
            10.21,
            10.23,
            10.2,
            10.2,
            10.23,
            10.29,
            10.26,
            10.28,
            10.32,
            10.41,
            10.45,
            10.44,
            10.46,
            10.47,
            10.48,
            10.5,
            10.52,
            10.55,
            10.62,
            10.62,
            10.66,
            10.68,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null
        ],
        missingDataInfo: {
            "96": 3,
            "97": 3,
            "98": 3,
            "99": 3,
            "100": 3,
            "101": 3,
            "102": 3,
            "103": 3,
            "104": 3,
            "105": 3,
            "106": 3,
            "107": 3,
            "108": 3,
            "109": 3,
            "110": 3,
            "111": 3,
            "112": 3,
            "113": 3,
            "114": 3,
            "115": 3,
            "116": 3,
            "117": 3,
            "118": 3,
            "119": 3,
            "120": 3,
            "121": 3,
            "122": 3,
            "123": 3,
            "124": 3,
            "125": 3,
            "126": 3,
            "127": 3,
            "224": 3,
            "225": 3,
            "226": 3,
            "227": 3,
            "228": 3,
            "229": 3,
            "230": 3,
            "231": 3,
            "232": 3,
            "233": 3,
            "234": 3,
            "235": 3,
            "236": 3,
            "237": 3,
            "238": 3,
            "239": 3,
            "240": 3,
            "241": 3,
            "242": 3,
            "243": 3,
            "244": 3,
            "245": 3,
            "246": 3,
            "247": 3,
            "248": 3,
            "249": 3,
            "250": 3,
            "251": 3,
            "252": 3,
            "253": 3,
            "254": 3,
            "255": 3,
            "352": 3,
            "353": 3,
            "354": 3,
            "355": 3,
            "356": 3,
            "357": 3,
            "358": 3,
            "359": 3,
            "360": 3,
            "361": 3,
            "362": 3,
            "363": 3,
            "364": 3,
            "365": 3,
            "366": 3,
            "367": 3,
            "368": 3,
            "369": 3,
            "370": 3,
            "371": 3,
            "372": 3,
            "373": 3,
            "374": 3,
            "375": 3,
            "376": 3,
            "377": 3,
            "378": 3,
            "379": 3,
            "380": 3,
            "381": 3,
            "382": 3,
            "383": 3,
            "480": 3,
            "481": 3,
            "482": 3,
            "483": 3,
            "484": 3,
            "485": 3,
            "486": 3,
            "487": 3,
            "488": 3,
            "489": 3,
            "490": 3,
            "491": 3,
            "492": 3,
            "493": 3,
            "494": 3,
            "495": 3,
            "496": 3,
            "497": 3,
            "498": 3,
            "499": 3,
            "500": 3,
            "501": 3,
            "502": 3,
            "503": 3,
            "504": 3,
            "505": 3,
            "506": 3,
            "507": 3,
            "508": 3,
            "509": 3,
            "510": 3,
            "511": 3,
            "608": 3,
            "609": 3,
            "610": 3,
            "611": 3,
            "612": 3,
            "613": 3,
            "614": 3,
            "615": 3,
            "616": 3,
            "617": 3,
            "618": 3,
            "619": 3,
            "620": 3,
            "621": 3,
            "622": 3,
            "623": 3,
            "624": 3,
            "625": 3,
            "626": 3,
            "627": 3,
            "628": 3,
            "629": 3,
            "630": 3,
            "631": 3,
            "632": 3,
            "633": 3,
            "634": 3,
            "635": 3,
            "636": 3,
            "637": 3,
            "638": 3,
            "639": 3,
            "736": 3,
            "737": 3,
            "738": 3,
            "739": 3,
            "740": 3,
            "741": 3,
            "742": 3,
            "743": 3,
            "744": 3,
            "745": 3,
            "746": 3,
            "747": 3,
            "748": 3,
            "749": 3,
            "750": 3,
            "751": 3,
            "752": 3,
            "753": 3,
            "754": 3,
            "755": 3,
            "756": 3,
            "757": 3,
            "758": 3,
            "759": 3,
            "760": 3,
            "761": 3,
            "762": 3,
            "763": 3,
            "764": 3,
            "765": 3,
            "766": 3,
            "767": 3
        },
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
                    },
                    {
                        "code": "2015Q3",
                        "name": {
                            "fi": "2015Q3",
                            "sv": "2015Q3",
                            "en": "2015Q3"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "2015Q4",
                        "name": {
                            "fi": "2015Q4",
                            "sv": "2015Q4",
                            "en": "2015Q4"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "2016Q1",
                        "name": {
                            "fi": "2016Q1",
                            "sv": "2016Q1",
                            "en": "2016Q1"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "2016Q2",
                        "name": {
                            "fi": "2016Q2",
                            "sv": "2016Q2",
                            "en": "2016Q2"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "2016Q3",
                        "name": {
                            "fi": "2016Q3",
                            "sv": "2016Q3",
                            "en": "2016Q3"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
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
        "selectableVariableCodes": [
            "Alue",
            "Huoneluku",
            "Rahoitusmuoto"
        ],
        "rowVariableCodes": [
            "Tiedot"
        ],
        "columnVariableCodes": [
            "Vuosineljännes"
        ],
        "header": {
            "fi": "Tiedot 2015Q1-2022Q4 muuttujina Tiedot, Alue, Huoneluku, Rahoitusmuoto",
            "sv": "Uppgifter 2015Q1-2022Q4 efter Uppgifter, Område, Antal rum, Finansieringssätt",
            "en": "Information 2015Q1-2022Q4 by Information, Region, Number of rooms, Type of funding"
        },
        visualizationSettings: {
            cutYAxis: true,
            markerSize: 52,
            visualizationType: EVisualizationType.ScatterPlot,
            timeVariableIntervals: ETimeVariableInterval.Quarter,
            defaultSelectableVariableCodes: null
        }
    },
    selectedVariableCodes: {'Alue': ['pks'], 'Huoneluku': ['01'], 'Rahoitusmuoto': ['1']}
}