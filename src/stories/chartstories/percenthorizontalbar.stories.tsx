import { Meta, StoryObj } from '@storybook/react';
import { Chart } from '../../react';
import {
    PERCENT_HORIZONTAL_BAR_CHART,
    PERCENT_HORIZONTAL_BAR_CHART_PIVOTED_WITH_SELECTABLES,
    PERCENT_HORIZONTAL_BAR_CHART_WITH_SELECTABLES
} from '../fixtures/percentHorizontalBarChart';

export default {
  title: 'Charts/Percent horizontal bar',
  component: Chart,
  parameters: { },
} satisfies Meta;

export const Simple = {
    name: 'Simple',
    args: PERCENT_HORIZONTAL_BAR_CHART,
} satisfies StoryObj<typeof Chart>;

export const Selectable = {
    name: 'Selectable',
    args: PERCENT_HORIZONTAL_BAR_CHART_WITH_SELECTABLES,
} satisfies StoryObj<typeof Chart>;

export const PivotedSelectable = {
    name: 'Pivoted selectable',
    args: PERCENT_HORIZONTAL_BAR_CHART_PIVOTED_WITH_SELECTABLES,
} satisfies StoryObj<typeof Chart>;
