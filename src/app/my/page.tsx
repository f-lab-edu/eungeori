"use client";

import Image from "next/image";
import { caption, paragraph, regular, semiBold } from "../styles/font.css";
import { flexSprinklesFc } from "../components/common/utils/flex";
import { myTargetContainer } from "./my.css";
import { paddingSprinkles } from "../styles/padding.css";
import { gray300 } from "../styles/colors.css";
import { buttonOutLine, pointer } from "../styles/global.css";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { inputStyle } from "../components/common/input.css";
import { supabase, userProfile } from "../lib/supabaseClient";
import { usePopupStore } from "../store/popup/PopupStore";

const IMAGE_SRC = "/image/profile.png";

const Page = () => {
  const router = useRouter();
  const [userInfo, setUserInfo] = useState({
    nickname: "",
    id: "",
  });
  const [imageUrl, setImageUrl] = useState<string>(IMAGE_SRC);
  const [goal, setGoal] = useState<string>("");

  const setIsPopupState = usePopupStore((state) => state.setIsPopup);
  const setMessageState = usePopupStore((state) => state.setMessage);

  const fileInputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    const getUserInfoData = async () => {
      const user = await supabase.auth.getUser();
      const nickname = user.data.user?.user_metadata.nickname;
      const id = user.data.user?.id;

      setUserInfo({
        nickname: nickname || "",
        id: id || "",
      });
    };

    getUserInfoData();
  }, []);

  useEffect(() => {
    const getUserProfile = async () => {
      try {
        const { data, error } = await supabase.auth.getUser();
        const id = userInfo.id;

        if (!data.user || error) {
          setIsPopupState(true);
          setMessageState("사용자 정보를 불러오는데 실패했습니다.");
        }

        const filePath = `user_profile_image/${id}`;

        const { data: supabaseUrl } = await supabase.storage.from(`${userProfile}`).getPublicUrl(filePath);

        const { data: urlData, error: urlError } = await supabase.storage
          .from(`${userProfile}`)
          .list(filePath);

        if (urlError) {
          setIsPopupState(true);
          setMessageState("프로필 이미지를 불러오는데 실패했습니다.");
        }

        if (!urlData || urlData.length === 0) {
          setImageUrl(IMAGE_SRC);
          return;
        }

        setImageUrl(`${supabaseUrl.publicUrl}/${urlData[urlData.length - 1]?.name}`);
      } catch (e) {
        setIsPopupState(true);
        setMessageState("알 수 없는 오류가 발생했습니다.");
      }
    };

    getUserProfile();
  }, []);

  const onClick = async () => {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) {
        setIsPopupState(true);
        setMessageState("로그아웃 실패. 다시 시도해주세요.");
        return;
      }
      router.push("/");
      return;
    } catch (e) {
      setIsPopupState(true);
      setMessageState("알 수 없는 오류가 발생했습니다.");
    }
  };

  const onGoalSave = async (goal: string) => {
    try {
      if (!userInfo.id || !goal.trim()) {
        setIsPopupState(true);
        setMessageState("유효하지 않은 입력값입니다.");
        return;
      }

      const { data, error } = await supabase.from("user_profile").insert([{ goal, id: userInfo.id }]);

      console.log(data, "test");

      if (error) {
        console.log(error, "error");
        setIsPopupState(true);
        setMessageState("알 수 없는 오류가 발생했습니다.");
        return;
      }

      setIsPopupState(true);
      setMessageState("저장 되었습니다.");
      setGoal("");
    } catch (e) {
      setIsPopupState(true);
      setMessageState("알 수 없는 오류가 발생했습니다.");
      return;
    }
  };

  const handleKeyDown = async (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && goal.trim()) {
      await onGoalSave(goal);
    }
  };

  const handleImageClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      await uploadImage(file);
    }
  };

  const uploadImage = async (file: File) => {
    try {
      const filePath = `public/user_profile_image/${file.name}`;

      console.log("업로드 경로:", filePath);

      const { data, error } = await supabase.storage
        .from(`${userProfile}`)
        .upload(filePath, file, { upsert: true });

      console.log(data, "test");
      if (error) {
        setIsPopupState(true);
        setMessageState("업로드에 실패하였습니다.");
        return;
      }

      setIsPopupState(true);
      setMessageState("변경되었습니다.");
    } catch (e) {
      setIsPopupState(true);
      setMessageState("알 수 없는 오류가 발생했습니다.");
    }
  };

  return (
    <>
      <div>
        <div
          className={`${flexSprinklesFc({
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "8px",
          })}`}
        >
          <p className={`${semiBold} ${paragraph}`}>{userInfo.nickname}님, 안녕하세요</p>
          <form>
            <input type="file" style={{ display: "none" }} ref={fileInputRef} onChange={handleFileChange} />
          </form>
          <Image
            className={pointer}
            style={{ borderRadius: "50%" }}
            src={imageUrl}
            width={110}
            height={110}
            alt="profile"
            priority
            onClick={handleImageClick}
          />
        </div>

        <div className={myTargetContainer}>
          <p className={`${caption} ${regular} ${paddingSprinkles({ paddingBottom: "s4" })}`}>한 줄 목표</p>
          <input
            className={inputStyle}
            value={goal}
            type="text"
            placeholder="목표를 적은 뒤 Enter 키를 눌러주세요"
            maxLength={30}
            onChange={(e) => {
              setGoal(e.target.value);
            }}
            onKeyDown={handleKeyDown}
          />
        </div>
      </div>

      <div>
        <p className={`${caption} ${gray300}`} style={{ textAlign: "center" }}>
          <button className={`${pointer} ${buttonOutLine}`} onClick={onClick}>
            로그아웃
          </button>{" "}
          | {""}
          <button className={`${pointer} ${buttonOutLine}`}>회원탈퇴</button>
        </p>
      </div>
    </>
  );
};

export default Page;
