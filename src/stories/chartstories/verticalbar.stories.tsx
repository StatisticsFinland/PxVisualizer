import { Meta, StoryObj } from '@storybook/react';
import { Chart } from '../../react';
import {
    VERTICAL_BAR_CHART,
    VERTICAL_BAR_CHART_WITH_CUSTOM_MENU_ITEMS,
    VERTICAL_BAR_CHART_WITH_EXCESSIVE_PRECISION,
    VERTICAL_BAR_CHART_WITH_LONG_ORDINAL_LABELS,
    VERTICAL_BAR_CHART_WITH_NEGATIVE_VALUES,
    VERTICAL_BAR_CHART_WITH_PRELIMINARY_DATA,
    VERTICAL_BAR_CHART_WITH_SELECTABLES
} from '../fixtures/verticalBarChart';

export default {
  title: 'Charts/Vertical bar',
  component: Chart,
  parameters: { },
} satisfies Meta;

export const Simple = {
    name: 'Simple',
    args: VERTICAL_BAR_CHART,
} satisfies StoryObj<typeof Chart>;

export const Selectable = {
    name: 'Selectable',
    args: VERTICAL_BAR_CHART_WITH_SELECTABLES,
} satisfies StoryObj<typeof Chart>;

export const ExcessivePrecision = {
    name: 'Excessive precision',
    args: VERTICAL_BAR_CHART_WITH_EXCESSIVE_PRECISION,
} satisfies StoryObj<typeof Chart>;

export const CustomMenuItems = {
    name: 'Custom menu items',
    args: VERTICAL_BAR_CHART_WITH_CUSTOM_MENU_ITEMS,
} satisfies StoryObj<typeof Chart>;

export const PreliminaryData = {
    name: 'Preliminary data',
    args: VERTICAL_BAR_CHART_WITH_PRELIMINARY_DATA,
} satisfies StoryObj<typeof Chart>;

export const NegativeData = {
    name: 'Negative data',
    args: VERTICAL_BAR_CHART_WITH_NEGATIVE_VALUES,
} satisfies StoryObj<typeof Chart>;

export const LongLabels = {
    name: 'Long labels',
    args: VERTICAL_BAR_CHART_WITH_LONG_ORDINAL_LABELS,
} satisfies StoryObj<typeof Chart>;
