// loginPage.test.tsx
import { render } from '@testing-library/react';
import LoginPage from '../loginPage';

jest.mock('@supabase/ssr');

jest.mock('@/app/components/common/utils/flex', () => ({
  flexSprinklesFc: () => 'mocked-class-name',
}));

jest.mock('./styles/login.css', () => ({
  loginWrapper: 'login-wrapper-class',
  loginLogo: 'login-logo-class',
  loginTextBox: 'login-textbox-class',
  loginHeading: 'login-heading-class',
  loginCaption: 'login-caption-class',
}));

describe('LoginPage', () => {
  beforeEach(() => {
    process.env.NEXT_PUBLIC_SUPABASE_URL = 'mock_url';
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY = 'mock_key';
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders login page correctly', () => {
    render(<LoginPage />);
  });
});
