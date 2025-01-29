import Button from '@/app/_components/common/button';
import Popup from '@/app/_components/common/popup';
import { usePopupStore } from '@/app/_store/popup/popupStore';
import { colors } from '@/app/_styles/colors.css';
import { useRouter } from 'next/navigation';

const messageRoute: Record<string, string | null> = {
  '이미 존재하는 회원입니다.': null,
  '이미 존재하는 닉네임입니다.': null,
  '이메일 인증 후 로그인 해주세요.': '/',
};

const SignupPopup = () => {
  const router = useRouter();
  const signupMessageState = usePopupStore((state) => state.message);
  const signupPopupState = usePopupStore((state) => state.openPopup);
  const setSignupPopupState = usePopupStore((state) => state.setOpenPopup);

  const onClick = () => {
    const route = signupMessageState ? messageRoute[signupMessageState] : null;

    if (route) {
      setSignupPopupState(false);
      router.push(route);
    } else {
      setSignupPopupState(false);
    }
  };
  return (
    <div>
      {signupPopupState && (
        <Popup>
          <Button
            width="115px"
            text="확인"
            onClick={onClick}
            color={colors.white}
            background={colors.primary}
          />
        </Popup>
      )}
    </div>
  );
};

export default SignupPopup;
