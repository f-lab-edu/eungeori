import { useLoginUiStore } from "@/app/store/login/loginStore";
import { LocalStorage } from "@/app/types/localStorageSchema";
import { signinSchema } from "@/app/types/signinSchema";
import { useRouter } from "next/navigation";
import { z } from "zod";

export const useAuth = () => {
  const router = useRouter();

  const { setLoginMessage, setIsLoginPopup } = useLoginUiStore();

  const onLoginSubmit = (data: z.infer<typeof signinSchema>) => {
    if (!data) {
      setLoginMessage("가입된 정보를 확인해주세요.");
      setIsLoginPopup(true);
      return;
    }

    const signupStorage = new LocalStorage("signup");
    const signinStorage = new LocalStorage("signin");

    const getAuthInfo = signupStorage.get();

    if (!getAuthInfo) {
      setLoginMessage("회원가입을 진행해주세요.");
      setIsLoginPopup(true);
      return;
    }

    if (getAuthInfo.id !== data.id || getAuthInfo.password !== data.password) {
      setLoginMessage("아이디, 비밀번호를 확인해주세요.");
      setIsLoginPopup(true);
      return;
    }

    signinStorage.set(data);
    router.push("/record");
  };

  return { onLoginSubmit };
};
