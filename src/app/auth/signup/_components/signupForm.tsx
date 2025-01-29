import Button from '@/app/_components/common/button';
import { flexSprinklesFc } from '@/app/_components/common/utils/flex';
import { colors } from '@/app/_styles/colors.css';
import { signupSchema } from '@/app/_types/signupSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { useSignup } from '../_hook';
import FormInputUI from '../../_common/inputUI';

const SignupForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<z.infer<typeof signupSchema>>({
    resolver: zodResolver(signupSchema),
    mode: 'onChange',
    defaultValues: {
      email: '',
      password: '',
      confirmPassword: '',
      nickname: '',
    },
  });

  const { onSignupSubmit } = useSignup();

  return (
    <form
      onSubmit={handleSubmit(onSignupSubmit)}
      className={flexSprinklesFc({ flexDirection: 'column', gap: '32px' })}
    >
      <div className={flexSprinklesFc({ flexDirection: 'column', gap: '8px' })}>
        <FormInputUI
          text="이메일"
          register={register('email')}
          errorMessage={errors.email?.message}
        />

        <FormInputUI
          text="비밀번호"
          type="password"
          maxLegnth={12}
          register={register('password')}
          errorMessage={errors.password?.message}
        />

        <FormInputUI
          text="비밀번호 확인"
          type="password"
          maxLegnth={12}
          register={register('confirmPassword')}
          errorMessage={errors.confirmPassword?.message}
        />

        <FormInputUI
          text="닉네임"
          maxLegnth={12}
          register={register('nickname')}
          errorMessage={errors.nickname?.message}
        />
      </div>

      <div>
        <Button
          text="가입하기"
          width="100%"
          background={isValid ? colors.point : colors.gray200}
          color={colors.white}
          fontSize="12px"
          disabled={!isValid}
        />
      </div>
    </form>
  );
};

export default SignupForm;
