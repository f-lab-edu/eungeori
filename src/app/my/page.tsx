"use client";

import UserProfileImage from "./components/userProfileImage";
import { useUserProfile } from "./hook/useUserProfile";
import UserGoalInput from "./components/userGoalInput";
import LogoutButton from "./components/logoutButton";

const Page = () => {
  const { userInfo, imageUrl, setImageUrl } = useUserProfile();

  return (
    <>
      <div>
        <UserProfileImage userInfo={userInfo} imageUrl={imageUrl} setImageUrl={setImageUrl} />
        <UserGoalInput userInfo={userInfo} />
      </div>

      <LogoutButton />
    </>
  );
};

export default Page;
