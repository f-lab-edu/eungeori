import { supabase } from "@/app/lib/supabaseClient";
import { usePopupStore } from "@/app/store/popup/PopupStore";
import { signupSchema } from "@/app/types/signupSchema";
import { z } from "zod";

const checkEmailExists = async (email: string) => {
  const { data, error } = await supabase.rpc("check_email_exists", { email_input: email });

  if (error) {
    console.error("RPC 호출 오류:", error.message);
    return false;
  }

  return data; // boolean
};

const checkNicknameExists = async (nickname: string) => {
  const { data, error } = await supabase.rpc("check_nickname_exists", { nickname });

  if (error) {
    console.error("RPC 호출 오류:", error.message);
    return false;
  }

  return data; // boolean
};

export const useSignup = () => {
  const setIsPopupState = usePopupStore((state) => state.setIsPopup);
  const setMessageState = usePopupStore((state) => state.setMessage);

  const onSignupSubmit = async (data: z.infer<typeof signupSchema>) => {
    try {
      const isNicknameExists = await checkNicknameExists(data.nickname);
      const isEmailExists = await checkEmailExists(data.email);

      if (isEmailExists) {
        setIsPopupState(true);
        setMessageState("이미 가입된 이메일입니다.");
        return;
      }

      if (isNicknameExists) {
        setIsPopupState(true);
        setMessageState("이미 존재하는 닉네임입니다.");
        return;
      }

      const { data: userData, error } = await supabase.auth.signUp({
        email: data.email,
        password: data.password,
        options: {
          data: {
            nickname: data.nickname,
          },
        },
      });

      if (error) {
        setIsPopupState(true);
        setMessageState(`회원가입 실패: ${error.message}`);
        return;
      }

      setIsPopupState(true);
      setMessageState("회원가입이 완료됐습니다.");
    } catch (e) {
      setIsPopupState(true);
      setMessageState("알 수 없는 오류가 발생했습니다.");
    }
  };

  return { onSignupSubmit };
};
