import Button from "@/app/components/common/Button";
import Popup from "@/app/components/common/Popup";
import { useLoginStore } from "@/app/store/login/loginStore";
import { colors } from "@/app/styles/colors.css";

const LoginPopup = () => {
  const { loginMessage, loginPopup, setLoginMessage, setLoginPopup } = useLoginStore();
  return (
    <>
      {loginPopup && (
        <Popup text={loginMessage}>
          <Button
            text="확인"
            background={colors.primary}
            color={colors.white}
            onClick={() => {
              setLoginPopup(false);
              setLoginMessage("");
            }}
          />
        </Popup>
      )}
    </>
  );
};

export default LoginPopup;
