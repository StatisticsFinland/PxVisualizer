import { ETimeVariableInterval, EVisualizationType } from "../../../types";
import { View } from "../../../types/view";

export const simpleQuarterLinechartViewFixture: View = {
    header: {
        "fi": "Muutos edelliseen neljännekseen (indeksi 2015=100), Koko maa, Talotyypit yhteensä 2020Q1-2023Q1",
        "sv": "Kvartalsförändring (index 2015=100), Hela landet, Hustyp totalt 2020Q1-2023Q1",
        "en": "Quarterly change (index 2015=100), Whole country, Building types total 2020Q1-2023Q1"
    },
    tableReferenceName: "table.px",
    subheaderValues: [],
    units: [
        {
            name: {
                "fi": "Muutos edelliseen neljännekseen (indeksi 2015=100)",
                "sv": "Kvartalsförändring (index 2015=100)",
                "en": "Quarterly change (index 2015=100)"
            },
            unit: {
                "fi": "%",
                "sv": "%",
                "en": "%"
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
                "fi": "2020Q1",
                "sv": "2020Q1",
                "en": "2020Q1"
            }
        ],
        [
            {
                "fi": "2020Q2",
                "sv": "2020Q2",
                "en": "2020Q2"
            }
        ],
        [
            {
                "fi": "2020Q3",
                "sv": "2020Q3",
                "en": "2020Q3"
            }
        ],
        [
            {
                "fi": "2020Q4",
                "sv": "2020Q4",
                "en": "2020Q4"
            }
        ],
        [
            {
                "fi": "2021Q1",
                "sv": "2021Q1",
                "en": "2021Q1"
            }
        ],
        [
            {
                "fi": "2021Q2",
                "sv": "2021Q2",
                "en": "2021Q2"
            }
        ],
        [
            {
                "fi": "2021Q3",
                "sv": "2021Q3",
                "en": "2021Q3"
            }
        ],
        [
            {
                "fi": "2021Q4",
                "sv": "2021Q4",
                "en": "2021Q4"
            }
        ],
        [
            {
                "fi": "2022Q1",
                "sv": "2022Q1",
                "en": "2022Q1"
            }
        ],
        [
            {
                "fi": "2022Q2",
                "sv": "2022Q2",
                "en": "2022Q2"
            }
        ],
        [
            {
                "fi": "2022Q3",
                "sv": "2022Q3",
                "en": "2022Q3"
            }
        ],
        [
            {
                "fi": "2022Q4",
                "sv": "2022Q4",
                "en": "2022Q4"
            }
        ],
        [
            {
                "fi": "2023Q1",
                "sv": "2023Q1",
                "en": "2023Q1"
            }
        ]
    ],
    series: [
        {
            rowNameGroup: [],
            series: [
                {
                    "value": 0.6,
                    "precision": 1,
                    "preliminary": false
                },
                {
                    "value": 0.6,
                    "precision": 1,
                    "preliminary": false
                },
                {
                    "value": -0.3,
                    "precision": 1,
                    "preliminary": false
                },
                {
                    "value": 3.3,
                    "precision": 1,
                    "preliminary": false
                },
                {
                    "value": 1.5,
                    "precision": 1,
                    "preliminary": false
                },
                {
                    "value": 2.1,
                    "precision": 1,
                    "preliminary": false
                },
                {
                    "value": -0.4,
                    "precision": 1,
                    "preliminary": false
                },
                {
                    "value": 0.7,
                    "precision": 1,
                    "preliminary": false
                },
                {
                    "value": 3.3,
                    "precision": 1,
                    "preliminary": false
                },
                {
                    "value": 0,
                    "precision": 1,
                    "preliminary": false
                },
                {
                    "value": 1.9,
                    "precision": 1,
                    "preliminary": false
                },
                {
                    "value": -3.4,
                    "precision": 1,
                    "preliminary": false
                },
                {
                    "value": -0.5,
                    "precision": 1,
                    "preliminary": false
                }
            ]
        }
    ],
    colVarNames: [
        {
            "fi": "Vuosineljännes",
            "sv": "Kvartal",
            "en": "Quarter"
        }
    ],
    rowVarNames: [],
    selectableVarNames: [],
    visualizationSettings: {
        visualizationType: EVisualizationType.LineChart,
        timeVariableIntervals: ETimeVariableInterval.Quarter,
        timeSeriesStartingPoint: "2020-01-01T00:00:00",
        cutValueAxis: false,
        showLastLabel: false,
        showDataPoints: true
    },
    seriesType: 0
}

