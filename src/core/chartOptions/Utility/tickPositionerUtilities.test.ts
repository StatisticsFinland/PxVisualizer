import Decimal from "decimal.js";
import { buildLinearAxisTickPositioner, getDivisibilityScore, getInterval, linearAxisIntervalStepFunction } from "./tickPositionerUtilities";

describe('linearAxisIntervalStepFunction tests', () => {

    const stepFunctionDecimalWrapper = (x: number) => linearAxisIntervalStepFunction(new Decimal(x)).toNumber();

    it('Should return output 100 with input 89', () => {
        expect(stepFunctionDecimalWrapper(89)).toEqual(100);
    });

    it('Should return output 100 with input 99', () => {
        expect(stepFunctionDecimalWrapper(99)).toEqual(100);
    });

    it('Should return output 250 with input 201', () => {
        expect(stepFunctionDecimalWrapper(201)).toEqual(250);
    });

    it('Should return output 110 with input 101', () => {
        expect(stepFunctionDecimalWrapper(101)).toEqual(110);
    });

    it('Should return output 1 with input 1', () => {
        expect(stepFunctionDecimalWrapper(1)).toEqual(1);
    });

    it('Should return output 1 with input 0.99', () => {
        expect(stepFunctionDecimalWrapper(0.99)).toEqual(1);
    });

    it('Should return output 2 with input 1.99', () => {
        expect(stepFunctionDecimalWrapper(1.99)).toEqual(2);
    });

    it('Should return output 3 with input 2.99', () => {
        expect(stepFunctionDecimalWrapper(2.99)).toEqual(3);
    });

    it('Should return output 4 with input 3.99', () => {
        expect(stepFunctionDecimalWrapper(3.99)).toEqual(4);
    });

    it('Should return output 5 with input 4.99', () => {
        expect(stepFunctionDecimalWrapper(4.99)).toEqual(5);
    });

    it('Should return output 6 with input 5.99', () => {
        expect(stepFunctionDecimalWrapper(5.99)).toEqual(6);
    });

    it('Should return output 20 with input 17.99', () => {
        expect(stepFunctionDecimalWrapper(17.99)).toEqual(20);
    });

    it('Should return output 30 with input 27.99', () => {
        expect(stepFunctionDecimalWrapper(27.99)).toEqual(30);
    });

    it('Should return output 40 with input 37.99', () => {
        expect(stepFunctionDecimalWrapper(37.99)).toEqual(40);
    });

    it('Should return output 50 with input 47.99', () => {
        expect(stepFunctionDecimalWrapper(47.99)).toEqual(50);
    });

    it('Should return output 60 with input 57.99', () => {
        expect(stepFunctionDecimalWrapper(57.99)).toEqual(60);
    });

    it('Should return output 70 with input 67.99', () => {
        expect(stepFunctionDecimalWrapper(67.99)).toEqual(70);
    });

    it('Should return output 80 with input 77.99', () => {
        expect(stepFunctionDecimalWrapper(77.99)).toEqual(80);
    });

    it('Should return output 0.01 with input 0.0089', () => {
        expect(stepFunctionDecimalWrapper(0.0089)).toEqual(0.01);
    });

    it('Should return output 0.001 with input 0.00089', () => {
        expect(stepFunctionDecimalWrapper(0.00089)).toEqual(0.001);
    });

    it('Should return output 0.001 with input 0.001', () => {
        expect(stepFunctionDecimalWrapper(0.001)).toEqual(0.001);
    });

    it('Should return output 50 with input 50', () => {
        expect(stepFunctionDecimalWrapper(50)).toEqual(50);
    });

    it('Should return output 200 with input 177.99', () => {
        expect(stepFunctionDecimalWrapper(177.99)).toEqual(200);
    });

    it('Should return output 300 with input 277.99', () => {
        expect(stepFunctionDecimalWrapper(277.99)).toEqual(300);
    });

    it('Should return output 400 with input 377.99', () => {
        expect(stepFunctionDecimalWrapper(377.99)).toEqual(400);
    });

    it('Should return output 500 with input 477.99', () => {
        expect(stepFunctionDecimalWrapper(477.99)).toEqual(500);
    });

    it('Should return output 600 with input 577.99', () => {
        expect(stepFunctionDecimalWrapper(577.99)).toEqual(600);
    });

    it('Should return output 700 with input 677.99', () => {
        expect(stepFunctionDecimalWrapper(677.99)).toEqual(700);
    });

    it('Should return output 800 with input 777.99', () => {
        expect(stepFunctionDecimalWrapper(777.99)).toEqual(800);
    });

    it('Should return output 40000 with input 37154', () => {
        expect(stepFunctionDecimalWrapper(37154)).toEqual(40000);
    });

});

