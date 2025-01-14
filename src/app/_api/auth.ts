import { supabaseClient } from '../_lib/supabaseClient';
import { IMAGE_SRC, useUserInfoStore } from '../_store/user/userStore';
import { Session } from '@supabase/supabase-js';

const setUserInfo = useUserInfoStore((state) => state.setUserInfo);
const resetUserInfo = useUserInfoStore((state) => state.resetUserInfo);

export const getUserProfile = async (userId: string) => {
  try {
    const { data: profile } = await supabaseClient
      .from('user_profile')
      .select('avatar_url')
      .eq('id', userId)
      .single();

    return profile?.avatar_url || IMAGE_SRC;
  } catch (e) {
    return IMAGE_SRC;
  }
};

export const handleSession = async (session: Session | null) => {
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
  } catch {
    resetUserInfo();
  }
};
