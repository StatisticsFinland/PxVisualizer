import { Meta, StoryObj } from '@storybook/react';
import React, { useEffect, useRef } from 'react';
import { JsonStat2ChartWrapper } from '../../core/highcharts/jsonStat2ChartWrapper';
import { EVisualizationType } from '../../core/types/queryVisualizationResponse';
import { 
    JSON_STAT2_POPULATION_TIME_SERIES, 
    JSON_STAT2_QUARTERLY_RENT_DATA,
} from '../fixtures/jsonStat2Chart';

interface JsonStat2ChartProps {
    jsonStatData: any;
    selectedVariableCodes?: { [key: string]: string[] };
    locale?: string;
    visualizationType?: EVisualizationType;
}

const JsonStat2ChartComponent: React.FC<JsonStat2ChartProps> = ({ 
    jsonStatData, 
    selectedVariableCodes = {}, 
    locale = "fi",
    visualizationType = EVisualizationType.LineChart
}) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const chartWrapperRef = useRef<JsonStat2ChartWrapper | null>(null);

    useEffect(() => {
        if (!containerRef.current) return;

        // Generate unique container ID
        const containerId = `jsonstat2-chart-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
        containerRef.current.id = containerId;

        // Clean up previous chart
        if (chartWrapperRef.current) {
            chartWrapperRef.current.destroy();
        }

        // Create new chart
        chartWrapperRef.current = new JsonStat2ChartWrapper({
            container: containerId,
            jsonStatData,
            visualizationType: visualizationType,
            locale,
            selectedVariableCodes,
            chartOptions: {
                accessibilityMode: false,
                showTitle: true
            }
        });

        chartWrapperRef.current.render();

        // Cleanup function
        return () => {
            if (chartWrapperRef.current) {
                chartWrapperRef.current.destroy();
                chartWrapperRef.current = null;
            }
        };
    }, [jsonStatData, selectedVariableCodes, locale]);

    return (
        <div>
            <div ref={containerRef} style={{ width: '100%', height: '500px' }} />
        </div>
    );
};

export default {
    title: 'JSON-Stat 2/Charts',
    component: JsonStat2ChartComponent,
    parameters: {
        layout: 'padded',
    },
    argTypes: {
        locale: {
            control: { type: 'select' },
            options: ['fi', 'sv', 'en'],
            description: 'Chart locale'
        },
        selectedVariableCodes: {
            control: { type: 'object' },
            description: 'Selected variable codes for filtering'
        }
    }
} satisfies Meta;

export const PopulationTimeSeries = {
    name: 'Population Time Series (Annual)',
    args: {
        jsonStatData: JSON_STAT2_POPULATION_TIME_SERIES,
        locale: 'fi',
        selectedVariableCodes: {}
    },
} satisfies StoryObj<typeof JsonStat2ChartComponent>;

export const QuarterlyRentData = {
    name: 'Quarterly Rental Prices by Region',
    args: {
        jsonStatData: JSON_STAT2_QUARTERLY_RENT_DATA,
        locale: 'fi',
        selectedVariableCodes: {},
        visualizationType: EVisualizationType.VerticalBarChart
    },
} satisfies StoryObj<typeof JsonStat2ChartComponent>;

