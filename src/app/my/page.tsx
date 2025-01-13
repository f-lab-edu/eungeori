'use client';

import LogoutButton from './_components/logoutButton';
import MyPopup from './_components/myPopup';
import UserGoalInput from './_components/userGoalInput';
import UserProfileImage from './_components/userProfileImage';

const MyPage = () => {
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

export default MyPage;
