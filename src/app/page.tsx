"use client";

import Image from "next/image";
import Logo from "@svgs/logo.svg";

import { loginTextBox, loginHeading, loginCaption, loginWrapper, loginLogo, formBox } from "@/app/login.css";
import { useRouter } from "next/navigation";
import { flexSprinklesFc } from "./components/common/utils/flex";
import { inputStyle } from "./styles/common/input.css";
import { colors, gray300, pink80 } from "./styles/colors.css";
import { caption, caption2 } from "./styles/font.css";
import { buttonOutLine, pointer } from "./styles/global.css";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { signinSchema } from "./types/signinSchema";
import { z } from "zod";
import { paddingSprinkles } from "./styles/padding.css";
import { zodResolver } from "@hookform/resolvers/zod";
import Popup from "./components/common/Popup";
import Button from "./components/common/Button";

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
  const [showPopup, setShowPopup] = useState(false);
  const [message, setMessage] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof signinSchema>>({
    resolver: zodResolver(signinSchema),
    mode: "onChange",
    defaultValues: {
      id: "",
      password: "",
    },
  });

  const onSubmit = (data: z.infer<typeof signinSchema>) => {
    if (data) {
      const getAuthInfo = localStorage.getItem("auth");

      if (getAuthInfo) {
        const parseInfo = JSON.parse(getAuthInfo);

        if (parseInfo.id !== data.id || parseInfo.password !== data.password) {
          setMessage("아이디, 비밀번호를 확인해주세요.");
          setShowPopup(true);
        }

        if (parseInfo.id === data.id && parseInfo.password === data.password) {
          router.push("/record");
          localStorage.setItem("login", JSON.stringify(data));
        }
      }
    } else {
      setMessage("가입된 정보를 확인해주세요.");
      setShowPopup(true);
    }
  };

  const logoClassName = flexSprinklesFc({
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "24px",
  });
  return (
    <>
      {showPopup && (
        <Popup text={message}>
          <Button
            text="확인"
            background={colors.primary}
            color={colors.white}
            onClick={() => {
              setShowPopup(false);
              setMessage("");
            }}
          />
        </Popup>
      )}
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

          <form className={formBox} onSubmit={handleSubmit(onSubmit)}>
            <div
              className={flexSprinklesFc({ flexDirection: "column", gap: "8px" })}
              style={{ width: "95%" }}
            >
              <div>
                <input className={inputStyle} placeholder="아이디" {...register("id")} maxLength={10} />

                <p className={`${paddingSprinkles({ paddingTop: "s4" })} ${caption} ${pink80}`}>
                  {errors.id?.message}
                </p>
              </div>

              <div>
                <input
                  className={inputStyle}
                  placeholder="비밀번호"
                  {...register("password")}
                  type="password"
                  maxLength={12}
                />
                <p className={`${paddingSprinkles({ paddingTop: "s4" })} ${caption} ${pink80}`}>
                  {errors.password?.message}
                </p>
              </div>
            </div>
          </form>

          <p className={`${gray300} ${caption2}`}>
            <button className={`${pointer} ${buttonOutLine}`} onClick={handleSubmit(onSubmit)}>
              로그인
            </button>{" "}
            |{" "}
            <button
              className={`${pointer} ${buttonOutLine}`}
              onClick={() => {
                router.push("/auth/signup");
              }}
            >
              회원가입
            </button>
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
    </>
  );
}
