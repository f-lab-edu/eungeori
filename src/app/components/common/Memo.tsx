import { caption2, subFontStyle } from "@/app/styles/font.css";
import Image from "next/image";
import { gray300 } from "@/app/styles/colors.css";
import { pointer } from "@/app/styles/global.css";
import { memoBox } from "@/app/styles/common/memo.css";
import { flexSprinklesFc } from "./utils/flex";

type MemoPorps = {
  onClick?: () => void;
  date?: string;
  text?: string;
  height?: string;
  edit?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Memo = ({ onClick, date, text, height = "200px", edit = false, onChange }: MemoPorps) => {
  return (
    <div className={memoBox} style={{ height }}>
      <Image src="/svgs/comment.svg" alt="icon" width={20} height={19} />
      <div className={flexSprinklesFc({ flexDirection: "column", gap: "24px" })}>
        {date && <p className={subFontStyle}>{date}</p>}
        <input className={subFontStyle} onChange={onChange}>
          {text}
        </input>
      </div>

      {edit && (
        <p className={`${caption2} ${gray300}`}>
          <span className={pointer}>수정</span> <span>|</span>{" "}
          <span className={pointer} onClick={onClick}>
            삭제
          </span>
        </p>
      )}
    </div>
  );
};

export default Memo;
