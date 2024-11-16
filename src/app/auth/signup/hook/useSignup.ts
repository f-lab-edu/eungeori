import { usePopupStore } from "@/app/store/popup/PopupStore";
import { LocalStorage } from "@/app/types/localStorageSchema";
import { signupSchema } from "@/app/types/signupSchema";
import { z } from "zod";

export const useSignup = () => {
  const setIsPopupState = usePopupStore((state) => state.setIsPopup);
  const setMessageState = usePopupStore((state) => state.setMessage);

  const onSignupSubmit = (data: z.infer<typeof signupSchema>) => {
    const signupStorage = new LocalStorage("signup");

    if (data.id === signupStorage.get()?.id) {
      setIsPopupState(true);
      setMessageState("이미 존재하는 회원입니다.");
      return;
    }

    if (data.nickname === signupStorage.get()?.nickname) {
      setIsPopupState(true);
      setMessageState("이미 존재하는 닉네임입니다.");
      return;
    }

    if (data) {
      setIsPopupState(true);
      setMessageState("회원가입이 완료됐습니다.");
      signupStorage.set(data);
    }
  };

  return { onSignupSubmit };
};
