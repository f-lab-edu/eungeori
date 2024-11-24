import { supabase } from "@/app/lib/supabaseClient";
import { usePopupStore } from "@/app/store/popup/PopupStore";
import { signupSchema } from "@/app/types/signupSchema";
import { useRouter } from "next/navigation";
import { z } from "zod";

export const useLogin = () => {
  const router = useRouter();

  const setIsPopupState = usePopupStore((state) => state.setIsPopup);
  const setMessageState = usePopupStore((state) => state.setMessage);

  const onLoginSubmit = async (data: z.infer<typeof signupSchema>) => {
    try {
      const { data: user, error } = await supabase
        .from("signup")
        .select("username, password")
        .or(`username.eq.${data.id}, password.eq.${data.password}`)
        .single();

      if (error) {
        setIsPopupState(true);
        setMessageState("가입된 정보를 확인해주세요.");
        return;
      }

      if (!user) {
        setMessageState("회원가입을 진행해주세요.");
        setIsPopupState(true);
        return;
      }

      if (user.username !== data.id || user.password !== data.password) {
        setMessageState("아이디, 비밀번호를 확인해주세요.");
        setIsPopupState(true);
        return;
      }
    } catch (e) {
      setIsPopupState(true);
      setMessageState("알 수 없는 오류가 발생했습니다.");
      return;
    }

    router.push("/record");
  };

  return { onLoginSubmit };
};
