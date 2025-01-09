import '@testing-library/jest-dom';
import { screen, render } from '@testing-library/react';
import { UseFormRegisterReturn } from 'react-hook-form';

interface InputUiProps {
  text: string;
  type: string;
  maxLength: number;
  register: UseFormRegisterReturn;
  errorMessage?: string;
}

const FormInputUI = ({ text, type, maxLength, register, errorMessage }: InputUiProps) => {
  return (
    <div>
      <p>
        {text}
        <span>*</span>
      </p>
      <input placeholder={text} {...register} maxLength={maxLength} type={type} />

      <p>{errorMessage}</p>
    </div>
  );
};

describe('loginForm', () => {
  const mockRegister: UseFormRegisterReturn = {
    onChange: jest.fn(),
    onBlur: jest.fn(),
    name: 'email',
    ref: jest.fn(),
  };

  const mockProps: InputUiProps = {
    text: 'email',
    type: 'email',
    maxLength: 50,
    register: mockRegister,
    errorMessage: '이메일을 입력해주세요',
  };

  it('이메일 입력 필드 렌더링', () => {
    render(<FormInputUI {...mockProps} />);
    const input = screen.getByPlaceholderText('email');
    expect(input).toBeInTheDocument();
  });
});
