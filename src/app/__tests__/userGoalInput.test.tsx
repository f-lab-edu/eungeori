import UserGoalInput from '../my/components/userGoalInput';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { supabaseClient } from '@/app/lib/supabaseClient';
import { usePopupStore } from '@/app/store/popup/PopupStore';

jest.mock('../auth/common/padding.css', () => ({
  paddingSprinkles: () => 'mocked-padding-class',
}));

jest.mock('@/app/store/popup/PopupStore', () => ({
  usePopupStore: jest.fn(() => ({
    setOpenPopup: jest.fn(),
    setMessage: jest.fn(),
  })),
}));

jest.mock('@/app/lib/supabaseClient', () => ({
  supabaseClient: {
    from: jest.fn((tableName) => ({
      upsert: jest.fn().mockResolvedValue({ error: null }),
      select: jest.fn().mockResolvedValue({ data: { goal: 'value' }, error: null }),
    })),
  },
}));

describe('UserGoalInput Component', () => {
  const getInput = () => screen.getByPlaceholderText('목표를 적은 뒤 Enter 키를 눌러주세요');

  beforeEach(() => {
    render(<UserGoalInput />);
  });

  it('렌더링이 정상적으로 작동된다', () => {
    expect(getInput()).toBeInTheDocument();
  });

  it('새로운 value 값으로 업데이트 된다', () => {
    fireEvent.change(getInput(), { target: { value: '새로운 value' } });
    expect(getInput()).toHaveValue('새로운 value');
  });

  it('엔터키를 눌렀을 때 저장이 된다', async () => {
    fireEvent.change(getInput(), { target: { value: '새로운 value' } });
    fireEvent.keyDown(getInput(), { key: 'Enter', code: 'Enter' });

    await waitFor(() => {
      expect(supabaseClient.from).toHaveBeenCalledWith('user_profile');
      expect(supabaseClient.from('user_profile').upsert).toHaveBeenCalledWith(
        { id: '123', nickname: 'test', goal: '새로운 value' },
        { onConflict: 'id' },
      );

      const setMessage = usePopupStore().setMessage;
      expect(setMessage).toHaveBeenCalledWith('저장 되었습니다.');

      const setOpenPopup = usePopupStore().setOpenPopup;
      expect(setOpenPopup).toHaveBeenCalledWith(true);
    });
  });
});
