import Button from '@/app/_components/common/button';
import { flexSprinklesFc } from '@/app/_components/common/utils/flex';
import { Step, StepChangeHandler } from '@/app/record/page';
import useInfoStore from '@/app/_store/info/infoStore';

import { colors } from '@/app/_styles/colors.css';

const TimeButton = ({ onButtonClick }: { onButtonClick: StepChangeHandler }) => {
  const bowelTime = useInfoStore((state) => state.bowelTime);

  const onNext = () => {
    if (bowelTime.hour === 0 && bowelTime.minute === 0) {
      alert('시간을 선택하세요');
      return;
    }
    onButtonClick(Step.STEP3);
  };

  return (
    <div className={flexSprinklesFc({ gap: '16px', justifyContent: 'center' })}>
      <Button
        text="이전"
        height="59px"
        borderRadius="10px"
        onClick={() => {
          onButtonClick(Step.STEP1);
        }}
      />
      <Button
        text="다음"
        width="226px"
        height="59px"
        background={colors.primary}
        color={colors.white}
        borderRadius="10px"
        onClick={onNext}
      />
    </div>
  );
};

export default TimeButton;
