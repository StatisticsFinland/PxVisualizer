import { EVariableType, EVisualizationType, IQueryVisualizationResponse } from "../../types";
import { ETimeVariableInterval } from "../../types/queryVisualizationResponse";
import { TVariableSelections } from "../../types/variableSelections";

export const VERTICAL_BAR_CHART_WITH_SELECTABLES: { pxGraphData: IQueryVisualizationResponse, selectedVariableCodes: TVariableSelections | undefined } = {
    pxGraphData: {
        "tableReference": { name: "table.px", hierarchy: ["foo", "bar"] },
        data: [
            11096.0,
            11596.0,
            5870.0,
            4845.0,
            11700.0,
            11871.0,
            29948.0,
            29473.0,
            9588.0,
            14009.0,
            30318.0,
            16630.0,
            11625.0,
            12016.0,
            6100.0,
            5174.0,
            12665.0,
            12517.0,
            30484.0,
            31047.0,
            10311.0,
            14669.0,
            32329.0,
            17518.0
        ],
        missingDataInfo: {},
        dataNotes: {},
        metaData: [
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
                            unit: {
                                "fi": "lukumäärä",
                                "sv": "antal",
                                "en": "number"
                            },
                            source: {
                                "fi": "PxVisualizer-fi",
                                "sv": "PxVisualizer-sv",
                                "en": "PxVisualizer-en"
                            },
                            numberOfDecimals: 0,
                            lastUpdated: "2023-01-19T06:00:00Z"
                        }
                    }
                ]
            },
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
                    },
                    {
                        code: "02",
                        name: {
                            "fi": "Kaksiot",
                            "sv": "Tvårumslägenhet",
                            "en": "Two-room flat"
                        },
                        note: null,
                        isSum: false,
                        contentComponent: null
                    },
                    {
                        "code": "03",
                        name: {
                            "fi": "Kolmiot+",
                            "sv": "Trerumslägenhet+",
                            "en": "Three-room flat+"
                        },
                        note: null,
                        isSum: false,
                        contentComponent: null
                    }
                ]
            }
        ],
        selectableVariableCodes: [
            "Vuosineljännes",
            "Alue",
            "Rahoitusmuoto"
        ],
        rowVariableCodes: [],
        columnVariableCodes: [
            "Huoneluku"
        ],
        header: {
            "fi": "Lukumäärä 2015Q1 muuttujina Alue, Huoneluku, Rahoitusmuoto",
            "sv": "Antal 2015Q1 efter Område, Antal rum, Finansieringssätt",
            "en": "Number 2015Q1 by Region, Number of rooms, Type of funding"
        },
        visualizationSettings: {
            defaultSelectableVariableCodes: {
                "Vuosineljännes": [
                    "2015Q1"
                ],
                "Alue": [
                    "pks"
                ],
                "Rahoitusmuoto": [
                    "1"
                ]
            },
            showLastLabel: false,
            visualizationType: EVisualizationType.VerticalBarChart,
            timeVariableIntervals: ETimeVariableInterval.Quarter,
        }
    },
    selectedVariableCodes: {'Vuosineljännes': ['2015Q1'], 'Alue': ['pks'], 'Rahoitusmuoto': ['1']}
};

export const VERTICAL_BAR_CHART: { pxGraphData: IQueryVisualizationResponse, selectedVariableCodes: TVariableSelections | undefined } = {
    pxGraphData: {
        "tableReference": { name: "table.px", hierarchy: ["foo", "bar"] },
        columnVariableCodes: ['Vuosi'],
        data: [2824.0, 2620.0, 2818.0],
        dataNotes: {},
        header: {
            "fi": "Tiedot 1970-1972",
            "sv": "Uppgifter 1970-1972",
            "en": "Information 1970-1972"
        },
        missingDataInfo: {},
        metaData: [
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
                        code: "kulutus_t",
                        name: {
                            "fi": "Kivihiilen kulutus (1000 t)",
                            "sv": "Stenkolsförbrukning (1 000 t)",
                            "en": "Consumption of hard coal (1,000 ton)"
                        },
                        note: null,
                        isSum: false,
                        contentComponent: {
                            unit: {
                                "fi": "1000 t",
                                "sv": "1000 t (sv)",
                                "en": "1000 t"
                            },
                            source: {
                                "fi": "PxVisualizer-fi",
                                "sv": "PxVisualizer-sv",
                                "en": "PxVisualizer-en"
                            },
                            numberOfDecimals: 0,
                            lastUpdated: "2023-02-01T06:00:00Z"
                        }
                    }
                ]
            },
            {
                code: "Vuosi",
                name: {
                    "fi": "Vuosi",
                    "sv": "År",
                    "en": "Year"
                },
                note: null,
                type: EVariableType.Time,
                values: [
                    {
                        code: "1970",
                        name: {
                            "fi": "1970",
                            "sv": "1970 (sv)",
                            "en": "1970"
                        },
                        note: null,
                        isSum: false,
                        contentComponent: null
                    },
                    {
                        code: "1971",
                        name: {
                            "fi": "1971",
                            "sv": "1971",
                            "en": "1971"
                        },
                        note: null,
                        isSum: false,
                        contentComponent: null
                    },
                    {
                        code: "1972",
                        name: {
                            "fi": "1972",
                            "sv": "1972",
                            "en": "1972"
                        },
                        note: null,
                        isSum: false,
                        contentComponent: null
                    }
                ]
            }
        ],
        rowVariableCodes: [],
        selectableVariableCodes: [],
        visualizationSettings: {
            defaultSelectableVariableCodes: null,
            showLastLabel: false,
            visualizationType: EVisualizationType.VerticalBarChart,
            timeVariableIntervals: ETimeVariableInterval.Year,
        }
    },
    selectedVariableCodes: undefined
};

export const PARTIAL_DEFAULT_SELECTABLE_VARIABLE_CODES = {
    "Vuosineljännes": [
        "2015Q1"
    ]
};

export const PARTIAL_SELECTED_VARIABLE_CODES = {'Alue': ['pks']};