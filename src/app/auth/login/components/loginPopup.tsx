import Button from '@/app/components/common/Button';
import Popup from '@/app/components/common/Popup';
import { usePopupStore } from '@/app/store/popup/PopupStore';
import { colors } from '@/app/styles/colors.css';

const LoginPopup = () => {
  const { setIsPopup, setMessage } = usePopupStore();
  const loginMessageState = usePopupStore((state) => state.message);
  const isLoginPopupState = usePopupStore((state) => state.isPopup);
  return (
    <>
      {isLoginPopupState && (
        <Popup text={loginMessageState}>
          <Button
            text="확인"
            background={colors.primary}
            color={colors.white}
            onClick={() => {
              setIsPopup(false);
              setMessage('');
            }}
          />
        </Popup>
      )}
    </>
  );
};

export default LoginPopup;
