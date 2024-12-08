import { userProfile } from '@/app/lib/supabase';
import { supabaseClient } from '@/app/lib/supabaseClient';
import { usePopupStore } from '@/app/store/popup/PopupStore';
import { useUserInfoStore } from '@/app/store/user/userStore';
import { useState } from 'react';

const IMAGE_SRC = '/image/profile.png';

export const useUserProfile = () => {
  const [imageUrl, setImageUrl] = useState<string>(IMAGE_SRC);

  const userInfo = useUserInfoStore((state) => state.userInfo);
  const setIsPopupState = usePopupStore((state) => state.setIsPopup);
  const setMessageState = usePopupStore((state) => state.setMessage);
  const { id } = userInfo;

  const uploadUserProfile = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) {
      setIsPopupState(true);
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
        setIsPopupState(true);
        setMessageState('업로드에 실패하였습니다.');
        return;
      }

      const { data: supabaseUrl } = await supabaseClient.storage
        .from(`${userProfile}`)
        .getPublicUrl(filePath);

      if (!supabaseUrl?.publicUrl) {
        setIsPopupState(true);
        setMessageState('URL을 가져오는 데 실패하였습니다.');
        return;
      }

      const avatarUrl = `${supabaseUrl.publicUrl}?timestamp=${Date.now()}`;

      await saveUserProfile(avatarUrl);

      setImageUrl(avatarUrl);
      setIsPopupState(true);
      setMessageState('프로필 이미지가 변경되었습니다.');
    } catch (e) {
      setIsPopupState(true);
      setMessageState('알 수 없는 오류가 발생했습니다.');
    }
  };

  const saveUserProfile = async (avatarUrl: string) => {
    try {
      if (!id) {
        setIsPopupState(true);
        setMessageState('사용자 정보를 불러오는데 실패했습니다.');
        return;
      }

      const { data, error } = await supabaseClient
        .from('user_profile')
        .upsert({ id, avatar_url: avatarUrl, nickname: userInfo.nickname });

      console.log('Upsert response:', { data, error });

      if (error) {
        console.error('Supabase upsert error:', error.message);
        setIsPopupState(true);
        setMessageState('프로필 이미지를 저장하는데 실패했습니다.');
        return;
      }

      setIsPopupState(true);
      setMessageState('프로필 이미지가 성공적으로 저장되었습니다.');
    } catch (e) {
      console.error('Unexpected error during upsert:', e);
      setIsPopupState(true);
      setMessageState('알 수 없는 오류가 발생했습니다.');
    }
  };

  const fetchUserProfile = async () => {
    try {
      if (!id) {
        setIsPopupState(true);
        setMessageState('사용자 정보를 불러오는데 실패했습니다.');
        return;
      }

      const { data, error } = await supabaseClient
        .from('user_profile')
        .select('avatar_url')
        .eq('id', id)
        .single();

      if (error || !data?.avatar_url) {
        console.error('Error fetching profile:', error);
        setImageUrl(IMAGE_SRC);
        return;
      }

      console.log('Fetched profile data:', data);
      setImageUrl(data.avatar_url);
    } catch (e) {
      console.error('Unexpected error during profile fetch:', e);
      setIsPopupState(true);
      setMessageState('프로필 이미지를 불러오는데 실패했습니다.');
    }
  };

  return {
    imageUrl,
    setImageUrl,
    uploadUserProfile,
    saveUserProfile,
    fetchUserProfile,
  };
};
