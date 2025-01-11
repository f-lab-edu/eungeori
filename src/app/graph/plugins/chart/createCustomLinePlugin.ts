import { Chart } from 'chart.js';
import { getColor } from '../../utils/color';
import { TransformedBowelData } from '../../utils/function';

export const createCustomLinePlugin = (bowelDateData: TransformedBowelData[]) => ({
  id: 'customLine',
  beforeDatasetDraw: (chart: Chart) => {
    const ctx = chart.ctx;
    const meta = chart.getDatasetMeta(0);
    if (!meta.data || meta.data.length === 0) return;

    const points = meta.data;
    const labels = chart.data.labels;

    points.forEach((point: { x: number; y: number }, index: number) => {
      if (index < points.length - 1) {
        const nextPoint = points[index + 1];

        if (labels) {
          const currentDate = labels[index];
          const nextDate = labels[index + 1];

          const currentData = bowelDateData.find((item) => item.date === currentDate);
          const nextData = bowelDateData.find((item) => item.date === nextDate);

          const currentColor = getColor(currentData?.stoolAttributes.consistency ?? undefined);
          const nextColor = getColor(nextData?.stoolAttributes.consistency ?? undefined);

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
