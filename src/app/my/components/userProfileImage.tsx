import { flexSprinklesFc } from '@/app/components/common/utils/flex';
import { IMAGE_SRC, useUserInfoStore } from '@/app/store/user/userStore';
import { semiBold, paragraph } from '@/app/styles/font.css';
import { pointer } from '@/app/styles/global.css';
import Image from 'next/image';

import { useRef } from 'react';
import { useUserProfile } from '../hook/useUserProfile';

const UserProfileImage = () => {
  const userInfo = useUserInfoStore((state) => state.userInfo);

  const { uploadUserProfile } = useUserProfile();

  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleImageClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    await uploadUserProfile(e);
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
        src={userInfo.avatarUrl || IMAGE_SRC}
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
