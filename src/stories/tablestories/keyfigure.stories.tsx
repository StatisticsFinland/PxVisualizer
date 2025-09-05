import { Meta, StoryObj } from '@storybook/react';
import { Chart } from '../../react';
import { TABLE_WITH_ONE_CELL } from '../fixtures/table';
import { EVisualizationType } from '../../core/types/queryVisualizationResponse';
import React from 'react';

const keyFigureArgs = {
    ...TABLE_WITH_ONE_CELL,
    pxGraphData: {
        ...TABLE_WITH_ONE_CELL.pxGraphData,
        visualizationSettings: {
            ...TABLE_WITH_ONE_CELL.pxGraphData.visualizationSettings,
            visualizationType: EVisualizationType.KeyFigure,
            showUnit: true
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

export const CustomStyledKeyFigure = {
    name: 'Custom Styled Key Figure',
    args: {
        ...keyFigureArgs,
        className: 'custom-styling'
    },
    decorators: [
        (Story) => (
            <>
                <style>{`
                    .keyFigureChart.custom-styling {
                        font-family: "Barlow Semi Condensed", Verdana, sans-serif;
                    }
                    
                    .keyFigure-container.custom-styling {
                        border: 1px solid #ff9999;
                        padding: 1.2rem;
                        border-radius: 1rem;
                        box-shadow: 0 4px 8px rgba(255,0,0,0.1);
                        background-color: #fff5f5;
                    }
                    
                    .keyFigure-title.custom-styling {
                        font-weight: 600;
                        letter-spacing: 0;
                        line-height: 1.4;
                        font-size: 1.4rem;
                        color: #b30000;
                    }
                    
                    .keyFigure-value.custom-styling {
                        color: #ff0000;
                    }
                    
                    .keyFigure-value-main {
                        font-weight: 600;
                        font-size: 2.5rem;
                        margin-inline-end: 0.25rem;
                        color: #ff0000;
                        line-height: 1.2;
                    }
                    
                    .keyFigure-unit {
                        font-weight: 400;
                        font-size: 1.5rem;
                        margin-top: 1.5rem;
                        margin-bottom: 0rem;
                        color: #cc0000;
                    }
                    
                    .keyFigure-time.custom-styling {
                        margin: 0;
                        line-height: 1.6;
                        font-size: 1.2rem;
                        font-weight: 400;
                        max-width: 100%;
                        color: #990000;
                    }
                    
                    .keyFigure-lastupdated.custom-styling {
                        margin: 0;
                        line-height: 1.6;
                        font-size: 1.1rem;
                        font-weight: 400;
                        max-width: 100%;
                        color: #800000;
                    }
                `}</style>
                <Story />
            </>
        )
    ]
} satisfies StoryObj<typeof Chart>;
