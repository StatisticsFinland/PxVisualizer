import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Chart } from "../react";
import {
  VERTICAL_BAR_CHART,
  VERTICAL_BAR_CHART_WITH_PRELIMINARY_DATA,
  VERTICAL_BAR_CHART_WITH_CUSTOM_MENU_ITEMS,
  VERTICAL_BAR_CHART_WITH_NEGATIVE_VALUES,
  VERTICAL_BAR_CHART_WITH_LONG_ORDINAL_LABELS,
  VERTICAL_BAR_CHART_WITH_SELECTABLES,
} from "./fixtures/verticalBarChart";
import {
  GROUP_HORIZONTAL_BAR_CHART,
  GROUP_HORIZONTAL_BAR_CHART_WITH_ONLY_NEGATIVE_VALUES,
  GROUP_HORIZONTAL_BAR_CHART_WITH_SELECTABLES,
  GROUP_HORIZONTAL_BAR_CHART_WITH_SUM_SORTING,
  GROUP_HORIZONTAL_BAR_CHART_WITH_REVERSED_SORTING
} from "./fixtures/groupHorizontalBarChart";
import {
  HORIZONTAL_BAR_CHART_ASCENDING,
  HORIZONTAL_BAR_WITH_LONG_NUMERIC_LABELS,
  SELECTABLE_HORIZONTAL_BAR_CHART,
} from "./fixtures/horizontalBarChart";
import {
  GROUP_VERTICAL_BAR_CHART,
  GROUP_VERTICAL_BAR_CHART_WITH_SELECTABLES,
  GROUP_VERTICAL_BAR_CHART_WITH_SELECTABLES_PIVOTED,
} from "./fixtures/groupVerticalBarChart";
import { PIE_CHART_SELECTABLE_TIME } from "./fixtures/pieChart";
import {
  LONG_STACKED_VERTICAL_BAR_CHART,
  STACKED_VERTICAL_BAR_CHART,
  STACKED_VERTICAL_BAR_CHART_WITH_SELECTABLES,
} from "./fixtures/stackedVerticalBarChart";
import {
  STACKED_HORIZONTAL_BAR_CHART,
  STACKED_HORIZONTAL_BAR_CHART_PIVOTED_WITH_SELECTABLES,
  STACKED_HORIZONTAL_BAR_CHART_WITH_SELECTABLES,
} from "./fixtures/stackedHorizontalBarChart";
import {
  PERCENT_VERTICAL_BAR_CHART,
  PERCENT_VERTICAL_BAR_CHART_WITH_SELECTABLES,
} from "./fixtures/percentVerticalBarChart";
import {
  PERCENT_HORIZONTAL_BAR_CHART,
  PERCENT_HORIZONTAL_BAR_CHART_PIVOTED_WITH_SELECTABLES,
  PERCENT_HORIZONTAL_BAR_CHART_WITH_SELECTABLES,
} from "./fixtures/percentHorizontalBarChart";
import {
  PYRAMID_CHART,
  PYRAMID_CHART_WITH_SELECTABLES,
  PYRAMID_CHART_LARGE_DATASET,
} from "./fixtures/pyramidChart";
import {
  SCATTER_PLOT,
  SCATTER_PLOT_WITH_SELECTABLES,
} from "./fixtures/scatterPlot";
import {
  LINE_CHART_WITH_COMBINATION_SERIES,
  LINE_CHART_WITH_HALF_YEAR_SERIES,
  LINE_CHART_WITH_MONTH_SERIES,
  LINE_CHART_WITH_MULTISELECTABLE_VARIABLE,
  LINE_CHART_WITH_NEGATIVE_VALUES,
  LINE_CHART_WITH_NON_TIME_ORDINAL,
  LINE_CHART_WITH_NON_NUMERIC_ORDINAL,
  LINE_CHART_WITH_ORDINAL_VAR,
  LINE_CHART_WITH_QUARTER_SERIES,
  LINE_CHART_WITH_YEAR_SERIES,
} from "./fixtures/lineChart";
import {
  TABLE_WITH_ONE_CELL,
  TABLE_WITH_ONLY_COLUMN_VARIABLES,
  TABLE_WITH_ONLY_ROW_VARIABLES,
  TABLE_WITH_ROW_AND_COLUMN_VARIABLES,
} from "./fixtures/table";
import { STACKED_VERTICAL_BAR_CHART_WITH_NOMINAL_AXIS_LONG_LABELS } from "../core/conversion/TestFixtures/stackedVerticalBarChart";
import { GROUP_VERTICAL_BAR_CHART_WITH_NOMINAL_AXIS_EXTRA_LONG_LABELS } from "../core/conversion/TestFixtures/groupVerticalBarChart";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Chart",
  component: Chart,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    locale: { type: "string", defaultValue: "fi" },
    showContextMenu: { type: "boolean", defaultValue: true },
    showTableTitles: { type: "boolean", defaultValue: undefined },
    showTableUnits: { type: "boolean", defaultValue: undefined },
    showTableSources: { type: "boolean", defaultValue: undefined },
    footnote: { type: "string", defaultValue: "" },
  },
} as ComponentMeta<typeof Chart>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Chart> = (args) => <Chart {...args} />;

