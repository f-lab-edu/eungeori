'use client';

import { useEffect } from 'react';
import { supabaseClient } from './lib/supabaseClient';
import { useUserInfoStore } from './store/user/userStore';

const IMAGE_SRC = '/image/profile.png';

const ClientProvider = ({ children }: { children: React.ReactNode }) => {
  const setUserInfo = useUserInfoStore((state) => state.setUserInfo);
  const resetUserInfo = useUserInfoStore((state) => state.resetUserInfo);

  useEffect(() => {
    const getUser = async () => {
      try {
        const { data, error } = await supabaseClient.auth.getSession();

        if (data.session) {
          const { id, user_metadata } = data.session.user;
          const nickname = user_metadata.nickname || '';

          const { data: profile, error: profileError } = await supabaseClient
            .from('user_profile')
            .select('avatar_url')
            .eq('id', id)
            .single();

          const avatarUrl = profile?.avatar_url || IMAGE_SRC;

          setUserInfo({
            id,
            nickname,
            avatarUrl,
          });
        }

        if (error) {
          resetUserInfo();
          return;
        }
      } catch (e) {
        console.log(e);
      }
    };

    getUser();

    const {
      data: { subscription },
    } = supabaseClient.auth.onAuthStateChange((e, session) => {
      if (session?.user) {
        setUserInfo({
          id: session.user.id,
          nickname: session.user.user_metadata.nickname || '',
          avatarUrl: '',
        });
      } else {
        resetUserInfo();
      }
    });

    return () => {
      subscription?.unsubscribe();
    };
  }, []);

  return <>{children}</>;
};

export default ClientProvider;
