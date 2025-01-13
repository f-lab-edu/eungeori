import Button from '@/app/_components/common/button';
import Popup from '@/app/_components/common/popup';
import { flexSprinklesFc } from '@/app/_components/common/utils/flex';
import { colors } from '@/app/_styles/colors.css';
import { pointer } from '@/app/_styles/global.css';

type RecordPopupProps = {
  message: string;
  onClose: () => void;
  onConfirm: () => void;
};

const RecordPopup = ({ message, onClose, onConfirm }: RecordPopupProps) => {
  return (
    <>
      <Popup>
        <div className={`${flexSprinklesFc({ gap: '16px' })} ${pointer}`}>
          {message === '내용을 삭제하시겠습니까?' ? (
            <>
              <Button
                text="취소"
                onClick={onClose}
                background={colors.primary}
                color={colors.white}
              />
              <Button text="삭제" onClick={onConfirm} />
            </>
          ) : (
            <Button
              text="확인"
              onClick={onClose}
              background={colors.primary}
              color={colors.white}
            />
          )}
        </div>
      </Popup>
    </>
  );
};

export default RecordPopup;
