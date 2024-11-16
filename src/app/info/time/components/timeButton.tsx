import Button from "@/app/components/common/Button";
import { flexSprinklesFc } from "@/app/components/common/utils/flex";
import useInfoStore from "@/app/store/info/infoStore";

import { colors } from "@/app/styles/colors.css";
import { useRouter } from "next/navigation";

const TimeButton = () => {
  const router = useRouter();
  const bowelTime = useInfoStore((state) => state.bowelTime);

  const onNext = () => {
    if (bowelTime.hour === 0 && bowelTime.minute === 0) {
      alert("시간을 선택하세요");
      return;
    }
    router.push("/info/shape");
  };

  return (
    <div className={flexSprinklesFc({ gap: "16px", justifyContent: "center" })}>
      <Button
        text="이전"
        height="59px"
        borderRadius="10px"
        onClick={() => {
          router.push("/record");
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
