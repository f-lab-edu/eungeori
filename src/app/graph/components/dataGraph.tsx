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
import {
  bowelDateCount,
  bowelInfoDate30Days,
  bowelInfoDate7Days,
  consistency,
} from '../dump/mockup';
import { pointer } from '@/app/styles/global.css';
import { paddingSprinkles } from '@/app/styles/padding.css';
import { supabaseClient } from '@/app/lib/supabaseClient';

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

const DataGraph = () => {
  const [dateRange, setDateRange] = useState(7);
  const [bowelDate, setBowelDate] = useState(bowelInfoDate7Days);
  const [isToggleActive, setIsToggleActive] = useState(true);

  const labels = Object.keys(bowelDateCount(bowelDate));
  const dataPoints = Object.values(bowelDateCount(bowelDate));

  useEffect(() => {
    const getBowlData = async () => {
      const { data, error } = await supabaseClient.from('bowel_attributes').select('*');
      if (data) {
        setBowelDate(data);
      }
    };

    getBowlData();
  }, []);

  // console.log(
  //   bowelDate.map((x) => x.bowelTime),
  //   'bowelDate',
  // );

  useEffect(() => {
    const selectedData = dateRange === 7 ? bowelInfoDate7Days : bowelInfoDate30Days;
    setBowelDate(selectedData);
  }, []);

  const data = {
    labels,
    datasets: [
      {
        data: dataPoints,

        // 선에 관한 로직
        borderColor: (context: ScriptableContext<'line'>) => {
          const { chart } = context;
          const ctx = chart.ctx;
          const chartArea = chart.chartArea;

          const gradient = ctx.createLinearGradient(0, chartArea.bottom, 0, chartArea.top);

          const consistencyType = consistency[dataIndex];

          gradientData(consistencyType, gradient);

          return gradient;
        },
        borderWidth: 7,
        pointRadius: 9,
        pointHoverRadius: 9,
        pointBorderColor: 'transparent',
        pointBackgroundColor: (context) => {
          const { dataIndex } = context;
          const consistencyType = consistency[dataIndex];

          switch (consistencyType) {
            case 'thin':
              return '#FEE88B';
            case 'default':
              return '#141313';
            case 'crackle':
              return '#FC5064';
            default:
              return '#D9D9D9';
          }
        },
        pointBorderWidth: 0,
        tension: 0.4,
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
    if (dateRange === 7) {
      setBowelDate(bowelInfoDate30Days);
      setDateRange(30);
    } else {
      setBowelDate(bowelInfoDate7Days);
      setDateRange(7);
    }
  };

  // const consistencyCount = (consistency: string[], type: string) => {
  //   return consistency(bowelDate).filter((consistency) => consistency === type);
  // };

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
      <div
        className={flexSprinklesFc({
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
        })}
      >
        <div className={chartBg}>
          <Line data={data} options={options} plugins={[chartAreaStyles]} />
        </div>

        <div className={flexSprinklesFc({ alignItems: 'flex-start' })} style={{ width: '90%' }}>
          <p className={`${caption} ${gray300} ${light}`}>
            * 같은 날 변의 묽기가 다를 경우 먼저 적힌 상태로 보여지게됩니다.
          </p>
        </div>
        <div className={poopBoxWrapper}>
          <div className={poopBox}>
            <Image src="/svgs/poop/thin/active_thin.svg" width={27} height={27} alt="icon" />
            {consistencyCount(consistency, 'thin').length}
          </div>
          <div className={poopBox}>
            <Image src="/svgs/poop/thin/active_default.svg" width={27} height={27} alt="icon" />
            {consistencyCount(consistency, 'default').length}
          </div>
          <div className={poopBox}>
            <Image src="/svgs/poop/thin/active_crackle.svg" width={27} height={27} alt="icon" />
            {consistencyCount(consistency, 'crackle').length}
          </div>
        </div>
        {/* <div className={poopBoxWrapper}>
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
        </div> */}
      </div>
    </>
  );
};

export default DataGraph;
