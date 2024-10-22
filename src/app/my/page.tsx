"use client";

import Image from "next/image";
import { caption, paragraph, regular, semiBold } from "../styles/font.css";
import { flexSprinklesFc } from "../components/common/utils/flex";
import { myTargetContainer } from "./my.css";
import { paddingSprinkles } from "../styles/padding.css";
import { gray300 } from "../styles/colors.css";
import { buttonOutLine, pointer } from "../styles/global.css";
import { useRouter } from "next/navigation";
import { inputStyle } from "../styles/common/input.css";
import { useEffect, useState } from "react";
import {
  localStorageGetItem,
  localStorageRemoveItem,
  localStorageSetItem,
} from "../types/localStorageSchema";

const Page = () => {
  const router = useRouter();
  const [goal, setGoal] = useState<string>("");
  const onClick = () => {
    localStorageRemoveItem("signin");

    router.push("/");
  };

  const onGoalSave = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      localStorageSetItem("goal", goal);
    }
  };

  useEffect(() => {
    const getGoal = localStorageGetItem("goal");
    if (getGoal) {
      setGoal(getGoal);
    }
  }, []);
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
          <p className={`${semiBold} ${paragraph}`}>제톰 님, 안녕하세요</p>
          <Image src="/image/profile.png" width={110} height={110} alt="profile" priority />
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
            onKeyDown={(e) => {
              onGoalSave(e);
            }}
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
