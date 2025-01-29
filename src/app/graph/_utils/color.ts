export type ConsistencyType = 'thin' | 'default' | 'hard';

export const getColor = (type: ConsistencyType | undefined): string => {
  switch (type) {
    case 'thin':
      return '#FEE88B';
    case 'default':
      return '#4FE786';
    case 'hard':
      return '#FC5064';
    default:
      return '#D9D9D9';
  }
};
