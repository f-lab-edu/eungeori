import { supabaseClient } from '../_lib/supabaseClient';
import { IMAGE_SRC, useUserInfoStore } from '../_store/user/userStore';
import { Session } from '@supabase/supabase-js';

export const getUserProfile = async (userId: string) => {
  try {
    const { data: profile, error } = await supabaseClient
      .from('user_profile')
      .select('avatar_url')
      .eq('id', userId)
      .single();

    if (error) {
      throw error;
    }

    return profile?.avatar_url || IMAGE_SRC;
  } catch (e) {
    console.error(e);
    return IMAGE_SRC;
  }
};

export const handleSession = async (session: Session | null) => {
  const setUserInfo = useUserInfoStore((state) => state.setUserInfo);
  const resetUserInfo = useUserInfoStore((state) => state.resetUserInfo);
  try {
    if (session) {
      const { id, user_metadata } = session.user;
      const nickname = user_metadata.nickname || 'Guest';
      const avatarUrl = await getUserProfile(id);

      setUserInfo({
        id,
        nickname,
        avatarUrl,
      });
    }
  } catch (e) {
    console.error(e);
    resetUserInfo();
  }
};
