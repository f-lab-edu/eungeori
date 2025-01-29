import Button from '@/app/_components/common/button';
import Popup from '@/app/_components/common/popup';
import { usePopupStore } from '@/app/_store/popup/popupStore';
import { colors } from '@/app/_styles/colors.css';

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
