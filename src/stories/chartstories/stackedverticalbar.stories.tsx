import { Meta, StoryObj } from '@storybook/react';
import { Chart } from '../../react';
import {
    LONG_STACKED_VERTICAL_BAR_CHART,
    STACKED_VERTICAL_BAR_CHART,
    STACKED_VERTICAL_BAR_CHART_WITH_NOMINAL_AXIS_LONG_LABELS,
    STACKED_VERTICAL_BAR_CHART_WITH_SELECTABLES
} from '../fixtures/stackedVerticalBarChart';

export default {
  title: 'Charts/Stacked vertical bar',
  component: Chart,
  parameters: { },
} satisfies Meta;

export const Simple = {
    name: 'Simple (with last updated)',
    args: STACKED_VERTICAL_BAR_CHART,
} satisfies StoryObj<typeof Chart>;

export const Selectable = {
    name: 'Selectable',
    args: STACKED_VERTICAL_BAR_CHART_WITH_SELECTABLES,
} satisfies StoryObj<typeof Chart>;

export const Long = {
    name: 'Long',
    args: LONG_STACKED_VERTICAL_BAR_CHART,
} satisfies StoryObj<typeof Chart>;

export const LongNominalLabels = {
    name: 'Long nominal labels',
    args: STACKED_VERTICAL_BAR_CHART_WITH_NOMINAL_AXIS_LONG_LABELS,
} satisfies StoryObj<typeof Chart>;
