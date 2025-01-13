import Button from '@/app/_components/common/button';
import { flexSprinklesFc } from '@/app/_components/common/utils/flex';
import { Step, StepChangeHandler } from '@/app/record/page';
import { colors } from '@/app/_styles/colors.css';

const ShapeButton = ({ onButtonClick }: { onButtonClick: StepChangeHandler }) => {
  return (
    <div className={flexSprinklesFc({ gap: '16px', justifyContent: 'center' })}>
      <Button
        text="이전"
        height="59px"
        borderRadius="10px"
        onClick={() => {
          onButtonClick(Step.STEP2);
        }}
      />
      <Button
        text="다음"
        width="226px"
        height="59px"
        background={colors.primary}
        color={colors.white}
        borderRadius="10px"
        onClick={() => {
          onButtonClick(Step.STEP4);
        }}
      />
    </div>
  );
};

export default ShapeButton;
