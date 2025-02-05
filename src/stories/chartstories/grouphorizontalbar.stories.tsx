import { Meta, StoryObj } from '@storybook/react';
import { Chart } from '../../react';
import {
    GROUP_HORIZONTAL_BAR_CHART,
    GROUP_HORIZONTAL_BAR_CHART_WITH_ONLY_NEGATIVE_VALUES,
    GROUP_HORIZONTAL_BAR_CHART_WITH_REVERSED_SORTING,
    GROUP_HORIZONTAL_BAR_CHART_WITH_SELECTABLES,
    GROUP_HORIZONTAL_BAR_CHART_WITH_SUM_SORTING
} from '../fixtures/groupHorizontalBarChart';

export default {
  title: 'Charts/Group horizontal bar',
  component: Chart,
  parameters: { },
} satisfies Meta;

export const Simple = {
    name: 'Simple',
    args: GROUP_HORIZONTAL_BAR_CHART,
} satisfies StoryObj<typeof Chart>;

export const Selectable = {
    name: 'Selectable',
    args: GROUP_HORIZONTAL_BAR_CHART_WITH_SELECTABLES,
} satisfies StoryObj<typeof Chart>;

export const SumSorting = {
    name: 'Sum sorting',
    args: GROUP_HORIZONTAL_BAR_CHART_WITH_SUM_SORTING,
} satisfies StoryObj<typeof Chart>;

export const ReversSorting = {
    name: 'Reverse sorting',
    args: GROUP_HORIZONTAL_BAR_CHART_WITH_REVERSED_SORTING,
} satisfies StoryObj<typeof Chart>;

export const NegativeValues = {
    name: 'Negative values',
    args: GROUP_HORIZONTAL_BAR_CHART_WITH_ONLY_NEGATIVE_VALUES,
} satisfies StoryObj<typeof Chart>;