export const VerticalBarChart = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
VerticalBarChart.args = VERTICAL_BAR_CHART;

export const LineChartWithYearSeries = Template.bind({});
LineChartWithYearSeries.args = LINE_CHART_WITH_YEAR_SERIES;

export const LineChartWithQuarterSeries = Template.bind({});
LineChartWithQuarterSeries.args = LINE_CHART_WITH_QUARTER_SERIES;

export const LineChartWithMonthSeries = Template.bind({});
LineChartWithMonthSeries.args = LINE_CHART_WITH_MONTH_SERIES;

export const LineChartWithHalfYearSeries = Template.bind({});
LineChartWithHalfYearSeries.args = LINE_CHART_WITH_HALF_YEAR_SERIES;

export const LineChartWithMultiselectableVariable = Template.bind({});
LineChartWithMultiselectableVariable.args = LINE_CHART_WITH_MULTISELECTABLE_VARIABLE;

export const LineChartWithCombinationSeries = Template.bind({});
LineChartWithCombinationSeries.args = LINE_CHART_WITH_COMBINATION_SERIES;

export const LineChartWithNegativeValues = Template.bind({});
LineChartWithNegativeValues.args = LINE_CHART_WITH_NEGATIVE_VALUES;

export const LineChartWithNonTimeOrdinal = Template.bind({});
LineChartWithNonTimeOrdinal.args = LINE_CHART_WITH_NON_TIME_ORDINAL;

export const LineChartWithNonNumericOrdinal = Template.bind({});
LineChartWithNonNumericOrdinal.args = LINE_CHART_WITH_NON_NUMERIC_ORDINAL;

export const LineChartWithOrdinalVariable = Template.bind({});
LineChartWithOrdinalVariable.args = LINE_CHART_WITH_ORDINAL_VAR;

export const VerticalBarChartWithSelectableVariables = Template.bind({});
VerticalBarChartWithSelectableVariables.args = VERTICAL_BAR_CHART_WITH_SELECTABLES;

export const verticalBarChartWithCustomMenuItem = Template.bind({});
verticalBarChartWithCustomMenuItem.args = VERTICAL_BAR_CHART_WITH_CUSTOM_MENU_ITEMS;

export const verticalBarChartWithPreliminaryData = Template.bind({});
verticalBarChartWithPreliminaryData.args = VERTICAL_BAR_CHART_WITH_PRELIMINARY_DATA;

export const verticalBarChartWithNegativeValues = Template.bind({});
verticalBarChartWithNegativeValues.args = VERTICAL_BAR_CHART_WITH_NEGATIVE_VALUES;

export const verticalBarChartWithLongOrdinalLabels = Template.bind({});
verticalBarChartWithLongOrdinalLabels.args = VERTICAL_BAR_CHART_WITH_LONG_ORDINAL_LABELS;

export const HorizontalBarChartAscending = Template.bind({});
HorizontalBarChartAscending.args = HORIZONTAL_BAR_CHART_ASCENDING;

export const SelectableHorizontalBarChart = Template.bind({});
SelectableHorizontalBarChart.args = SELECTABLE_HORIZONTAL_BAR_CHART;

export const HorizontalBarChartWithLongNumericLabels = Template.bind({});
HorizontalBarChartWithLongNumericLabels.args = HORIZONTAL_BAR_WITH_LONG_NUMERIC_LABELS;

export const GroupHorizontalBarChart = Template.bind({});
GroupHorizontalBarChart.args = GROUP_HORIZONTAL_BAR_CHART;

export const GroupHorizontalBarChartWithSelectables = Template.bind({});
GroupHorizontalBarChartWithSelectables.args = GROUP_HORIZONTAL_BAR_CHART_WITH_SELECTABLES;

export const GroupHorizontalBarChartWithSumSorting = Template.bind({});
GroupHorizontalBarChartWithSumSorting.args = GROUP_HORIZONTAL_BAR_CHART_WITH_SUM_SORTING;

export const GroupHorizontalBarChartWithReversedSorting = Template.bind({});
GroupHorizontalBarChartWithReversedSorting.args = GROUP_HORIZONTAL_BAR_CHART_WITH_REVERSED_SORTING;

export const GroupHorizontalBarChartWithOnlyNegativeValues = Template.bind({});
GroupHorizontalBarChartWithOnlyNegativeValues.args = GROUP_HORIZONTAL_BAR_CHART_WITH_ONLY_NEGATIVE_VALUES;

