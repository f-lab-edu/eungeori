import { inputStyle } from '@/app/_components/common/input.css';
import { pink80 } from '@/app/_styles/colors.css';
import { caption, regular } from '@/app/_styles/font.css';
import { paddingSprinkles } from '@/app/_styles/padding.css';
import { HTMLInputTypeAttribute } from 'react';
import { UseFormRegister } from 'react-hook-form';

type InputUiProps = {
  text: string;
  type?: HTMLInputTypeAttribute;
  maxLength?: number;
  register: ReturnType<UseFormRegister<any>>;
  errorMessage: string | undefined;
};

const FormInputUI = ({ text, type, maxLength, register, errorMessage }: InputUiProps) => {
  return (
    <div>
      <p className={`${caption} ${regular} ${paddingSprinkles({ paddingBottom: 's4' })}`}>
        {text}
        <span className={`${pink80}`}>*</span>
      </p>
      <input
        placeholder={text}
        className={inputStyle}
        {...register}
        maxLength={maxLength}
        type={type}
      />

      <p className={`${paddingSprinkles({ paddingTop: 's4' })} ${caption} ${pink80}`}>
        {errorMessage}
      </p>
    </div>
  );
};

export default FormInputUI;