export const combinationValuesLinechartViewFixture: View = {
  "header": {
    "fi": "Neliövuokra (eur/m2), Vapaarahoitteinen 2015Q1-2022Q4 muuttujina Alue, Huoneluku",
    "sv": "Kvadratmeterspris (eur/m2), Fri finansierad 2015Q1-2022Q4 efter Område, Antal rum",
    "en": "Rents per square meter (eur/m2), Non subsidised 2015Q1-2022Q4 by Region, Number of rooms"
  },
  "tableReferenceName": "table.px",
  "subheaderValues": [],
  "units": [
    {
      "name": {
        "fi": "Neliövuokra (eur/m2)",
        "sv": "Kvadratmeterspris (eur/m2)",
        "en": "Rents per square meter (eur/m2)"
      },
      "unit": {
        "fi": "eur / m2",
        "sv": "eur / m2",
        "en": "eur / m2"
      }
    }
  ],
  "sources": [
    {
      "fi": "PxVisualizer-fi",
      "sv": "PxVisualizer-sv",
      "en": "PxVisualizer-en"
    }
  ],
  "columnNameGroups": [
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
    ],
    [
      {
        "fi": "2015Q3",
        "sv": "2015Q3",
        "en": "2015Q3"
      }
    ],
    [
      {
        "fi": "2015Q4",
        "sv": "2015Q4",
        "en": "2015Q4"
      }
    ],
    [
      {
        "fi": "2016Q1",
        "sv": "2016Q1",
        "en": "2016Q1"
      }
    ],
    [
      {
        "fi": "2016Q2",
        "sv": "2016Q2",
        "en": "2016Q2"
      }
    ],
    [
      {
        "fi": "2016Q3",
        "sv": "2016Q3",
        "en": "2016Q3"
      }
    ],
    [
      {
        "fi": "2016Q4",
        "sv": "2016Q4",
        "en": "2016Q4"
      }
    ],
    [
      {
        "fi": "2017Q1",
        "sv": "2017Q1",
        "en": "2017Q1"
      }
    ],
    [
      {
        "fi": "2017Q2",
        "sv": "2017Q2",
        "en": "2017Q2"
      }
    ],
    [
      {
        "fi": "2017Q3",
        "sv": "2017Q3",
        "en": "2017Q3"
      }
    ],
    [
      {
        "fi": "2017Q4",
        "sv": "2017Q4",
        "en": "2017Q4"
      }
    ],
    [
      {
        "fi": "2018Q1",
        "sv": "2018Q1",
        "en": "2018Q1"
      }
    ],
    [
      {
        "fi": "2018Q2",
        "sv": "2018Q2",
        "en": "2018Q2"
      }
    ],
    [
      {
        "fi": "2018Q3",
        "sv": "2018Q3",
        "en": "2018Q3"
      }
    ],
    [
      {
        "fi": "2018Q4",
        "sv": "2018Q4",
        "en": "2018Q4"
      }
    ],
    [
      {
        "fi": "2019Q1",
        "sv": "2019Q1",
        "en": "2019Q1"
      }
    ],
    [
      {
        "fi": "2019Q2",
        "sv": "2019Q2",
        "en": "2019Q2"
      }
    ],
    [
      {
        "fi": "2019Q3",
        "sv": "2019Q3",
        "en": "2019Q3"
      }
    ],
    [
      {
        "fi": "2019Q4",
        "sv": "2019Q4",
        "en": "2019Q4"
      }
    ],
    [
      {
        "fi": "2020Q1",
        "sv": "2020Q1",
        "en": "2020Q1"
      }
    ],
    [
      {
        "fi": "2020Q2",
        "sv": "2020Q2",
        "en": "2020Q2"
      }
    ],
    [
      {
        "fi": "2020Q3",
        "sv": "2020Q3",
        "en": "2020Q3"
      }
    ],
    [
      {
        "fi": "2020Q4",
        "sv": "2020Q4",
        "en": "2020Q4"
      }
    ],
    [
      {
        "fi": "2021Q1",
        "sv": "2021Q1",
        "en": "2021Q1"
      }
    ],
    [
      {
        "fi": "2021Q2",
        "sv": "2021Q2",
        "en": "2021Q2"
      }
    ],
    [
      {
        "fi": "2021Q3",
        "sv": "2021Q3",
        "en": "2021Q3"
      }
    ],
    [
      {
        "fi": "2021Q4",
        "sv": "2021Q4",
        "en": "2021Q4"
      }
    ],
    [
      {
        "fi": "2022Q1",
        "sv": "2022Q1",
        "en": "2022Q1"
      }
    ],
    [
      {
        "fi": "2022Q2",
        "sv": "2022Q2",
        "en": "2022Q2"
      }
    ],
    [
      {
        "fi": "2022Q3",
        "sv": "2022Q3",
        "en": "2022Q3"
      }
    ],
    [
      {
        "fi": "2022Q4",
        "sv": "2022Q4",
        "en": "2022Q4"
      }
    ]
  ],
  "series": [
    {
      "rowNameGroup": [
        {
          "fi": "Helsinki",
          "sv": "Helsingfors",
          "en": "Helsinki"
        },
        {
          "fi": "Yksiöt",
          "sv": "Enrumslägenhet",
          "en": "One-room flat"
        }
      ],
      "series": [
        {
          "value": 22.68,
          "precision": 2,
          "preliminary": false
        },
        {
          "value": 22.87,
          "precision": 2,
          "preliminary": false
        },
        {
          "value": 23.1,
          "precision": 2,
          "preliminary": false
        },
        {
          "value": 23.23,
          "precision": 2,
          "preliminary": false
        },
        {
          "value": 23.5,
          "precision": 2,
          "preliminary": false
        },
        {
          "value": 23.68,
          "precision": 2,
          "preliminary": false
        },
        {
          "value": 23.78,
          "precision": 2,
          "preliminary": false
        },
        {
          "value": 23.89,
          "precision": 2,
          "preliminary": false
        },
        {
          "value": 24.07,
          "precision": 2,
          "preliminary": false
        },
        {
          "value": 24.08,
          "precision": 2,
          "preliminary": false
        },
        {
          "value": 24.45,
          "precision": 2,
          "preliminary": false
        },
        {
          "value": 24.55,
          "precision": 2,
          "preliminary": false
        },
        {
          "value": 24.54,
          "precision": 2,
          "preliminary": false
        },
        {
          "value": 24.65,
          "precision": 2,
          "preliminary": false
        },
        {
          "value": 24.72,
          "precision": 2,
          "preliminary": false
        },
        {
          "value": 25.13,
          "precision": 2,
          "preliminary": false
        },
        {
          "value": 25.09,
          "precision": 2,
          "preliminary": false
        },
        {
          "value": 25.22,
          "precision": 2,
          "preliminary": false
        },
        {
          "value": 25.44,
          "precision": 2,
          "preliminary": false
        },
        {
          "value": 25.87,
          "precision": 2,
          "preliminary": false
        },
        {
          "value": 26.15,
          "precision": 2,
          "preliminary": false
        },
        {
          "value": 26.27,
          "precision": 2,
          "preliminary": false
        },
        {
          "value": 26.36,
          "precision": 2,
          "preliminary": false
        },
        {
          "value": 26.51,
          "precision": 2,
          "preliminary": false
        },
        {
          "value": 26.59,
          "precision": 2,
          "preliminary": false
        },
        {
          "value": 26.68,
          "precision": 2,
          "preliminary": false
        },
        {
          "value": 26.72,
          "precision": 2,
          "preliminary": false
        },
        {
          "value": 26.75,
          "precision": 2,
          "preliminary": false
        },
        {
          "value": 26.64,
          "precision": 2,
          "preliminary": false
        },
        {
          "value": 26.82,
          "precision": 2,
          "preliminary": false
        },
        {
          "value": 26.93,
          "precision": 2,
          "preliminary": false
        },
        {
          "value": 26.93,
          "precision": 2,
          "preliminary": false
        }
      ]
    },
    {
      "rowNameGroup": [
        {
          "fi": "Helsinki",
          "sv": "Helsingfors",
          "en": "Helsinki"
        },
        {
          "fi": "Kaksiot",
          "sv": "Tvårumslägenhet",
          "en": "Two-room flat"
        }
      ],
      "series": [
        {
          "value": 15.77,
          "precision": 2,
          "preliminary": false
        },
        {
          "value": 15.95,
          "precision": 2,
          "preliminary": false
        },
        {
          "value": 16.12,
          "precision": 2,
          "preliminary": false
        },
        {
          "value": 16.04,
          "precision": 2,
          "preliminary": false
        },
        {
          "value": 16.4,
          "precision": 2,
          "preliminary": false
        },
        {
          "value": 16.71,
          "precision": 2,
          "preliminary": false
        },
        {
          "value": 16.85,
          "precision": 2,
          "preliminary": false
        },
        {
          "value": 16.82,
          "precision": 2,
          "preliminary": false
        },
        {
          "value": 17.14,
          "precision": 2,
          "preliminary": false
        },
        {
          "value": 17.3,
          "precision": 2,
          "preliminary": false
        },
        {
          "value": 18.63,
          "precision": 2,
          "preliminary": false
        },
        {
          "value": 18.93,
          "precision": 2,
          "preliminary": false
        },
        {
          "value": 18.68,
          "precision": 2,
          "preliminary": false
        },
        {
          "value": 18.71,
          "precision": 2,
          "preliminary": false
        },
        {
          "value": 18.83,
          "precision": 2,
          "preliminary": false
        },
        {
          "value": 19.11,
          "precision": 2,
          "preliminary": false
        },
        {
          "value": 18.9,
          "precision": 2,
          "preliminary": false
        },
        {
          "value": 19.02,
          "precision": 2,
          "preliminary": false
        },
        {
          "value": 19.21,
          "precision": 2,
          "preliminary": false
        },
        {
          "value": 19.72,
          "precision": 2,
          "preliminary": false
        },
        {
          "value": 19.85,
          "precision": 2,
          "preliminary": false
        },
        {
          "value": 19.92,
          "precision": 2,
          "preliminary": false
        },
        {
          "value": 20.02,
          "precision": 2,
          "preliminary": false
        },
        {
          "value": 20.1,
          "precision": 2,
          "preliminary": false
        },
        {
          "value": 20.01,
          "precision": 2,
          "preliminary": false
        },
        {
          "value": 20.14,
          "precision": 2,
          "preliminary": false
        },
        {
          "value": 20.21,
          "precision": 2,
          "preliminary": false
        },
        {
          "value": 20.19,
          "precision": 2,
          "preliminary": false
        },
        {
          "value": 20.22,
          "precision": 2,
          "preliminary": false
        },
        {
          "value": 20.45,
          "precision": 2,
          "preliminary": false
        },
        {
          "value": 20.59,
          "precision": 2,
          "preliminary": false
        },
        {
          "value": 20.66,
          "precision": 2,
          "preliminary": false
        }
      ]
    },
    {
      "rowNameGroup": [
        {
          "fi": "Helsinki",
          "sv": "Helsingfors",
          "en": "Helsinki"
        },
        {
          "fi": "Kolmiot+",
          "sv": "Trerumslägenhet+",
          "en": "Three-room flat+"
        }
      ],
      "series": [
        {
          "value": 14.69,
          "precision": 2,
          "preliminary": false
        },
        {
          "value": 14.8,
          "precision": 2,
          "preliminary": false
        },
        {
          "value": 14.85,
          "precision": 2,
          "preliminary": false
        },
        {
          "value": 14.77,
          "precision": 2,
          "preliminary": false
        },
        {
          "value": 15.26,
          "precision": 2,
          "preliminary": false
        },
        {
          "value": 15.58,
          "precision": 2,
          "preliminary": false
        },
        {
          "value": 15.8,
          "precision": 2,
          "preliminary": false
        },
        {
          "value": 15.66,
          "precision": 2,
          "preliminary": false
        },
        {
          "value": 16.04,
          "precision": 2,
          "preliminary": false
        },
        {
          "value": 16.17,
          "precision": 2,
          "preliminary": false
        },
        {
          "value": 17,
          "precision": 2,
          "preliminary": false
        },
        {
          "value": 17.07,
          "precision": 2,
          "preliminary": false
        },
        {
          "value": 16.58,
          "precision": 2,
          "preliminary": false
        },
        {
          "value": 16.66,
          "precision": 2,
          "preliminary": false
        },
        {
          "value": 16.76,
          "precision": 2,
          "preliminary": false
        },
        {
          "value": 17.28,
          "precision": 2,
          "preliminary": false
        },
        {
          "value": 16.95,
          "precision": 2,
          "preliminary": false
        },
        {
          "value": 17.11,
          "precision": 2,
          "preliminary": false
        },
        {
          "value": 17.16,
          "precision": 2,
          "preliminary": false
        },
        {
          "value": 17.69,
          "precision": 2,
          "preliminary": false
        },
        {
          "value": 17.88,
          "precision": 2,
          "preliminary": false
        },
        {
          "value": 18.06,
          "precision": 2,
          "preliminary": false
        },
        {
          "value": 18.12,
          "precision": 2,
          "preliminary": false
        },
        {
          "value": 18.11,
          "precision": 2,
          "preliminary": false
        },
        {
          "value": 18.02,
          "precision": 2,
          "preliminary": false
        },
        {
          "value": 18.19,
          "precision": 2,
          "preliminary": false
        },
        {
          "value": 18.42,
          "precision": 2,
          "preliminary": false
        },
        {
          "value": 18.41,
          "precision": 2,
          "preliminary": false
        },
        {
          "value": 18.43,
          "precision": 2,
          "preliminary": false
        },
        {
          "value": 18.75,
          "precision": 2,
          "preliminary": false
        },
        {
          "value": 19.04,
          "precision": 2,
          "preliminary": false
        },
        {
          "value": 19.13,
          "precision": 2,
          "preliminary": false
        }
      ]
    },
    {
      "rowNameGroup": [
        {
          "fi": "Turku",
          "sv": "Åbo",
          "en": "Turku"
        },
        {
          "fi": "Yksiöt",
          "sv": "Enrumslägenhet",
          "en": "One-room flat"
        }
      ],
      "series": [
        {
          "value": 15.15,
          "precision": 2,
          "preliminary": false
        },
        {
          "value": 15.18,
          "precision": 2,
          "preliminary": false
        },
        {
          "value": 15.32,
          "precision": 2,
          "preliminary": false
        },
        {
          "value": 15.41,
          "precision": 2,
          "preliminary": false
        },
        {
          "value": 15.56,
          "precision": 2,
          "preliminary": false
        },
        {
          "value": 15.58,
          "precision": 2,
          "preliminary": false
        },
        {
          "value": 15.72,
          "precision": 2,
          "preliminary": false
        },
        {
          "value": 15.8,
          "precision": 2,
          "preliminary": false
        },
        {
          "value": 15.96,
          "precision": 2,
          "preliminary": false
        },
        {
          "value": 15.93,
          "precision": 2,
          "preliminary": false
        },
        {
          "value": 16.11,
          "precision": 2,
          "preliminary": false
        },
        {
          "value": 16.24,
          "precision": 2,
          "preliminary": false
        },
        {
          "value": 16.18,
          "precision": 2,
          "preliminary": false
        },
        {
          "value": 16.25,
          "precision": 2,
          "preliminary": false
        },
        {
          "value": 16.4,
          "precision": 2,
          "preliminary": false
        },
        {
          "value": 16.68,
          "precision": 2,
          "preliminary": false
        },
        {
          "value": 16.62,
          "precision": 2,
          "preliminary": false
        },
        {
          "value": 16.71,
          "precision": 2,
          "preliminary": false
        },
        {
          "value": 16.83,
          "precision": 2,
          "preliminary": false
        },
        {
          "value": 17.2,
          "precision": 2,
          "preliminary": false
        },
        {
          "value": 17.45,
          "precision": 2,
          "preliminary": false
        },
        {
          "value": 17.48,
          "precision": 2,
          "preliminary": false
        },
        {
          "value": 17.57,
          "precision": 2,
          "preliminary": false
        },
        {
          "value": 17.64,
          "precision": 2,
          "preliminary": false
        },
        {
          "value": 17.76,
          "precision": 2,
          "preliminary": false
        },
        {
          "value": 17.88,
          "precision": 2,
          "preliminary": false
        },
        {
          "value": 17.95,
          "precision": 2,
          "preliminary": false
        },
        {
          "value": 18.01,
          "precision": 2,
          "preliminary": false
        },
        {
          "value": 18.16,
          "precision": 2,
          "preliminary": false
        },
        {
          "value": 18.32,
          "precision": 2,
          "preliminary": false
        },
        {
          "value": 18.44,
          "precision": 2,
          "preliminary": false
        },
        {
          "value": 18.53,
          "precision": 2,
          "preliminary": false
        }
      ]
    },
    {
      "rowNameGroup": [
        {
          "fi": "Turku",
          "sv": "Åbo",
          "en": "Turku"
        },
        {
          "fi": "Kaksiot",
          "sv": "Tvårumslägenhet",
          "en": "Two-room flat"
        }
      ],
      "series": [
        {
          "value": 10.5,
          "precision": 2,
          "preliminary": false
        },
        {
          "value": 10.57,
          "precision": 2,
          "preliminary": false
        },
        {
          "value": 10.65,
          "precision": 2,
          "preliminary": false
        },
        {
          "value": 10.64,
          "precision": 2,
          "preliminary": false
        },
        {
          "value": 10.85,
          "precision": 2,
          "preliminary": false
        },
        {
          "value": 11.1,
          "precision": 2,
          "preliminary": false
        },
        {
          "value": 11.23,
          "precision": 2,
          "preliminary": false
        },
        {
          "value": 11.24,
          "precision": 2,
          "preliminary": false
        },
        {
          "value": 11.42,
          "precision": 2,
          "preliminary": false
        },
        {
          "value": 11.44,
          "precision": 2,
          "preliminary": false
        },
        {
          "value": 12.53,
          "precision": 2,
          "preliminary": false
        },
        {
          "value": 12.83,
          "precision": 2,
          "preliminary": false
        },
        {
          "value": 12.67,
          "precision": 2,
          "preliminary": false
        },
        {
          "value": 12.74,
          "precision": 2,
          "preliminary": false
        },
        {
          "value": 12.79,
          "precision": 2,
          "preliminary": false
        },
        {
          "value": 13.12,
          "precision": 2,
          "preliminary": false
        },
        {
          "value": 12.93,
          "precision": 2,
          "preliminary": false
        },
        {
          "value": 13,
          "precision": 2,
          "preliminary": false
        },
        {
          "value": 13.11,
          "precision": 2,
          "preliminary": false
        },
        {
          "value": 13.52,
          "precision": 2,
          "preliminary": false
        },
        {
          "value": 13.57,
          "precision": 2,
          "preliminary": false
        },
        {
          "value": 13.61,
          "precision": 2,
          "preliminary": false
        },
        {
          "value": 13.65,
          "precision": 2,
          "preliminary": false
        },
        {
          "value": 13.73,
          "precision": 2,
          "preliminary": false
        },
        {
          "value": 13.76,
          "precision": 2,
          "preliminary": false
        },
        {
          "value": 13.88,
          "precision": 2,
          "preliminary": false
        },
        {
          "value": 13.93,
          "precision": 2,
          "preliminary": false
        },
        {
          "value": 13.98,
          "precision": 2,
          "preliminary": false
        },
        {
          "value": 14.07,
          "precision": 2,
          "preliminary": false
        },
        {
          "value": 14.27,
          "precision": 2,
          "preliminary": false
        },
        {
          "value": 14.37,
          "precision": 2,
          "preliminary": false
        },
        {
          "value": 14.48,
          "precision": 2,
          "preliminary": false
        }
      ]
    },
    {
      "rowNameGroup": [
        {
          "fi": "Turku",
          "sv": "Åbo",
          "en": "Turku"
        },
        {
          "fi": "Kolmiot+",
          "sv": "Trerumslägenhet+",
          "en": "Three-room flat+"
        }
      ],
      "series": [
        {
          "value": 9.65,
          "precision": 2,
          "preliminary": false
        },
        {
          "value": 9.76,
          "precision": 2,
          "preliminary": false
        },
        {
          "value": 9.79,
          "precision": 2,
          "preliminary": false
        },
        {
          "value": 9.81,
          "precision": 2,
          "preliminary": false
        },
        {
          "value": 9.99,
          "precision": 2,
          "preliminary": false
        },
        {
          "value": 10.1,
          "precision": 2,
          "preliminary": false
        },
        {
          "value": 10.23,
          "precision": 2,
          "preliminary": false
        },
        {
          "value": 10.26,
          "precision": 2,
          "preliminary": false
        },
        {
          "value": 10.51,
          "precision": 2,
          "preliminary": false
        },
        {
          "value": 10.43,
          "precision": 2,
          "preliminary": false
        },
        {
          "value": 10.89,
          "precision": 2,
          "preliminary": false
        },
        {
          "value": 11.03,
          "precision": 2,
          "preliminary": false
        },
        {
          "value": 10.88,
          "precision": 2,
          "preliminary": false
        },
        {
          "value": 10.92,
          "precision": 2,
          "preliminary": false
        },
        {
          "value": 10.96,
          "precision": 2,
          "preliminary": false
        },
        {
          "value": 11.26,
          "precision": 2,
          "preliminary": false
        },
        {
          "value": 11.1,
          "precision": 2,
          "preliminary": false
        },
        {
          "value": 11.21,
          "precision": 2,
          "preliminary": false
        },
        {
          "value": 11.25,
          "precision": 2,
          "preliminary": false
        },
        {
          "value": 11.51,
          "precision": 2,
          "preliminary": false
        },
        {
          "value": 11.48,
          "precision": 2,
          "preliminary": false
        },
        {
          "value": 11.52,
          "precision": 2,
          "preliminary": false
        },
        {
          "value": 11.62,
          "precision": 2,
          "preliminary": false
        },
        {
          "value": 11.65,
          "precision": 2,
          "preliminary": false
        },
        {
          "value": 11.65,
          "precision": 2,
          "preliminary": false
        },
        {
          "value": 11.83,
          "precision": 2,
          "preliminary": false
        },
        {
          "value": 11.98,
          "precision": 2,
          "preliminary": false
        },
        {
          "value": 12.02,
          "precision": 2,
          "preliminary": false
        },
        {
          "value": 12.27,
          "precision": 2,
          "preliminary": false
        },
        {
          "value": 12.65,
          "precision": 2,
          "preliminary": false
        },
        {
          "value": 12.78,
          "precision": 2,
          "preliminary": false
        },
        {
          "value": 12.87,
          "precision": 2,
          "preliminary": false
        }
      ]
    },
    {
      "rowNameGroup": [
        {
          "fi": "Tampere",
          "sv": "Tammerfors",
          "en": "Tampere"
        },
        {
          "fi": "Yksiöt",
          "sv": "Enrumslägenhet",
          "en": "One-room flat"
        }
      ],
      "series": [
        {
          "value": 16.34,
          "precision": 2,
          "preliminary": false
        },
        {
          "value": 16.38,
          "precision": 2,
          "preliminary": false
        },
        {
          "value": 16.49,
          "precision": 2,
          "preliminary": false
        },
        {
          "value": 16.54,
          "precision": 2,
          "preliminary": false
        },
        {
          "value": 16.32,
          "precision": 2,
          "preliminary": false
        },
        {
          "value": 16.7,
          "precision": 2,
          "preliminary": false
        },
        {
          "value": 16.92,
          "precision": 2,
          "preliminary": false
        },
        {
          "value": 16.98,
          "precision": 2,
          "preliminary": false
        },
        {
          "value": 17.48,
          "precision": 2,
          "preliminary": false
        },
        {
          "value": 17.58,
          "precision": 2,
          "preliminary": false
        },
        {
          "value": 17.67,
          "precision": 2,
          "preliminary": false
        },
        {
          "value": 17.71,
          "precision": 2,
          "preliminary": false
        },
        {
          "value": 17.48,
          "precision": 2,
          "preliminary": false
        },
        {
          "value": 17.62,
          "precision": 2,
          "preliminary": false
        },
        {
          "value": 17.71,
          "precision": 2,
          "preliminary": false
        },
        {
          "value": 17.91,
          "precision": 2,
          "preliminary": false
        },
        {
          "value": 17.9,
          "precision": 2,
          "preliminary": false
        },
        {
          "value": 17.97,
          "precision": 2,
          "preliminary": false
        },
        {
          "value": 18.11,
          "precision": 2,
          "preliminary": false
        },
        {
          "value": 18.33,
          "precision": 2,
          "preliminary": false
        },
        {
          "value": 18.59,
          "precision": 2,
          "preliminary": false
        },
        {
          "value": 18.61,
          "precision": 2,
          "preliminary": false
        },
        {
          "value": 18.7,
          "precision": 2,
          "preliminary": false
        },
        {
          "value": 18.78,
          "precision": 2,
          "preliminary": false
        },
        {
          "value": 18.93,
          "precision": 2,
          "preliminary": false
        },
        {
          "value": 19.14,
          "precision": 2,
          "preliminary": false
        },
        {
          "value": 19.2,
          "precision": 2,
          "preliminary": false
        },
        {
          "value": 19.21,
          "precision": 2,
          "preliminary": false
        },
        {
          "value": 19.39,
          "precision": 2,
          "preliminary": false
        },
        {
          "value": 19.6,
          "precision": 2,
          "preliminary": false
        },
        {
          "value": 19.73,
          "precision": 2,
          "preliminary": false
        },
        {
          "value": 19.87,
          "precision": 2,
          "preliminary": false
        }
      ]
    },
    {
      "rowNameGroup": [
        {
          "fi": "Tampere",
          "sv": "Tammerfors",
          "en": "Tampere"
        },
        {
          "fi": "Kaksiot",
          "sv": "Tvårumslägenhet",
          "en": "Two-room flat"
        }
      ],
      "series": [
        {
          "value": 11.56,
          "precision": 2,
          "preliminary": false
        },
        {
          "value": 11.61,
          "precision": 2,
          "preliminary": false
        },
        {
          "value": 11.69,
          "precision": 2,
          "preliminary": false
        },
        {
          "value": 11.74,
          "precision": 2,
          "preliminary": false
        },
        {
          "value": 11.76,
          "precision": 2,
          "preliminary": false
        },
        {
          "value": 11.96,
          "precision": 2,
          "preliminary": false
        },
        {
          "value": 12.07,
          "precision": 2,
          "preliminary": false
        },
        {
          "value": 12.09,
          "precision": 2,
          "preliminary": false
        },
        {
          "value": 12.52,
          "precision": 2,
          "preliminary": false
        },
        {
          "value": 12.64,
          "precision": 2,
          "preliminary": false
        },
        {
          "value": 13.48,
          "precision": 2,
          "preliminary": false
        },
        {
          "value": 13.68,
          "precision": 2,
          "preliminary": false
        },
        {
          "value": 13.45,
          "precision": 2,
          "preliminary": false
        },
        {
          "value": 13.5,
          "precision": 2,
          "preliminary": false
        },
        {
          "value": 13.57,
          "precision": 2,
          "preliminary": false
        },
        {
          "value": 13.85,
          "precision": 2,
          "preliminary": false
        },
        {
          "value": 13.67,
          "precision": 2,
          "preliminary": false
        },
        {
          "value": 13.77,
          "precision": 2,
          "preliminary": false
        },
        {
          "value": 13.85,
          "precision": 2,
          "preliminary": false
        },
        {
          "value": 14.16,
          "precision": 2,
          "preliminary": false
        },
        {
          "value": 14.25,
          "precision": 2,
          "preliminary": false
        },
        {
          "value": 14.26,
          "precision": 2,
          "preliminary": false
        },
        {
          "value": 14.31,
          "precision": 2,
          "preliminary": false
        },
        {
          "value": 14.35,
          "precision": 2,
          "preliminary": false
        },
        {
          "value": 14.38,
          "precision": 2,
          "preliminary": false
        },
        {
          "value": 14.52,
          "precision": 2,
          "preliminary": false
        },
        {
          "value": 14.57,
          "precision": 2,
          "preliminary": false
        },
        {
          "value": 14.58,
          "precision": 2,
          "preliminary": false
        },
        {
          "value": 14.68,
          "precision": 2,
          "preliminary": false
        },
        {
          "value": 14.87,
          "precision": 2,
          "preliminary": false
        },
        {
          "value": 14.95,
          "precision": 2,
          "preliminary": false
        },
        {
          "value": 15.09,
          "precision": 2,
          "preliminary": false
        }
      ]
    },
    {
      "rowNameGroup": [
        {
          "fi": "Tampere",
          "sv": "Tammerfors",
          "en": "Tampere"
        },
        {
          "fi": "Kolmiot+",
          "sv": "Trerumslägenhet+",
          "en": "Three-room flat+"
        }
      ],
      "series": [
        {
          "value": 10.91,
          "precision": 2,
          "preliminary": false
        },
        {
          "value": 10.95,
          "precision": 2,
          "preliminary": false
        },
        {
          "value": 11,
          "precision": 2,
          "preliminary": false
        },
        {
          "value": 11.08,
          "precision": 2,
          "preliminary": false
        },
        {
          "value": 11.17,
          "precision": 2,
          "preliminary": false
        },
        {
          "value": 11.26,
          "precision": 2,
          "preliminary": false
        },
        {
          "value": 11.41,
          "precision": 2,
          "preliminary": false
        },
        {
          "value": 11.42,
          "precision": 2,
          "preliminary": false
        },
        {
          "value": 11.83,
          "precision": 2,
          "preliminary": false
        },
        {
          "value": 11.83,
          "precision": 2,
          "preliminary": false
        },
        {
          "value": 12.18,
          "precision": 2,
          "preliminary": false
        },
        {
          "value": 12.34,
          "precision": 2,
          "preliminary": false
        },
        {
          "value": 12.03,
          "precision": 2,
          "preliminary": false
        },
        {
          "value": 12.1,
          "precision": 2,
          "preliminary": false
        },
        {
          "value": 12.18,
          "precision": 2,
          "preliminary": false
        },
        {
          "value": 12.42,
          "precision": 2,
          "preliminary": false
        },
        {
          "value": 12.28,
          "precision": 2,
          "preliminary": false
        },
        {
          "value": 12.37,
          "precision": 2,
          "preliminary": false
        },
        {
          "value": 12.43,
          "precision": 2,
          "preliminary": false
        },
        {
          "value": 12.79,
          "precision": 2,
          "preliminary": false
        },
        {
          "value": 12.83,
          "precision": 2,
          "preliminary": false
        },
        {
          "value": 12.89,
          "precision": 2,
          "preliminary": false
        },
        {
          "value": 12.96,
          "precision": 2,
          "preliminary": false
        },
        {
          "value": 13,
          "precision": 2,
          "preliminary": false
        },
        {
          "value": 12.89,
          "precision": 2,
          "preliminary": false
        },
        {
          "value": 13.05,
          "precision": 2,
          "preliminary": false
        },
        {
          "value": 13.11,
          "precision": 2,
          "preliminary": false
        },
        {
          "value": 13.05,
          "precision": 2,
          "preliminary": false
        },
        {
          "value": 13.04,
          "precision": 2,
          "preliminary": false
        },
        {
          "value": 13.33,
          "precision": 2,
          "preliminary": false
        },
        {
          "value": 13.47,
          "precision": 2,
          "preliminary": false
        },
        {
          "value": 13.7,
          "precision": 2,
          "preliminary": false
        }
      ]
    }
  ],
  "colVarNames": [
    {
      "fi": "Vuosineljännes",
      "sv": "Kvartal",
      "en": "Quarter"
    }
  ],
  "rowVarNames": [
    {
      "fi": "Alue",
      "sv": "Område",
      "en": "Region"
    },
    {
      "fi": "Huoneluku",
      "sv": "Antal rum",
      "en": "Number of rooms"
    }
  ],
  "selectableVarNames": [],
  "visualizationSettings": {
    "visualizationType": EVisualizationType.LineChart,
    "timeVariableIntervals": ETimeVariableInterval.Quarter,
    "timeSeriesStartingPoint": "2015-01-01T00:00:00",
    "cutValueAxis": false
  },
  "seriesType": 0
}