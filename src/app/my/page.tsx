"use client";

import UserProfileImage from "./components/userProfileImage";
import { useUserProfile } from "./hook/useUserProfile";
import UserGoalInput from "./components/userGoalInput";
import LogoutButton from "./components/logoutButton";
import { usePopupStore } from "../store/popup/PopupStore";
import Button from "../components/common/Button";
import Popup from "../components/common/Popup";
import { colors } from "../styles/colors.css";
import { flexSprinklesFc } from "../components/common/utils/flex";
import { useRouter } from "next/navigation";

const Page = () => {
  const router = useRouter();
  const { imageUrl, setImageUrl } = useUserProfile();
  const isPopupState = usePopupStore((state) => state.isPopup);
  const messageState = usePopupStore((state) => state.message);
  const setIsPopupState = usePopupStore((state) => state.setIsPopup);
  const setMessageState = usePopupStore((state) => state.setMessage);

  return (
    <>
      {isPopupState &&
        (messageState === "유효하지 않은 입력값입니다." ||
        messageState === "알 수 없는 오류가 발생했습니다." ||
        messageState === "저장 되었습니다." ? (
          <Popup text={messageState}>
            <div className={flexSprinklesFc({ gap: "4px" })}>
              <Button
                text="확인"
                onClick={() => {
                  // setDeleted(true);
                  setIsPopupState(false);
                  setMessageState("");
                }}
              />
            </div>
          </Popup>
        ) : (
          <Popup text={messageState}>
            <div className={flexSprinklesFc({ gap: "4px" })}>
              <Button
                text="취소"
                background={colors.primary}
                color={colors.white}
                onClick={() => {
                  setIsPopupState(false);
                  setMessageState("");
                }}
              />
              <Button
                text="확인"
                onClick={() => {
                  // setDeleted(true);
                  setIsPopupState(false);
                  setMessageState("");
                }}
              />
            </div>
          </Popup>
        ))}
      <div>
        <UserProfileImage imageUrl={imageUrl} setImageUrl={setImageUrl} />
        <UserGoalInput />
      </div>

      <LogoutButton />
    </>
  );
};

export default Page;
