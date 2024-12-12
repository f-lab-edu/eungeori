'use client';

import { useEffect } from 'react';
import { supabaseClient } from './lib/supabaseClient';
import { IMAGE_SRC, useUserInfoStore } from './store/user/userStore';
import { useUserProfile } from './my/hook/useUserProfile';

const ClientProvider = ({ children }: { children: React.ReactNode }) => {
  const setUserInfo = useUserInfoStore((state) => state.setUserInfo);
  const resetUserInfo = useUserInfoStore((state) => state.resetUserInfo);
  const fetchUserProfile = useUserProfile().fetchUserProfile;

  useEffect(() => {
    const getUser = async () => {
      try {
        const { data, error } = await supabaseClient.auth.getSession();

        if (data.session) {
          const { id, user_metadata } = data.session.user;
          const nickname = user_metadata.nickname || 'Guest';

          const { data: profile } = await supabaseClient
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

        if (error || !data) {
          throw new Error();
        }
      } catch {
        resetUserInfo();
      }
    };

    getUser();

    const {
      data: { subscription },
    } = supabaseClient.auth.onAuthStateChange(async (e, session) => {
      if (session?.user) {
        fetchUserProfile();
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
