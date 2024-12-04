import { supabase } from '@/app/lib/supabaseClient';
import { usePopupStore } from '@/app/store/popup/PopupStore';
import { useUserInfoStore } from '@/app/store/user/userStore';
import { signinSchema } from '@/app/types/signinSchema';
import { useRouter } from 'next/navigation';
import { z } from 'zod';

export const useLogin = () => {
  const router = useRouter();

  const setIsPopupState = usePopupStore((state) => state.setIsPopup);
  const setMessageState = usePopupStore((state) => state.setMessage);

  const setUserInfo = useUserInfoStore((state) => state.setUserInfo);

  const onLoginSubmit = async (data: z.infer<typeof signinSchema>) => {
    try {
      const { data: user, error } = await supabase.auth.signInWithPassword({
        email: data.email,
        password: data.password,
      });

      if (
        error?.message === 'Invalid login credentials' ||
        error?.message === 'Invalid email or password'
      ) {
        setIsPopupState(true);
        setMessageState('이메일 또는 비밀번호를 확인해주세요.');
      }

      if (user && user.session) {
        const {
          id,
          user_metadata: { nickname },
        } = user.session.user;

        setUserInfo({
          id,
          nickname,
        });
        router.push('/record');
      }

      return;
    } catch (e) {
      console.error(e);
      setIsPopupState(true);
      setMessageState('알 수 없는 오류가 발생했습니다.');
      return;
    }
  };

  return { onLoginSubmit };
};
