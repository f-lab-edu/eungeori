import Image from "next/image";
import { caption, paragraph, regular, semiBold } from "../styles/font.css";
import { flexSprinklesFc } from "../components/common/utils/flex";
import { inputStyle, myTargetContainer } from "./my.css";
import { paddingSprinkles } from "../styles/padding.css";
import { gray300 } from "../styles/colors.css";
import { pointer } from "../styles/global.css";

const page = () => {
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
          <Image src="/image/profile.png" width={110} height={110} alt="profile" />
        </div>

        <div className={myTargetContainer}>
          <p className={`${caption} ${regular} ${paddingSprinkles({ paddingBottom: "s4" })}`}>한 줄 목표</p>
          <input className={inputStyle} type="text" />
        </div>
      </div>

      <div>
        <p className={`${caption} ${gray300}`} style={{ textAlign: "center" }}>
          <span className={pointer}>로그아웃</span> | {""}
          <span className={pointer}>회원탈퇴</span>
        </p>
      </div>
    </>
  );
};

export default page;
