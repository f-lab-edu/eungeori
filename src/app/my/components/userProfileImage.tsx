import { flexSprinklesFc } from '@/app/components/common/utils/flex';
import { userProfile } from '@/app/lib/supabase';
import { supabaseClient } from '@/app/lib/supabaseClient';
import { usePopupStore } from '@/app/store/popup/PopupStore';
import { useUserInfoStore } from '@/app/store/user/userStore';
import { semiBold, paragraph } from '@/app/styles/font.css';
import { pointer } from '@/app/styles/global.css';
import Image from 'next/image';

import { useRef } from 'react';

type UserProfileImageProps = {
  imageUrl: string;
  setImageUrl: (url: string) => void;
};

const UserProfileImage = ({ imageUrl, setImageUrl }: UserProfileImageProps) => {
  const userInfo = useUserInfoStore((state) => state.userInfo);

  const setIsPopupState = usePopupStore((state) => state.setIsPopup);
  const setMessageState = usePopupStore((state) => state.setMessage);

  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleImageClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const fileExtension = file.name.split('.').pop();
      const filePath = `user_profile_image/image/${Math.random().toString(36).substring(2)}.${fileExtension}`;

      const { error } = await supabaseClient.storage
        .from(`${userProfile}`)
        .upload(filePath, file, { upsert: true });

      if (error) {
        setIsPopupState(true);
        setMessageState('업로드에 실패하였습니다.');
        return;
      }

      const { data: supabaseUrl } = await supabaseClient.storage
        .from(`${userProfile}`)
        .getPublicUrl(filePath);

      if (supabaseUrl) {
        setImageUrl(`${supabaseUrl.publicUrl}?tiemstamp=${Date.now()}`);
        setIsPopupState(true);
        setMessageState('변경되었습니다.');
      }
    }
  };

  return (
    <div
      className={`${flexSprinklesFc({
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '8px',
      })}`}
    >
      <p className={`${semiBold} ${paragraph}`}>{userInfo.nickname}님, 안녕하세요</p>
      <form>
        <input
          type="file"
          style={{ display: 'none' }}
          ref={fileInputRef}
          onChange={handleFileChange}
        />
      </form>
      <Image
        className={pointer}
        style={{ borderRadius: '50%' }}
        src={imageUrl}
        width={110}
        height={110}
        alt="profile"
        priority
        onClick={handleImageClick}
      />
    </div>
  );
};

export default UserProfileImage;
