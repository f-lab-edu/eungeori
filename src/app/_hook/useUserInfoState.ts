'use client';

import { useEffect } from 'react';
import { supabaseClient } from '@/app/_lib/supabaseClient';
import { useUserInfoStore } from '@/app/_store/user/userStore';

export const useUserInfoState = () => {
  const setUserInfo = useUserInfoStore((state) => state.setUserInfo);

  useEffect(() => {
    const restoreUserInfo = async () => {
      const { data: session } = await supabaseClient.auth.getSession();

      if (session?.session?.user) {
        const {
          id,
          user_metadata: { nickname },
        } = session.session.user;

        setUserInfo({ id, nickname });
      }
    };

    restoreUserInfo();
  }, [setUserInfo]);
};
