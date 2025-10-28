import { Meta, StoryObj } from '@storybook/react';
import { Chart } from '../../react';
import {
    SCATTER_PLOT,
    SCATTER_PLOT_WITH_SELECTABLES
} from '../fixtures/scatterPlot';

export default {
  title: 'Charts/Scatter plot',
  component: Chart,
  parameters: { },
} satisfies Meta;

export const Simple = {
    name: 'Simple (with last updated)',
    args: SCATTER_PLOT,
} satisfies StoryObj<typeof Chart>;

export const Selectable = {
    name: 'Selectable',
    args: SCATTER_PLOT_WITH_SELECTABLES,
} satisfies StoryObj<typeof Chart>;
