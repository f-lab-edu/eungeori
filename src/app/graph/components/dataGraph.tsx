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
import { filterWrapper, toggle, toggleActive } from '../styles/graph.css';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { caption, heading2, regular, semiBold } from '@/app/styles/font.css';
import { pointer } from '@/app/styles/global.css';
import { paddingSprinkles } from '@/app/styles/padding.css';
import { supabaseClient } from '@/app/lib/supabaseClient';
import { transformBowelData, TransformedBowelData } from '../utils/function';
import ShowDataGraph from './showDataGraph';

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
  const [bowelDate, setBowelDate] = useState<TransformedBowelData[]>([]);
  const [isToggleActive, setIsToggleActive] = useState(true);
  const [hasData, setHasData] = useState(false);

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
      <ShowDataGraph
        hasData={hasData}
        dateRange={dateRange}
        bowelDate={bowelDate}
        isToggleActive={isToggleActive}
      />
    </>
  );
};

export default DataGraph;
