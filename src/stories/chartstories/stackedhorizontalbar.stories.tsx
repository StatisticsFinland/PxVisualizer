import { Meta, StoryObj } from '@storybook/react';
import { Chart } from '../../react';
import {
    STACKED_HORIZONTAL_BAR_CHART,
    STACKED_HORIZONTAL_BAR_CHART_PIVOTED_WITH_SELECTABLES,
    STACKED_HORIZONTAL_BAR_CHART_WITH_SELECTABLES
} from '../fixtures/stackedHorizontalBarChart';

export default {
  title: 'Charts/Stacked horizontal bar',
  component: Chart,
  parameters: { },
} satisfies Meta;

export const Simple = {
    name: 'Simple',
    args: STACKED_HORIZONTAL_BAR_CHART,
} satisfies StoryObj<typeof Chart>;

export const Selectable = {
    name: 'Selectable',
    args: STACKED_HORIZONTAL_BAR_CHART_WITH_SELECTABLES,
} satisfies StoryObj<typeof Chart>;

export const PivotedSelectable = {
    name: 'Pivoted selectable',
    args: STACKED_HORIZONTAL_BAR_CHART_PIVOTED_WITH_SELECTABLES,
} satisfies StoryObj<typeof Chart>;
