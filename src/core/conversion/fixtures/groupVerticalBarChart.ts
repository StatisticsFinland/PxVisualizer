import { EVariableType, EVisualizationType, IQueryVisualizationResponse } from "../../types";
import { ETimeVariableInterval } from "../../types/queryVisualizationResponse";
import { TVariableSelections } from "../../types/variableSelections";

export const GROUP_VERTICAL_BAR_CHART_WITH_SELECTABLES_PIVOTED: { pxGraphData: IQueryVisualizationResponse, selectedVariableCodes: TVariableSelections } = {
    pxGraphData: {
        tableReference: { name: "table.px", hierarchy: ["foo", "bar"] },
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
            "Alue",
            "Huoneluku",
            "Tiedot"
        ],
        "rowVariableCodes": [
            "Vuosineljännes"
        ],
        "columnVariableCodes": [
            "Rahoitusmuoto"
        ],
        "header": {
            "fi": "Tiedot 2015Q1-2015Q2 muuttujina Tiedot, Alue, Huoneluku, Rahoitusmuoto",
            "sv": "Uppgifter 2015Q1-2015Q2 efter Uppgifter, Område, Antal rum, Finansieringssätt",
            "en": "Information 2015Q1-2015Q2 by Information, Region, Number of rooms, Type of funding"
        },
        visualizationSettings: {
            showLastLabel: false,
            timeVariableIntervals: ETimeVariableInterval.Quarter,
            visualizationType: EVisualizationType.GroupVerticalBarChart,
            defaultSelectableVariableCodes: null
        }
    },
    selectedVariableCodes: {'Alue': ['pks'], 'Huoneluku': ['01'], 'Tiedot': ['lkm']}
}

