import { paddingSprinkles } from '@/app/_styles/padding.css';

const EmptyGraph = ({ dateRange }: { dateRange: number }) => {
  return (
    <>
      <p className={paddingSprinkles({ paddingTop: 's28' })}>
        {dateRange === 7 ? '일주일' : '한 달'} 동안의 배변 기록이 없습니다. 😥
      </p>
      <p>새로운 기록을 추가해보세요.</p>
    </>
  );
};

export default EmptyGraph;
