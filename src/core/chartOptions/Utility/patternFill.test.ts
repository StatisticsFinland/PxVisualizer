import { buildPatternObject } from "./patternFill";
import { defaultColors } from "../../highcharts/defaultColors";
import { defaultFillPatterns } from "../../highcharts/fillPatterns";
import { PatternOptionsObject } from "highcharts";

describe("buildPatternObject", () => {
    it("should return a valid PatternObject with the correct color and pattern", () => {
        const index = 0;
        const result = buildPatternObject(index);

        expect(result).toHaveProperty("color");
        expect(result.color).toHaveProperty("pattern");

        const patternObj = result.color.pattern as PatternOptionsObject;

        expect(patternObj.backgroundColor).toBe(defaultColors[index]);
        expect(patternObj.path).toHaveProperty("d", defaultFillPatterns[index]);
        expect(patternObj.path).toHaveProperty("stroke", "white");
        expect(patternObj.path).toHaveProperty("strokeWidth", 2);
        expect(patternObj).toHaveProperty("width", 10);
        expect(patternObj).toHaveProperty("height", 10);
    });

    it("should use the correct defaultFillPatterns for different indices", () => {
        for (let i = 0; i < defaultFillPatterns.length; i++) {
            const result = buildPatternObject(i);
            const patternObj = result.color.pattern as PatternOptionsObject;

            expect(patternObj.path).toHaveProperty('d', defaultFillPatterns[i]);
        }
    });

    it("should use the correct defaultColors for different indices", () => {
        for (let i = 0; i < defaultColors.length; i++) {
            const result = buildPatternObject(i);
            const patternObj = result.color.pattern as PatternOptionsObject;

            expect(patternObj.backgroundColor).toBe(defaultColors[i]);
        }
    });

    it("if the index exceeds the number of items in the default patterns, start again from the beginning of the list", () => {
        const result = buildPatternObject(defaultFillPatterns.length);
        const patternObj = result.color.pattern as PatternOptionsObject;
        expect(patternObj.path).toHaveProperty('d', defaultFillPatterns[0]);
    });

    it("should throw an error if index is out of bounds for defaultColors", () => {
        const result = buildPatternObject(defaultColors.length);
        const patternObj = result.color.pattern as PatternOptionsObject;
        expect(patternObj.backgroundColor).toBe(defaultColors[0]);
    });
});