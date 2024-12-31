import Button from '@/app/components/common/Button';
import Popup from '@/app/components/common/Popup';
import { flexSprinklesFc } from '@/app/components/common/utils/flex';
import { usePopupStore } from '@/app/store/popup/PopupStore';
import { colors } from '@/app/styles/colors.css';

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
