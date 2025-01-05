import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  scales,
  ScriptableContext,
  ChartOptions,
  Chart,
  ChartData,
} from 'chart.js';
import { flexSprinklesFc } from '@/app/components/common/utils/flex';
import {
  chartBg,
  filterWrapper,
  poopBox,
  poopBoxWrapper,
  poopInfoText,
  toggle,
  toggleActive,
} from '../styles/graph.css';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { caption, heading2, light, regular, semiBold } from '@/app/styles/font.css';
import { gray300 } from '@/app/styles/colors.css';
import { pointer } from '@/app/styles/global.css';
import { paddingSprinkles } from '@/app/styles/padding.css';
import { supabaseClient } from '@/app/lib/supabaseClient';
import {
  bowelDateCount,
  transformBowelData,
  consistency,
  TransformedBowelData,
} from '../utils/function';
import { StoolAttributes } from '@/app/store/info/infoStore';

interface CustomChartOptions extends ChartOptions<'line'> {
  grouped?: boolean;
  plugins?: {
    chartAreaStyles?: {
      borderColor: string;
    };
  } & ChartOptions<'line'>['plugins'];
}

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  scales,
);
ChartJS.defaults.color = '#D9D9D9';

const createCustomLinePlugin = (bowelDateData: TransformedBowelData[]) => ({
  id: 'customLine',
  beforeDatasetDraw: (chart: Chart) => {
    const ctx = chart.ctx;
    const meta = chart.getDatasetMeta(0);
    if (!meta.data || meta.data.length === 0) return;

    const points = meta.data;
    const labels = chart.data.labels;

    const getColor = (type: string) => {
      switch (type) {
        case 'thin':
          return '#FEE88B';
        case 'default':
          return '#4FE786';
        case 'hard':
          return '#FC5064';
        default:
          return '#D9D9D9';
      }
    };

    points.forEach((point: { x: number; y: number }, index: number) => {
      if (index < points.length - 1) {
        const nextPoint = points[index + 1];

        if (labels) {
          const currentDate = labels[index];
          const nextDate = labels[index + 1];

          const currentData = bowelDateData.find((item) => item.date === currentDate);
          const nextData = bowelDateData.find((item) => item.date === nextDate);

          const currentColor = getColor(currentData?.stoolAttributes.consistency as string);
          const nextColor = getColor(nextData?.stoolAttributes.consistency as string);

          const tension = 0.4;

          const controlPoint1X = point.x + (nextPoint.x - point.x) * tension;
          const controlPoint1Y = point.y;
          const controlPoint2X = nextPoint.x - (nextPoint.x - point.x) * tension;
          const controlPoint2Y = nextPoint.y;

          const gradient = ctx.createLinearGradient(point.x, point.y, nextPoint.x, nextPoint.y);

          gradient.addColorStop(0, currentColor);
          gradient.addColorStop(1, nextColor);

          ctx.beginPath();
          ctx.moveTo(point.x, point.y);
          ctx.bezierCurveTo(
            controlPoint1X,
            controlPoint1Y,
            controlPoint2X,
            controlPoint2Y,
            nextPoint.x,
            nextPoint.y,
          );
          ctx.strokeStyle = gradient;
          ctx.lineWidth = 6;
          ctx.stroke();
        }
      }
    });
  },
});

const DataGraph = () => {
  const [dateRange, setDateRange] = useState(7);
  const [bowelDate, setBowelDate] = useState<TransformedBowelData[]>([]);
  const [isToggleActive, setIsToggleActive] = useState(true);
  const [hasData, setHasData] = useState(false);

  const labels = Object.keys(bowelDateCount(bowelDate));
  const dataPoints = Object.values(bowelDateCount(bowelDate));

  const consistencyCount = (
    consistencyFn: (data: TransformedBowelData[]) => StoolAttributes['consistency'][],
    type: StoolAttributes['consistency'],
  ): StoolAttributes['consistency'][] => {
    return consistencyFn(bowelDate).filter((consistency) => consistency === type);
  };

  useEffect(() => {
    const getBowlData = async () => {
      const { data, error } = await supabaseClient.from('bowel_attributes').select('*');
      if (data) {
        const transformedData = transformBowelData(data);

        const uniqueDates = [...new Set(transformedData.map((item) => item.date))].sort().reverse();

        const selectedDates = uniqueDates.slice(0, dateRange);

        const filteredData = transformedData.filter((item) => selectedDates.includes(item.date));

        setHasData(filteredData.length > 0);
        setBowelDate(filteredData);
      }
    };

    getBowlData();
  }, [dateRange]);

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

          switch (consistencyType) {
            case 'thin':
              return '#FEE88B';
            case 'default':
              return '#4FE786';
            case 'hard':
              return '#FC5064';
            default:
              return '#D9D9D9';
          }
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

  const onClickDateRange = () => {
    setDateRange(dateRange === 7 ? 30 : 7);
  };

  return (
    <>
      <h2 className={`${semiBold} ${heading2} ${paddingSprinkles({ paddingBottom: 's60' })}`}>
        배변 활동을
        <br />
        분석해봤어요
      </h2>
      <div className={filterWrapper}>
        <div className={`${flexSprinklesFc({ alignItems: 'center' })} ${pointer}`}>
          <button className={`${caption} ${regular}`} onClick={onClickDateRange}>
            {dateRange === 7 ? '일주일' : '한 달'}
            {''} <Image src="/svgs/drop.svg" width={8} height={5} alt="change icon" />
          </button>
        </div>

        <button
          className={`${toggle} ${isToggleActive ? toggleActive : ''}`}
          onClick={() => setIsToggleActive(!isToggleActive)}
        />
      </div>
      {hasData ? (
        <div
          className={flexSprinklesFc({
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
          })}
        >
          <div className={chartBg}>
            <Line
              data={chartData}
              options={options}
              plugins={[chartAreaStyles, createCustomLinePlugin(bowelDate)]}
            />
          </div>

          <div className={poopInfoText}>
            <p className={`${caption} ${gray300} ${light}`}>
              * 같은 날 변의 묽기가 다를 경우 먼저 적힌 상태로 보여지게됩니다.
            </p>
          </div>
          <div className={poopBoxWrapper}>
            <div className={poopBox}>
              <Image src="/svgs/poop/thin/active-thin.svg" width={27} height={27} alt="icon" />
              {consistencyCount(consistency, 'thin').length}
            </div>
            <div className={poopBox}>
              <Image src="/svgs/poop/thin/active-default.svg" width={27} height={27} alt="icon" />
              {consistencyCount(consistency, 'default').length}
            </div>
            <div className={poopBox}>
              <Image src="/svgs/poop/thin/active-hard.svg" width={27} height={27} alt="icon" />
              {consistencyCount(consistency, 'hard').length}
            </div>
          </div>
        </div>
      ) : (
        <>
          <p className={paddingSprinkles({ paddingTop: 's28' })}>
            {dateRange === 7 ? '일주일' : '한 달'} 동안의 배변 기록이 없습니다. 😥
          </p>
          <p>새로운 기록을 추가해보세요.</p>
        </>
      )}
    </>
  );
};

export default DataGraph;