export const GROUP_VERTICAL_BAR_CHART_WITH_NOMINAL_AXIS_EXTRA_LONG_LABELS: {pxGraphData: IQueryVisualizationResponse, selectedVariableCodes: TVariableSelections} = {
    pxGraphData: {
        tableReference: {
            name: "table.px",
            hierarchy: [
                "foo",
                "bar"
            ]
        },
        data: [
            23420.0,
            8620.0,
            41828.0,
            1397.0,
            82310.0,
            61291.0,
            196812.0,
            2973.0,
            173867.0,
            92982.0,
            168305.0,
            2792.0,
            716007.0,
            78581.0,
            71826.0,
            3357.0
        ],
        missingDataInfo: {},
        dataNotes: {},
        metaData: [
            {
                code: "Alue",
                name: {
                    "fi": "Alue",
                    "sv": "Område",
                    "en": "Area"
                },
                note: null,
                type: EVariableType.Geological,
                values: [
                    {
                        code: "SSS",
                        name: {
                            "fi": "KOKO MAA",
                            "sv": "HELA LANDET",
                            "en": "WHOLE COUNTRY"
                        },
                        note: null,
                        isSum: true,
                        contentComponent: null
                    }
                ]
            },
            {
                code: "Hallintaperuste",
                name: {
                    "fi": "Hallintaperuste",
                    "sv": "Upplåtelseform",
                    "en": "Tenure status"
                },
                note: null,
                type: EVariableType.OtherClassificatory,
                values: [
                    {
                        code: "1-2",
                        name: {
                            "fi": "Kaikki omistusasunnot",
                            "sv": "Alla ägarbostäder",
                            "en": "All owner-occupied dwellings"
                        },
                        note: null,
                        isSum: false,
                        contentComponent: null
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
                        code: "2022",
                        name: {
                            "fi": "2022",
                            "sv": "2022",
                            "en": "2022"
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
                        code: "Lkm",
                        name: {
                            "fi": "Asuntokuntia",
                            "sv": "Bostadshushåll",
                            "en": "Household-dwelling units"
                        },
                        note: null,
                        isSum: false,
                        contentComponent: {
                            unit: {
                                "fi": "Lukumäärä",
                                "sv": "Antal",
                                "en": "Number"
                            },
                            source: {
                                "fi": "PxVisualizer-fi",
                                "sv": "PxVisualizer-sv",
                                "en": "PxVisualizer-en"
                            },
                            numberOfDecimals: 0,
                            lastUpdated: "2023-10-12T05:00:00Z"
                        }
                    }
                ]
            },
            {
                code: "Huoneita",
                name: {
                    "fi": "Huoneita",
                    "sv": "Rum",
                    "en": "Rooms"
                },
                note: null,
                type: EVariableType.Ordinal,
                values: [
                    {
                        code: "1",
                        name: {
                            "fi": "1 huone",
                            "sv": "1 rum",
                            "en": "1 room"
                        },
                        note: null,
                        isSum: false,
                        contentComponent: null
                    },
                    {
                        code: "2",
                        name: {
                            "fi": "2 huonetta",
                            "sv": "2 rum",
                            "en": "2 rooms"
                        },
                        note: null,
                        isSum: false,
                        contentComponent: null
                    },
                    {
                        code: "3",
                        name: {
                            "fi": "3 huonetta",
                            "sv": "3 rum",
                            "en": "3 rooms"
                        },
                        note: null,
                        isSum: false,
                        contentComponent: null
                    },
                    {
                        code: "4+",
                        name: {
                            "fi": "4+ huonetta",
                            "sv": "4+ rum",
                            "en": "4+ rooms"
                        },
                        note: null,
                        isSum: false,
                        contentComponent: null
                    }
                ]
            },
            {
                code: "Talotyyppi",
                name: {
                    "fi": "Talotyyppi",
                    "sv": "Hustyp",
                    "en": "Type of building"
                },
                note: null,
                type: EVariableType.OtherClassificatory,
                values: [
                    {
                        code: "1",
                        name: {
                            "fi": "Omakoti- ja paritalot Omakoti- ja paritalotOmakoti- ja paritalot",
                            "sv": "Egnahems- och parhus",
                            "en": "One-dwelling and two-dwelling houses"
                        },
                        note: null,
                        isSum: false,
                        contentComponent: null
                    },
                    {
                        code: "2",
                        name: {
                            "fi": "Rivitalot Rivitalot Rivitalot RivitalotRivitalotRivitalot",
                            "sv": "Radhus",
                            "en": "Terraced houses"
                        },
                        note: null,
                        isSum: false,
                        contentComponent: null
                    },
                    {
                        code: "3",
                        name: {
                            "fi": "Kerrostalot Kerrostalot Kerrostalot KerrostalotKerrostalotKerrostalot",
                            "sv": "Flervåningshus",
                            "en": "Blocks of flats"
                        },
                        note: null,
                        isSum: false,
                        contentComponent: null
                    },
                    {
                        code: "4",
                        name: {
                            "fi": "Muut rakennukset Muut rakennukset Muut rakennukset Muut rakennuksetMuut rakennuksetMuut rakennukset",
                            "sv": "Övriga byggnader",
                            "en": "Other buildings"
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
            "Huoneita"
        ],
        columnVariableCodes: [
            "Talotyyppi"
        ],
        header: {
            "fi": "Asuntokuntia, Kaikki omistusasunnot 2022 muuttujina Talotyyppi, Huoneita",
            "sv": "Bostadshushåll, Alla ägarbostäder 2022 efter Hustyp, Rum",
            "en": "Household-dwelling units, All owner-occupied dwellings 2022 by Type of building, Rooms"
        },
        visualizationSettings: {
            visualizationType: EVisualizationType.GroupVerticalBarChart,
            timeVariableIntervals: ETimeVariableInterval.Year,
            timeSeriesStartingPoint: "2022-01-01T00:00:00Z",
            cutValueAxis: false,
            showLastLabel: false
        }
    },
    selectedVariableCodes: {}
}