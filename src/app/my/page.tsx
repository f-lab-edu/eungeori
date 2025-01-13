'use client';

import UserProfileImage from './_components/UserProfileImage';
import UserGoalInput from './_components/UserGoalInput';
import LogoutButton from './_components/LogoutButton';
import MyPopup from './_components/MyPopup';

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
