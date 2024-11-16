import { caption2, subFontStyle } from "@/app/styles/font.css";
import Image from "next/image";
import { gray300 } from "@/app/styles/colors.css";
import { pointer } from "@/app/styles/global.css";
import { flexSprinklesFc } from "./utils/flex";
import { memoBox } from "./memo.css";

type MemoPorps = {
  onEditClick?: () => void;
  onDeleteClick?: () => void;
  date: string;
  text: string;
  height?: string;
  edit?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Memo = ({
  onEditClick,
  onDeleteClick,
  date,
  text,
  height = "200px",
  edit = false,
  onChange,
}: MemoPorps) => {
  return (
    <div className={memoBox} style={{ height }}>
      <Image src="/svgs/comment.svg" alt="icon" width={20} height={19} />
      <div className={flexSprinklesFc({ flexDirection: "column", gap: "24px" })}>
        {date && <p className={subFontStyle}>{date}</p>}
        <input value={text} className={subFontStyle} onChange={onChange} readOnly={!onChange} />
      </div>

      {edit && (
        <p className={`${caption2} ${gray300}`}>
          <span className={pointer} onClick={onEditClick}>
            수정
          </span>{" "}
          <span>|</span>{" "}
          <span className={pointer} onClick={onDeleteClick}>
            삭제
          </span>
        </p>
      )}
    </div>
  );
};

export default Memo;
