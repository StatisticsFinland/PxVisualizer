import { Meta, StoryObj } from '@storybook/react';
import { Chart } from '../../react';
import {
    GROUP_VERTICAL_BAR_CHART,
    GROUP_VERTICAL_BAR_CHART_WITH_NOMINAL_AXIS_EXTRA_LONG_LABELS,
    GROUP_VERTICAL_BAR_CHART_WITH_SELECTABLES,
    GROUP_VERTICAL_BAR_CHART_WITH_SELECTABLES_PIVOTED
} from '../fixtures/groupVerticalBarChart';

export default {
  title: 'Charts/Group vertical bar',
  component: Chart,
  parameters: { },
} satisfies Meta;

export const Simple = {
    name: 'Simple (with last updated)',
    args: GROUP_VERTICAL_BAR_CHART,
} satisfies StoryObj<typeof Chart>;

export const Selectable = {
    name: 'Selectable',
    args: GROUP_VERTICAL_BAR_CHART_WITH_SELECTABLES,
} satisfies StoryObj<typeof Chart>;

export const PivotedSelectable = {
    name: 'Pivoted selectable',
    args: GROUP_VERTICAL_BAR_CHART_WITH_SELECTABLES_PIVOTED,
} satisfies StoryObj<typeof Chart>;

export const LongNominalLabels = {
    name: 'Long nominal labels',
    args: GROUP_VERTICAL_BAR_CHART_WITH_NOMINAL_AXIS_EXTRA_LONG_LABELS,
} satisfies StoryObj<typeof Chart>;
