import { flexSprinklesFc } from '@/app/_components/common/utils/flex';
import { chartBg } from '../_styles/graph.css';
import { useBowelData } from '../_hook/useBowelData';
import { TransformedBowelData } from '../_utils';
import { Line } from 'react-chartjs-2';

import PoopInfoBox from './poopInfoBox';
import { CustomLineGraph } from '../_plugins/chart/customLineGraph';

type BowelChartContainerProps = {
  bowelDate: TransformedBowelData[];
  isToggleActive: boolean;
};

const BowelChartContainer = ({ bowelDate, isToggleActive }: BowelChartContainerProps) => {
  const { chartData, options, chartAreaStyles } = useBowelData(bowelDate, isToggleActive);

  return (
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
  );
};

export default BowelChartContainer;
