'use client';

import UserProfileImage from './_components/userProfileImage';
import UserGoalInput from './_components/userGoalInput';
import LogoutButton from './_components/logoutButton';
import MyPopup from './_components/myPopup';

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