describe('getDivisibilityScore tests', () => {

    const divisibilityScoreDecimalWrapper = (x: number) => getDivisibilityScore(new Decimal(x));

    it('Should return score of 0 with input 123', () => {
        expect(divisibilityScoreDecimalWrapper(123)).toEqual(0);
    });

    it('Should return score of -1 with input 123.5', () => {
        expect(divisibilityScoreDecimalWrapper(123.5)).toEqual(-1);
    });

    it('Should return score of 1 with input 125', () => {
        expect(divisibilityScoreDecimalWrapper(125)).toEqual(1);
    });

    it('Should return score of 2 with input 1230', () => {
        expect(divisibilityScoreDecimalWrapper(1230)).toEqual(2);
    });

    it('Should return score of 4 with input 12300', () => {
        expect(divisibilityScoreDecimalWrapper(12300)).toEqual(4);
    });

    it('Should return score of -6 with input 0.123', () => {
        expect(divisibilityScoreDecimalWrapper(0.123)).toEqual(-6);
    });

    it('Should return score of -5 with input 0.125', () => {
        expect(divisibilityScoreDecimalWrapper(0.125)).toEqual(-5);
    });

    it('Should return score of -1 with input 0.5', () => {
        expect(divisibilityScoreDecimalWrapper(0.5)).toEqual(-1);
    });

    it('Should return score of -32 with input 0.0000000000000001', () => {
        expect(divisibilityScoreDecimalWrapper(0.0000000000000001)).toEqual(-32);
    });

    it('Should return score of -31 with input 0.0000000000000005', () => {
        expect(divisibilityScoreDecimalWrapper(0.0000000000000005)).toEqual(-31);
    });
});

describe('All positive values getInterval tests', () => {

    const intervalDecimalWrapper = (min: number, max: number, maxSegements: number) => getInterval(new Decimal(min), new Decimal(max), maxSegements).toNumber();

    it('Should return interval of 10 with input min value 11, max value 79 and max segments 8', () => {
        expect(intervalDecimalWrapper(11, 79, 8)).toEqual(10);
    });

    it('Should return interval of 10 with input min value 11, max value 79 and max segments 10', () => {
        expect(intervalDecimalWrapper(11, 79, 10)).toEqual(10);
    });

    it('Should return interval of 20 with input min value 11, max value 79 and max segments 5', () => {
        expect(intervalDecimalWrapper(11, 79, 5)).toEqual(20);
    });

    it('Should return interval of 30 with input min value 11, max value 79 and max segments 3', () => {
        expect(intervalDecimalWrapper(11, 79, 3)).toEqual(30);
    });

    it('Should return interval of 0.3 with input min value 1, max value 2 and max segments 8', () => {
        expect(intervalDecimalWrapper(1, 2, 8)).toEqual(0.3);
    });

    it('Should return interval of 30 with input min value 11, max value 179 and max segments 8', () => {
        expect(intervalDecimalWrapper(11, 179, 8)).toEqual(30);
    });

    it('Should return interval of 500000 with input min value 43234, max value 4656179 and max segments 10', () => {
        expect(intervalDecimalWrapper(43234, 4656179, 10)).toEqual(500000);
    });

    it('Should return interval of 20 with input min value 11, max value 101 and max segments 10', () => {
        expect(intervalDecimalWrapper(11, 101, 10)).toEqual(20);
    });

    it('Should return interval of 0.002 with input min value 0.0047, max value 0.0193 and max segments 10', () => {
        expect(intervalDecimalWrapper(0.0047, 0.0193, 10)).toEqual(0.002);
    });
});

