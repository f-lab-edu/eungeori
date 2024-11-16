import { flexSprinklesFc } from "@/app/components/common/utils/flex";
import { gray300 } from "@/app/styles/colors.css";
import { semiBold, heading2, caption } from "@/app/styles/font.css";

const TitleText = () => {
  return (
    <div className={`${flexSprinklesFc({ flexDirection: "column", gap: "16px" })} `}>
      <h3 className={`${semiBold} ${heading2}`}>
        기록 할
        <br />
        내용이 있나요?
      </h3>
      <p className={`${gray300} ${caption}`}>(선택) 기록하고 싶은 내용이 있다면 적어보세요</p>
    </div>
  );
};

export default TitleText;
