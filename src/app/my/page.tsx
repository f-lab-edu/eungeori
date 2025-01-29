'use client';

import LogoutButton from './_components/logoutButton';
import MyPopup from './_components/myPopup';
import GoalField from './_components/goalField';
import ProfileAvatar from './_components/profileAvatar';

const MyPage = () => {
  return (
    <>
      <MyPopup />
      <div>
        <ProfileAvatar />
        <GoalField />
      </div>

      <LogoutButton />
    </>
  );
};

export default MyPage;
