import Decimal from 'decimal.js';

// The treshold when the lower power step function is used to determine segment length
// Values must be: between 1 and 10.
// Example: If the data is between 100 and 999, and this const is 2, any value under 200 would use lower power step function.
const LOWER_POWER_SCALE_TRESHOLD = 1.5;

// The treshold when the half scale step function is used to determine segment length
// Values must be: between 1 and 10.
// Example: If the data is between 100 and 999, and this const is 5, any value under 500 would use half scale step function.
// Note: Lower power step function limit is considered before this limit, therefore this value must be greater than
// LOWER_POWER_SCALE_TRESHOLD in order to affect anything.
const HALF_SCALE_TRESHOLD = 3;

// The treshold when the higher power step function is used to determine segment length
// Values must be: between 1 and 10.
// Example: If the data is between 100 and 999, and this const is 8, any value over 800 would use higer power step function.
const HIGHER_POWER_SCALE_TRESHOLD = 8;

// Keep this amount (%) of candidates when using the candidate elimination algorithm.
// Elimination is done based on the divisibility score.
const SEGMENT_CANDIDATE_ELIMINATION_TRESHOLD = 0.5;

// This portion of the tick positioner building is here to separate the types of the highchart and view objects from the tick positioner algorithm.
// Eliminate the need to refactor all of the unit tests if any of the highchart or view objects change.
export function buildLinearAxisTickPositioner(dataMin: Decimal, dataMax: Decimal, precision: Decimal): (this: { chart: { plotWidth: number } }) => number[] {

    const CHAR_WIDTH_ESTIMATE = 12;
    const HARD_MARGIN_PX = 25; // This is added to the length of every label when calculating the maximum number of segments

    const getMaxNumberOfSegments = (axisLength: number) => {
        // largestSmallerPowerOf10: this provides a clean estimate of the number of digits in the largest number excluding decimals when over 1
        const largestSmallerPowerOf10 = Decimal.pow(10, Decimal.log10(Decimal.max(dataMin.abs(), dataMax.abs())).floor());
        const max = Math.ceil(axisLength / ((largestSmallerPowerOf10.toString().length + (dataMin.isNeg() ? 1 : 0)) * CHAR_WIDTH_ESTIMATE + HARD_MARGIN_PX) - 1); // There are always 1 more label than segments
        return Math.max(max, dataMin.isNegative() && dataMax.isPositive() ? 2 : 1);
    };

    return function () {
        const segmentLength = getInterval(dataMin, dataMax, getMaxNumberOfSegments(this.chart.plotWidth), precision);
        const lowerBound: Decimal = dataMin.greaterThanOrEqualTo(0) ? new Decimal(0) : dataMin.div(segmentLength).floor().mul(segmentLength);
        const upperBound: Decimal = dataMax.lessThanOrEqualTo(0) ? new Decimal(0) : dataMax.div(segmentLength).ceil().mul(segmentLength);
        return Array.from({ length: upperBound.minus(lowerBound).div(segmentLength).plus(1).toNumber() }, (_, i) => segmentLength.mul(i).plus(lowerBound).toNumber());
    }
}

