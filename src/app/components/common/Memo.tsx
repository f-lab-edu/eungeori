import { caption2, subFontStyle } from "@/app/styles/font.css";
import Image from "next/image";
import { gray300 } from "@/app/styles/colors.css";
import { pointer } from "@/app/styles/global.css";
import { memoBox } from "@/app/styles/common/memo.css";
import { flexSprinklesFc } from "./utils/flex";
import { CSSProperties } from "@vanilla-extract/css";

type MemoPorps = {
  onClick?: () => void;
  date: string;
  text: string;
  height: CSSProperties["height"];
};

const Memo = ({ onClick, date, text, height }: MemoPorps) => {
  return (
    <div className={memoBox}>
      <Image src="/svgs/comment.svg" alt="icon" width={20} height={19} />
      <div className={flexSprinklesFc({ flexDirection: "column", gap: "24px" })}>
        <p className={subFontStyle}>24.09.09(화)</p>
        <p className={subFontStyle}>
          오늘은 조금 힘들었다. 물을 더 많이 마셔야겠다 😥 오늘은 조금 힘들었다. 물을 더 많이 마셔야겠다 😥
          오늘은 조금 힘들었다. 물을 더 많이 마셔야겠다 😥
        </p>
      </div>
      <p className={`${caption2} ${gray300}`}>
        <span className={pointer}>수정</span> <span>|</span>{" "}
        <span className={pointer} onClick={onClick}>
          삭제
        </span>
      </p>
    </div>
  );
};

export default Memo;
