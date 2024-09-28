import Image from "next/image";
import Logo from "@svgs/logo.svg";
import { caption } from "@styles/font.css";
import { loginTextBox, loginHeading } from "@styles/login/login.css";
import { flexSprinkles } from "./components/common/utils/flex";

export default function Login() {
  const logoClassName = flexSprinkles({
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "24px",
  });
  return (
    <main>
      <section>
        <article>
          <div className={logoClassName}>
            <Image src={Logo} alt="logo" />
            <div className={loginTextBox}>
              <h2 className={loginHeading}>Eungeori</h2>
              <p className={caption}>건강한 습관을 위한 스마트 앱</p>
            </div>
          </div>
        </article>
      </section>
    </main>
  );
}
