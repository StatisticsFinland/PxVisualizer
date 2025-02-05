import { ETimeVariableInterval, EVisualizationType } from "../../types";
import { ESeriesType, View } from "../../types/view";

export const EMPTY_VIEW: View = {
    tableReferenceName: "",
    header: {},
    subheaderValues: [],
    columnNameGroups: [],
    units: [],
    sources: [],
    series: [],
    colVarNames: [],
    rowVarNames: [],
    selectableVarNames: [],
    seriesType: ESeriesType.Nominal,
    visualizationSettings: {
        timeVariableIntervals: ETimeVariableInterval.Irregular,
        visualizationType: EVisualizationType.HorizontalBarChart
    }
};

export const VIEW_WITH_COMPLEX_ROW_AND_COLUMN_VARIABLES: View = {
    tableReferenceName: "table.px",
    seriesType: ESeriesType.Time,
    selectableVarNames: [],
    header: {
        "fi": "Neliövuokra (eur/m2) 2015Q1-2015Q3 muuttujina Alue, Huoneluku, Rahoitusmuoto",
        "sv": "Kvadratmeterspris (eur/m2) 2015Q1-2015Q3 efter Område, Antal rum, Finansieringssätt",
        "en": "Rents per square meter (eur/m2) 2015Q1-2015Q3 by Region, Number of rooms, Type of funding"
    },
    subheaderValues: [],
    units: [
        {
            "name": {
                "fi": "Neliövuokra",
                "sv": "Kvadratmeterspris",
                "en": "Rents per square meter"
            },
            "unit": {
                "fi": "eur / m2",
                "sv": "eur / m2",
                "en": "eur / m2"
            }
        }
    ],
    sources: [
        {
            "fi": "PxVisualizer-fi",
            "sv": "PxVisualizer-sv",
            "en": "PxVisualizer-en"
        }
    ],
    columnNameGroups: [
        [
            {
                "fi": "Yksiöt",
                "sv": "Enrumslägenhet",
                "en": "One-room flat"
            },
            {
                "fi": "Vapaarahoitteinen",
                "sv": "Fri finansierad",
                "en": "Non subsidised"
            },
            {
                "fi": "Neliövuokra (eur/m2)",
                "sv": "Kvadratmeterspris (eur/m2)",
                "en": "Rents per square meter (eur/m2)"
            }
        ],
        [
            {
                "fi": "Yksiöt",
                "sv": "Enrumslägenhet",
                "en": "One-room flat"
            },
            {
                "fi": "ARA",
                "sv": "ARA",
                "en": "Government subsidised"
            },
            {
                "fi": "Neliövuokra (eur/m2)",
                "sv": "Kvadratmeterspris (eur/m2)",
                "en": "Rents per square meter (eur/m2)"
            }
        ],
        [
            {
                "fi": "Kaksiot",
                "sv": "Tvårumslägenhet",
                "en": "Two-room flat"
            },
            {
                "fi": "Vapaarahoitteinen",
                "sv": "Fri finansierad",
                "en": "Non subsidised"
            },
            {
                "fi": "Neliövuokra (eur/m2)",
                "sv": "Kvadratmeterspris (eur/m2)",
                "en": "Rents per square meter (eur/m2)"
            }
        ],
        [
            {
                "fi": "Kaksiot",
                "sv": "Tvårumslägenhet",
                "en": "Two-room flat"
            },
            {
                "fi": "ARA",
                "sv": "ARA",
                "en": "Government subsidised"
            },
            {
                "fi": "Neliövuokra (eur/m2)",
                "sv": "Kvadratmeterspris (eur/m2)",
                "en": "Rents per square meter (eur/m2)"
            }
        ]
    ],
    series: [
        {
            rowNameGroup: [
                {
                    "fi": "2015Q1",
                    "sv": "2015Q1",
                    "en": "2015Q1"
                },
                {
                    "fi": "Helsinki",
                    "sv": "Helsingfors",
                    "en": "Helsinki"
                }
            ],
            series: [
                { value: 22.68, precision: 2, preliminary: false },
                { value: 13.80, precision: 2, preliminary: false },
                { value: 15.77, precision: 2, preliminary: false },
                { value: 12.09, precision: 2, preliminary: false }
            ]
        },
        {
            rowNameGroup: [
                {
                    "fi": "2015Q1",
                    "sv": "2015Q1",
                    "en": "2015Q1"
                },
                {
                    "fi": "Turku",
                    "sv": "Åbo",
                    "en": "Turku"
                }
            ],
            series: [
                { value: 15.15, precision: 2, preliminary: false },
                { value: 12.70, precision: 2, preliminary: false },
                { value: 10.50, precision: 2, preliminary: false },
                { value: 10.95, precision: 2, preliminary: false }
            ]
        },
        {
            rowNameGroup: [
                {
                    "fi": "2015Q2",
                    "sv": "2015Q2",
                    "en": "2015Q2"
                },
                {
                    "fi": "Helsinki",
                    "sv": "Helsingfors",
                    "en": "Helsinki"
                }
            ],
            series: [
                { value: 22.87, precision: 2, preliminary: false },
                { value: 13.95, precision: 2, preliminary: false },
                { value: 15.95, precision: 2, preliminary: false },
                { value: 12.23, precision: 2, preliminary: false }
            ]
        },
        {
            rowNameGroup: [
                {
                    "fi": "2015Q2",
                    "sv": "2015Q2",
                    "en": "2015Q2"
                },
                {
                    "fi": "Turku",
                    "sv": "Åbo",
                    "en": "Turku"
                }
            ],
            series: [
                { value: 15.18, precision: 2, preliminary: false },
                { value: 12.84, precision: 2, preliminary: false },
                { value: 10.57, precision: 2, preliminary: false },
                { value: 11.04, precision: 2, preliminary: false }
            ]
        },
        {
            rowNameGroup: [
                {
                    "fi": "2015Q3",
                    "sv": "2015Q3",
                    "en": "2015Q3"
                },
                {
                    "fi": "Helsinki",
                    "sv": "Helsingfors",
                    "en": "Helsinki"
                }
            ],
            series: [
                { value: 23.10, precision: 2, preliminary: false },
                { value: 14.00, precision: 2, preliminary: false },
                { value: 16.12, precision: 2, preliminary: false },
                { value: 12.31, precision: 2, preliminary: false }
            ]
        },
        {
            rowNameGroup: [
                {
                    "fi": "2015Q3",
                    "sv": "2015Q3",
                    "en": "2015Q3"
                },
                {
                    "fi": "Turku",
                    "sv": "Åbo",
                    "en": "Turku"
                }
            ],
            series: [
                { value: 15.32, precision: 2, preliminary: false },
                { value: 12.93, precision: 2, preliminary: false },
                { value: 10.65, precision: 2, preliminary: false },
                { value: 11.10, precision: 2, preliminary: false }
            ]
        }
    ],
    colVarNames: [
        {
            "fi": "Huoneluku",
            "sv": "Antal rum",
            "en": "Number of rooms"
        },
        {
            "fi": "Rahoitusmuoto",
            "sv": "Finansieringssätt",
            "en": "Type of funding"
        },
        {
            "fi": "Tiedot",
            "sv": "Uppgifter",
            "en": "Information"
        }
    ],
    rowVarNames: [
        {
            "fi": "Vuosineljännes",
            "sv": "Kvartal",
            "en": "Quarter"
        },
        {
            "fi": "Alue",
            "sv": "Område",
            "en": "Region"
        }
    ],
    visualizationSettings: {
        timeSeriesStartingPoint: "2020-01-01T00:00:00",
        timeVariableIntervals: ETimeVariableInterval.Quarter,
        visualizationType: EVisualizationType.Table,
    }
};

