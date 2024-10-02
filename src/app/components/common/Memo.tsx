import { caption2, subFontStyle } from "@/app/styles/font.css";
import { memoBox } from "@/app/styles/memo.css";
import Image from "next/image";
import { flexSprinklesFc } from "./utils/flex";
import { gray300 } from "@/app/styles/colors.css";
import { pointer } from "@/app/styles/global.css";

type MemoPorps = {
  date: string;
  text: string;
};

const Memo = ({ date, text }: MemoPorps) => {
  return (
    <div className={memoBox}>
      <Image src="/svgs/comment.svg" alt="icon" width={20} height={19} />
      <div
        className={flexSprinklesFc({ flexDirection: "column", gap: "24px" })}
      >
        <p className={subFontStyle}>24.09.09(화)</p>
        <p className={subFontStyle}>
          오늘은 조금 힘들었다. 물을 더 많이 마셔야겠다 😥 오늘은 조금 힘들었다.
          물을 더 많이 마셔야겠다 😥 오늘은 조금 힘들었다. 물을 더 많이
          마셔야겠다 😥
        </p>
      </div>
      <p className={`${caption2} ${gray300}`}>
        <span className={pointer}>수정</span> <span>|</span>{" "}
        <span className={pointer}>삭제</span>
      </p>
    </div>
  );
};

export default Memo;
