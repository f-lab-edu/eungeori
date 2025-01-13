import Button from '@/app/_components/common/Button';
import Popup from '@/app/_components/common/Popup';
import { flexSprinklesFc } from '@/app/_components/common/utils/flex';
import { usePopupStore } from '@/app/_store/popup/PopupStore';
import { colors } from '@/app/_styles/colors.css';
const MyPopup = () => {
  const openPopup = usePopupStore((state) => state.openPopup);
  const setOpenPopup = usePopupStore((state) => state.setOpenPopup);

  const setMessageState = usePopupStore((state) => state.setMessage);
  return (
    <>
      {openPopup && (
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
      )}
    </>
  );
};

export default MyPopup;
