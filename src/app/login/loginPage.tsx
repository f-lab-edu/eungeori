"use client";

import Image from "next/image";
import Logo from "@svgs/logo.svg";
import { flexSprinklesFc } from "../components/common/utils/flex";
import { loginWrapper, loginLogo, loginTextBox, loginHeading, loginCaption } from "./styles/login.css";
import LoginForm from "./components/loginForm";
import LoginPopup from "./components/loginPopup";

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

export default function LoginPage() {
  const logoClassName = flexSprinklesFc({
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "24px",
  });
  return (
    <>
      <LoginPopup />
      <section
        className={`${loginWrapper} ${flexSprinklesFc({
          flexDirection: "column",
          justifyContent: "space-between",
        })}`}
      >
        <article className={`${logoClassName} ${loginLogo}`} style={{ width: "100%" }}>
          <Image src={Logo} alt="logo" priority />
          <div className={loginTextBox}>
            <h2 className={loginHeading}>Eungeori</h2>
            <p className={loginCaption}>건강한 습관을 위한 스마트 앱</p>
          </div>

          <LoginForm />
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
    </>
  );
}
