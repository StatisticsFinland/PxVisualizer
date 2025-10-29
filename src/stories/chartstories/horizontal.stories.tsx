import { Meta, StoryObj } from '@storybook/react';
import { Chart } from '../../react';
import {
    HORIZONTAL_BAR_CHART_ASCENDING, SELECTABLE_HORIZONTAL_BAR_CHART, HORIZONTAL_BAR_CHART_WITH_ZERO_AND_NEGATIVE, HORIZONTAL_BAR_WITH_LONG_NUMERIC_LABELS
} from '../fixtures/horizontalBarChart';

export default {
  title: 'Charts/Horizontal bar',
  component: Chart,
  parameters: { },
} satisfies Meta;

export const Ascending = {
    name: 'Ascending (with last updated)',
    args: HORIZONTAL_BAR_CHART_ASCENDING,
} satisfies StoryObj<typeof Chart>;

export const Selectable = {
    name: 'Selectable',
    args: SELECTABLE_HORIZONTAL_BAR_CHART,
} satisfies StoryObj<typeof Chart>;

export const LongNumericLabels = {
    name: 'Long numeric labels',
    args: HORIZONTAL_BAR_WITH_LONG_NUMERIC_LABELS
} satisfies StoryObj<typeof Chart>;

export const WithZeroAndNegative = {
    name: 'With zeroes',
    args: HORIZONTAL_BAR_CHART_WITH_ZERO_AND_NEGATIVE,
} satisfies StoryObj<typeof Chart>;

