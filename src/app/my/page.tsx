'use client';

import UserProfileImage from './components/userProfileImage';
import UserGoalInput from './components/userGoalInput';
import LogoutButton from './components/logoutButton';
import MyPopup from './components/myPopup';

const Page = () => {
  return (
    <>
      <MyPopup />
      <div>
        <UserProfileImage />
        <UserGoalInput />
      </div>

      <LogoutButton />
    </>
  );
};

export default Page;
