import { flexSprinklesFc } from '@/app/components/common/utils/flex';
import { paddingSprinkles } from '@/app/styles/padding.css';
import { Line } from 'react-chartjs-2';
import { chartBg } from '../styles/graph.css';
import { TransformedBowelData } from '../utils/function';
import { createCustomLinePlugin } from '../plugins/chart/createCustomLinePlugin';
import { useBowelData } from '../hook/useBowelData';
import PoopInfoBox from './poopInfoBox';

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
          <PoopInfoBox bowelDate={bowelDate} />
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

export default ShowDataGraph;
