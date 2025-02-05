import { Meta, StoryObj } from '@storybook/react';
import { Chart } from '../../react';
import {
    HORIZONTAL_BAR_CHART_ASCENDING, HORIZONTAL_BAR_WITH_LONG_NUMERIC_LABELS, SELECTABLE_HORIZONTAL_BAR_CHART
} from '../fixtures/horizontalBarChart';

export default {
  title: 'Charts/Horizontal bar',
  component: Chart,
  parameters: { },
} satisfies Meta;

export const Ascending = {
    name: 'Ascending',
    args: HORIZONTAL_BAR_CHART_ASCENDING,
} satisfies StoryObj<typeof Chart>;

export const Selectable = {
    name: 'Ascending',
    args: SELECTABLE_HORIZONTAL_BAR_CHART,
} satisfies StoryObj<typeof Chart>;

export const LongNumericLabels = {
    name: 'Long numeric labels',
    args: HORIZONTAL_BAR_WITH_LONG_NUMERIC_LABELS,
} satisfies StoryObj<typeof Chart>;

