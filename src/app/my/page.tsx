'use client';

import UserProfileImage from './components/userProfileImage';
import { useUserProfile } from './hook/useUserProfile';
import UserGoalInput from './components/userGoalInput';
import LogoutButton from './components/logoutButton';
import MyPopup from './components/myPopup';

const Page = () => {
  const { imageUrl, setImageUrl } = useUserProfile();

  return (
    <>
      <MyPopup />
      <div>
        <UserProfileImage imageUrl={imageUrl} setImageUrl={setImageUrl} />
        <UserGoalInput />
      </div>

      <LogoutButton />
    </>
  );
};

export default Page;
