import Button from "@/app/components/common/Button";
import { flexSprinklesFc } from "@/app/components/common/utils/flex";
import { StepChangeHandler } from "@/app/record/page";
import { colors } from "@/app/styles/colors.css";

const ShapeButton = ({ onButtonClick }: { onButtonClick: StepChangeHandler }) => {
  return (
    <div className={flexSprinklesFc({ gap: "16px", justifyContent: "center" })}>
      <Button
        text="이전"
        height="59px"
        borderRadius="10px"
        onClick={() => {
          onButtonClick(1);
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
          onButtonClick(3);
        }}
      />
    </div>
  );
};

export default ShapeButton;
