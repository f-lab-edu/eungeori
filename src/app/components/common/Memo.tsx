import { caption2, subFontStyle } from '@/app/styles/font.css';
import Image from 'next/image';
import { gray300 } from '@/app/styles/colors.css';
import { flexSprinklesFc } from './utils/flex';
import { memoBox } from './memo.css';
import useInfoStore from '@/app/store/info/infoStore';

type MemoProps = {
  onEditClick?: () => void;
  onDeleteClick?: () => void;
  date?: string;
  text?: string;
  height?: string;
  edit?: boolean;
  isReadOnly?: boolean;
};

const Memo = ({
  onEditClick,
  onDeleteClick,
  date,
  text,
  height = '200px',
  edit = false,
  isReadOnly = false,
}: MemoProps) => {
  const setRecordNote = useInfoStore((state) => state.setRecordNote);
  return (
    <div className={memoBox} style={{ height }}>
      <Image src="/svgs/comment.svg" alt="icon" width={20} height={19} />
      <div className={flexSprinklesFc({ flexDirection: 'column', gap: '24px' })}>
        {date && <p className={subFontStyle}>{date}</p>}
        <input
          value={text ? text : ''}
          className={subFontStyle}
          onChange={(e) => !isReadOnly && setRecordNote(e.target.value)}
          readOnly={isReadOnly}
        />
      </div>

      {edit && (
        <p className={`${caption2} ${gray300}`}>
          <button onClick={onEditClick}>수정</button> <span>|</span>{' '}
          <button onClick={onDeleteClick}>삭제</button>
        </p>
      )}
    </div>
  );
};

export default Memo;
