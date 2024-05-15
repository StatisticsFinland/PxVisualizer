import { ETimeVariableInterval, EVariableType, EVisualizationType, IQueryVisualizationResponse } from "../../types";

export const SELECTABLE_TABLE_WITH_INVALID_MISSING_DATA: IQueryVisualizationResponse = {
    tableReference: {
        name: "table.px",
        hierarchy: ["foo", "bar"]
    },
    data: [
        5139.0, 5237.0, 5281.0, 5308.0, 5467.0, 5607.0, 5588.0, 5635.0, 5619.0, 5716.0, 5521.0, 5287.0, 5379.0, 5551.0,
        null, null, null, null, null, null, null, null, null, null, null, null, null, null,
        null, null, null, null, null, null, null, null, null, null, null, null, null, null,
        null, null, null, null, null, null, null, null, null, null, null, null, null, null
    ],
    dataNotes: {},
    missingDataInfo: {
        "14": 1,
        "15": 0, // Invalid code
        "16": 1,
        "17": 1,
        "18": 1,
        "19": 1,
        "20": 1,
        "21": 0, // Invalid code
        "22": 1,
        "23": 1,
        "24": 1,
        "25": 1,
        "26": 1,
        "27": 1,
        "28": 1,
        "29": 0, // Invalid code
        "30": 1,
        "31": 1,
        "32": 1,
        "33": 1,
        "34": 1,
        "35": 1,
        "36": 1,
        "37": 0, // Invalid code
        "38": 1,
        "39": 1,
        "40": 1,
        "41": 1,
        "42": 1,
        "43": 1,
        "44": 1,
        "45": 0, // Invalid code
        "46": 1,
        "47": 1,
        "48": 1
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