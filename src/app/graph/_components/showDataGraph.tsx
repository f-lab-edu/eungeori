import { flexSprinklesFc } from '@/app/_components/common/utils/flex';
import { paddingSprinkles } from '@/app/_styles/padding.css';
import { Line } from 'react-chartjs-2';
import { chartBg } from '../_styles/graph.css';
import { TransformedBowelData } from '../_utils';

import { useBowelData } from '../_hook/useBowelData';
import PoopInfoBox from './poopInfoBox';
import { CustomLineGraph } from '../_plugins/chart/CustomLineGraph';

type ShowDataGraphProps = {
  hasData: boolean;
  dateRange: number;
  bowelDate: TransformedBowelData[];
  isToggleActive: boolean;
};

const ShowDataGraph = ({ hasData, dateRange, bowelDate, isToggleActive }: ShowDataGraphProps) => {
  const { chartData, options, chartAreaStyles } = useBowelData(bowelDate, isToggleActive);

  return (
    <>
      {hasData ? (
        // 컴포넌트로 만들고
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
              plugins={[chartAreaStyles, CustomLineGraph(bowelDate)]}
            />
          </div>
          <PoopInfoBox bowelDate={bowelDate} />
        </div>
      ) : (
        <>
          {/* 얘도 엠티 컴포넌트라고 따로 만들어주기 */}
          <p className={paddingSprinkles({ paddingTop: 's28' })}>
            {dateRange === 7 ? '일주일' : '한 달'} 동안의 배변 기록이 없습니다. 😥
          </p>
          <p>새로운 기록을 추가해보세요.</p>
        </>
      )}
    </>
  );
};

export default ShowDataGraph;
