import { supabase } from "@/app/lib/supabaseClient";
import { usePopupStore } from "@/app/store/popup/PopupStore";
import { signupSchema } from "@/app/types/signupSchema";
import { z } from "zod";

export const useSignup = () => {
  const setIsPopupState = usePopupStore((state) => state.setIsPopup);
  const setMessageState = usePopupStore((state) => state.setMessage);

  const onSignupSubmit = async (data: z.infer<typeof signupSchema>) => {
    try {
      const { data: existingUser } = await supabase
        .from("signup")
        .select("username")
        .eq("username", data.id)
        .single();

      const { data: exsitingNickname } = await supabase
        .from("signup")
        .select("nickname")
        .eq("nickname", data.nickname)
        .single();

      const { error } = await supabase.from("signup").insert({
        username: data.id,
        password: data.password,
        nickname: data.nickname,
      });

      if (existingUser) {
        setIsPopupState(true);
        setMessageState("이미 존재하는 회원입니다.");
        return;
      }

      if (exsitingNickname) {
        setIsPopupState(true);
        setMessageState("이미 존재하는 닉네임입니다.");
        return;
      }

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
