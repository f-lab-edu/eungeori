import { usePopupStore } from "@/app/store/popup/PopupStore";
import { LocalStorage } from "@/app/types/localStorageSchema";
import { signinSchema } from "@/app/types/signinSchema";
import { useRouter } from "next/navigation";
import { z } from "zod";

export const useAuth = () => {
  const router = useRouter();

  const { setIsPopup, setMessage } = usePopupStore();

  const onLoginSubmit = (data: z.infer<typeof signinSchema>) => {
    if (!data) {
      setMessage("가입된 정보를 확인해주세요.");
      setIsPopup(true);
      return;
    }

    const signupStorage = new LocalStorage("signup");
    const signinStorage = new LocalStorage("signin");

    const getAuthInfo = signupStorage.get();

    if (!getAuthInfo) {
      setMessage("회원가입을 진행해주세요.");
      setIsPopup(true);
      return;
    }

    if (getAuthInfo.id !== data.id || getAuthInfo.password !== data.password) {
      setMessage("아이디, 비밀번호를 확인해주세요.");
      setIsPopup(true);
      return;
    }

    signinStorage.set(data);
    router.push("/record");
  };

  return { onLoginSubmit };
};
