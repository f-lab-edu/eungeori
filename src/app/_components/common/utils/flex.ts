import { flexSprinkles } from '@/app/_styles/flex.css';

export const flexSprinklesFc = (config: Parameters<typeof flexSprinkles>[0]) => {
  return flexSprinkles({
    display: 'flex', // 기본적으로 display: flex 추가
    ...config, // 사용자가 전달한 설정을 덮어쓰기
  });
};
