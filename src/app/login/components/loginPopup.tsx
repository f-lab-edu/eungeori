import Button from "@/app/components/common/Button";
import Popup from "@/app/components/common/Popup";
import { useLoginStore } from "@/app/store/login/loginStore";
import { colors } from "@/app/styles/colors.css";

const LoginPopup = () => {
  const { setLoginMessage, setIsLoginPopup } = useLoginStore();
  const loginMessageState = useLoginStore((state) => state.loginMessage);
  const isLoginPopupState = useLoginStore((state) => state.isLoginPopup);
  return (
    <>
      {isLoginPopupState && (
        <Popup text={loginMessageState}>
          <Button
            text="확인"
            background={colors.primary}
            color={colors.white}
            onClick={() => {
              setIsLoginPopup(false);
              setLoginMessage("");
            }}
          />
        </Popup>
      )}
    </>
  );
};

export default LoginPopup;
