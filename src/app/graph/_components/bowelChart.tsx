import { flexSprinklesFc } from '@/app/_components/common/utils/flex';
import { chartBg } from '../_styles/graph.css';
import { TransformedBowelData } from '../_utils';
import { Line } from 'react-chartjs-2';

import BowelDetails from './bowelDetails';
import { CustomLineGraph } from '../_plugins/chart/customLineGraph';
import { getBowelData } from '../_utils/getBowelData';

type BowelChartProps = {
  bowelDate: TransformedBowelData[];
  isToggleActive: boolean;
};

const BowelChart = ({ bowelDate, isToggleActive }: BowelChartProps) => {
  const { chartData, options, chartAreaStyles } = getBowelData(bowelDate, isToggleActive);

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
      <BowelDetails bowelDate={bowelDate} />
    </div>
  );
};

export default BowelChart;
