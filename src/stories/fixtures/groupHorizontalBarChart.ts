import { EVariableType, EVisualizationType, IQueryVisualizationResponse } from "../../core";
import { ETimeVariableInterval } from "../../core/types/queryVisualizationResponse";

export const GROUP_HORIZONTAL_BAR_CHART_WITH_SELECTABLES: { pxGraphData: IQueryVisualizationResponse, selectedVariableCodes: { [key: string]: string[] } | undefined } = {
    pxGraphData: {
        "tableReference": { name: "table.px", hierarchy: ["foo", "bar"] },
        data: [
            11096.0,
            4845.0,
            11625.0,
            5174.0,
            21.81,
            13.91,
            21.98,
            14.04,
            11596.0,
            11700.0,
            12016.0,
            12665.0,
            15.38,
            12.26,
            15.55,
            12.42,
            29948.0,
            14009.0,
            30484.0,
            14669.0,
            14.03,
            11.31,
            14.08,
            11.43,
            29473.0,
            30318.0,
            31047.0,
            32329.0,
            10.35,
            10.22,
            10.44,
            10.32
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
                    },
                    {
                        code: "msu",
                        name: {
                            "fi": "Muu Suomi (koko maa pl. PKS)",
                            "sv": "Övriga Finland (Hela landet utan Huvudstadsregionen)",
                            "en": "Whole country excluding Greater Helsinki"
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
                    },
                    {
                        code: "keskivuokra",
                        name: {
                            "fi": "Neliövuokra (eur/m2)",
                            "sv": "Kvadratmeterspris (eur/m2)",
                            "en": "Rents per square meter (eur/m2)"
                        },
                        note: null,
                        isSum: false,
                        contentComponent: {
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
            }
        ],
        selectableVariableCodes: [
            "Alue",
            "Huoneluku",
            "Tiedot"
        ],
        rowVariableCodes: [
            "Vuosineljännes"
        ],
        columnVariableCodes: [
            "Rahoitusmuoto"
        ],
        header: {
            "fi": "Tiedot 2015Q1-2015Q2 muuttujina Tiedot, Alue, Huoneluku, Rahoitusmuoto",
            "sv": "Uppgifter 2015Q1-2015Q2 efter Uppgifter, Område, Antal rum, Finansieringssätt",
            "en": "Information 2015Q1-2015Q2 by Information, Region, Number of rooms, Type of funding"
        },
        visualizationSettings: {
            sorting: "2015Q1",
            timeVariableIntervals: ETimeVariableInterval.Quarter,
            visualizationType: EVisualizationType.GroupHorizontalBarChart,
            defaultSelectableVariableCodes: null
        },
    },
    selectedVariableCodes: { 'Alue': ['pks'], 'Huoneluku': ['01'], 'Tiedot': ['lkm'] }
};

export const GROUP_HORIZONTAL_BAR_CHART: { pxGraphData: IQueryVisualizationResponse, selectedVariableCodes: { [key: string]: string[] } | undefined } = {
    pxGraphData: {
        tableReference: { name: "table.px", hierarchy: ["foo", "bar"] },
        data: [
            11096.0,
            4845.0,
            11625.0,
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
            }
        ],
        selectableVariableCodes: [],
        rowVariableCodes: [
            "Vuosineljännes"
        ],
        columnVariableCodes: [
            "Rahoitusmuoto"
        ],
        header: {
            "fi": "Lukumäärä, Pääkaupunkiseutu (PKS), Yksiöt 2015Q1-2015Q2 muuttujana Rahoitusmuoto",
            "sv": "Antal, Huvudstadsregionen, Enrumslägenhet 2015Q1-2015Q2 efter Finansieringssätt",
            "en": "Number, Greater Helsinki, One-room flat 2015Q1-2015Q2 by Type of funding"
        },
        visualizationSettings: {
            sorting: "2015Q1",
            visualizationType: EVisualizationType.GroupHorizontalBarChart,
            defaultSelectableVariableCodes: null,
            timeVariableIntervals: ETimeVariableInterval.Quarter,
        }
    },
    selectedVariableCodes: undefined
}

