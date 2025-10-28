import { Meta, StoryObj } from '@storybook/react';
import { Chart } from '../../react';
import {
    LINE_CHART_WITH_COMBINATION_SERIES,
    LINE_CHART_WITH_HALF_YEAR_SERIES,
    LINE_CHART_WITH_MONTH_SERIES,
    LINE_CHART_WITH_MULTISELECTABLE_VARIABLE,
    LINE_CHART_WITH_NEGATIVE_VALUES,
    LINE_CHART_WITH_NON_NUMERIC_ORDINAL,
    LINE_CHART_WITH_NON_TIME_ORDINAL,
    LINE_CHART_WITH_ORDINAL_VAR,
    LINE_CHART_WITH_QUARTER_SERIES,
    LINE_CHART_WITH_YEAR_SERIES
} from '../fixtures/lineChart';

export default {
  title: 'Charts/Line',
  component: Chart,
  parameters: { },
} satisfies Meta;

export const YearSeries = {
    name: 'Year Series (with last updated)',
    args: LINE_CHART_WITH_YEAR_SERIES,
} satisfies StoryObj<typeof Chart>;

export const HalfYearSeries = {
    name: 'Half year Series',
    args: LINE_CHART_WITH_HALF_YEAR_SERIES,
} satisfies StoryObj<typeof Chart>;

export const QuarterSeries = {
    name: 'Quarter Series',
    args: LINE_CHART_WITH_QUARTER_SERIES,
} satisfies StoryObj<typeof Chart>;

export const MonthSeries = {
    name: 'Month Series',
    args: LINE_CHART_WITH_MONTH_SERIES,
} satisfies StoryObj<typeof Chart>;

export const MultiselectableVariable = {
    name: 'Multiselectable variable',
    args: LINE_CHART_WITH_MULTISELECTABLE_VARIABLE,
} satisfies StoryObj<typeof Chart>;

export const CombinationSeries = {
    name: 'Combination series',
    args: LINE_CHART_WITH_COMBINATION_SERIES,
} satisfies StoryObj<typeof Chart>;

export const NegativeValues = {
    name: 'Negative values',
    args: LINE_CHART_WITH_NEGATIVE_VALUES,
} satisfies StoryObj<typeof Chart>;

export const NoTimeOrdinal = {
    name: 'Non-time ordinal',
    args: LINE_CHART_WITH_NON_TIME_ORDINAL,
} satisfies StoryObj<typeof Chart>;

export const NoNumericOrdinal = {
    name: 'Non-numeric ordinal',
    args: LINE_CHART_WITH_NON_NUMERIC_ORDINAL,
} satisfies StoryObj<typeof Chart>;

export const OrdinalVariable = {
    name: 'Ordinal variable',
    args: LINE_CHART_WITH_ORDINAL_VAR,
} satisfies StoryObj<typeof Chart>;
