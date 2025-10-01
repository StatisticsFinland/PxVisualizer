import { Meta, StoryObj } from '@storybook/react';
import { Chart } from '../../react';
import {
    TABLE_WITH_ONE_CELL,
    TABLE_WITH_ONLY_COLUMN_VARIABLES,
    TABLE_WITH_ONLY_ROW_VARIABLES,
    TABLE_WITH_ROW_AND_COLUMN_VARIABLES
} from '../fixtures/table';

export default {
  title: 'Tables/Table',
  component: Chart,
  parameters: { },
} satisfies Meta;

export const BAsic = {
    name: 'Basic',
    args: TABLE_WITH_ROW_AND_COLUMN_VARIABLES,
} satisfies StoryObj<typeof Chart>;

export const OnlyColumn = {
    name: 'Only column variables',
    args: TABLE_WITH_ONLY_COLUMN_VARIABLES,
} satisfies StoryObj<typeof Chart>;

export const OnlyRow = {
    name: 'Only row variables',
    args: TABLE_WITH_ONLY_ROW_VARIABLES,
} satisfies StoryObj<typeof Chart>;

export const OneCell = {
    name: 'One cell',
    args: TABLE_WITH_ONE_CELL,
} satisfies StoryObj<typeof Chart>;

export const TableWithFootnoteAndSource = {
    name: 'Table with source and foot note',
    args: {
        ...TABLE_WITH_ROW_AND_COLUMN_VARIABLES,
        showTableSources: true,
        footnote: 'This is the foot note',
    },
} satisfies StoryObj<typeof Chart>;
