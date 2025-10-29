import { Meta, StoryObj } from '@storybook/react';
import { Chart } from '../../react';
import {
    PYRAMID_CHART,
    PYRAMID_CHART_LARGE_DATASET,
    PYRAMID_CHART_WITH_SELECTABLES,
} from '../fixtures/pyramidChart';

export default {
  title: 'Charts/Pyramid',
  component: Chart,
  parameters: { },
} satisfies Meta;

export const Simple = {
    name: 'Simple (with last updated)',
    args: PYRAMID_CHART,
} satisfies StoryObj<typeof Chart>;

export const LargeDataset = {
    name: 'Large dataset',
    args: PYRAMID_CHART_LARGE_DATASET,
} satisfies StoryObj<typeof Chart>;

export const Selectable = {
    name: 'Selectable',
    args: PYRAMID_CHART_WITH_SELECTABLES,
} satisfies StoryObj<typeof Chart>;