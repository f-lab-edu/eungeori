import { StoolAttributes } from '@/app/_store/info/infoStore';
import { BowelAttributes } from '@/app/_types/bowelAttributesSchema';

export type TransformedBowelData = {
  date: string;
  bowelTime: {
    hour: number;
    minute: number;
  };
  stoolAttributes: StoolAttributes;
};

type BowelDateCountMap = {
  [date: string]: number;
};

export const bowelDateCount = (data: TransformedBowelData[]): BowelDateCountMap => {
  return data.reduce((acc: BowelDateCountMap, cur) => {
    const date = cur.date;
    acc[date] = (acc[date] || 0) + 1;
    return acc;
  }, {});
};

export const transformBowelData = (data: BowelAttributes[]): TransformedBowelData[] => {
  const sortedData = data.sort((a, b) => {
    return new Date(a.bowel_time).getTime() - new Date(b.bowel_time).getTime();
  });

  return sortedData.map((item) => {
    const date = new Date(item.bowel_time);

    return {
      bowelTime: {
        hour: date.getHours(),
        minute: date.getMinutes(),
      },
      stoolAttributes: item.stool_attributes,
      date: date
        .toLocaleDateString('ko', {
          year: '2-digit',
          month: '2-digit',
          day: '2-digit',
          weekday: 'short',
        })
        .replace(/\./g, '')
        .split(' ')
        .join('.'),
    };
  });
};

export const consistency = (data: TransformedBowelData[]): StoolAttributes['consistency'][] => {
  return data.map((x) => x.stoolAttributes?.consistency);
};

export const bowelShapeType = (data: TransformedBowelData[]): string[] => {
  return data.map((x) => x.stoolAttributes.shapeType);
};

export const consistencyCount = (
  consistencyFn: (data: TransformedBowelData[]) => StoolAttributes['consistency'][],
  type: StoolAttributes['consistency'],
  bowelDate: TransformedBowelData[],
): StoolAttributes['consistency'][] => {
  return consistencyFn(bowelDate).filter((consistency) => consistency === type);
};