export const StackedHorizontalBarChart = Template.bind({});
StackedHorizontalBarChart.args = STACKED_HORIZONTAL_BAR_CHART;

export const StackedHorizontalBarChartWithSelectables = Template.bind({});
StackedHorizontalBarChartWithSelectables.args = STACKED_HORIZONTAL_BAR_CHART_WITH_SELECTABLES;

export const StackedHorizontalBarChartPivotedWithSelectables = Template.bind(
  {},
);
StackedHorizontalBarChartPivotedWithSelectables.args = STACKED_HORIZONTAL_BAR_CHART_PIVOTED_WITH_SELECTABLES;

export const PercentHorizontalBarChart = Template.bind({});
PercentHorizontalBarChart.args = PERCENT_HORIZONTAL_BAR_CHART;

export const PercentHorizontalBarChartWithSelectables = Template.bind({});
PercentHorizontalBarChartWithSelectables.args = PERCENT_HORIZONTAL_BAR_CHART_WITH_SELECTABLES;

export const PercentHorizontalBarChartPivotedWithSelectables = Template.bind(
  {},
);
PercentHorizontalBarChartPivotedWithSelectables.args = PERCENT_HORIZONTAL_BAR_CHART_PIVOTED_WITH_SELECTABLES;

export const GroupVerticalBarChart = Template.bind({});
GroupVerticalBarChart.args = GROUP_VERTICAL_BAR_CHART;

export const GroupVerticalBarChartWithSelectables = Template.bind({});
GroupVerticalBarChartWithSelectables.args = GROUP_VERTICAL_BAR_CHART_WITH_SELECTABLES;

export const GroupVerticalBarChartPivotedWithSelectables = Template.bind({});
GroupVerticalBarChartPivotedWithSelectables.args = GROUP_VERTICAL_BAR_CHART_WITH_SELECTABLES_PIVOTED;

export const StackedVerticalBarChart = Template.bind({});
StackedVerticalBarChart.args = STACKED_VERTICAL_BAR_CHART;

export const StackedVerticalBarChartWithSelectables = Template.bind({});
StackedVerticalBarChartWithSelectables.args = STACKED_VERTICAL_BAR_CHART_WITH_SELECTABLES;

export const LongStackedVerticalBarChart = Template.bind({});
LongStackedVerticalBarChart.args = LONG_STACKED_VERTICAL_BAR_CHART;

export const PercentVerticalBarChart = Template.bind({});
PercentVerticalBarChart.args = PERCENT_VERTICAL_BAR_CHART;

export const PercentVerticalBarChartWithSelectables = Template.bind({});
PercentVerticalBarChartWithSelectables.args = PERCENT_VERTICAL_BAR_CHART_WITH_SELECTABLES;

export const PieChartWithSelectableTime = Template.bind({});
PieChartWithSelectableTime.args = PIE_CHART_SELECTABLE_TIME;

export const PyramidChart = Template.bind({});
PyramidChart.args = PYRAMID_CHART;

export const PyramidChartWithLargeDataset = Template.bind({});
PyramidChartWithLargeDataset.args = PYRAMID_CHART_LARGE_DATASET;

export const PyramidChartWithSelectables = Template.bind({});
PyramidChartWithSelectables.args = PYRAMID_CHART_WITH_SELECTABLES;

export const ScatterPlot = Template.bind({});
ScatterPlot.args = SCATTER_PLOT;

export const ScatterPlotWithSelectablesAndCutYAxis = Template.bind({});
ScatterPlotWithSelectablesAndCutYAxis.args = SCATTER_PLOT_WITH_SELECTABLES;

export const TableWithOnlyColumnVariables = Template.bind({});
TableWithOnlyColumnVariables.args = TABLE_WITH_ONLY_COLUMN_VARIABLES;

export const TableWithOneCell = Template.bind({});
TableWithOneCell.args = TABLE_WITH_ONE_CELL;

export const TableWithOnlyRowVariables = Template.bind({});
TableWithOnlyRowVariables.args = TABLE_WITH_ONLY_ROW_VARIABLES;

export const TableWithRowAndColumnVariables = Template.bind({});
TableWithRowAndColumnVariables.args = TABLE_WITH_ROW_AND_COLUMN_VARIABLES;

export const StackedVerticalBarChartWithLongNominalLabels = Template.bind({});
StackedVerticalBarChartWithLongNominalLabels.args = STACKED_VERTICAL_BAR_CHART_WITH_NOMINAL_AXIS_LONG_LABELS;

export const GroupVerticalBarChartWithLongNominalLabels = Template.bind({});
GroupVerticalBarChartWithLongNominalLabels.args = GROUP_VERTICAL_BAR_CHART_WITH_NOMINAL_AXIS_EXTRA_LONG_LABELS;