describe('All negative values getInterval tests', () => {

    const intervalDecimalWrapper = (min: number, max: number, maxSegements: number) => getInterval(new Decimal(min), new Decimal(max), maxSegements).toNumber();

    it('Should return interval of 10 with input min value -79, max value -11 and max segments 8', () => {
        expect(intervalDecimalWrapper(-79, -11, 8)).toEqual(10);
    });

    it('Should return interval of 0.3 with input min value -2, max value -1 and max segments 8', () => {
        expect(intervalDecimalWrapper(-2, -1, 8)).toEqual(0.3);
    });

    it('Should return interval of 30 with input min value -179, max value -11 and max segments 8', () => {
        expect(intervalDecimalWrapper(-179, -11, 8)).toEqual(30);
    });

    it('Should return interval of 500000 with input min value -4656179, max value -43234 and max segments 10', () => {
        expect(intervalDecimalWrapper(-4656179, -43234, 10)).toEqual(500000);
    });

    it('Should return interval of 20 with input min value -101, max value -11 and max segments 10', () => {
        expect(intervalDecimalWrapper(-101, -11, 10)).toEqual(20);
    });

    it('Should return interval of 0.002 with input min value -0.0163, max value -0.0047 and max segments 10', () => {
        expect(intervalDecimalWrapper(-0.0193, -0.0047, 10)).toEqual(0.002);
    });
});

describe('Negative and positive values getInterval tests', () => {

    const intervalDecimalWrapper = (min: number, max: number, maxSegements: number) => getInterval(new Decimal(min), new Decimal(max), maxSegements).toNumber();

    it('Should return interval of 20 with input min value -79, max value 79 and max segments 8', () => {
        expect(intervalDecimalWrapper(-79, 79, 8)).toEqual(20);
    });

    it('Should return interval of 20 with input min value -79.123, max value 79.123 and max segments 8', () => {
        expect(intervalDecimalWrapper(-79.123, 79.123, 8)).toEqual(20);
    });

    it('Should return interval of 20 with input min value -1, max value 79 and max segments 5', () => {
        expect(intervalDecimalWrapper(-1, 79, 5)).toEqual(20);
    });

    it('Should return interval of 40 with input min value -11, max value 79 and max segments 3', () => {
        expect(intervalDecimalWrapper(-11, 79, 3)).toEqual(40);
    });

    it('Should return interval of 110 with input min value -101, max value 100 and max segments 2', () => {
        expect(intervalDecimalWrapper(-101, 100, 2)).toEqual(110);
    });

    it('Should return interval of 0.5 with input min value -1, max value 1 and max segments 8', () => {
        expect(intervalDecimalWrapper(-1, 1, 8)).toEqual(0.5);
    });

    it('Should return interval of 2000000 with input min value -1, max value 15693745 and max segments 10', () => {
        expect(intervalDecimalWrapper(-1, 15693745, 10)).toEqual(2000000);
    });

    it('Should return interval of 2000000 with input min value -15693745, max value 1 and max segments 10', () => {
        expect(intervalDecimalWrapper(-15693745, 1, 10)).toEqual(2000000);
    });

    it('Should return interval of 0.2 with input min value -0.93745, max value 0.001 and max segments 10', () => {
        expect(intervalDecimalWrapper(-0.93745, 0.001, 10)).toEqual(0.2);
    });

    it('Should return interval of 0.2 with input min value -0.001, max value 0.93745 and max segments 10', () => {
        expect(intervalDecimalWrapper(-0.001, 0.93745, 10)).toEqual(0.2);
    });
});

