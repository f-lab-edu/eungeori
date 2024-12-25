import { formatDate } from '@/app/common/utils/date';

type BowelDateCount = Record<string, number>;

export const bowelInfoDate30Days = [
  {
    bowelTime: {
      hour: 5,
      minute: 20,
    },
    stoolAttributes: { consistency: 'default', shapeType: 'poop-1' },
    date: '24.09.01',
  },
  {
    bowelTime: {
      hour: 5,
      minute: 20,
    },
    stoolAttributes: { consistency: 'default', shapeType: 'poop-2' },
    date: '24.09.02',
  },
  {
    bowelTime: {
      hour: 5,
      minute: 20,
    },
    stoolAttributes: { consistency: 'hard', shapeType: 'poop-6' },
    date: '24.09.03',
  },
  {
    bowelTime: {
      hour: 5,
      minute: 20,
    },
    stoolAttributes: { consistency: 'hard', shapeType: 'poop-1' },
    date: '24.09.04',
  },
  {
    bowelTime: {
      hour: 5,
      minute: 20,
    },
    stoolAttributes: { consistency: 'hard', shapeType: 'poop-1' },
    date: '24.09.05',
  },
  {
    bowelTime: {
      hour: 5,
      minute: 20,
    },
    stoolAttributes: { consistency: 'thin', shapeType: 'poop-1' },
    date: '24.09.06',
  },
  {
    bowelTime: {
      hour: 5,
      minute: 20,
    },
    stoolAttributes: { consistency: 'thin', shapeType: 'poop-1' },
    date: '24.09.07',
  },
  {
    bowelTime: {
      hour: 5,
      minute: 20,
    },
    stoolAttributes: { consistency: 'hard', shapeType: 'poop-1' },
    date: '24.09.08',
  },
  {
    bowelTime: {
      hour: 5,
      minute: 20,
    },
    stoolAttributes: { consistency: 'hard', shapeType: 'poop-1' },
    date: '24.09.09',
  },
  {
    bowelTime: {
      hour: 19,
      minute: 20,
    },
    stoolAttributes: { consistency: 'thin', shapeType: 'poop-1' },
    date: '24.09.09',
  },
  {
    bowelTime: {
      hour: 13,
      minute: 20,
    },
    stoolAttributes: { consistency: 'default', shapeType: 'poop-1' },
    date: '24.09.10',
  },
  {
    bowelTime: {
      hour: 16,
      minute: 10,
    },
    stoolAttributes: { consistency: 'hard', shapeType: 'poop-4' },
    date: '24.09.10',
  },
  {
    bowelTime: {
      hour: 20,
      minute: 10,
    },
    stoolAttributes: { consistency: 'hard', shapeType: 'poop-2' },
    date: '24.09.10',
  },
  {
    bowelTime: {
      hour: 16,
      minute: 20,
    },
    stoolAttributes: { consistency: 'default', shapeType: 'poop-1' },
    date: '24.09.13',
  },
  {
    bowelTime: {
      hour: 3,
      minute: 20,
    },
    stoolAttributes: { consistency: 'default', shapeType: 'poop-1' },
    date: '24.09.20',
  },
  {
    bowelTime: {
      hour: 3,
      minute: 20,
    },
    stoolAttributes: { consistency: 'default', shapeType: 'poop-1' },
    date: '24.09.23',
  },
  {
    bowelTime: {
      hour: 3,
      minute: 20,
    },
    stoolAttributes: { consistency: 'default', shapeType: 'poop-1' },
    date: '24.09.23',
  },
  {
    bowelTime: {
      hour: 3,
      minute: 20,
    },
    stoolAttributes: { consistency: 'default', shapeType: 'poop-1' },
    date: '24.09.23',
  },
  {
    bowelTime: {
      hour: 3,
      minute: 20,
    },
    stoolAttributes: { consistency: 'default', shapeType: 'poop-1' },
    date: '24.09.23',
  },
  {
    bowelTime: {
      hour: 3,
      minute: 20,
    },
    stoolAttributes: { consistency: 'default', shapeType: 'poop-1' },
    date: '24.09.23',
  },
  {
    bowelTime: {
      hour: 3,
      minute: 20,
    },
    stoolAttributes: { consistency: 'default', shapeType: 'poop-1' },
    date: '24.09.24',
  },
  {
    bowelTime: {
      hour: 3,
      minute: 20,
    },
    stoolAttributes: { consistency: 'default', shapeType: 'poop-1' },
    date: '24.09.25',
  },
];

export const bowelInfoDate7Days = [
  {
    bowelTime: {
      hour: 5,
      minute: 20,
    },
    stoolAttributes: { consistency: 'thin', shapeType: 'poop-1' },
    date: '24.09.09',
  },
  {
    bowelTime: {
      hour: 19,
      minute: 20,
    },
    stoolAttributes: { consistency: 'thin', shapeType: 'poop-1' },
    date: '24.09.09',
  },
  {
    bowelTime: {
      hour: 13,
      minute: 20,
    },
    stoolAttributes: { consistency: 'default', shapeType: 'poop-1' },
    date: '24.09.10',
  },
  {
    bowelTime: {
      hour: 13,
      minute: 20,
    },
    stoolAttributes: { consistency: 'default', shapeType: 'poop-1' },
    date: '24.09.10',
  },
  {
    bowelTime: {
      hour: 13,
      minute: 20,
    },
    stoolAttributes: { consistency: 'default', shapeType: 'poop-1' },
    date: '24.09.10',
  },
  {
    bowelTime: {
      hour: 13,
      minute: 20,
    },
    stoolAttributes: { consistency: 'default', shapeType: 'poop-1' },
    date: '24.09.10',
  },
  {
    bowelTime: {
      hour: 13,
      minute: 20,
    },
    stoolAttributes: { consistency: 'default', shapeType: 'poop-1' },
    date: '24.09.10',
  },
  {
    bowelTime: {
      hour: 16,
      minute: 10,
    },
    stoolAttributes: { consistency: 'hard', shapeType: 'poop-4' },
    date: '24.09.10',
  },
  {
    bowelTime: {
      hour: 20,
      minute: 10,
    },
    stoolAttributes: { consistency: 'hard', shapeType: 'poop-2' },
    date: '24.09.10',
  },
  {
    bowelTime: {
      hour: 16,
      minute: 20,
    },
    stoolAttributes: { consistency: 'default', shapeType: 'poop-1' },
    date: '24.09.13',
  },
  {
    bowelTime: {
      hour: 3,
      minute: 20,
    },
    stoolAttributes: { consistency: 'default', shapeType: 'poop-1' },
    date: '24.09.20',
  },
];

export const bowelDateCount = (data) => {
  return data.reduce((acc: BowelDateCount, cur) => {
    const date = cur.date;
    acc[date] = (acc[date] || 0) + 1;
    return acc;
  }, {});
};

export const consistency = (data) => {
  return data.map((x) => x.stoolAttributes?.consistency);
};

export const bowelShapeType = (data) => {
  return data.map((x) => x.stoolAttributes.shapeType);
};

export const transformBowelData = (data) => {
  const sortedData = data.sort((a, b) => {
    return new Date(a.bowel_time) - new Date(b.bowel_time);
  });

  return sortedData.map((item) => {
    const date = new Date(item.bowel_time);

    return {
      bowelTime: {
        hour: date.getHours(),
        minute: date.getMinutes(),
      },
      stoolAttributes: {
        consistency: item.stool_attributes.consistency,
        shapeType: item.stool_attributes.shapeType,
      },
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