/*
    Brief summary of the algorithm:
    1. If delta between min and max divided by the maximum number of segments is less than the precision, return the precision
    2. Use the aboslute maximum between min and max to calculate a set of candidate segements
        2.1 The initial set is calculated by dividing the input value by all possible number of segments and running this value through the step function
        2.2 The set is then reduced by eliminating the candidates with the lowest divisibility score
        2.3 The set is then sorted by the length of the segments
    3. If the min is negative and max is positive, return the first candidate that fits within the maximum number of segments
    4. Otherwise return the first (shortest) candidate
*/
export function getInterval(dataMinValue: Decimal, dataMaxValue: Decimal, maxNumberOfSegments: number, precision: Decimal = new Decimal(0)): Decimal {
    if (dataMinValue.greaterThan(dataMaxValue)) throw new Error('dataMinValue must me smaller or equal than dataMaxValue');

    const iterate: (delta: Decimal) => [number, Decimal][] = (delta) => {
        const candidates = Array.from({ length: maxNumberOfSegments }, (_, i) => maxNumberOfSegments - i)
            .reduce((accum: [number, Decimal][], candidateNumOfSegs: number) => {
                const segmentLength = linearAxisIntervalStepFunction(delta.div(candidateNumOfSegs));
                if (segmentLength.greaterThanOrEqualTo(precision)) accum.push([getDivisibilityScore(segmentLength), segmentLength]);
                return accum;
            }, [])
            .sort(([scoreA, _lengthA], [scoreB, _lengthB]) => scoreB - scoreA);
        // Math.max(2, something) is to ensure that there are at least 2 candidates to choose from even in cases when we can fit only 1 or 2 segments
        return candidates.slice(0, Math.max(2, Math.ceil(candidates.length * SEGMENT_CANDIDATE_ELIMINATION_TRESHOLD)))
            .sort(([_scoreA, lengthA], [_scoreB, lengthB]) => lengthA.minus(lengthB).toNumber());
    }

    const delta = dataMinValue.lessThan(0) && dataMaxValue.greaterThan(0)
        ? dataMaxValue.minus(dataMinValue)
        : Decimal.max(dataMinValue.abs(), dataMaxValue.abs());

    if (delta.div(maxNumberOfSegments).lessThanOrEqualTo(precision)) return precision;

    const candidates = iterate(Decimal.max(dataMinValue.abs(), dataMaxValue.abs()));
    if (dataMinValue.lessThan(0) && dataMaxValue.greaterThan(0)) return candidates
        .map(([_score, length]) => length)
        // ceil(|dataMinValue| / length) + ceil(dataMaxValue / length) <= maxNumberOfSegments
        .find((length: Decimal) => dataMinValue.abs().div(length).ceil().plus(dataMaxValue.div(length).ceil()).lessThanOrEqualTo(maxNumberOfSegments))
        ?? new Decimal(NaN);
    else return candidates[0][1];
}

export function linearAxisIntervalStepFunction(segmentDelta: Decimal): Decimal {
    // Log10(0) returns NaN
    if (segmentDelta.equals(0)) return new Decimal(0);

    const pow10Step = Decimal.pow(10, Decimal.log10(segmentDelta).floor());

    if (segmentDelta.div(pow10Step).lessThan(LOWER_POWER_SCALE_TRESHOLD)) {
        // Reducing the power to reduce the relative gap between the data value and the boundary.
        return pow10Step.div(10).mul(segmentDelta.div((pow10Step.div(10))).ceil());
    }

    if (segmentDelta.div(pow10Step).lessThan(HALF_SCALE_TRESHOLD)) {
        // Rounding to nearest half halves the step length
        return  segmentDelta.mul(2).div(pow10Step).ceil().mul(pow10Step).div(2);
    }

    if (segmentDelta.div(pow10Step).lessThan(HIGHER_POWER_SCALE_TRESHOLD)) {
        return segmentDelta.div(pow10Step).ceil().mul(pow10Step);
    }

    // Increasing the power to make round numbers more likely without increasing the gaps to bounds too much.
    return segmentDelta.div((pow10Step.mul(10))).ceil().mul(10).mul(pow10Step);
}


// Returns a value that enables comparing the divisibility of two values.
// Larger return value implies better divisibility.
export function getDivisibilityScore(input: Decimal): number {
    if (input.equals(0)) return 0;

    if (input.isInteger()) return getIntegerDivisibilityScore(input);
    else return getFloatDivisibilityScore(input);
}

function getIntegerDivisibilityScore(input: Decimal): number {
    let score = 0;
    let divider = 5;
    while (score < 50) { // Just in case to prevent endless looping
        if (!input.mod(divider).equals(0)) break;
        score++;
        divider *= 2;

        if (!input.mod(divider).equals(0)) break;
        score++;
        divider *= 5;
    }
    return score;
}

function getFloatDivisibilityScore(input: Decimal) {
    const text = input.toString(); // Convert back to string and check for "1e-8" numbers
    if (text.includes('e-')) {
        const strings = text.split('e-');
        const decimals = Number.parseInt(strings[1]);
        // Values ending with 5 are preferred over other values with the same number of decimals
        if (strings[0].endsWith('5')) return -2 * decimals + 1;
        else return -2 * decimals;
    } else {
        const decimalString = text.split(".")[1];
        // Values ending with 5 are preferred over other values with the same number of decimals
        if (decimalString.endsWith('5')) return -2 * decimalString.length + 1;
        else return -2 * decimalString.length;
    }
}