export const GROUP_HORIZONTAL_BAR_CHART_WITH_SUM_SORTING: { pxGraphData: IQueryVisualizationResponse, selectedVariableCodes: { [key: string]: string[] } | undefined } =
{
    pxGraphData: {
        tableReference: { name: "table.px", hierarchy: ["foo", "bar"] },
        data: [
            86.0,
            0.0,
            1.0,
            9845.0,
            8.0,
            82.0,
            748.0,
            155.0,
            35.0
        ],
        missingDataInfo: {},
        dataNotes: {},
        metaData: [
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
                        code: "2020",
                        name: {
                            "fi": "2020",
                            "sv": "2020",
                            "en": "2020"
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
                        code: "emission",
                        name: {
                            "fi": "Päästö, tuhatta tonnia CO2-ekv.",
                            "sv": "Utsläpp, tusen ton CO2-ekv.",
                            "en": "Emission, thousand tonnes of CO2 eq."
                        },
                        note: null,
                        isSum: false,
                        contentComponent: {
                            unit: {
                                "fi": "tuhatta tonnia CO2-ekv.",
                                "sv": "tusen ton CO2-ekv.",
                                "en": "thousand tonnes of CO2 eq."
                            },
                            source: {
                                "fi": "PxVisualizer-fi",
                                "sv": "PxVisualizer-sv",
                                "en": "PxVisualizer-en"
                            },
                            numberOfDecimals: 0,
                            lastUpdated: "2022-03-17T06:00:00Z"
                        }
                    }
                ]
            },
            {
                code: "Päästöluokka",
                name: {
                    "fi": "Päästöluokka",
                    "sv": "Utsläppsklass",
                    "en": "Emission category"
                },
                note: null,
                type: EVariableType.OtherClassificatory,
                values: [
                    {
                        code: "1A3a",
                        name: {
                            "fi": "1A3a Kotimaan lentoliikenne",
                            "sv": "1A3a Inrikes flygtrafik",
                            "en": "1A3a Domestic aviation"
                        },
                        note: null,
                        isSum: false,
                        contentComponent: null
                    },
                    {
                        code: "1A3b",
                        name: {
                            "fi": "1A3b Tieliikenne",
                            "sv": "1A3b Vägtrafik",
                            "en": "1A3b Road transportation"
                        },
                        note: null,
                        isSum: false,
                        contentComponent: null
                    },
                    {
                        code: "1A4bi",
                        name: {
                            "fi": "1A4bi Kotitalouksien lämmitys",
                            "sv": "1A4bi Hushållen, egen uppvärmning av bostäder och lokaler",
                            "en": "1A4bi Residential, stationary"
                        },
                        note: null,
                        isSum: false,
                        contentComponent: null
                    }
                ]
            },
            {
                code: "Kasvihuonekaasu",
                name: {
                    "fi": "Kasvihuonekaasu",
                    "sv": "Växthusgas",
                    "en": "Greenhouse gas"
                },
                note: null,
                type: EVariableType.OtherClassificatory,
                values: [
                    {
                        code: "01",
                        name: {
                            "fi": "Hiilidioksidi (CO2)",
                            "sv": "Koldioksid (CO2)",
                            "en": "Carbon dioxide (CO2)"
                        },
                        note: null,
                        isSum: false,
                        contentComponent: null
                    },
                    {
                        code: "02",
                        name: {
                            "fi": "Metaani (CH4)",
                            "sv": "Metan (CH4)",
                            "en": "Methane (CH4)"
                        },
                        note: null,
                        isSum: false,
                        contentComponent: null
                    },
                    {
                        code: "03",
                        name: {
                            "fi": "Dityppioksidi (N2O)",
                            "sv": "Dikväveoksid (N2O)",
                            "en": "Nitrous oxide (N2O)"
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
            "Päästöluokka"
        ],
        columnVariableCodes: [
            "Kasvihuonekaasu"
        ],
        header: {
            "fi": "Päästö, tuhatta tonnia CO2-ekv. 2020 muuttujina Päästöluokka, Kasvihuonekaasu",
            "sv": "Utsläpp, tusen ton CO2-ekv. 2020 efter Utsläppsklass, Växthusgas",
            "en": "Emission, thousand tonnes of CO2 eq. 2020 by Emission category, Greenhouse gas"
        },
        visualizationSettings: {
            sorting: "sum",
            timeVariableIntervals: ETimeVariableInterval.Year,
            visualizationType: EVisualizationType.GroupHorizontalBarChart,
            defaultSelectableVariableCodes: null
        }
    },
    selectedVariableCodes: undefined
};

export const GROUP_HORIZONTAL_BAR_CHART_WITH_ONLY_NEGATIVE_VALUES: { pxGraphData: IQueryVisualizationResponse, selectedVariableCodes: { [key: string]: string[] } | undefined } = {
    pxGraphData: {
        tableReference: { name: "table.px", hierarchy: ["foo", "bar"] },
        "data": [
            -3.1,
            -1.8,
            -4.0,
            -1.6,
            -5.0,
            -1.8
        ],
        missingDataInfo: {},
        "dataNotes": {},
        "metaData": [
            {
                "code": "Talotyyppi",
                "name": {
                    "fi": "Talotyyppi",
                    "sv": "Hustyp",
                    "en": "Building type"
                },
                "note": null,
                "type": EVariableType.OtherClassificatory,
                "values": [
                    {
                        "code": "0",
                        "name": {
                            "fi": "Talotyypit yhteensä",
                            "sv": "Hustyp totalt",
                            "en": "Building types total"
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
                "type": EVariableType.OtherClassificatory,
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
                        "code": "neljmuut_P_QA_T",
                        "name": {
                            "fi": "Muutos edelliseen neljännekseen (indeksi 2020=100)",
                            "sv": "Kvartalsförändring (index 2020=100)",
                            "en": "Quarterly change (index 2020=100)"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": {
                            "unit": {
                                "fi": "%",
                                "sv": "%",
                                "en": "%"
                            },
                            "source": {
                                "fi": "PxVisualizer-fi",
                                "sv": "PxVisualizer-sv",
                                "en": "PxVisualizer-en"
                            },
                            "numberOfDecimals": 1,
                            "lastUpdated": "2023-05-03T05:00:00Z"
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
                        "code": "2022Q4",
                        "name": {
                            "fi": "2022Q4",
                            "sv": "2022Q4",
                            "en": "2022Q4"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "2023Q1",
                        "name": {
                            "fi": "2023Q1*",
                            "sv": "2023Q1*",
                            "en": "2023Q1*"
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
                "type": EVariableType.OtherClassificatory,
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
                        "code": "049",
                        "name": {
                            "fi": "Espoo-Kauniainen",
                            "sv": "Esbo-Grankulla",
                            "en": "Espoo-Kauniainen"
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
                    }
                ]
            }
        ],
        "selectableVariableCodes": [

        ],
        "rowVariableCodes": [
            "Vuosineljännes"
        ],
        "columnVariableCodes": [
            "Alue"
        ],
        "header": {
            "fi": "Muutos edelliseen neljännekseen (indeksi 2020=100), Talotyypit yhteensä 2022Q4-2023Q1* muuttujana Alue",
            "sv": "Kvartalsförändring (index 2020=100), Hustyp totalt 2022Q4-2023Q1* efter Område",
            "en": "Quarterly change (index 2020=100), Building types total 2022Q4-2023Q1* by Region"
        },
        "visualizationSettings": {
            "visualizationType": EVisualizationType.GroupHorizontalBarChart,
            "timeVariableIntervals": ETimeVariableInterval.Quarter,
            "timeSeriesStartingPoint": "2022-10-01T00:00:00",
            "cutValueAxis": false,
            "showLastLabel": false
        }
    },
    selectedVariableCodes: undefined
};