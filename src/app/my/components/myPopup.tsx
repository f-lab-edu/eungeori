import Button from '@/app/components/common/Button';
import Popup from '@/app/components/common/Popup';
import { flexSprinklesFc } from '@/app/components/common/utils/flex';
import { usePopupStore } from '@/app/store/popup/PopupStore';
import { colors } from '@/app/styles/colors.css';

const MyPopup = () => {
  const isPopupState = usePopupStore((state) => state.openPopup);
  const messageState = usePopupStore((state) => state.message);
  const setOpenPopup = usePopupStore((state) => state.setIsPopup);
  const setMessageState = usePopupStore((state) => state.setMessage);
  return (
    <>
      {isPopupState &&
        (messageState === '유효하지 않은 입력값입니다.' ||
        messageState === '알 수 없는 오류가 발생했습니다.' ||
        messageState === '저장 되었습니다.' ? (
          <Popup>
            <div className={flexSprinklesFc({ gap: '4px' })}>
              <Button
                background={colors.primary}
                color={colors.white}
                text="확인"
                onClick={() => {
                  setOpenPopup(false);
                  setMessageState('');
                }}
              />
            </div>
          </Popup>
        ) : (
          <Popup>
            <div className={flexSprinklesFc({ gap: '4px' })}>
              <Button
                text="취소"
                background={colors.primary}
                color={colors.white}
                onClick={() => {
                  setOpenPopup(false);
                  setMessageState('');
                }}
              />
              <Button
                text="확인"
                onClick={() => {
                  setOpenPopup(false);
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
