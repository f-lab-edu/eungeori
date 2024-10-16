"use client";

import Image from "next/image";
import Logo from "@svgs/logo.svg";
import { useState } from "react";
import { supabase } from "./utils/supabase";

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
import { regular } from "./styles/font.css";
import { MouseEventHandler } from "react";
import { useRouter } from "next/navigation";
import { flexSprinklesFc } from "./components/common/utils/flex";

type LoginBoxProps = {
  image: string;
  text: string;
  bg: string;
  textColor: string;
  border?: boolean;
  onClick: MouseEventHandler<HTMLDivElement>;
};

const LoginBox = ({ image, text, bg, textColor, border, onClick }: LoginBoxProps) => {
  const [title, setTitle] = useState<string>("");
  const onSubmit = async () => {
    console.log("함수 호출");

    if (!title) {
      console.error("업당");
      return;
    } else {
      const { data, error, status } = await supabase
        .from("todos")
        .insert([{ title: title }])
        .select();

      if (error) {
        console.log(error);
      }
      if (status === 201) {
        console.log(data);
      }
    }
  };

  return (
    <div
      className={loginBox}
      style={{
        background: bg,
        color: textColor,
        border: border ? "1px solid #d2d5d6" : "none",
      }}
    >
      <input onChange={(e) => setTitle(e.target.value)} />
      <button onClick={onSubmit}>제출하기</button>
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