export const VIEW_WITH_SUBHEADER: View = {
    tableReferenceName: "table.px",
    seriesType: ESeriesType.Time,
    selectableVarNames: [],
    header: {
        "fi": "Tiedot 2015Q1-2015Q2 muuttujina Tiedot, Alue, Huoneluku, Rahoitusmuoto",
        "sv": "Uppgifter 2015Q1-2015Q2 efter Uppgifter, Område, Antal rum, Finansieringssätt",
        "en": "Information 2015Q1-2015Q2 by Information, Region, Number of rooms, Type of funding"
    },
    subheaderValues: [
        {
            "fi": "Pääkaupunkiseutu (PKS)",
            "sv": "Huvudstadsregionen",
            "en": "Greater Helsinki"
        },
        {
            "fi": "Yksiöt",
            "sv": "Enrumslägenhet",
            "en": "One-room flat"
        },
        {
            "fi": "Lukumäärä",
            "sv": "Antal",
            "en": "Number"
        }
    ],
    series: [
        {
            rowNameGroup: [
                {
                    "fi": "Vapaarahoitteinen",
                    "sv": "Fri finansierad",
                    "en": "Non subsidised"
                }
            ],
            series: [
                { value: 11096, precision: 0, preliminary: false },
                { value: 11625, precision: 0, preliminary: false }
            ]
        },
        {
            "rowNameGroup": [
                {
                    "fi": "ARA",
                    "sv": "ARA",
                    "en": "Government subsidised"
                }
            ],
            "series": [
                { value: 4845, precision: 0, preliminary: false },
                { value: 5174, precision: 0, preliminary: false }
            ]
        }
    ],
    rowVarNames: [
        {
            "fi": "Rahoitusmuoto",
            "sv": "Finansieringssätt",
            "en": "Type of funding"
        }
    ],
    colVarNames: [
        {
            "fi": "Vuosineljännes",
            "sv": "Kvartal",
            "en": "Quarter"
        }
    ],
    columnNameGroups: [
        [
            {
                "fi": "2015Q1",
                "sv": "2015Q1",
                "en": "2015Q1"
            }
        ],
        [
            {
                "fi": "2015Q2",
                "sv": "2015Q2",
                "en": "2015Q2"
            }
        ]
    ],
    units: [
        {
            "name": {
                "fi": "Lukumäärä",
                "sv": "antal",
                "en": "number"
            },
            "unit": {
                "fi": "lukumäärä",
                "sv": "antal",
                "en": "number"
            }
        }
    ],
    sources: [
        {
            "fi": "PxVisualizer-fi",
            "sv": "PxVisualizer-sv",
            "en": "PxVisualizer-en"
        }
    ],
    visualizationSettings: {
        timeSeriesStartingPoint: "2015-01-01T00:00:00",
        timeVariableIntervals: ETimeVariableInterval.Quarter,
        visualizationType: EVisualizationType.Table,
    }
};

