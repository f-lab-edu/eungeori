import { flexSprinklesFc } from '@/app/components/common/utils/flex';
import { gray300 } from '@/app/styles/colors.css';
import { caption2 } from '@/app/styles/font.css';
import { formBox } from '../styles/login.css';
import { useRouter } from 'next/navigation';

import { signinSchema } from '@/app/types/signinSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { pointer, buttonOutLine } from '@/app/styles/global.css';

import { useLogin } from '../hook';
import FormInputUI from '../../common/inputUI';

const LoginForm = () => {
  const router = useRouter();
  const { onLoginSubmit } = useLogin();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof signinSchema>>({
    resolver: zodResolver(signinSchema),
    mode: 'onChange',
    defaultValues: {
      email: '',
      password: '',
    },
  });

  return (
    <>
      <form className={formBox} onSubmit={handleSubmit(onLoginSubmit)}>
        <div
          className={flexSprinklesFc({ flexDirection: 'column', gap: '8px' })}
          style={{ width: '95%' }}
        >
          <FormInputUI
            text="이메일"
            register={register('email')}
            errorMessage={errors.email?.message}
          />

          <FormInputUI
            text="비밀번호"
            type="password"
            maxLength={12}
            register={register('password')}
            errorMessage={errors.password?.message}
          />
        </div>
      </form>

      {/*  */}
      <p className={`${gray300} ${caption2}`}>
        <button className={`${pointer} ${buttonOutLine}`} onClick={handleSubmit(onLoginSubmit)}>
          로그인
        </button>
        {/* 띄어쓰기말고 gap으로 간격 넣어주기 / 폰트 사이즈마다 띄어쓰기는 달라짐 */}
        &nbsp; &nbsp;
        <button
          className={`${pointer} ${buttonOutLine}`}
          onClick={() => {
            router.push('/auth/signup');
          }}
        >
          회원가입
        </button>
      </p>
    </>
  );
};

export default LoginForm;
