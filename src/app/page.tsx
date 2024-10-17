"use client";

import Image from "next/image";
import Logo from "@svgs/logo.svg";

import { loginTextBox, loginHeading, loginCaption, loginWrapper, loginLogo } from "@styles/login/login.css";
import { useRouter } from "next/navigation";
import { flexSprinklesFc } from "./components/common/utils/flex";
import { inputStyle } from "./styles/common/input.css";
import { gray300 } from "./styles/colors.css";
import { caption2 } from "./styles/font.css";
import { pointer } from "./styles/global.css";

// type LoginBoxProps = {
//   image: string;
//   text: string;
//   bg: string;
//   textColor: string;
//   border?: boolean;
//   onClick: MouseEventHandler<HTMLDivElement>;
// };

// const LoginBox = ({ image, text, bg, textColor, border, onClick }: LoginBoxProps) => {
//   return (
//     <div
//       className={loginBox}
//       style={{
//         background: bg,
//         color: textColor,
//         border: border ? "1px solid #d2d5d6" : "none",
//       }}
//     >
//       <div className={loginBoxContents} onClick={onClick}>
//         <Image src={image} alt={text} width={24} height={24} />
//         <p className={regular}>{text}</p>
//       </div>
//     </div>
//   );
// };

export default function Login() {
  const router = useRouter();

  const logoClassName = flexSprinklesFc({
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "24px",
  });
  return (
    <section
      className={`${loginWrapper} ${flexSprinklesFc({
        flexDirection: "column",
        justifyContent: "space-between",
      })}`}
    >
      <article className={`${logoClassName} ${loginLogo}`} style={{ width: "100%" }}>
        <Image src={Logo} alt="logo" />
        <div className={loginTextBox}>
          <h2 className={loginHeading}>Eungeori</h2>
          <p className={loginCaption}>건강한 습관을 위한 스마트 앱</p>
        </div>

        <div className={flexSprinklesFc({ flexDirection: "column", gap: "8px" })} style={{ width: "95%" }}>
          <input className={inputStyle} placeholder="아이디" />

          <input className={inputStyle} placeholder="비밀번호" />
        </div>

        <p className={`${gray300} ${caption2}`}>
          <span className={pointer}>로그인</span> | <span className={pointer}>회원가입</span>
        </p>
      </article>

      {/* <LoginBox
          image="/svgs/kakao.svg"
          text="카카오톡으로 계속하기"
          bg="#FEE500"
          textColor="#242729"
          onClick={() => router.push("/record")}
        />
        <LoginBox
          image="/svgs/naver.svg"
          text="네이버로 계속하기"
          bg="#00C53A"
          textColor="#ffffff"
          onClick={() => router.push("/record")}
        />
        <LoginBox
          image="/svgs/google.svg"
          text="Google로 계속하기"
          bg="#ffffff"
          textColor="#242729"
          onClick={() => router.push("/record")}
          border
        /> */}
    </section>
  );
}
