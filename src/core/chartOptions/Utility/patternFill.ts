import { PatternObject } from "highcharts";
import { defaultColors } from "../../highcharts/defaultColors";
import { defaultFillPatterns } from "../../highcharts/fillPatterns";

export function buildPatternObject(index: number): { color: PatternObject } {
    return {
        color: {
            pattern: {
                backgroundColor: defaultColors[index % defaultColors.length],
                path: {
                    stroke: "white",
                    d: defaultFillPatterns[index % defaultFillPatterns.length],
                    strokeWidth: 2
                },
                width: 10,
                height: 10
            }
        }
    }
}