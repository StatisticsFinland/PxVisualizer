import { EVariableType, EVisualizationType, IQueryVisualizationResponse } from "../../core";
import { ETimeVariableInterval } from "../../core/types/queryVisualizationResponse";
import { TVariableSelections } from "../../core/types/variableSelections";
import { IFunctionalMenuItem, ILinkMenuItem } from "../../react/components/burgerMenu/burgerMenu";

export const VERTICAL_BAR_CHART_WITH_SELECTABLES: { pxGraphData: IQueryVisualizationResponse, selectedVariableCodes: TVariableSelections | undefined } = {
    pxGraphData: {
        tableReference: { name: "table.px", hierarchy: ["foo", "bar"] },
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
            timeSeriesStartingPoint: '2015-01-01T00:00:00'
        }
    },
    selectedVariableCodes: { 'Vuosineljännes': ['2015Q1'], 'Alue': ['pks'], 'Rahoitusmuoto': ['1'] }
};

export const VERTICAL_BAR_CHART_WITH_CUSTOM_MENU_ITEMS: {
    pxGraphData: IQueryVisualizationResponse,
    selectedVariableCodes: TVariableSelections | undefined,
    menuItemDefinitions?: (IFunctionalMenuItem | ILinkMenuItem)[]
} = {
    pxGraphData: {
        tableReference: { name: "table.px", hierarchy: ["foo", "bar"] },
        columnVariableCodes: ['Vuosi'],
        data: [2824.0, 2620.0, 2818.0],
        missingDataInfo: {},
        dataNotes: {},
        header: {
            "fi": "Tiedot 1970-1972",
            "sv": "Uppgifter 1970-1972",
            "en": "Information 1970-1972"
        },
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
                                "sv": "1000 t",
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
                            "sv": "1970",
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
            timeSeriesStartingPoint: '1970-01-01T00:00:00',
        }
    },
    selectedVariableCodes: undefined,
    menuItemDefinitions: [
        {
            onClick: () => { alert('Custom function was clicked!') },
            text: 'Custom function'
        },
        {
            url: 'https://www.google.fi',
            text: 'Custom external link that opens a tab',
            isExternal: true,
            openNewTab: true
        },
        {
            url: 'https://www.google.fi',
            text: 'Custom link',
        }
    ]
};

export const VERTICAL_BAR_CHART: { pxGraphData: IQueryVisualizationResponse, selectedVariableCodes: TVariableSelections | undefined } = {
    pxGraphData: {
        tableReference: { name: "table.px", hierarchy: ["foo", "bar"] },
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
                                "sv": "1000 t",
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
                            "sv": "1970",
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
            timeSeriesStartingPoint: '1970-01-01T00:00:00'
        }
    },
    selectedVariableCodes: undefined
};

