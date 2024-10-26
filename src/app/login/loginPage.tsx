"use client";

import Image from "next/image";
import Logo from "@svgs/logo.svg";
import { flexSprinklesFc } from "../components/common/utils/flex";
import { loginWrapper, loginLogo, loginTextBox, loginHeading, loginCaption } from "./styles/login.css";
import LoginForm from "./components/loginForm";
import LoginPopup from "./components/loginPopup";

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
      </section>
    </>
  );
}