describe('buildLinearAxisTickPositioner tick positions tests', () => {

    const mockAxis200 = { chart: { plotWidth: 200 } };
    const mockAxis500 = { chart: { plotWidth: 500 } };
    const mockAxis1000 = { chart: { plotWidth: 1000 } };

    it('With min value 1, max value 10 and axis length 200. Should return tickpositioner with interval of 5.', () => {
        const resultFunk = buildLinearAxisTickPositioner(new Decimal(1), new Decimal(10), new Decimal(0));
        const resultTickPositions: number[] = resultFunk.apply(mockAxis200);
        expect(resultTickPositions).toEqual([0, 5, 10]);
    });

    it('With min value 1, max value 10 and axis length 500. Should return tickpositioner with interval of 1.', () => {
        const resultFunk = buildLinearAxisTickPositioner(new Decimal(1), new Decimal(10), new Decimal(0));
        const resultTickPositions: number[] = resultFunk.apply(mockAxis500);
        expect(resultTickPositions).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    });

    it('With min value 1, max value 10, precision 1 and axis length 1000. Should return tickpositioner with interval of 1.', () => {
        const resultFunk = buildLinearAxisTickPositioner(new Decimal(1), new Decimal(10), new Decimal(1));
        const resultTickPositions: number[] = resultFunk.apply(mockAxis1000);
        expect(resultTickPositions).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    });

    it('With min value 1, max value 5, precision 0.1 and axis length 200. Should return tickpositioner with interval of 1.', () => {
        const resultFunk = buildLinearAxisTickPositioner(new Decimal(1), new Decimal(5), new Decimal(0.1));
        const resultTickPositions: number[] = resultFunk.apply(mockAxis200);
        expect(resultTickPositions).toEqual([0.0, 1.0, 2.0, 3.0, 4.0, 5.0]);
    });

    it('With min value 1, max value 5, precision 0.1 and axis length 500. Should return tickpositioner with interval of 0.5.', () => {
        const resultFunk = buildLinearAxisTickPositioner(new Decimal(1), new Decimal(5), new Decimal(0.1));
        const resultTickPositions: number[] = resultFunk.apply(mockAxis500);
        expect(resultTickPositions).toEqual([0.0, 0.5, 1.0, 1.5, 2.0, 2.5, 3.0, 3.5, 4.0, 4.5, 5.0]);
    });

    it('With min value 1, max value 5, precision 0.1 and axis length 1000. Should return tickpositioner with interval of 0.2.', () => {
        const resultFunk = buildLinearAxisTickPositioner(new Decimal(1), new Decimal(5), new Decimal(0.1));
        const resultTickPositions: number[] = resultFunk.apply(mockAxis1000);
        expect(resultTickPositions).toEqual([0.0, 0.2, 0.4, 0.6, 0.8, 1.0, 1.2, 1.4, 1.6, 1.8, 2.0, 2.2, 2.4, 2.6, 2.8, 3.0, 3.2, 3.4, 3.6, 3.8, 4.0, 4.2, 4.4, 4.6, 4.8, 5.0]);
    });

    it('With min value 0.9, max value 1, precision 0.1 and axis length 200. Should return tickpositioner with interval of 0.2.', () => {
        const resultFunk = buildLinearAxisTickPositioner(new Decimal(0.9), new Decimal(1), new Decimal(0.1));
        const resultTickPositions: number[] = resultFunk.apply(mockAxis200);
        expect(resultTickPositions).toEqual([0, 0.2, 0.4, 0.6, 0.8, 1]);
    });

    it('With min value 0.9, max value 1, precision 0.1 and axis length 500. Should return tickpositioner with interval of 0.1.', () => {
        const resultFunk = buildLinearAxisTickPositioner(new Decimal(0.9), new Decimal(1), new Decimal(0.1));
        const resultTickPositions: number[] = resultFunk.apply(mockAxis500);
        expect(resultTickPositions).toEqual([0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1]);
    });

    it('With min value 0.9, max value 1, precision 0.1 and axis length 1000. Should return tickpositioner with interval of 0.1.', () => {
        const resultFunk = buildLinearAxisTickPositioner(new Decimal(0.9), new Decimal(1), new Decimal(0.1));
        const resultTickPositions: number[] = resultFunk.apply(mockAxis1000);
        expect(resultTickPositions).toEqual([0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1]);
    });

    it('With min value 348, max value 11875 and axis length 200. Should return tickpositioner with interval of 6000.', () => {
        const resultFunk = buildLinearAxisTickPositioner(new Decimal(348), new Decimal(11875), new Decimal(0));
        const resultTickPositions: number[] = resultFunk.apply(mockAxis200);
        expect(resultTickPositions).toEqual([0, 6000, 12000]);
    });

    it('With min value 348, max value 11875 and axis length 500. Should return tickpositioner with interval of 3000.', () => {
        const resultFunk = buildLinearAxisTickPositioner(new Decimal(348), new Decimal(11875), new Decimal(0));
        const resultTickPositions: number[] = resultFunk.apply(mockAxis500);
        expect(resultTickPositions).toEqual([0, 3000, 6000, 9000, 12000]);
    });

    it('With min value 348, max value 11875 and axis length 1000. Should return tickpositioner with interval of 2000.', () => {
        const resultFunk = buildLinearAxisTickPositioner(new Decimal(348), new Decimal(11875), new Decimal(0));
        const resultTickPositions: number[] = resultFunk.apply(mockAxis1000);
        expect(resultTickPositions).toEqual([0, 2000, 4000, 6000, 8000, 10000, 12000]);
    });

    it('With min value -543, max value 999 and axis length 200. Should return tickpositioner with interval of 1000.', () => {
        const resultFunk = buildLinearAxisTickPositioner(new Decimal(-543), new Decimal(999), new Decimal(0));
        const resultTickPositions: number[] = resultFunk.apply(mockAxis200);
        expect(resultTickPositions).toEqual([-1000, 0, 1000]);
    });

    it('With min value -543, max value 999 and axis length 500. Should return tickpositioner with interval of 500.', () => {
        const resultFunk = buildLinearAxisTickPositioner(new Decimal(-543), new Decimal(999), new Decimal(0));
        const resultTickPositions: number[] = resultFunk.apply(mockAxis500);
        expect(resultTickPositions).toEqual([-1000, -500, 0, 500, 1000]);
    });

    it('With min value -543, max value 999 and axis length 1000. Should return tickpositioner with interval of 200.', () => {
        const resultFunk = buildLinearAxisTickPositioner(new Decimal(-543), new Decimal(999), new Decimal(0));
        const resultTickPositions: number[] = resultFunk.apply(mockAxis1000);
        expect(resultTickPositions).toEqual([-600, -400, -200, 0, 200, 400, 600, 800, 1000]);
    });

    it('With min value -3.0974, max value 1985435.06007 and axis length 200. Should return tickpositioner with interval of 2000000.', () => {
        const resultFunk = buildLinearAxisTickPositioner(new Decimal(-3.09754), new Decimal(1985435.06007), new Decimal(0));
        const resultTickPositions: number[] = resultFunk.apply(mockAxis200);
        expect(resultTickPositions).toEqual([-2000000, 0, 2000000]);
    });

    it('With min value -3.0974, max value 1985435.06007 and axis length 500. Should return tickpositioner with interval of 400000.', () => {
        const resultFunk = buildLinearAxisTickPositioner(new Decimal(-3.09754), new Decimal(1985435.06007), new Decimal(0));
        const resultTickPositions: number[] = resultFunk.apply(mockAxis500);
        expect(resultTickPositions).toEqual([-1000000, 0, 1000000, 2000000]);
    });

    it('With min value -3.0974, max value 1985435.06007 and axis length 1000. Should return tickpositioner with interval of 300000.', () => {
        const resultFunk = buildLinearAxisTickPositioner(new Decimal(-3.09754), new Decimal(1985435.06007), new Decimal(0));
        const resultTickPositions: number[] = resultFunk.apply(mockAxis1000);
        expect(resultTickPositions).toEqual([-300000, 0, 300000, 600000, 900000, 1200000, 1500000, 1800000, 2100000]);
    });

    it('With min value -3.0974, max value 198535.06007 and axis length 200. Should return tickpositioner with interval of 200000.', () => {
        const resultFunk = buildLinearAxisTickPositioner(new Decimal(-3.09754), new Decimal(198535.06007), new Decimal(0));
        const resultTickPositions: number[] = resultFunk.apply(mockAxis200);
        expect(resultTickPositions).toEqual([-200000, 0, 200000]);
    });

    it('With min value -3.0974, max value 198535.06007 and axis length 500. Should return tickpositioner with interval of 100000.', () => {
        const resultFunk = buildLinearAxisTickPositioner(new Decimal(-3.09754), new Decimal(198535.06007), new Decimal(0));
        const resultTickPositions: number[] = resultFunk.apply(mockAxis500);
        expect(resultTickPositions).toEqual([-100000, 0, 100000, 200000]);
    });

    it('With min value -3.0974, max value 198535.06007 and axis length 1000. Should return tickpositioner with interval of 30000.', () => {
        const resultFunk = buildLinearAxisTickPositioner(new Decimal(-3.09754), new Decimal(198535.06007), new Decimal(0));
        const resultTickPositions: number[] = resultFunk.apply(mockAxis1000);
        expect(resultTickPositions).toEqual([-30000, 0, 30000, 60000, 90000, 120000, 150000, 180000, 210000]);
    });

    it('With min value -3.0974, max value 19835.06007 and axis length 200. Should return tickpositioner with interval of 20000.', () => {
        const resultFunk = buildLinearAxisTickPositioner(new Decimal(-3.0974), new Decimal(19835.06007), new Decimal(0));
        const resultTickPositions: number[] = resultFunk.apply(mockAxis200);
        expect(resultTickPositions).toEqual([-20000, 0, 20000]);
    });

    it('With min value -3.0974, max value 19835.06007 and axis length 500. Should return tickpositioner with interval of 5000.', () => {
        const resultFunk = buildLinearAxisTickPositioner(new Decimal(-3.0974), new Decimal(19835.06007), new Decimal(0));
        const resultTickPositions: number[] = resultFunk.apply(mockAxis500);
        expect(resultTickPositions).toEqual([-5000, 0, 5000, 10000, 15000, 20000]);
    });

    it('With min value -3.0974, max value 19835.06007 and axis length 1000. Should return tickpositioner with interval of 3000.', () => {
        const resultFunk = buildLinearAxisTickPositioner(new Decimal(-3.0974), new Decimal(19835.06007), new Decimal(0));
        const resultTickPositions: number[] = resultFunk.apply(mockAxis1000);
        expect(resultTickPositions).toEqual([-3000, 0, 3000, 6000, 9000, 12000, 15000, 18000, 21000]);
    });

    it('With min value -0.0000974, max value 0.0000006007 and axis length 200. Should return tickpositioner with interval of 0.0001.', () => {
        const resultFunk = buildLinearAxisTickPositioner(new Decimal(-0.0000974), new Decimal(0.0000006007), new Decimal(0));
        const resultTickPositions: number[] = resultFunk.apply(mockAxis200);
        expect(resultTickPositions).toEqual([-0.0001, 0, 0.0001]);
    });

    it('With min value -0.0000974, max value 0.0000006007 and axis length 500. Should return tickpositioner with interval of 0.00005.', () => {
        const resultFunk = buildLinearAxisTickPositioner(new Decimal(-0.0000974), new Decimal(0.0000006007), new Decimal(0));
        const resultTickPositions: number[] = resultFunk.apply(mockAxis500);
        expect(resultTickPositions).toEqual([-0.0001, -0.00005, 0, 0.00005]);
    });

    it('With min value -0.0000974, max value 0.0000006007 and axis length 1000. Should return tickpositioner with interval of 0.00002.', () => {
        const resultFunk = buildLinearAxisTickPositioner(new Decimal(-0.0000974), new Decimal(0.0000006007), new Decimal(0));
        const resultTickPositions: number[] = resultFunk.apply(mockAxis1000);
        expect(resultTickPositions).toEqual([-0.0001, -0.00008, -0.00006, -0.00004, -0.00002, 0, 0.00002]);
    });
});