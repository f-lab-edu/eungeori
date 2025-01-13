import { flexSprinklesFc } from '@/app/_components/common/utils/flex';
import { Line } from 'react-chartjs-2';
import { CustomLineGraph } from '../_plugins/chart/CustomLineGraph';
import { chartBg } from '../_styles/graph.css';
import PoopInfoBox from './PoopInfoBox';
import { useBowelData } from '../_hook/useBowelData';
import { TransformedBowelData } from '../_utils';

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
