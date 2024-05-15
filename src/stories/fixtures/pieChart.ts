import { EVariableType, EVisualizationType, IQueryVisualizationResponse } from "../../core";
import { ETimeVariableInterval } from "../../core/types/queryVisualizationResponse";
import { TVariableSelections } from "../../core/types/variableSelections";

export const PIE_CHART_SELECTABLE_TIME: { pxGraphData: IQueryVisualizationResponse, selectedVariableCodes: TVariableSelections | undefined } = {
    pxGraphData: {
        tableReference: { name: "table.px", hierarchy: ["foo", "bar"] },
        data: [
            23685.0,
            15705.0,
            16514.0,
            4470.0,
            53551.0,
            2866.0,
            40501.0,
            20872.0,
            23480.0,
            14755.0,
            16871.0,
            4248.0,
            51000.0,
            2872.0,
            37349.0,
            20173.0,
            21274.0,
            11468.0,
            13909.0,
            3099.0,
            39758.0,
            2907.0,
            30915.0,
            16924.0,
            22309.0,
            13709.0,
            14805.0,
            3640.0,
            47328.0,
            2992.0,
            33405.0,
            20251.0,
            22858.0,
            13304.0,
            14284.0,
            3480.0,
            47813.0,
            2573.0,
            33182.0,
            18467.0,
            20273.0,
            12217.0,
            12462.0,
            2951.0,
            48793.0,
            2954.0,
            31607.0,
            17305.0,
            19271.0,
            12052.0,
            13195.0,
            2626.0,
            51118.0,
            2532.0,
            31349.0,
            16411.0,
            18520.0,
            11249.0,
            12227.0,
            2955.0,
            51566.0,
            2827.0,
            31120.0,
            15005.0,
            19023.0,
            10598.0,
            10357.0,
            2675.0,
            51102.0,
            2623.0,
            30553.0,
            13952.0,
            15735.0,
            12978.0,
            7886.0,
            2477.0,
            52637.0,
            2924.0,
            31317.0,
            14770.0,
            17244.0,
            12191.0,
            7763.0,
            2302.0,
            55867.0,
            2919.0,
            31149.0,
            14720.0,
            16071.0,
            12746.0,
            8472.0,
            2463.0,
            58838.0,
            3292.0,
            31419.0,
            15298.0,
            15691.0,
            10815.0,
            8935.0,
            2347.0,
            59634.0,
            4759.0,
            30243.0,
            14262.0,
            13697.0,
            10695.0,
            9188.0,
            1763.0,
            55307.0,
            3457.0,
            29607.0,
            14418.0,
            11589.0,
            12807.0,
            9432.0,
            1576.0,
            58686.0,
            4307.0,
            30297.0,
            14449.0
        ],
        missingDataInfo: {},
        dataNotes: {},
        metaData: [
            {
                code: "Toimialaluokka",
                name: {
                    fi: "Toimialaluokka",
                    sv: "Industribransch",
                    en: "Manufacturing branch"
                },
                note: null,
                type: EVariableType.OtherClassificatory,
                values: [
                    {
                        code: "SS",
                        name: {
                            fi: "Kaikki toimialat yhteensä",
                            sv: "Näringsgrenindelning total",
                            en: "Industries total"
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
                    fi: "Tiedot",
                    sv: "Uppgifter",
                    en: "Information"
                },
                note: null,
                type: EVariableType.Content,
                values: [
                    {
                        code: "ek_gwh",
                        name: {
                            fi: "Energiankäyttö (GWh)",
                            sv: "Energianvändningen (GWh)",
                            en: "Energy use (GWh)"
                        },
                        note: null,
                        isSum: false,
                        contentComponent: {
                            unit: {
                                fi: "GWh",
                                sv: "GWh",
                                en: "GWh"
                            },
                            source: {
                                fi: "PxVisualizer-fi",
                                sv: "PxVisualizer-sv",
                                en: "PxVisualizer-en"
                            },
                            numberOfDecimals: 0,
                            lastUpdated: "2022-11-02T06:00:00Z"
                        }
                    }
                ]
            },
            {
                code: "Vuosi",
                name: {
                    fi: "Vuosi",
                    sv: "År",
                    en: "Year"
                },
                note: null,
                type: EVariableType.Time,
                values: [
                    {
                        code: "2007",
                        name: {
                            fi: "2007",
                            sv: "2007",
                            en: "2007"
                        },
                        note: null,
                        isSum: false,
                        contentComponent: null
                    },
                    {
                        code: "2008",
                        name: {
                            fi: "2008",
                            sv: "2008",
                            en: "2008"
                        },
                        note: null,
                        isSum: false,
                        contentComponent: null
                    },
                    {
                        code: "2009",
                        name: {
                            fi: "2009",
                            sv: "2009",
                            en: "2009"
                        },
                        note: null,
                        isSum: false,
                        contentComponent: null
                    },
                    {
                        code: "2010",
                        name: {
                            fi: "2010",
                            sv: "2010",
                            en: "2010"
                        },
                        note: null,
                        isSum: false,
                        contentComponent: null
                    },
                    {
                        code: "2011",
                        name: {
                            fi: "2011",
                            sv: "2011",
                            en: "2011"
                        },
                        note: null,
                        isSum: false,
                        contentComponent: null
                    },
                    {
                        code: "2012",
                        name: {
                            fi: "2012",
                            sv: "2012",
                            en: "2012"
                        },
                        note: null,
                        isSum: false,
                        contentComponent: null
                    },
                    {
                        code: "2013",
                        name: {
                            fi: "2013",
                            sv: "2013",
                            en: "2013"
                        },
                        note: null,
                        isSum: false,
                        contentComponent: null
                    },
                    {
                        code: "2014",
                        name: {
                            fi: "2014",
                            sv: "2014",
                            en: "2014"
                        },
                        note: null,
                        isSum: false,
                        contentComponent: null
                    },
                    {
                        code: "2015",
                        name: {
                            fi: "2015",
                            sv: "2015",
                            en: "2015"
                        },
                        note: null,
                        isSum: false,
                        contentComponent: null
                    },
                    {
                        code: "2016",
                        name: {
                            fi: "2016",
                            sv: "2016",
                            en: "2016"
                        },
                        note: null,
                        isSum: false,
                        contentComponent: null
                    },
                    {
                        code: "2017",
                        name: {
                            fi: "2017",
                            sv: "2017",
                            en: "2017"
                        },
                        note: null,
                        isSum: false,
                        contentComponent: null
                    },
                    {
                        code: "2018",
                        name: {
                            fi: "2018",
                            sv: "2018",
                            en: "2018"
                        },
                        note: null,
                        isSum: false,
                        contentComponent: null
                    },
                    {
                        code: "2019",
                        name: {
                            fi: "2019",
                            sv: "2019",
                            en: "2019"
                        },
                        note: null,
                        isSum: false,
                        contentComponent: null
                    },
                    {
                        code: "2020",
                        name: {
                            fi: "2020",
                            sv: "2020",
                            en: "2020"
                        },
                        note: null,
                        isSum: false,
                        contentComponent: null
                    },
                    {
                        code: "2021",
                        name: {
                            fi: "2021",
                            sv: "2021",
                            en: "2021"
                        },
                        note: null,
                        isSum: false,
                        contentComponent: null
                    }
                ]
            },
            {
                code: "Energialähde",
                name: {
                    fi: "Energialähde",
                    sv: "Energikällaklass",
                    en: "Energy source class"
                },
                note: null,
                type: EVariableType.OtherClassificatory,
                values: [
                    {
                        code: "1",
                        name: {
                            fi: "Öljy",
                            sv: "Olja",
                            en: "Oil"
                        },
                        note: null,
                        isSum: false,
                        contentComponent: null
                    },
                    {
                        code: "2",
                        name: {
                            fi: "Hiili",
                            sv: "Kol",
                            en: "Coal"
                        },
                        note: null,
                        isSum: false,
                        contentComponent: null
                    },
                    {
                        code: "3",
                        name: {
                            fi: "Maakaasu",
                            sv: "Naturgas",
                            en: "Natural gas"
                        },
                        note: null,
                        isSum: false,
                        contentComponent: null
                    },
                    {
                        code: "4",
                        name: {
                            fi: "Turve",
                            sv: "Torv",
                            en: "Peat"
                        },
                        note: null,
                        isSum: false,
                        contentComponent: null
                    },
                    {
                        code: "5",
                        name: {
                            fi: "Puupolttoaineet",
                            sv: "Träbaserade bränslen",
                            en: "Wood fuels"
                        },
                        note: null,
                        isSum: false,
                        contentComponent: null
                    },
                    {
                        code: "6",
                        name: {
                            fi: "Muut energialähteet",
                            sv: "Övriga energikällor",
                            en: "Other energy sources"
                        },
                        note: null,
                        isSum: false,
                        contentComponent: null
                    },
                    {
                        code: "7",
                        name: {
                            fi: "Sähkö",
                            sv: "Electricitet",
                            en: "Electricity"
                        },
                        note: null,
                        isSum: false,
                        contentComponent: null
                    },
                    {
                        code: "8",
                        name: {
                            fi: "Lämpö",
                            sv: "Värme",
                            en: "Heat"
                        },
                        note: null,
                        isSum: false,
                        contentComponent: null
                    }
                ]
            }
        ],
        selectableVariableCodes: [
            "Vuosi"
        ],
        rowVariableCodes: [],
        columnVariableCodes: [
            "Energialähde"
        ],
        header: {
            fi: "Energiankäyttö (GWh), Kaikki toimialat yhteensä 2007 muuttujana Energialähde",
            sv: "Energianvändningen (GWh), Näringsgrenindelning total 2007 efter Energikällaklass",
            en: "Energy use (GWh), Industries total 2007 by Energy source class"
        },
        visualizationSettings: {
            sorting: "descending",
            timeVariableIntervals: ETimeVariableInterval.Year,
            visualizationType: EVisualizationType.PieChart,
            defaultSelectableVariableCodes: null
        }
    },
    selectedVariableCodes: { Vuosi: ['2007'] }
};