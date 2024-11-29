"use client";

import UserProfileImage from "./components/userProfileImage";
import { useUserProfile } from "./hook/useUserProfile";
import UserGoalInput from "./components/userGoalInput";
import LogoutButton from "./components/logoutButton";

const Page = () => {
  const { imageUrl, setImageUrl } = useUserProfile();

  return (
    <>
      <div>
        <UserProfileImage imageUrl={imageUrl} setImageUrl={setImageUrl} />
        <UserGoalInput />
      </div>

      <LogoutButton />
    </>
  );
};

export default Page;
