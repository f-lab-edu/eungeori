import { sprinkles } from "@styles/flex.css";

export const flexSprinkles = (config: Parameters<typeof sprinkles>[0]) => {
  return sprinkles({
    display: "flex", // 기본적으로 display: flex 추가
    ...config, // 사용자가 전달한 설정을 덮어쓰기
  });
};
