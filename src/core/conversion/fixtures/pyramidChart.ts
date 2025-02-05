import { EVariableType, EVisualizationType, IQueryVisualizationResponse } from "../../types"
import { ETimeVariableInterval } from "../../types/queryVisualizationResponse"
import { TVariableSelections } from "../../types/variableSelections"

export const PYRAMID_CHART: { pxGraphData: IQueryVisualizationResponse, selectedVariableCodes: TVariableSelections | undefined } = {
    pxGraphData: {
        "tableReference": { name: "table.px", hierarchy: ["foo", "bar"] },
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
        missingDataInfo: {},
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
            defaultSelectableVariableCodes: null,
            timeVariableIntervals: ETimeVariableInterval.Year
        }
    },
    selectedVariableCodes: undefined
}

export const PYRAMID_CHART_WITH_SELECTABLES: { pxGraphData: IQueryVisualizationResponse, selectedVariableCodes: TVariableSelections | undefined } = {
    pxGraphData: {
        "tableReference": { name: "table.px", hierarchy: ["foo", "bar"] },
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
        missingDataInfo: {},
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
            defaultSelectableVariableCodes: null,
            timeVariableIntervals: ETimeVariableInterval.Year
        }
    },
    selectedVariableCodes: {'Vuosi': ['2020'], 'Alue': ['SSS']}
}