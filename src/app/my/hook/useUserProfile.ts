import { userProfile } from '@/app/lib/supabase';
import { supabaseClient } from '@/app/lib/supabaseClient';
import { usePopupStore } from '@/app/store/popup/PopupStore';
import { useUserInfoStore } from '@/app/store/user/userStore';
import { useEffect, useState } from 'react';

const IMAGE_SRC = '/image/profile.png';

export const useUserProfile = () => {
  const [imageUrl, setImageUrl] = useState<string>(IMAGE_SRC);

  const userInfo = useUserInfoStore((state) => state.userInfo);

  const setIsPopupState = usePopupStore((state) => state.setIsPopup);
  const setMessageState = usePopupStore((state) => state.setMessage);

  const fetchUserProfileUpload = async () => {
    try {
      const { data, error } = await supabaseClient.auth.getUser();

      if (!data.user || error) {
        setIsPopupState(true);
        setMessageState('사용자 정보를 불러오는데 실패했습니다.');
      }

      const filePath = `user_profile_image/image`;

      const { data: fileUrl } = await supabaseClient.storage
        .from(`${userProfile}`)
        .getPublicUrl(filePath);
      const { data: fileList } = await supabaseClient.storage.from(`${userProfile}`).list(filePath);

      if (!fileList) {
        setIsPopupState(true);
        setMessageState('프로필 이미지를 불러오는데 실패했습니다.');
        setImageUrl(IMAGE_SRC);
      }

      if (!fileUrl.publicUrl || !fileList || fileList.length === 0) {
        setImageUrl(IMAGE_SRC);
        return;
      }

      setImageUrl(`${fileUrl.publicUrl}/${fileList[fileList.length - 1].name}`);
    } catch (e) {
      setIsPopupState(true);
      setMessageState('알 수 없는 오류가 발생했습니다.');
    }
  };

  useEffect(() => {
    fetchUserProfileUpload();
  }, []);

  return {
    userInfo,
    imageUrl,
    setImageUrl,
  };
};
