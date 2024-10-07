import { flexSprinklesFc } from "@/app/components/common/utils/flex";
import { gray300 } from "@/app/styles/colors.css";
import { caption, heading2, semiBold } from "@/app/styles/font.css";

const page = () => (
  <article>
    <div className={`${flexSprinklesFc({ flexDirection: "column", gap: "16px" })} `}>
      <h3 className={`${semiBold} ${heading2}`}>
        몇 시에
        <br />
        다녀오셨나요?
      </h3>
      <p className={`${gray300} ${caption}`}>배변을 시작한 시간부터 적어주면 좋아요</p>
    </div>
    <div>08:00 오전</div>
  </article>
);

export default page;