export const SIMPLE_VIEW: View = {
    tableReferenceName: "table.px",
    seriesType: ESeriesType.Time,
    selectableVarNames: [],
    header: {
        "fi": "Tiedot 1970-1972",
        "sv": "Uppgifter 1970-1972",
        "en": "Information 1970-1972"
    },
    subheaderValues: [],
    series: [
        {
            rowNameGroup: [],
            series: [
                { value: 2824, precision: 0, preliminary: false },
                { value: 2620, precision: 0, preliminary: false },
                { value: 2818, precision: 0, preliminary: false },
            ]
        }
    ],
    rowVarNames: [],
    colVarNames: [
        {
            "fi": "Vuosi",
            "sv": "År",
            "en": "Year"
        }
    ],
    columnNameGroups: [
        [
            {
                "fi": "1970",
                "sv": "1970",
                "en": "1970"
            }
        ],
        [
            {
                "fi": "1971",
                "sv": "1971",
                "en": "1971"
            }
        ],
        [
            {
                "fi": "1972",
                "sv": "1972",
                "en": "1972"
            }
        ]
    ],
    units: [
        {
            name: {
                "fi": "1000 t",
                "sv": "1000 t",
                "en": "1000 t"
            },
            unit: {
                "fi": "1000 t",
                "sv": "1000 t",
                "en": "1000 t"
            }
        }
    ],
    sources: [
        {
            "fi": "PxVisualizer-fi",
            "sv": "PxVisualizer-sv",
            "en": "PxVisualizer-en"
        }
    ],
    visualizationSettings: {
        timeSeriesStartingPoint: "1970-01-01T00:00:00",
        timeVariableIntervals: ETimeVariableInterval.Year,
        visualizationType: EVisualizationType.Table,
    }
};