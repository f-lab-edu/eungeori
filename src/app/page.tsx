"use client";

import Image from "next/image";
import Logo from "@svgs/logo.svg";

import {
  loginTextBox,
  loginHeading,
  loginCaption,
  loginBox,
  loginWrapper,
  loginLogo,
  loginBoxContents,
  loginBoxContainer,
} from "@styles/login/login.css";
import { flexSprinklesFc } from "./components/common/utils/flex";
import { regular } from "./styles/font.css";
import { MouseEventHandler } from "react";
import { useRouter } from "next/navigation";

type LoginBoxProps = {
  image: string;
  text: string;
  bg: string;
  textColor: string;
  border?: boolean;
  onClick: MouseEventHandler<HTMLDivElement>;
};

const LoginBox = ({ image, text, bg, textColor, border, onClick }: LoginBoxProps) => {
  return (
    <div
      className={loginBox}
      style={{
        background: bg,
        color: textColor,
        border: border ? "1px solid #d2d5d6" : "none",
      }}
    >
      <div className={loginBoxContents} onClick={onClick}>
        <Image src={image} alt={text} width={24} height={24} />
        <p className={regular}>{text}</p>
      </div>
    </div>
  );
};

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
      <article className={`${logoClassName} ${loginLogo}`}>
        <Image src={Logo} alt="logo" />
        <div className={loginTextBox}>
          <h2 className={loginHeading}>Eungeori</h2>
          <p className={loginCaption}>건강한 습관을 위한 스마트 앱</p>
        </div>
      </article>

      <article
        className={`${loginBoxContainer} ${flexSprinklesFc({
          flexDirection: "column",
          gap: "8px",
        })}`}
      >
        <LoginBox
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
        />
      </article>
    </section>
  );
}
