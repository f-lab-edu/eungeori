import Button from '@/app/components/common/Button';
import Popup from '@/app/components/common/Popup';
import { usePopupStore } from '@/app/store/popup/PopupStore';
import { colors } from '@/app/styles/colors.css';

const LoginPopup = () => {
  const { setOpenPopup, setMessage } = usePopupStore();
  const isLoginPopupState = usePopupStore((state) => state.openPopup);
  return (
    <>
      {isLoginPopupState && (
        <Popup>
          <Button
            text="확인"
            background={colors.primary}
            color={colors.white}
            onClick={() => {
              setOpenPopup(false);
              setMessage('');
            }}
          />
        </Popup>
      )}
    </>
  );
};

export default LoginPopup;
