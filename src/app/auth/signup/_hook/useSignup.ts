import { supabaseClient } from '@/app/_lib/supabaseClient';
import { usePopupStore } from '@/app/_store/popup/popupStore';
import { signupSchema } from '@/app/_types/signupSchema';
import { z } from 'zod';

const checkEmailExists = async (email: string) => {
  const { data, error } = await supabaseClient.rpc('check_email_exists', { email_input: email });

  if (error) {
    return false;
  }

  return data; // boolean
};

const checkNicknameExists = async (nickname: string) => {
  const { data, error } = await supabaseClient.rpc('check_nickname_exists', { nickname });

  if (error) {
    return false;
  }

  return data; // boolean
};

export const useSignup = () => {
  const setOpenPopup = usePopupStore((state) => state.setOpenPopup);
  const setMessageState = usePopupStore((state) => state.setMessage);

  const onSignupSubmit = async (data: z.infer<typeof signupSchema>) => {
    try {
      const isNicknameExists = await checkNicknameExists(data.nickname);
      const isEmailExists = await checkEmailExists(data.email);

      if (isEmailExists) {
        setMessageState('이미 가입된 이메일입니다.');
        return;
      }

      if (isNicknameExists) {
        setMessageState('이미 존재하는 닉네임입니다.');
        return;
      }

      const { data: userData, error } = await supabaseClient.auth.signUp({
        email: data.email,
        password: data.password,
        options: {
          data: {
            nickname: data.nickname,
          },
        },
      });

      if (error) {
        throw error;
      }

      setMessageState('이메일 인증 후 로그인 해주세요.');
    } catch (e) {
      console.error(e);
      setMessageState('알 수 없는 오류가 발생했습니다.');
    } finally {
      setOpenPopup(true);
    }
  };

  return { onSignupSubmit };
};
