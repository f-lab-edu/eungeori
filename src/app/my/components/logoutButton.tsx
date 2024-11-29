import { supabase } from "@/app/lib/supabaseClient";
import { usePopupStore } from "@/app/store/popup/PopupStore";
import { gray300 } from "@/app/styles/colors.css";
import { caption } from "@/app/styles/font.css";
import { pointer, buttonOutLine } from "@/app/styles/global.css";
import { useRouter } from "next/navigation";

const LogoutButton = () => {
  const router = useRouter();

  const setIsPopupState = usePopupStore((state) => state.setIsPopup);
  const setMessageState = usePopupStore((state) => state.setMessage);

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

  return (
    <div>
      <p className={`${caption} ${gray300}`} style={{ textAlign: "center" }}>
        <button className={`${pointer} ${buttonOutLine}`} onClick={onClick}>
          로그아웃
        </button>{" "}
        | {""}
        <button className={`${pointer} ${buttonOutLine}`}>회원탈퇴</button>
      </p>
    </div>
  );
};

export default LogoutButton;
