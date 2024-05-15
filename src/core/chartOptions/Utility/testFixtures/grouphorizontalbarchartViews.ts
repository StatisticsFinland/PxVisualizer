import { ETimeVariableInterval, EVisualizationType } from "../../../types";
import { View } from "../../../types/view";

export const simpleGroupHorizontalBarchartViewFixture: View = {
  "header": {
    "fi": "Lukumäärä, Pääkaupunkiseutu (PKS), Yksiöt 2015Q1-2015Q2 muuttujana Rahoitusmuoto",
    "sv": "Antal, Huvudstadsregionen, Enrumslägenhet 2015Q1-2015Q2 efter Finansieringssätt",
    "en": "Number, Greater Helsinki, One-room flat 2015Q1-2015Q2 by Type of funding"
  },
  "tableReferenceName": "table.px",
  "subheaderValues": [],
  "units": [
    {
      "name": {
        "fi": "Lukumäärä",
        "sv": "Antal",
        "en": "Number"
      },
      "unit": {
        "fi": "lukumäärä",
        "sv": "antal",
        "en": "number"
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
        "fi": "Vapaarahoitteinen",
        "sv": "Fri finansierad",
        "en": "Non subsidised"
      }
    ],
    [
      {
        "fi": "ARA",
        "sv": "ARA",
        "en": "Government subsidised"
      }
    ]
  ],
  "series": [
    {
      "rowNameGroup": [
        {
          "fi": "2015Q1",
          "sv": "2015Q1",
          "en": "2015Q1"
        }
      ],
      "series": [
        {
          "value": 11096,
          "precision": 0,
          "preliminary": false
        },
        {
          "value": 4845,
          "precision": 0,
          "preliminary": false
        }
      ]
    },
    {
      "rowNameGroup": [
        {
          "fi": "2015Q2",
          "sv": "2015Q2",
          "en": "2015Q2"
        }
      ],
      "series": [
        {
          "value": 11625,
          "precision": 0,
          "preliminary": false
        },
        {
          "value": 5174,
          "precision": 0,
          "preliminary": false
        }
      ]
    }
  ],
  "colVarNames": [
    {
      "fi": "Rahoitusmuoto",
      "sv": "Finansieringssätt",
      "en": "Type of funding"
    }
  ],
  "rowVarNames": [
    {
      "fi": "Vuosineljännes",
      "sv": "Kvartal",
      "en": "Quarter"
    }
  ],
  "selectableVarNames": [],
  "visualizationSettings": {
    "sorting": "2015Q1",
    "visualizationType": EVisualizationType.GroupHorizontalBarChart,
    "defaultSelectableVariableCodes": null,
    "timeVariableIntervals": ETimeVariableInterval.Quarter,
    "showDataPoints": true
  },
  "seriesType": 2
}