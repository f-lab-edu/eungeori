import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import FormInputUI from '../auth/common/inputUI';

jest.mock('../auth/common/padding.css', () => ({
  paddingSprinkles: () => 'mocked-padding-class',
}));

describe(FormInputUI, () => {
  const formInputUIProps = {
    text: '이메일',
    type: 'email',
    maxLength: 50,
    register: {
      onChange: jest.fn(),
      onBlur: jest.fn(),
      name: 'email',
      ref: jest.fn(),
    },
    errorMessage: '이메일을 입력하세요',
  };

  const getInput = () => screen.getByPlaceholderText(formInputUIProps.text);

  beforeEach(() => {
    render(<FormInputUI {...formInputUIProps} />);
  });

  it('렌더링이 정상적으로 작동된다', () => {
    expect(screen.getByText('*')).toBeInTheDocument();
    expect(screen.getByText(formInputUIProps.text)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(formInputUIProps.text)).toBeInTheDocument();
  });

  it('에러 메시지가 표시된다', () => {
    expect(screen.getByText(formInputUIProps.errorMessage)).toBeInTheDocument();
  });

  it('입력 제한이 된다', () => {
    expect(getInput()).toHaveAttribute('maxLength', String(formInputUIProps.maxLength));
  });

  it('사용자 입력이 정상적으로 동작한다', async () => {
    const user = userEvent.setup();

    await user.type(getInput(), 'jetom.shin@gmail.com');
    expect(getInput()).toHaveValue('jetom.shin@gmail.com');
  });
});
