'use client';

import { signupContainer, signupWrapper } from './_styles/signup.css';
import { heading2, semiBold } from '@/app/_styles/font.css';
import { paddingSprinkles } from '@/app/_styles/padding.css';
import Image from 'next/image';
import { pointer } from '@/app/_styles/global.css';
import { useRouter } from 'next/navigation';
import SignupPopup from './_components/signupPopup';
import SignupForm from './_components/signupForm';

const SignupPage = () => {
  const router = useRouter();

  return (
    <>
      <SignupPopup />
      <section className={signupWrapper}>
        <article className={signupContainer}>
          <div>
            <div className={`${paddingSprinkles({ paddingBottom: 's32' })} ${pointer}`}>
              <Image
                src="/svgs/prev.svg"
                alt="back"
                width={17}
                height={21}
                onClick={() => {
                  router.push('/');
                }}
              />
            </div>

            <div className={paddingSprinkles({ paddingBottom: 's32' })}>
              <h3 className={`${semiBold} ${heading2}`}>
                회원가입을
                <br /> 시작 할까요?
              </h3>
            </div>

            <SignupForm />
          </div>
        </article>
      </section>
    </>
  );
};

export default SignupPage;
