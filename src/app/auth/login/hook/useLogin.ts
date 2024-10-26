import { usePopupStore } from "@/app/store/popup/PopupStore";
import { LocalStorage } from "@/app/types/localStorageSchema";
import { signinSchema } from "@/app/types/signinSchema";
import { useRouter } from "next/navigation";
import { z } from "zod";

export const useLogin = () => {
  const router = useRouter();

  const setIsPopupState = usePopupStore((state) => state.setIsPopup);
  const setMessageState = usePopupStore((state) => state.setMessage);

  const onLoginSubmit = (data: z.infer<typeof signinSchema>) => {
    if (!data) {
      setMessageState("가입된 정보를 확인해주세요.");
      setIsPopupState(true);
      return;
    }

    const signupStorage = new LocalStorage("signup");
    const signinStorage = new LocalStorage("signin");

    const getAuthInfo = signupStorage.get();

    if (!getAuthInfo) {
      setMessageState("회원가입을 진행해주세요.");
      setIsPopupState(true);
      return;
    }

    if (getAuthInfo.id !== data.id || getAuthInfo.password !== data.password) {
      setMessageState("아이디, 비밀번호를 확인해주세요.");
      setIsPopupState(true);
      return;
    }

    signinStorage.set(data);
    router.push("/record");
  };

  return { onLoginSubmit };
};
