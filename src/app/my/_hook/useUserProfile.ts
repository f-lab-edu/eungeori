import { userProfile } from '@/app/_lib/supabase';
import { supabaseClient } from '@/app/_lib/supabaseClient';
import { usePopupStore } from '@/app/_store/popup/popupStore';
import { useUserInfoStore, IMAGE_SRC } from '@/app/_store/user/userStore';

export const useProfileState = () => {
  const userInfo = useUserInfoStore((state) => state.userInfo);
  const setUserInfo = useUserInfoStore((state) => state.setUserInfo);
  const setOpenPopup = usePopupStore((state) => state.setOpenPopup);
  const setMessageState = usePopupStore((state) => state.setMessage);
  const { id } = userInfo;

  const uploadUserProfile = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) {
      setOpenPopup(true);
      setMessageState('업로드할 파일을 선택하세요.');
      return;
    }

    const fileExtension = file.name.split('.').pop();
    const filePath = `user_profile_image/image/${Math.random().toString(36).substring(2)}.${fileExtension}`;

    try {
      const { error: uploadError } = await supabaseClient.storage
        .from(`${userProfile}`)
        .upload(filePath, file, { upsert: true });

      if (uploadError) {
        setMessageState('업로드에 실패하였습니다.');
        return;
      }

      const { data: supabaseUrl } = await supabaseClient.storage
        .from(`${userProfile}`)
        .getPublicUrl(filePath);

      const avatarUrl = `${supabaseUrl.publicUrl}?timestamp=${Date.now()}`;

      await saveUserProfile(avatarUrl);

      setUserInfo({
        ...userInfo,
        avatarUrl,
      });

      setMessageState('프로필 이미지가 변경되었습니다.');
    } catch (e) {
      console.error(e);
      setMessageState('알 수 없는 오류가 발생했습니다.');
    } finally {
      setOpenPopup(true);
    }
  };

  const saveUserProfile = async (avatarUrl: string) => {
    try {
      if (!id) {
        setMessageState('사용자 정보를 불러오는데 실패했습니다.');
        return;
      }

      const { data, error } = await supabaseClient
        .from('user_profile')
        .upsert({ id, avatar_url: avatarUrl, nickname: userInfo.nickname });

      if (error) {
        throw error;
      }

      setMessageState('프로필 이미지가 성공적으로 저장되었습니다.');
    } catch (e) {
      console.error(e);
      setMessageState('알 수 없는 오류가 발생했습니다.');
    } finally {
      setOpenPopup(true);
    }
  };

  const fetchUserProfile = async () => {
    try {
      const { data: sessionData } = await supabaseClient.auth.getSession();

      if (!sessionData?.session?.user?.id) {
        setUserInfo({
          ...userInfo,
          avatarUrl: IMAGE_SRC,
        });
        return;
      }

      const id = sessionData.session.user.id;

      const { data, error } = await supabaseClient
        .from('user_profile')
        .select('avatar_url')
        .eq('id', id)
        .single();

      if (error || !data?.avatar_url) {
        throw error;
      }

      setUserInfo({
        id,
        nickname: sessionData.session.user.user_metadata.nickname || '',
        avatarUrl: data.avatar_url,
      });
    } catch (e) {
      console.error(e);
      setUserInfo({
        ...userInfo,
        avatarUrl: IMAGE_SRC,
      });
    }
  };

  return {
    uploadUserProfile,
    saveUserProfile,
    fetchUserProfile,
  };
};
