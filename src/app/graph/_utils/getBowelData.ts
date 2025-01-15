import { Chart, ChartData, ChartOptions, ScriptableContext } from 'chart.js';
import { getColor } from './color';
import { bowelDateCount, TransformedBowelData } from '.';

interface CustomChartOptions extends ChartOptions<'line'> {
  grouped?: boolean;
  plugins?: {
    chartAreaStyles?: {
      borderColor: string;
    };
  } & ChartOptions<'line'>['plugins'];
}

export const getBowelData = (bowelDate: TransformedBowelData[], isToggleActive: boolean) => {
  const labels = Object.keys(bowelDateCount(bowelDate));
  const dataPoints = Object.values(bowelDateCount(bowelDate));

  const chartData: ChartData<'line', number[]> = {
    labels,
    datasets: [
      {
        data: dataPoints,
        borderColor: 'transparent',
        borderWidth: 6,
        pointRadius: 7,
        pointHoverRadius: 7,
        pointBorderColor: 'transparent',
        pointBackgroundColor: (context: ScriptableContext<'line'>) => {
          const { dataIndex } = context;
          const currentDate = labels[dataIndex];
          const currentData = bowelDate.find((item) => item.date === currentDate);
          const consistencyType = currentData?.stoolAttributes.consistency;
          return getColor(consistencyType);
        },
        pointBorderWidth: 0,
        tension: 0.4,
        cubicInterpolationMode: 'monotone',
      },
    ],
  };

  const options: CustomChartOptions = {
    responsive: true,
    grouped: true,
    layout: {
      padding: 10,
    },
    scales: {
      x: {
        offset: true,
        position: 'right',
        ticks: {
          stepSize: 1,
        },
        grid: {
          display: false,
        },
      },
      y: {
        max: Math.max(...dataPoints) + 1,

        ticks: {
          display: false,
        },
        grid: {
          display: false,
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: isToggleActive,
        padding: 5,
        backgroundColor: '#fff',
        titleColor: '#141313',

        bodyColor: '#141313',
        titleFont: {
          family: 'pretendard',
        },
        bodyFont: {
          family: 'pretendard',
        },
        yAlign: 'bottom',
        displayColors: false,
      },
      chartAreaStyles: {
        borderColor: '#F5F5F5',
      },
    },
  };

  const chartAreaStyles = {
    id: 'chartAreaStyles',
    beforeDatasetDraw(chart: Chart, _: unknown, options: { borderColor: string }) {
      const {
        ctx,
        chartArea: { top, left, width, height },
      } = chart;
      ctx.save();
      ctx.fillStyle = '#F5F5F5';
      ctx.fillRect(left, top, width, height);

      // 경계선
      ctx.save();
      ctx.strokeStyle = options.borderColor;
      ctx.strokeRect(left, top, width, height);
      ctx.restore();
    },
  };

  return { labels, dataPoints, chartData, options, chartAreaStyles };
};
