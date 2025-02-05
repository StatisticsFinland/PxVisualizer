import { Meta, StoryObj } from '@storybook/react';
import { Chart } from '../../react';
import { PIE_CHART_SELECTABLE_TIME } from '../fixtures/pieChart';

export default {
  title: 'Charts/Pie',
  component: Chart,
  parameters: { },
} satisfies Meta;

export const SelectableTime = {
    name: 'Selectable time',
    args: PIE_CHART_SELECTABLE_TIME,
} satisfies StoryObj<typeof Chart>;
