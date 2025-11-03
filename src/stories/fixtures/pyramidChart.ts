import { EVariableType, EVisualizationType, IQueryVisualizationResponse } from "../../core"
import { ETimeVariableInterval } from "../../core/types/queryVisualizationResponse"
import { TVariableSelections } from "../../core/types/variableSelections"

export const PYRAMID_CHART: { pxGraphData: IQueryVisualizationResponse, selectedVariableCodes: TVariableSelections | undefined, showLastUpdated: boolean } = {
    pxGraphData: {
        tableReference: { name: "table.px", hierarchy: ["foo", "bar"] },
        "data": [
            19884.0,
            13131.0,
            14150.0,
            12859.0,
            10943.0,
            9399.0,
            8510.0,
            7037.0,
            5748.0,
            4954.0,
            4313.0,
            3372.0,
            2442.0,
            1917.0,
            1259.0,
            877.0,
            605.0,
            360.0,
            217.0,
            110.0,
            179.0,
            26547.0,
            18328.0,
            20992.0,
            18956.0,
            17262.0,
            15355.0,
            14305.0,
            12811.0,
            10873.0,
            10311.0,
            9070.0,
            8193.0,
            6705.0,
            5221.0,
            4032.0,
            2952.0,
            2296.0,
            1510.0,
            1071.0,
            701.0,
            928.0
        ],
        "dataNotes": {},
        "metaData": [
            {
                "code": "Alue",
                "name": {
                    "fi": "Alue",
                    "sv": "Område",
                    "en": "Area"
                },
                "note": null,
                "type": EVariableType.OtherClassificatory,
                "values": [
                    {
                        "code": "SSS",
                        "name": {
                            "fi": "KOKO MAA",
                            "sv": "HELA LANDET",
                            "en": "WHOLE COUNTRY"
                        },
                        "note": null,
                        "isSum": true,
                        "contentComponent": null
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
                        "code": "2021",
                        "name": {
                            "fi": "2021",
                            "sv": "2021",
                            "en": "2021"
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
                        "code": "vaesto",
                        "name": {
                            "fi": "Väestö 31.12.",
                            "sv": "Befolkning 31.12.",
                            "en": "Population 31 Dec"
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
                            "lastUpdated": "2022-03-31T05:00:00Z"
                        }
                    }
                ]
            },
            {
                "code": "Sukupuoli",
                "name": {
                    "fi": "Sukupuoli",
                    "sv": "Kön",
                    "en": "Sex"
                },
                "note": null,
                "type": EVariableType.OtherClassificatory,
                "values": [
                    {
                        "code": "1",
                        "name": {
                            "fi": "Miehet",
                            "sv": "Män",
                            "en": "Males"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "2",
                        "name": {
                            "fi": "Naiset",
                            "sv": "Kvinnor",
                            "en": "Females"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    }
                ]
            },
            {
                "code": "Ikä",
                "name": {
                    "fi": "Ikä",
                    "sv": "Ålder",
                    "en": "Age"
                },
                "note": null,
                "type": EVariableType.Ordinal,
                "values": [
                    {
                        "code": "080",
                        "name": {
                            "fi": "80",
                            "sv": "80",
                            "en": "80"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "081",
                        "name": {
                            "fi": "81",
                            "sv": "81",
                            "en": "81"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "082",
                        "name": {
                            "fi": "82",
                            "sv": "82",
                            "en": "82"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "083",
                        "name": {
                            "fi": "83",
                            "sv": "83",
                            "en": "83"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "084",
                        "name": {
                            "fi": "84",
                            "sv": "84",
                            "en": "84"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "085",
                        "name": {
                            "fi": "85",
                            "sv": "85",
                            "en": "85"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "086",
                        "name": {
                            "fi": "86",
                            "sv": "86",
                            "en": "86"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "087",
                        "name": {
                            "fi": "87",
                            "sv": "87",
                            "en": "87"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "088",
                        "name": {
                            "fi": "88",
                            "sv": "88",
                            "en": "88"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "089",
                        "name": {
                            "fi": "89",
                            "sv": "89",
                            "en": "89"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "090",
                        "name": {
                            "fi": "90",
                            "sv": "90",
                            "en": "90"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "091",
                        "name": {
                            "fi": "91",
                            "sv": "91",
                            "en": "91"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "092",
                        "name": {
                            "fi": "92",
                            "sv": "92",
                            "en": "92"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "093",
                        "name": {
                            "fi": "93",
                            "sv": "93",
                            "en": "93"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "094",
                        "name": {
                            "fi": "94",
                            "sv": "94",
                            "en": "94"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "095",
                        "name": {
                            "fi": "95",
                            "sv": "95",
                            "en": "95"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "096",
                        "name": {
                            "fi": "96",
                            "sv": "96",
                            "en": "96"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "097",
                        "name": {
                            "fi": "97",
                            "sv": "97",
                            "en": "97"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "098",
                        "name": {
                            "fi": "98",
                            "sv": "98",
                            "en": "98"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "099",
                        "name": {
                            "fi": "99",
                            "sv": "99",
                            "en": "99"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "100-",
                        "name": {
                            "fi": "100 -",
                            "sv": "100 -",
                            "en": "100 -"
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
            "Sukupuoli"
        ],
        "columnVariableCodes": [
            "Ikä"
        ],
        "header": {
            "fi": "Väestö 31.12. 2021 muuttujina Ikä, Sukupuoli",
            "sv": "Befolkning 31.12. 2021 efter Ålder, Kön",
            "en": "Population 31 Dec 2021 by Age, Sex"
        },
        visualizationSettings: {
            visualizationType: EVisualizationType.PyramidChart,
            timeVariableIntervals: ETimeVariableInterval.Year,
            defaultSelectableVariableCodes: null
        }
    },
    selectedVariableCodes: undefined,
    showLastUpdated: true
}

export const PYRAMID_CHART_LARGE_DATASET: { pxGraphData: IQueryVisualizationResponse, selectedVariableCodes: TVariableSelections | undefined } = {
    pxGraphData: {
        tableReference: { name: "table.px", hierarchy: ["foo", "bar"] },
        "data": [
            25282.0,
            23967.0,
            23601.0,
            25125.0,
            26427.0,
            27770.0,
            29348.0,
            30432.0,
            31104.0,
            31686.0,
            31914.0,
            32685.0,
            32362.0,
            31992.0,
            31750.0,
            31725.0,
            30911.0,
            31273.0,
            30573.0,
            30327.0,
            30450.0,
            31246.0,
            31816.0,
            31372.0,
            32572.0,
            33903.0,
            35194.0,
            36349.0,
            36460.0,
            38227.0,
            37796.0,
            38358.0,
            37496.0,
            37515.0,
            35794.0,
            36292.0,
            37158.0,
            38141.0,
            38651.0,
            38504.0,
            36500.0,
            36243.0,
            35637.0,
            35814.0,
            35775.0,
            36119.0,
            35388.0,
            33322.0,
            30551.0,
            31415.0,
            31845.0,
            32739.0,
            33518.0,
            35539.0,
            36342.0,
            36310.0,
            36358.0,
            36826.0,
            36972.0,
            36490.0,
            35858.0,
            35244.0,
            34850.0,
            33500.0,
            34601.0,
            35094.0,
            34355.0,
            33599.0,
            33023.0,
            33824.0,
            32293.0,
            32807.0,
            33169.0,
            33137.0,
            32179.0,
            30282.0,
            26472.0,
            20243.0,
            18681.0,
            14373.0,
            19884.0,
            13131.0,
            14150.0,
            12859.0,
            10943.0,
            9399.0,
            8510.0,
            7037.0,
            5748.0,
            4954.0,
            4313.0,
            3372.0,
            2442.0,
            1917.0,
            1259.0,
            877.0,
            605.0,
            360.0,
            217.0,
            110.0,
            179.0,
            24310.0,
            22866.0,
            22799.0,
            23530.0,
            25383.0,
            26901.0,
            27860.0,
            29192.0,
            29424.0,
            30435.0,
            30708.0,
            31083.0,
            31030.0,
            30604.0,
            30224.0,
            30417.0,
            29782.0,
            29615.0,
            29437.0,
            28635.0,
            28896.0,
            28956.0,
            29602.0,
            29435.0,
            30921.0,
            31642.0,
            33061.0,
            34295.0,
            34480.0,
            35640.0,
            35312.0,
            35818.0,
            35029.0,
            35150.0,
            33275.0,
            33669.0,
            34635.0,
            35693.0,
            36260.0,
            35631.0,
            34500.0,
            34023.0,
            33900.0,
            33724.0,
            34192.0,
            34171.0,
            33324.0,
            32116.0,
            28986.0,
            30031.0,
            31227.0,
            32231.0,
            32618.0,
            35184.0,
            35953.0,
            36156.0,
            36280.0,
            36906.0,
            37265.0,
            36750.0,
            36672.0,
            36564.0,
            36158.0,
            35012.0,
            36323.0,
            37162.0,
            36765.0,
            37180.0,
            36094.0,
            37068.0,
            35611.0,
            36618.0,
            37560.0,
            38074.0,
            37369.0,
            36183.0,
            31719.0,
            25255.0,
            23539.0,
            18623.0,
            26547.0,
            18328.0,
            20992.0,
            18956.0,
            17262.0,
            15355.0,
            14305.0,
            12811.0,
            10873.0,
            10311.0,
            9070.0,
            8193.0,
            6705.0,
            5221.0,
            4032.0,
            2952.0,
            2296.0,
            1510.0,
            1071.0,
            701.0,
            928.0
        ],
        "dataNotes": {},
        "metaData": [
            {
                "code": "Alue",
                "name": {
                    "fi": "Alue",
                    "sv": "Område",
                    "en": "Area"
                },
                "note": null,
                "type": EVariableType.Geological,
                "values": [
                    {
                        "code": "SSS",
                        "name": {
                            "fi": "KOKO MAA",
                            "sv": "HELA LANDET",
                            "en": "WHOLE COUNTRY"
                        },
                        "note": null,
                        "isSum": true,
                        "contentComponent": null
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
                        "code": "2021",
                        "name": {
                            "fi": "2021",
                            "sv": "2021",
                            "en": "2021"
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
                        "code": "vaesto",
                        "name": {
                            "fi": "Väestö 31.12.",
                            "sv": "Befolkning 31.12.",
                            "en": "Population 31 Dec"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": {
                            "unit": {
                                "fi": "Lukumäärä",
                                "sv": "Antal",
                                "en": "Number"
                            },
                            "source": {
                                "fi": "PxVisualizer-fi",
                                "sv": "PxVisualizer-sv",
                                "en": "PxVisualizer-en"
                            },
                            "numberOfDecimals": 0,
                            "lastUpdated": "2023-03-31T05:00:00Z"
                        }
                    }
                ]
            },
            {
                "code": "Sukupuoli",
                "name": {
                    "fi": "Sukupuoli",
                    "sv": "Kön",
                    "en": "Sex"
                },
                "note": null,
                "type": EVariableType.OtherClassificatory,
                "values": [
                    {
                        "code": "1",
                        "name": {
                            "fi": "Miehet",
                            "sv": "Män",
                            "en": "Males"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "2",
                        "name": {
                            "fi": "Naiset",
                            "sv": "Kvinnor",
                            "en": "Females"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    }
                ]
            },
            {
                "code": "Ikä",
                "name": {
                    "fi": "Ikä",
                    "sv": "Ålder",
                    "en": "Age"
                },
                "note": null,
                "type": EVariableType.Ordinal,
                "values": [
                    {
                        "code": "000",
                        "name": {
                            "fi": "0",
                            "sv": "0",
                            "en": "0"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "001",
                        "name": {
                            "fi": "1",
                            "sv": "1",
                            "en": "1"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "002",
                        "name": {
                            "fi": "2",
                            "sv": "2",
                            "en": "2"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "003",
                        "name": {
                            "fi": "3",
                            "sv": "3",
                            "en": "3"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "004",
                        "name": {
                            "fi": "4",
                            "sv": "4",
                            "en": "4"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "005",
                        "name": {
                            "fi": "5",
                            "sv": "5",
                            "en": "5"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "006",
                        "name": {
                            "fi": "6",
                            "sv": "6",
                            "en": "6"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "007",
                        "name": {
                            "fi": "7",
                            "sv": "7",
                            "en": "7"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "008",
                        "name": {
                            "fi": "8",
                            "sv": "8",
                            "en": "8"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "009",
                        "name": {
                            "fi": "9",
                            "sv": "9",
                            "en": "9"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "010",
                        "name": {
                            "fi": "10",
                            "sv": "10",
                            "en": "10"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "011",
                        "name": {
                            "fi": "11",
                            "sv": "11",
                            "en": "11"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "012",
                        "name": {
                            "fi": "12",
                            "sv": "12",
                            "en": "12"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "013",
                        "name": {
                            "fi": "13",
                            "sv": "13",
                            "en": "13"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "014",
                        "name": {
                            "fi": "14",
                            "sv": "14",
                            "en": "14"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "015",
                        "name": {
                            "fi": "15",
                            "sv": "15",
                            "en": "15"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "016",
                        "name": {
                            "fi": "16",
                            "sv": "16",
                            "en": "16"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "017",
                        "name": {
                            "fi": "17",
                            "sv": "17",
                            "en": "17"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "018",
                        "name": {
                            "fi": "18",
                            "sv": "18",
                            "en": "18"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "019",
                        "name": {
                            "fi": "19",
                            "sv": "19",
                            "en": "19"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "020",
                        "name": {
                            "fi": "20",
                            "sv": "20",
                            "en": "20"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "021",
                        "name": {
                            "fi": "21",
                            "sv": "21",
                            "en": "21"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "022",
                        "name": {
                            "fi": "22",
                            "sv": "22",
                            "en": "22"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "023",
                        "name": {
                            "fi": "23",
                            "sv": "23",
                            "en": "23"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "024",
                        "name": {
                            "fi": "24",
                            "sv": "24",
                            "en": "24"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "025",
                        "name": {
                            "fi": "25",
                            "sv": "25",
                            "en": "25"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "026",
                        "name": {
                            "fi": "26",
                            "sv": "26",
                            "en": "26"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "027",
                        "name": {
                            "fi": "27",
                            "sv": "27",
                            "en": "27"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "028",
                        "name": {
                            "fi": "28",
                            "sv": "28",
                            "en": "28"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "029",
                        "name": {
                            "fi": "29",
                            "sv": "29",
                            "en": "29"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "030",
                        "name": {
                            "fi": "30",
                            "sv": "30",
                            "en": "30"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "031",
                        "name": {
                            "fi": "31",
                            "sv": "31",
                            "en": "31"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "032",
                        "name": {
                            "fi": "32",
                            "sv": "32",
                            "en": "32"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "033",
                        "name": {
                            "fi": "33",
                            "sv": "33",
                            "en": "33"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "034",
                        "name": {
                            "fi": "34",
                            "sv": "34",
                            "en": "34"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "035",
                        "name": {
                            "fi": "35",
                            "sv": "35",
                            "en": "35"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "036",
                        "name": {
                            "fi": "36",
                            "sv": "36",
                            "en": "36"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "037",
                        "name": {
                            "fi": "37",
                            "sv": "37",
                            "en": "37"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "038",
                        "name": {
                            "fi": "38",
                            "sv": "38",
                            "en": "38"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "039",
                        "name": {
                            "fi": "39",
                            "sv": "39",
                            "en": "39"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "040",
                        "name": {
                            "fi": "40",
                            "sv": "40",
                            "en": "40"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "041",
                        "name": {
                            "fi": "41",
                            "sv": "41",
                            "en": "41"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "042",
                        "name": {
                            "fi": "42",
                            "sv": "42",
                            "en": "42"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "043",
                        "name": {
                            "fi": "43",
                            "sv": "43",
                            "en": "43"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "044",
                        "name": {
                            "fi": "44",
                            "sv": "44",
                            "en": "44"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "045",
                        "name": {
                            "fi": "45",
                            "sv": "45",
                            "en": "45"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "046",
                        "name": {
                            "fi": "46",
                            "sv": "46",
                            "en": "46"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "047",
                        "name": {
                            "fi": "47",
                            "sv": "47",
                            "en": "47"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "048",
                        "name": {
                            "fi": "48",
                            "sv": "48",
                            "en": "48"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "049",
                        "name": {
                            "fi": "49",
                            "sv": "49",
                            "en": "49"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "050",
                        "name": {
                            "fi": "50",
                            "sv": "50",
                            "en": "50"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "051",
                        "name": {
                            "fi": "51",
                            "sv": "51",
                            "en": "51"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "052",
                        "name": {
                            "fi": "52",
                            "sv": "52",
                            "en": "52"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "053",
                        "name": {
                            "fi": "53",
                            "sv": "53",
                            "en": "53"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "054",
                        "name": {
                            "fi": "54",
                            "sv": "54",
                            "en": "54"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "055",
                        "name": {
                            "fi": "55",
                            "sv": "55",
                            "en": "55"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "056",
                        "name": {
                            "fi": "56",
                            "sv": "56",
                            "en": "56"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "057",
                        "name": {
                            "fi": "57",
                            "sv": "57",
                            "en": "57"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "058",
                        "name": {
                            "fi": "58",
                            "sv": "58",
                            "en": "58"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "059",
                        "name": {
                            "fi": "59",
                            "sv": "59",
                            "en": "59"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "060",
                        "name": {
                            "fi": "60",
                            "sv": "60",
                            "en": "60"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "061",
                        "name": {
                            "fi": "61",
                            "sv": "61",
                            "en": "61"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "062",
                        "name": {
                            "fi": "62",
                            "sv": "62",
                            "en": "62"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "063",
                        "name": {
                            "fi": "63",
                            "sv": "63",
                            "en": "63"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "064",
                        "name": {
                            "fi": "64",
                            "sv": "64",
                            "en": "64"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "065",
                        "name": {
                            "fi": "65",
                            "sv": "65",
                            "en": "65"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "066",
                        "name": {
                            "fi": "66",
                            "sv": "66",
                            "en": "66"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "067",
                        "name": {
                            "fi": "67",
                            "sv": "67",
                            "en": "67"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "068",
                        "name": {
                            "fi": "68",
                            "sv": "68",
                            "en": "68"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "069",
                        "name": {
                            "fi": "69",
                            "sv": "69",
                            "en": "69"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "070",
                        "name": {
                            "fi": "70",
                            "sv": "70",
                            "en": "70"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "071",
                        "name": {
                            "fi": "71",
                            "sv": "71",
                            "en": "71"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "072",
                        "name": {
                            "fi": "72",
                            "sv": "72",
                            "en": "72"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "073",
                        "name": {
                            "fi": "73",
                            "sv": "73",
                            "en": "73"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "074",
                        "name": {
                            "fi": "74",
                            "sv": "74",
                            "en": "74"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "075",
                        "name": {
                            "fi": "75",
                            "sv": "75",
                            "en": "75"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "076",
                        "name": {
                            "fi": "76",
                            "sv": "76",
                            "en": "76"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "077",
                        "name": {
                            "fi": "77",
                            "sv": "77",
                            "en": "77"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "078",
                        "name": {
                            "fi": "78",
                            "sv": "78",
                            "en": "78"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "079",
                        "name": {
                            "fi": "79",
                            "sv": "79",
                            "en": "79"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "080",
                        "name": {
                            "fi": "80",
                            "sv": "80",
                            "en": "80"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "081",
                        "name": {
                            "fi": "81",
                            "sv": "81",
                            "en": "81"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "082",
                        "name": {
                            "fi": "82",
                            "sv": "82",
                            "en": "82"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "083",
                        "name": {
                            "fi": "83",
                            "sv": "83",
                            "en": "83"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "084",
                        "name": {
                            "fi": "84",
                            "sv": "84",
                            "en": "84"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "085",
                        "name": {
                            "fi": "85",
                            "sv": "85",
                            "en": "85"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "086",
                        "name": {
                            "fi": "86",
                            "sv": "86",
                            "en": "86"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "087",
                        "name": {
                            "fi": "87",
                            "sv": "87",
                            "en": "87"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "088",
                        "name": {
                            "fi": "88",
                            "sv": "88",
                            "en": "88"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "089",
                        "name": {
                            "fi": "89",
                            "sv": "89",
                            "en": "89"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "090",
                        "name": {
                            "fi": "90",
                            "sv": "90",
                            "en": "90"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "091",
                        "name": {
                            "fi": "91",
                            "sv": "91",
                            "en": "91"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "092",
                        "name": {
                            "fi": "92",
                            "sv": "92",
                            "en": "92"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "093",
                        "name": {
                            "fi": "93",
                            "sv": "93",
                            "en": "93"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "094",
                        "name": {
                            "fi": "94",
                            "sv": "94",
                            "en": "94"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "095",
                        "name": {
                            "fi": "95",
                            "sv": "95",
                            "en": "95"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "096",
                        "name": {
                            "fi": "96",
                            "sv": "96",
                            "en": "96"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "097",
                        "name": {
                            "fi": "97",
                            "sv": "97",
                            "en": "97"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "098",
                        "name": {
                            "fi": "98",
                            "sv": "98",
                            "en": "98"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "099",
                        "name": {
                            "fi": "99",
                            "sv": "99",
                            "en": "99"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "100-",
                        "name": {
                            "fi": "100 -",
                            "sv": "100 -",
                            "en": "100 -"
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
            "Sukupuoli"
        ],
        "columnVariableCodes": [
            "Ikä"
        ],
        "header": {
            "fi": "Väestö 31.12. 2021 muuttujina Ikä, Sukupuoli",
            "sv": "Befolkning 31.12. 2021 efter Ålder, Kön",
            "en": "Population 31 Dec 2021 by Age, Sex"
        },
        visualizationSettings: {
            visualizationType: EVisualizationType.PyramidChart,
            timeVariableIntervals: ETimeVariableInterval.Year,
            defaultSelectableVariableCodes: null
        }
    },
    selectedVariableCodes: undefined
}

export const PYRAMID_CHART_WITH_SELECTABLES: { pxGraphData: IQueryVisualizationResponse, selectedVariableCodes: TVariableSelections | undefined } = {
    pxGraphData: {
        tableReference: { name: "table.px", hierarchy: ["foo", "bar"] },
        "data": [
            13911.0,
            15060.0,
            13822.0,
            11870.0,
            10342.0,
            9450.0,
            7965.0,
            6587.0,
            5790.0,
            5111.0,
            4170.0,
            3107.0,
            2491.0,
            1667.0,
            1229.0,
            857.0,
            572.0,
            353.0,
            178.0,
            120.0,
            152.0,
            19019.0,
            21868.0,
            19983.0,
            18208.0,
            16376.0,
            15392.0,
            13949.0,
            12005.0,
            11514.0,
            10340.0,
            9505.0,
            8006.0,
            6430.0,
            5021.0,
            3791.0,
            3055.0,
            2098.0,
            1523.0,
            1004.0,
            632.0,
            886.0,
            19884.0,
            13131.0,
            14150.0,
            12859.0,
            10943.0,
            9399.0,
            8510.0,
            7037.0,
            5748.0,
            4954.0,
            4313.0,
            3372.0,
            2442.0,
            1917.0,
            1259.0,
            877.0,
            605.0,
            360.0,
            217.0,
            110.0,
            179.0,
            26547.0,
            18328.0,
            20992.0,
            18956.0,
            17262.0,
            15355.0,
            14305.0,
            12811.0,
            10873.0,
            10311.0,
            9070.0,
            8193.0,
            6705.0,
            5221.0,
            4032.0,
            2952.0,
            2296.0,
            1510.0,
            1071.0,
            701.0,
            928.0,
            31.0,
            52.0,
            38.0,
            32.0,
            30.0,
            25.0,
            18.0,
            22.0,
            21.0,
            18.0,
            10.0,
            12.0,
            8.0,
            6.0,
            2.0,
            2.0,
            2.0,
            1.0,
            1.0,
            0.0,
            0.0,
            60.0,
            63.0,
            56.0,
            53.0,
            50.0,
            45.0,
            43.0,
            38.0,
            35.0,
            34.0,
            29.0,
            31.0,
            17.0,
            17.0,
            11.0,
            13.0,
            8.0,
            6.0,
            2.0,
            2.0,
            2.0,
            59.0,
            30.0,
            49.0,
            36.0,
            30.0,
            27.0,
            24.0,
            16.0,
            22.0,
            17.0,
            16.0,
            8.0,
            8.0,
            7.0,
            4.0,
            0.0,
            0.0,
            1.0,
            1.0,
            1.0,
            0.0,
            74.0,
            61.0,
            61.0,
            54.0,
            52.0,
            47.0,
            42.0,
            39.0,
            35.0,
            33.0,
            29.0,
            26.0,
            24.0,
            9.0,
            14.0,
            9.0,
            11.0,
            6.0,
            4.0,
            2.0,
            3.0
        ],
        "dataNotes": {},
        "metaData": [
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
                        "code": "vaesto",
                        "name": {
                            "fi": "Väestö 31.12.",
                            "sv": "Befolkning 31.12.",
                            "en": "Population 31 Dec"
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
                            "lastUpdated": "2022-03-31T05:00:00Z"
                        }
                    }
                ]
            },
            {
                "code": "Alue",
                "name": {
                    "fi": "Alue",
                    "sv": "Område",
                    "en": "Area"
                },
                "note": null,
                "type": EVariableType.OtherClassificatory,
                "values": [
                    {
                        "code": "SSS",
                        "name": {
                            "fi": "KOKO MAA",
                            "sv": "HELA LANDET",
                            "en": "WHOLE COUNTRY"
                        },
                        "note": null,
                        "isSum": true,
                        "contentComponent": null
                    },
                    {
                        "code": "KU020",
                        "name": {
                            "fi": "Akaa",
                            "sv": "Ackas",
                            "en": "Akaa"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
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
                    }
                ]
            },
            {
                "code": "Sukupuoli",
                "name": {
                    "fi": "Sukupuoli",
                    "sv": "Kön",
                    "en": "Sex"
                },
                "note": null,
                "type": EVariableType.OtherClassificatory,
                "values": [
                    {
                        "code": "1",
                        "name": {
                            "fi": "Miehet",
                            "sv": "Män",
                            "en": "Males"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "2",
                        "name": {
                            "fi": "Naiset",
                            "sv": "Kvinnor",
                            "en": "Females"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    }
                ]
            },
            {
                "code": "Ikä",
                "name": {
                    "fi": "Ikä",
                    "sv": "Ålder",
                    "en": "Age"
                },
                "note": null,
                "type": EVariableType.Ordinal,
                "values": [
                    {
                        "code": "080",
                        "name": {
                            "fi": "80",
                            "sv": "80",
                            "en": "80"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "081",
                        "name": {
                            "fi": "81",
                            "sv": "81",
                            "en": "81"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "082",
                        "name": {
                            "fi": "82",
                            "sv": "82",
                            "en": "82"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "083",
                        "name": {
                            "fi": "83",
                            "sv": "83",
                            "en": "83"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "084",
                        "name": {
                            "fi": "84",
                            "sv": "84",
                            "en": "84"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "085",
                        "name": {
                            "fi": "85",
                            "sv": "85",
                            "en": "85"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "086",
                        "name": {
                            "fi": "86",
                            "sv": "86",
                            "en": "86"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "087",
                        "name": {
                            "fi": "87",
                            "sv": "87",
                            "en": "87"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "088",
                        "name": {
                            "fi": "88",
                            "sv": "88",
                            "en": "88"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "089",
                        "name": {
                            "fi": "89",
                            "sv": "89",
                            "en": "89"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "090",
                        "name": {
                            "fi": "90",
                            "sv": "90",
                            "en": "90"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "091",
                        "name": {
                            "fi": "91",
                            "sv": "91",
                            "en": "91"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "092",
                        "name": {
                            "fi": "92",
                            "sv": "92",
                            "en": "92"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "093",
                        "name": {
                            "fi": "93",
                            "sv": "93",
                            "en": "93"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "094",
                        "name": {
                            "fi": "94",
                            "sv": "94",
                            "en": "94"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "095",
                        "name": {
                            "fi": "95",
                            "sv": "95",
                            "en": "95"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "096",
                        "name": {
                            "fi": "96",
                            "sv": "96",
                            "en": "96"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "097",
                        "name": {
                            "fi": "97",
                            "sv": "97",
                            "en": "97"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "098",
                        "name": {
                            "fi": "98",
                            "sv": "98",
                            "en": "98"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "099",
                        "name": {
                            "fi": "99",
                            "sv": "99",
                            "en": "99"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "100-",
                        "name": {
                            "fi": "100 -",
                            "sv": "100 -",
                            "en": "100 -"
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
            "Vuosi"
        ],
        "rowVariableCodes": [
            "Sukupuoli"
        ],
        "columnVariableCodes": [
            "Ikä"
        ],
        "header": {
            "fi": "Väestö 31.12. 2020 muuttujina Alue, Ikä, Sukupuoli",
            "sv": "Befolkning 31.12. 2020 efter Område, Ålder, Kön",
            "en": "Population 31 Dec 2020 by Area, Age, Sex"
        },
        visualizationSettings: {
            visualizationType: EVisualizationType.PyramidChart,
            timeVariableIntervals: ETimeVariableInterval.Year,
            defaultSelectableVariableCodes: null
        }
    },
    selectedVariableCodes: {'Vuosi': ['2020'], 'Alue': ['SSS']}
}