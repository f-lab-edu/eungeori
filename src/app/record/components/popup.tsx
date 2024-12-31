import Button from '@/app/components/common/Button';
import Popup from '@/app/components/common/Popup';
import { flexSprinklesFc } from '@/app/components/common/utils/flex';
import { colors } from '@/app/styles/colors.css';
import { pointer } from '@/app/styles/global.css';

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
