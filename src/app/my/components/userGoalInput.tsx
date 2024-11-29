import { inputStyle } from "@/app/components/common/input.css";
import { caption, regular } from "@/app/styles/font.css";
import { paddingSprinkles } from "@/app/styles/padding.css";
import { myTargetContainer } from "../my.css";
import { useState } from "react";
import { usePopupStore } from "@/app/store/popup/PopupStore";
import { supabase } from "@/app/lib/supabaseClient";

type UserGoalInputProps = {
  userInfo: {
    nickname: string;
    id: string;
  };
};

const UserGoalInput = ({ userInfo }: UserGoalInputProps) => {
  const [goal, setGoal] = useState<string>("");

  const setIsPopupState = usePopupStore((state) => state.setIsPopup);
  const setMessageState = usePopupStore((state) => state.setMessage);

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
  return (
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
  );
};

export default UserGoalInput;
