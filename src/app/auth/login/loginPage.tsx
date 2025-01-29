'use client';

import Image from 'next/image';
import Logo from '@svgs/logo.svg';
import {
  loginWrapper,
  loginLogo,
  loginTextBox,
  loginHeading,
  loginCaption,
} from './_styles/login.css';
import LoginForm from './_components/loginForm';
import LoginPopup from './_components/loginPopup';
import { flexSprinklesFc } from '@/app/_components/common/utils/flex';

const LoginPage = () => {
  const logoClassName = flexSprinklesFc({
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '24px',
  });
  return (
    <>
      <LoginPopup />
      <section
        className={`${loginWrapper} ${flexSprinklesFc({
          flexDirection: 'column',
          justifyContent: 'space-between',
        })}`}
      >
        <article className={`${logoClassName} ${loginLogo}`} style={{ width: '100%' }}>
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
};

export default LoginPage;
