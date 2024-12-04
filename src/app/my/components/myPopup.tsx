import Button from '@/app/components/common/Button';
import Popup from '@/app/components/common/Popup';
import { flexSprinklesFc } from '@/app/components/common/utils/flex';
import { usePopupStore } from '@/app/store/popup/PopupStore';
import { colors } from '@/app/styles/colors.css';

const MyPopup = () => {
  const isPopupState = usePopupStore((state) => state.isPopup);
  const messageState = usePopupStore((state) => state.message);
  const setIsPopupState = usePopupStore((state) => state.setIsPopup);
  const setMessageState = usePopupStore((state) => state.setMessage);
  return (
    <>
      {isPopupState &&
        (messageState === '유효하지 않은 입력값입니다.' ||
        messageState === '알 수 없는 오류가 발생했습니다.' ||
        messageState === '저장 되었습니다.' ? (
          <Popup text={messageState}>
            <div className={flexSprinklesFc({ gap: '4px' })}>
              <Button
                text="확인"
                onClick={() => {
                  // setDeleted(true);
                  setIsPopupState(false);
                  setMessageState('');
                }}
              />
            </div>
          </Popup>
        ) : (
          <Popup text={messageState}>
            <div className={flexSprinklesFc({ gap: '4px' })}>
              <Button
                text="취소"
                background={colors.primary}
                color={colors.white}
                onClick={() => {
                  setIsPopupState(false);
                  setMessageState('');
                }}
              />
              <Button
                text="확인"
                onClick={() => {
                  // setDeleted(true);
                  setIsPopupState(false);
                  setMessageState('');
                }}
              />
            </div>
          </Popup>
        ))}
    </>
  );
};

export default MyPopup;
