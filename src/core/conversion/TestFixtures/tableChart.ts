import { EVariableType, EVisualizationType, IQueryVisualizationResponse } from "../../types";
import { ETimeVariableInterval } from "../../types/queryVisualizationResponse";

export const TABLE_WITH_ONLY_COLUMN_VARIABLES: { pxGraphData: IQueryVisualizationResponse, selectedVariableCodes: {[key: string]: string[]} } = {
    pxGraphData: {
        tableReference: { name: "table.px", hierarchy: ["foo", "bar"] },
        "data": [
            242.0,
            62.0,
            0.0,
            0.0,
            0.0,
            0.0,
            240.0,
            85.0,
            0.0,
            0.0,
            0.0,
            0.0,
            216.0,
            91.0,
            0.0,
            0.0,
            0.0,
            0.0
        ],
        missingDataInfo: {},
        "dataNotes": {},
        "metaData": [
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
                        "code": "1987",
                        "name": {
                            "fi": "1987",
                            "sv": "1987",
                            "en": "1987"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "1988",
                        "name": {
                            "fi": "1988",
                            "sv": "1988",
                            "en": "1988"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "1989",
                        "name": {
                            "fi": "1989",
                            "sv": "1989",
                            "en": "1989"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    }
                ]
            },
            {
                "code": "Syntymävaltio",
                "name": {
                    "fi": "Syntymävaltio",
                    "sv": "Födelseland",
                    "en": "Country of birth"
                },
                "note": null,
                "type": EVariableType.OtherClassificatory,
                "values": [
                    {
                        "code": "246",
                        "name": {
                            "fi": "Suomi",
                            "sv": "Finland",
                            "en": "Finland"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "724",
                        "name": {
                            "fi": "Espanja",
                            "sv": "Spanien",
                            "en": "Spain"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "380",
                        "name": {
                            "fi": "Italia",
                            "sv": "Italien",
                            "en": "Italy"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    }
                ]
            },
            {
                "code": "Adoptiotyyppi",
                "name": {
                    "fi": "Adoptiotyyppi",
                    "sv": "Typ av adoption",
                    "en": "Adoption type"
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
                "code": "Ikä",
                "name": {
                    "fi": "Ikä",
                    "sv": "Ålder",
                    "en": "Age"
                },
                "note": null,
                "type": EVariableType.OtherClassificatory,
                "values": [
                    {
                        "code": "0-17",
                        "name": {
                            "fi": "0 - 17",
                            "sv": "0 - 17",
                            "en": "0 - 17"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "18-",
                        "name": {
                            "fi": "18 -",
                            "sv": "18 -",
                            "en": "18 -"
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
                        "code": "vm61",
                        "name": {
                            "fi": "Adoptiot",
                            "sv": "Adoptioner",
                            "en": "Adoptions"
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
                            "lastUpdated": "2022-08-31T05:00:00Z"
                        }
                    }
                ]
            }
        ],
        "selectableVariableCodes": [],
        "rowVariableCodes": [],
        "columnVariableCodes": [
            "Vuosi",
            "Syntymävaltio",
            "Adoptiotyyppi",
            "Ikä",
            "Sukupuoli",
            "Tiedot"
        ],
        "header": {
            "fi": "Adoptiot 1987-1989 muuttujina Syntymävaltio, Ikä",
            "sv": "Adoptioner 1987-1989 efter Födelseland, Ålder",
            "en": "Adoptions 1987-1989 by Country of birth, Age"
        },
        "visualizationSettings": {
            "visualizationType": EVisualizationType.Table,
            "timeVariableIntervals": ETimeVariableInterval.Year,
            "timeSeriesStartingPoint": "1987-01-01T00:00:00",
            "cutValueAxis": false
        }
    },
    selectedVariableCodes: { 'Vuosineljännes': ['2015Q1'], 'Alue': ['pks'], 'Rahoitusmuoto': ['1'] }
};

export const TABLE_WITH_ROW_AND_COLUMN_VARIABLES: { pxGraphData: IQueryVisualizationResponse, selectedVariableCodes: {[key: string]: string[]}} = {
    pxGraphData: {
        tableReference: { name: "table.px", hierarchy: ["foo", "bar"] },
        data: [
            13021.0,
            26.64,
            10080.0,
            20.22,
            3810.0,
            15.9,
            6176.0,
            13.74,
            11231.0,
            26.82,
            9326.0,
            20.45,
            3552.0,
            15.97,
            5749.0,
            13.78,
            10269.0,
            26.93,
            8907.0,
            20.59,
            3249.0,
            15.99,
            5280.0,
            13.79,
            10272.0,
            26.93,
            8805.0,
            20.66,
            3323.0,
            16.08,
            5265.0,
            13.8,
            3043.0,
            23.48,
            5261.0,
            17.62,
            941.0,
            16.13,
            2083.0,
            13.96,
            2679.0,
            23.64,
            5017.0,
            17.79,
            846.0,
            16.05,
            1902.0,
            13.91,
            2533.0,
            23.68,
            4925.0,
            17.85,
            763.0,
            15.97,
            1778.0,
            13.9,
            2548.0,
            23.77,
            4882.0,
            17.99,
            767.0,
            15.98,
            1744.0,
            13.97,
            5534.0,
            18.16,
            4267.0,
            14.07,
            1292.0,
            13.91,
            1782.0,
            11.81,
            4437.0,
            18.32,
            3666.0,
            14.27,
            1149.0,
            14.02,
            1642.0,
            11.87,
            4014.0,
            18.44,
            3329.0,
            14.37,
            1107.0,
            14.06,
            1554.0,
            11.86,
            4195.0,
            18.53,
            3414.0,
            14.48,
            1161.0,
            14.11,
            1557.0,
            11.96
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
                        "code": "853",
                        "name": {
                            "fi": "Turku",
                            "sv": "Åbo",
                            "en": "Turku"
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
            }
        ],
        "selectableVariableCodes": [],
        "rowVariableCodes": [
            "Alue",
            "Vuosineljännes",
            "Rahoitusmuoto"
        ],
        "columnVariableCodes": [
            "Huoneluku",
            "Tiedot"
        ],
        "header": {
            "fi": "Tiedot 2022Q1-2022Q4 muuttujina Tiedot, Alue, Huoneluku, Rahoitusmuoto",
            "sv": "Uppgifter 2022Q1-2022Q4 efter Uppgifter, Område, Antal rum, Finansieringssätt",
            "en": "Information 2022Q1-2022Q4 by Information, Region, Number of rooms, Type of funding"
        },
        "visualizationSettings": {
            "visualizationType": EVisualizationType.Table,
            "timeVariableIntervals": ETimeVariableInterval.Quarter,
            "timeSeriesStartingPoint": "2022-01-01T00:00:00",
            "cutValueAxis": false
        }
    },
    selectedVariableCodes: { }
};

export const SELECTABLE_TABLE_WITH_MISSING_DATA: IQueryVisualizationResponse = {
    tableReference: {
        name: "table.px",
        hierarchy: ["foo", "bar"]
    },
    data: [
        5139.0, 5237.0, 5281.0, 5308.0, 5467.0, 5607.0, 5588.0, 5635.0, 5619.0, 5716.0, 5521.0, 5287.0, 5379.0, 5551.0,
        null, null, null, null, null, null, null, null, null, null, null, null, null, null,
        null, null, null, null, null, null, null, null, null, null, null, null, null, null,
        null, null, null, null, null, null, null, null, null, null, null, null, null, null,
        3641.0, 3696.0, 3729.0, 3730.0, 3699.0, 3882.0, 3957.0, 4047.0, 4002.0, 4064.0, 4051.0, 4098.0, 3756.0, 4147.0,
        null, null, null, null, null, null, null, null, null, null, null, null, null, null,
        null, null, null, null, null, null, null, null, null, null, null, null, null, null,
        null, null, null, null, null, null, null, null, null, null, null, null, null, null,
        5418.0, 5524.0, 5570.0, 5601.0, 5796.0, 5928.0, 5890.0, 5930.0, 5914.0, 6026.0, 5822.0, 5525.0, 5590.0, 5765.0,
        6662.0, 6684.0, 6807.0, 6785.0, 6994.0, 7090.0, 7065.0, 6975.0, 6978.0, 6940.0, 6734.0, 6264.0, 6435.0, 6424.0,
        5264.0, 5407.0, 5424.0, 5483.0, 5587.0, 5744.0, 5718.0, 5782.0, 5800.0, 5845.0, 5509.0, 5461.0, 5360.0, 5536.0,
        5135.0, 5241.0, 5283.0, 5311.0, 5566.0, 5691.0, 5641.0, 5705.0, 5679.0, 5883.0, 5772.0, 5353.0, 5466.0, 5679.0
    ],
    dataNotes: {},
    missingDataInfo: {
        "14": 1,
        "15": 1,
        "16": 1,
        "17": 1,
        "18": 1,
        "19": 1,
        "20": 1,
        "21": 1,
        "22": 1,
        "23": 1,
        "24": 1,
        "25": 1,
        "26": 1,
        "27": 1,
        "28": 1,
        "29": 1,
        "30": 1,
        "31": 1,
        "32": 1,
        "33": 1,
        "34": 1,
        "35": 1,
        "36": 1,
        "37": 1,
        "38": 1,
        "39": 1,
        "40": 1,
        "41": 1,
        "42": 1,
        "43": 1,
        "44": 1,
        "45": 1,
        "46": 1,
        "47": 1,
        "48": 1,
        "49": 1,
        "50": 1,
        "51": 1,
        "52": 1,
        "53": 1,
        "54": 1,
        "55": 1,
        "70": 1,
        "71": 1,
        "72": 1,
        "73": 1,
        "74": 1,
        "75": 1,
        "76": 1,
        "77": 1,
        "78": 1,
        "79": 1,
        "80": 1,
        "81": 1,
        "82": 1,
        "83": 1,
        "84": 1,
        "85": 1,
        "86": 1,
        "87": 1,
        "88": 1,
        "89": 1,
        "90": 1,
        "91": 1,
        "92": 1,
        "93": 1,
        "94": 1,
        "95": 1,
        "96": 1,
        "97": 1,
        "98": 1,
        "99": 1,
        "100": 1,
        "101": 1,
        "102": 1,
        "103": 1,
        "104": 1,
        "105": 1,
        "106": 1,
        "107": 1,
        "108": 1,
        "109": 1,
        "110": 1,
        "111": 1
    },
    metaData: [
        {
            code: "Talotyyppi",
            name: {
                "fi": "Talotyyppi"
            },
            note: null,
            type: EVariableType.OtherClassificatory,
            values: [
                {
                    code: "0",
                    name: {
                        "fi": "Talotyypit yhteensä"
                    },
                    note: null,
                    isSum: false,
                    contentComponent: null
                },
                {
                    code: "1",
                    name: {
                        "fi": "Rivitalot"
                    },
                    note: null,
                    isSum: false,
                    contentComponent: null
                },
                {
                    code: "3",
                    name: {
                        "fi": "Kerrostalot"
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
                "fi": "Huoneluku"
            },
            note: null,
            type: EVariableType.OtherClassificatory,
            values: [
                {
                    code: "00",
                    name: {
                        "fi": "Yhteensä"
                    },
                    note: null,
                    isSum: true,
                    contentComponent: null
                },
                {
                    code: "01",
                    name: {
                        "fi": "Yksiöt"
                    },
                    note: null,
                    isSum: false,
                    contentComponent: null
                },
                {
                    code: "02",
                    name: {
                        "fi": "Kaksiot"
                    },
                    note: null,
                    isSum: false,
                    contentComponent: null
                },
                {
                    code: "03",
                    name: {
                        "fi": "Kolmiot+"
                    },
                    note: null,
                    isSum: false,
                    contentComponent: null
                }
            ]
        },
        {
            code: "Vuosineljännes",
            name: {
                "fi": "Vuosineljännes"
            },
            note: null,
            type: EVariableType.Time,
            values: [
                {
                    code: "2020Q1",
                    name: {
                        "fi": "2020Q1"
                    },
                    note: null,
                    isSum: false,
                    contentComponent: null
                },
                {
                    code: "2020Q2",
                    name: {
                        "fi": "2020Q2"
                    },
                    note: null,
                    isSum: false,
                    contentComponent: null
                },
                {
                    code: "2020Q3",
                    name: {
                        "fi": "2020Q3"
                    },
                    note: null,
                    isSum: false,
                    contentComponent: null
                },
                {
                    "code": "2020Q4",
                    "name": {
                        "fi": "2020Q4"
                    },
                    "note": null,
                    "isSum": false,
                    "contentComponent": null
                },
                {
                    "code": "2021Q1",
                    "name": {
                        "fi": "2021Q1"
                    },
                    "note": null,
                    "isSum": false,
                    "contentComponent": null
                },
                {
                    "code": "2021Q2",
                    "name": {
                        "fi": "2021Q2"
                    },
                    "note": null,
                    "isSum": false,
                    "contentComponent": null
                },
                {
                    "code": "2021Q3",
                    "name": {
                        "fi": "2021Q3"
                    },
                    "note": null,
                    "isSum": false,
                    "contentComponent": null
                },
                {
                    "code": "2021Q4",
                    "name": {
                        "fi": "2021Q4"
                    },
                    "note": null,
                    "isSum": false,
                    "contentComponent": null
                },
                {
                    "code": "2022Q1",
                    "name": {
                        "fi": "2022Q1"
                    },
                    "note": null,
                    "isSum": false,
                    "contentComponent": null
                },
                {
                    "code": "2022Q2",
                    "name": {
                        "fi": "2022Q2"
                    },
                    "note": null,
                    "isSum": false,
                    "contentComponent": null
                },
                {
                    "code": "2022Q3",
                    "name": {
                        "fi": "2022Q3"
                    },
                    "note": null,
                    "isSum": false,
                    "contentComponent": null
                },
                {
                    "code": "2022Q4",
                    "name": {
                        "fi": "2022Q4"
                    },
                    "note": null,
                    "isSum": false,
                    "contentComponent": null
                },
                {
                    "code": "2023Q1",
                    "name": {
                        "fi": "2023Q1*"
                    },
                    "note": null,
                    "isSum": false,
                    "contentComponent": null
                },
                {
                    "code": "2023Q2",
                    "name": {
                        "fi": "2023Q2*"
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
                "fi": "Alue"
            },
            "note": null,
            "type": EVariableType.OtherClassificatory,
            "values": [
                {
                    "code": "091",
                    "name": {
                        "fi": "Helsinki"
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
                "fi": "Tiedot"
            },
            "note": null,
            "type": EVariableType.Content,
            "values": [
                {
                    "code": "keskihinta_aritm",
                    "name": {
                        "fi": "Neliöhinta (EUR/m2)"
                    },
                    "note": null,
                    "isSum": false,
                    "contentComponent": {
                        "unit": {
                            "fi": "Eur / m2"
                        },
                        "source": {
                            "fi": "PxVisualizer-fi"
                        },
                        "numberOfDecimals": 0,
                        "lastUpdated": "2023-07-28T05:00:00Z"
                    }
                }
            ]
        }
    ],
    "selectableVariableCodes": [
        "Talotyyppi",
        "Huoneluku"
    ],
    "rowVariableCodes": [],
    "columnVariableCodes": [
        "Vuosineljännes",
        "Alue",
        "Tiedot"
    ],
    "header": {
        "fi": "Neliöhinta (EUR/m2), Helsinki 2020Q1-2023Q2* muuttujina Talotyyppi, Huoneluku"
    },
    "visualizationSettings": {
        "visualizationType": EVisualizationType.Table,
        "timeVariableIntervals": ETimeVariableInterval.Quarter,
        "timeSeriesStartingPoint": "2020-01-01T00:00:00Z",
        "cutValueAxis": false
    }
}