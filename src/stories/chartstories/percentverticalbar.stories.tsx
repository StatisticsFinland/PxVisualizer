import { Meta, StoryObj } from '@storybook/react';
import { Chart } from '../../react';
import {
    PERCENT_VERTICAL_BAR_CHART,
    PERCENT_VERTICAL_BAR_CHART_WITH_SELECTABLES
} from '../fixtures/percentVerticalBarChart';

export default {
  title: 'Charts/Percent vertical bar',
  component: Chart,
  parameters: { },
} satisfies Meta;

export const Simple = {
    name: 'Simple (with last updated)',
    args: PERCENT_VERTICAL_BAR_CHART,
} satisfies StoryObj<typeof Chart>;

export const Selectable = {
    name: 'Selectable',
    args: PERCENT_VERTICAL_BAR_CHART_WITH_SELECTABLES,
} satisfies StoryObj<typeof Chart>;
