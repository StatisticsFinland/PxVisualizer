import { EVariableType, EVisualizationType, IQueryVisualizationResponse } from "../../core";
import { ETimeVariableInterval } from "../../core/types/queryVisualizationResponse";
import { TVariableSelections } from "../../core/types/variableSelections";

export const HORIZONTAL_BAR_CHART_ASCENDING: { pxGraphData: IQueryVisualizationResponse, selectedVariableCodes: TVariableSelections | undefined } = {
    pxGraphData: {
        tableReference: { name: "table.px", hierarchy: ["foo", "bar"] },
        data: [
            18.88,
            14.41,
            15.38,
            13.88,
            13.23
        ],
        missingDataInfo: {},
        dataNotes: {},
        metaData: [
            {
                code: "Vuosineljännes",
                name: {
                    fi: "Vuosineljännes",
                    sv: "Kvartal",
                    en: "Quarter"
                },
                note: null,
                type: EVariableType.Time,
                values: [
                    {
                        code: "2022Q4",
                        name: {
                            fi: "2022Q4",
                            sv: "2022Q4",
                            en: "2022Q4"
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
                    fi: "Huoneluku",
                    sv: "Antal rum",
                    en: "Number of rooms"
                },
                note: null,
                type: EVariableType.Ordinal,
                values: [
                    {
                        code: "00",
                        name: {
                            fi: "Yhteensä",
                            sv: "Totalt",
                            en: "Total"
                        },
                        note: null,
                        isSum: true,
                        contentComponent: null
                    }
                ]
            },
            {
                code: "Rahoitusmuoto",
                name: {
                    fi: "Rahoitusmuoto",
                    sv: "Finansieringssätt",
                    en: "Type of funding"
                },
                note: null,
                type: EVariableType.OtherClassificatory,
                values: [
                    {
                        code: "2",
                        name: {
                            fi: "Yhteensä",
                            sv: "Totalt",
                            en: "Total"
                        },
                        note: null,
                        isSum: true,
                        contentComponent: null
                    }
                ]
            },
            {
                code: "Tiedot",
                name: {
                    fi: "Tiedot",
                    sv: "Uppgifter",
                    en: "Information"
                },
                note: null,
                type: EVariableType.Content,
                values: [
                    {
                        code: "keskivuokra",
                        name: {
                            fi: "Neliövuokra (eur/m2)",
                            sv: "Kvadratmeterspris (eur/m2)",
                            en: "Rents per square meter (eur/m2)"
                        },
                        note: null,
                        isSum: false,
                        contentComponent: {
                            unit: {
                                fi: "eur / m2",
                                sv: "eur / m2",
                                en: "eur / m2"
                            },
                            source: {
                                fi: "PxVisualizer-fi",
                                sv: "PxVisualizer-sv",
                                en: "PxVisualizer-en"
                            },
                            numberOfDecimals: 2,
                            lastUpdated: "2023-01-19T06:00:00Z"
                        }
                    }
                ]
            },
            {
                code: "Alue",
                name: {
                    fi: "Alue",
                    sv: "Område",
                    en: "Region"
                },
                note: null,
                type: EVariableType.Geological,
                values: [
                    {
                        code: "091",
                        name: {
                            fi: "Helsinki",
                            sv: "Helsingfors",
                            en: "Helsinki"
                        },
                        note: null,
                        isSum: false,
                        contentComponent: null
                    },
                    {
                        code: "853",
                        name: {
                            fi: "Turku",
                            sv: "Åbo",
                            en: "Turku"
                        },
                        note: null,
                        isSum: false,
                        contentComponent: null
                    },
                    {
                        code: "837",
                        name: {
                            fi: "Tampere",
                            sv: "Tammerfors",
                            en: "Tampere"
                        },
                        note: null,
                        isSum: false,
                        contentComponent: null
                    },
                    {
                        code: "179",
                        name: {
                            fi: "Jyväskylä",
                            sv: "Jyväskylä",
                            en: "Jyväskylä"
                        },
                        note: null,
                        isSum: false,
                        contentComponent: null
                    },
                    {
                        code: "564",
                        name: {
                            fi: "Oulu",
                            sv: "Uleåborg",
                            en: "Oulu"
                        },
                        note: null,
                        isSum: false,
                        contentComponent: null
                    }
                ]
            }
        ],
        selectableVariableCodes: [],
        rowVariableCodes: [],
        columnVariableCodes: [
            "Alue"
        ],
        header: {
            fi: "Neliövuokra (eur/m2) 2022Q4 muuttujana Alue",
            sv: "Kvadratmeterspris (eur/m2) 2022Q4 efter Område",
            en: "Rents per square meter (eur/m2) 2022Q4 by Region"
        },
        visualizationSettings: {
            sorting: "ascending",
            timeVariableIntervals: ETimeVariableInterval.Quarter,
            visualizationType: EVisualizationType.HorizontalBarChart,
            defaultSelectableVariableCodes: null
        }
    },
    selectedVariableCodes: undefined
}

export const SELECTABLE_HORIZONTAL_BAR_CHART: { pxGraphData: IQueryVisualizationResponse, selectedVariableCodes: TVariableSelections | undefined } = {
    pxGraphData: {
        tableReference: { name: "table.px", hierarchy: ["foo", "bar"] },
        "data": [
            109.6,
            110.9,
            111.0,
            111.0,
            24.84,
            21.97,
            22.16,
            17.75,
            109.3,
            109.2,
            109.7,
            109.4,
            18.41,
            17.18,
            16.76,
            12.99,
            110.6,
            109.3,
            111.2,
            110.4,
            15.9,
            15.31,
            15.43,
            12.25
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
                    },
                    {
                        "code": "638",
                        "name": {
                            "fi": "Porvoo",
                            "sv": "Borgå",
                            "en": "Porvoo"
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
            visualizationType: EVisualizationType.HorizontalBarChart,
            timeVariableIntervals: ETimeVariableInterval.Quarter,
            defaultSelectableVariableCodes: {
                "Huoneluku": [
                    "01"
                ]
            }
        }
    },
    selectedVariableCodes: { Huoneluku: ['02'], Tiedot: ['keskivuokra'] }
}

export const HORIZONTAL_BAR_WITH_LONG_NUMERIC_LABELS: { pxGraphData: IQueryVisualizationResponse, selectedVariableCodes: TVariableSelections | undefined } = {
    pxGraphData: {
        "tableReference": { hierarchy: ["foo", "bar"], name: "table.px" },
        "data": [
            11707708.0,
            3182635.0,
            746194.0,
            675223.0,
            2633932.0,
            524875.0,
            310315.0,
            268094.0,
            279446.0,
            1016934.0,
            579896.0,
            1216438.0,
            1180567.0,
            1054824.0,
            328283.0,
            3291275.0,
            245529.0,
            906671.0,
            143756.0
        ],
        "dataNotes": {},
        "metaData": [
            {
                "code": "Rakennusvaihe",
                "name": {
                    "fi": "Rakennusvaihe",
                    "sv": "Byggnadsetap",
                    "en": "Construction stage"
                },
                "note": null,
                "type": EVariableType.OtherClassificatory,
                "values": [
                    {
                        "code": "1",
                        "name": {
                            "fi": "Myönnetyt rakennusluvat",
                            "sv": "Beviljade bygglov",
                            "en": "Building permits"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    }
                ]
            },
            {
                "code": "Kuukausi",
                "name": {
                    "fi": "Kuukausi",
                    "sv": "Månad",
                    "en": "Month"
                },
                "note": null,
                "type": EVariableType.Time,
                "values": [
                    {
                        "code": "2023M06",
                        "name": {
                            "fi": "2023M06",
                            "sv": "2023M06",
                            "en": "2023M06"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    }
                ]
            },
            {
                "code": "Käyttötarkoitus",
                "name": {
                    "fi": "Käyttötarkoitus",
                    "sv": "Användingssyfte",
                    "en": "Building type"
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
                        "code": "tilavuus_vuosisumma",
                        "name": {
                            "fi": "Tilavuus (m3), liukuva vuosisumma",
                            "sv": "Volym (m3), glidande årssumma",
                            "en": "Volume (m3), moving annual total"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": {
                            "unit": {
                                "fi": "M3",
                                "sv": "M3",
                                "en": "M3"
                            },
                            "source": {
                                "fi": "PxVisualizer-fi",
                                "sv": "PxVisualizer-sv",
                                "en": "PxVisualizer-en"
                            },
                            "numberOfDecimals": 0,
                            "lastUpdated": "2023-08-22T05:00:00Z"
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
                "type": EVariableType.OtherClassificatory,
                "values": [
                    {
                        "code": "MK01",
                        "name": {
                            "fi": "Uusimaa",
                            "sv": "Nyland",
                            "en": "Uusimaa"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "MK02",
                        "name": {
                            "fi": "Varsinais-Suomi",
                            "sv": "Egentliga Finland",
                            "en": "Southwest Finland"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "MK04",
                        "name": {
                            "fi": "Satakunta",
                            "sv": "Satakunta",
                            "en": "Satakunta"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "MK05",
                        "name": {
                            "fi": "Kanta-Häme",
                            "sv": "Egentliga Tavastland",
                            "en": "Kanta-Häme"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "MK06",
                        "name": {
                            "fi": "Pirkanmaa",
                            "sv": "Birkaland",
                            "en": "Pirkanmaa"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "MK07",
                        "name": {
                            "fi": "Päijät-Häme",
                            "sv": "Päijänne-Tavastland",
                            "en": "Päijät-Häme"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "MK08",
                        "name": {
                            "fi": "Kymenlaakso",
                            "sv": "Kymmenedalen",
                            "en": "Kymenlaakso"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "MK09",
                        "name": {
                            "fi": "Etelä-Karjala",
                            "sv": "Södra Karelen",
                            "en": "South Karelia"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "MK10",
                        "name": {
                            "fi": "Etelä-Savo",
                            "sv": "Södra Savolax",
                            "en": "South Savo"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "MK11",
                        "name": {
                            "fi": "Pohjois-Savo",
                            "sv": "Norra Savolax",
                            "en": "North Savo"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "MK12",
                        "name": {
                            "fi": "Pohjois-Karjala",
                            "sv": "Norra Karelen",
                            "en": "North Karelia"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "MK13",
                        "name": {
                            "fi": "Keski-Suomi",
                            "sv": "Mellersta Finland",
                            "en": "Central Finland"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "MK14",
                        "name": {
                            "fi": "Etelä-Pohjanmaa",
                            "sv": "Södra Österbotten",
                            "en": "South Ostrobothnia"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "MK15",
                        "name": {
                            "fi": "Pohjanmaa",
                            "sv": "Österbotten",
                            "en": "Ostrobothnia"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "MK16",
                        "name": {
                            "fi": "Keski-Pohjanmaa",
                            "sv": "Mellersta Österbotten",
                            "en": "Central Ostrobothnia"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "MK17",
                        "name": {
                            "fi": "Pohjois-Pohjanmaa",
                            "sv": "Norra Österbotten",
                            "en": "North Ostrobothnia"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "MK18",
                        "name": {
                            "fi": "Kainuu",
                            "sv": "Kajanaland",
                            "en": "Kainuu"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "MK19",
                        "name": {
                            "fi": "Lappi",
                            "sv": "Lappland",
                            "en": "Lapland"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "MK21",
                        "name": {
                            "fi": "Ahvenanmaa",
                            "sv": "Åland",
                            "en": " Åland"
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
            "fi": " Myönnetyt rakennusluvat maakunnittain, m3, liukuva vuosisumma, 2023M06",
            "sv": "Beviljade bygglov per landskap, m3, glidande årsumma, 2023M06 ",
            "en": "Granted building permits by region, moving annual total, 2023M06 "
        },
        "visualizationSettings": {
            "visualizationType": EVisualizationType.HorizontalBarChart,
            "timeVariableIntervals": ETimeVariableInterval.Month,
            "timeSeriesStartingPoint": "2023-06-01T00:00:00Z",
            "cutValueAxis": false,
            "sorting": "descending"
        }
    },
    selectedVariableCodes: {}
}