export const VERTICAL_BAR_CHART_WITH_PRELIMINARY_DATA: {
    pxGraphData: IQueryVisualizationResponse,
    selectedVariableCodes: TVariableSelections | undefined
} = {
    pxGraphData: {
        tableReference: { name: "table.px", hierarchy: ["foo", "bar"] },
        "data": [
            141.4,
            182.3,
            177.5,
            174.9,
            186.5
        ],
        missingDataInfo: {},
        "dataNotes": {},
        "metaData": [
            {
                "code": "Toimiala",
                "name": {
                    "fi": "Toimiala",
                    "sv": "Näringsgren",
                    "en": "Industry"
                },
                "note": null,
                "type": EVariableType.OtherClassificatory,
                "values": [
                    {
                        "code": "B",
                        "name": {
                            "fi": "B Kaivostoiminta ja louhinta",
                            "sv": "B Utvinning av mineral",
                            "en": "B Mining and quarrying"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    }
                ]
            },
            {
                "code": "Muuttuja",
                "name": {
                    "fi": "Muuttuja",
                    "sv": "Variabel",
                    "en": "Variable"
                },
                "note": null,
                "type": EVariableType.OtherClassificatory,
                "values": [
                    {
                        "code": "lv",
                        "name": {
                            "fi": "Liikevaihto",
                            "sv": "Omsättning",
                            "en": "Turnover"
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
                        "code": "tyopaivakorjattu",
                        "name": {
                            "fi": "Työpäiväkorjattu indeksisarja",
                            "sv": "Arbetsdagskorrigerad indexserie",
                            "en": "Working day adjusted index series"
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
                            "lastUpdated": "2023-01-13T06:00:00Z"
                        }
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
                        "code": "2022M07",
                        "name": {
                            "fi": "2022M07",
                            "sv": "2022M07",
                            "en": "2022M07"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "2022M08",
                        "name": {
                            "fi": "2022M08",
                            "sv": "2022M08",
                            "en": "2022M08"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "2022M09",
                        "name": {
                            "fi": "2022M09",
                            "sv": "2022M09",
                            "en": "2022M09"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "2022M10",
                        "name": {
                            "fi": "2022M10",
                            "sv": "2022M10",
                            "en": "2022M10"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "2022M11",
                        "name": {
                            "fi": "2022M11*",
                            "sv": "2022M11*",
                            "en": "2022M11*"
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
            "Kuukausi"
        ],
        "header": {
            "fi": "Työpäiväkorjattu indeksisarja, B Kaivostoiminta ja louhinta, Liikevaihto 2022M07-2022M11*",
            "sv": "Arbetsdagskorrigerad indexserie, B Utvinning av mineral, Omsättning 2022M07-2022M11*",
            "en": "Working day adjusted index series, B Mining and quarrying, Turnover 2022M07-2022M11*"
        },
        "visualizationSettings": {
            showLastLabel: false,
            visualizationType: EVisualizationType.VerticalBarChart,
            defaultSelectableVariableCodes: null,
            timeVariableIntervals: ETimeVariableInterval.Month,
            timeSeriesStartingPoint: '2022-07-01T00:00:00'
        }
    },
    selectedVariableCodes: undefined
}

export const VERTICAL_BAR_CHART_WITH_NEGATIVE_VALUES: {
    pxGraphData: IQueryVisualizationResponse,
    selectedVariableCodes: TVariableSelections | undefined,
    menuItemDefinitions?: { text: string, onClick: () => void }[]
} = {
    pxGraphData: {
        tableReference: { name: "table.px", hierarchy: ["foo", "bar"] },
        "data": [
            -0.4,
            -1.0,
            1.4,
            1.8,
            1.2,
            2.5,
            4.5
        ],
        missingDataInfo: {},
        "dataNotes": {},
        "metaData": [
            {
                "code": "Kuntatyyppi",
                "name": {
                    "fi": "Kuntatyyppi",
                    "sv": "Kuntatyyppi",
                    "en": "Kuntatyyppi"
                },
                "note": null,
                "type": EVariableType.OtherClassificatory,
                "values": [
                    {
                        "code": "1",
                        "name": {
                            "fi": "Kuntatalous",
                            "sv": "Kommunalekonomi",
                            "en": "Local government finances"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    }
                ]
            },
            {
                "code": "Tehtäväalue",
                "name": {
                    "fi": "Tehtäväalue",
                    "sv": "Uppgiftsområde",
                    "en": "Function area"
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
                        "code": "vmuutos_kunteht",
                        "name": {
                            "fi": "Vuosimuutos, %",
                            "sv": "Årsförändring, %",
                            "en": "Annual change, %"
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
                            "lastUpdated": "2023-06-16T05:00:00Z"
                        }
                    }
                ]
            },
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
                        "code": "2016",
                        "name": {
                            "fi": "2016",
                            "sv": "2016",
                            "en": "2016"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "2017",
                        "name": {
                            "fi": "2017",
                            "sv": "2017",
                            "en": "2017"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "2018",
                        "name": {
                            "fi": "2018",
                            "sv": "2018",
                            "en": "2018"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "2019",
                        "name": {
                            "fi": "2019",
                            "sv": "2019",
                            "en": "2019"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "2020",
                        "name": {
                            "fi": "2020",
                            "sv": "2020",
                            "en": "2020"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "2021",
                        "name": {
                            "fi": "2021",
                            "sv": "2021",
                            "en": "2021"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "2022",
                        "name": {
                            "fi": "2022*",
                            "sv": "2022*",
                            "en": "2022*"
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

        ],
        "columnVariableCodes": [
            "Vuosi"
        ],
        "header": {
            "fi": "Vuosimuutos, %, Kuntatalous 2016-2022*",
            "sv": "Årsförändring, %, Kommunalekonomi 2016-2022*",
            "en": "Annual change, %, Local government finances 2016-2022*"
        },
        "visualizationSettings": {
            "visualizationType": EVisualizationType.VerticalBarChart,
            "timeVariableIntervals": ETimeVariableInterval.Year,
            "timeSeriesStartingPoint": "2016-01-01T00:00:00",
            "cutValueAxis": false,
            "showLastLabel": false
        }
    },
    selectedVariableCodes: undefined
};