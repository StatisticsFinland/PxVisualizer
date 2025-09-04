import { Meta, StoryObj } from '@storybook/react';
import { Chart } from '../../react';
import { TABLE_WITH_ONE_CELL } from '../fixtures/table';
import { EVisualizationType } from '../../core/types/queryVisualizationResponse';

const keyFigureArgs = {
    ...TABLE_WITH_ONE_CELL,
    pxGraphData: {
        ...TABLE_WITH_ONE_CELL.pxGraphData,
        visualizationSettings: {
            ...TABLE_WITH_ONE_CELL.pxGraphData.visualizationSettings,
            visualizationType: EVisualizationType.KeyFigure,
            showUnit: true,
            linkUrl: 'https://www.stat.fi',
            linkText: { fi: 'Asunnot', en: 'Dwellings', sv: 'Bostäder' }
        }
    }
};

export default {
  title: 'Tables/KeyFigure',
  component: Chart,
  parameters: { },
} satisfies Meta;

export const BasicKeyFigure = {
    name: 'Basic Key Figure',
    args: keyFigureArgs,
} satisfies StoryObj<typeof Chart>;
