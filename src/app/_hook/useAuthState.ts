import { useEffect } from 'react';
import { supabaseClient } from '../_lib/supabaseClient';
import { useUserInfoStore } from '../_store/user/userStore';

import { useProfileState } from '../my/_hook/useUserProfile';
import { handleSession } from '../_api/auth';

const useAuthState = () => {
  const resetUserInfo = useUserInfoStore((state) => state.resetUserInfo);
  const fetchUserProfile = useProfileState().fetchUserProfile;

  useEffect(() => {
    const initializeAuth = async () => {
      try {
        const { data, error } = await supabaseClient.auth.getSession();
        if (error) throw error;
        await handleSession(data.session);
      } catch (e) {
        resetUserInfo();
      }
    };

    initializeAuth();

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
};

export default useAuthState;
