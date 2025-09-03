import React, { useEffect, useRef } from 'react';
import { Meta } from '@storybook/react';
import { drawChart } from '../../core/highcharts/drawChart';
import { 
  SCATTER_PLOT,
  SCATTER_PLOT_WITH_SELECTABLES 
} from '../fixtures/scatterPlot';
import { IChartOptions } from '../../core/types/chartOptions';

export default {
  title: 'Charts/drawChart Scatter plot',
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta;

/**
 * Component that uses drawChart directly
 */
interface DirectChartProps {
  pxGraphData: any;
  locale: string;
  selectedVariableCodes?: any;
}

const DirectChart: React.FC<DirectChartProps> = ({ 
  pxGraphData, 
  locale = 'en', 
  selectedVariableCodes = null 
}) => {
  const chartRef = useRef<HTMLDivElement>(null);
  const chartInstance = useRef<any>(null);
  const containerId = `chart-${Math.random().toString(36).substring(2, 9)}`;

  useEffect(() => {
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    if (chartRef.current) {
      chartRef.current.id = containerId;
      
      const options: IChartOptions = { accessibilityMode: false };
      chartInstance.current = drawChart(
        containerId,
        pxGraphData,
        locale,
        selectedVariableCodes,
        options
      );
    }

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, [pxGraphData, locale, selectedVariableCodes]);

  return (
    <div style={{ width: '100%', height: '500px' }}>
      <div ref={chartRef} style={{ width: '100%', height: '100%' }}></div>
    </div>
  );
};

export const SimpleScatterPlotDirect = () => (
  <DirectChart 
    pxGraphData={SCATTER_PLOT.pxGraphData} 
    locale="en"
  />
);
SimpleScatterPlotDirect.storyName = 'Simple Scatter Plot (drawChart)';

export const SelectableScatterPlotDirect = () => (
  <DirectChart 
    pxGraphData={SCATTER_PLOT_WITH_SELECTABLES.pxGraphData} 
    locale="en"
    selectedVariableCodes={SCATTER_PLOT_WITH_SELECTABLES.selectedVariableCodes}
  />
);
SelectableScatterPlotDirect.storyName = 'Selectable Scatter Plot (drawChart)';