import { inputStyle } from '@/app/components/common/input.css';
import { caption, regular } from '@/app/styles/font.css';
import { paddingSprinkles } from '@/app/styles/padding.css';
import { myTargetContainer } from '../my.css';
import { useEffect, useState } from 'react';
import { usePopupStore } from '@/app/store/popup/PopupStore';
import { supabaseClient } from '@/app/lib/supabaseClient';
import { useUserInfoStore } from '@/app/store/user/userStore';

const UserGoalInput = () => {
  const [goal, setGoal] = useState<string>('');

  const userInfo = useUserInfoStore((state) => state.userInfo);

  const setOpenPopup = usePopupStore((state) => state.setIsPopup);
  const setMessageState = usePopupStore((state) => state.setMessage);

  const onGoalSave = async (goal: string) => {
    try {
      if (!userInfo.id || !goal.trim()) {
        setMessageState('유효하지 않은 입력값입니다.');
        return;
      }

      const { error } = await supabaseClient
        .from('user_profile')
        .upsert({ id: userInfo.id, nickname: userInfo.nickname, goal }, { onConflict: 'id' });

      setMessageState('저장 되었습니다.');

      if (error) {
        throw error;
      }
    } catch (e) {
      setMessageState('알 수 없는 오류가 발생했습니다.');
      return;
    } finally {
      setOpenPopup(true);
    }
  };

  const handleKeyDown = async (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && goal.trim()) {
      await onGoalSave(goal);
    }
  };

  useEffect(() => {
    const getGoalData = async () => {
      try {
        const { data, error } = await supabaseClient
          .from('user_profile')
          .select('goal')
          .eq('id', userInfo.id)
          .single();

        if (data) {
          setGoal(data.goal);
        }

        if (error) {
          throw error;
        }
      } catch (e) {
        console.log(e);
      }
    };

    getGoalData();
  }, []);

  return (
    <div className={myTargetContainer}>
      <p className={`${caption} ${regular} ${paddingSprinkles({ paddingBottom: 's4' })}`}>
        한 줄 목표
      </p>
      <input
        className={inputStyle}
        value={goal ?? ''}
        type="text"
        placeholder="목표를 적은 뒤 Enter 키를 눌러주세요"
        maxLength={30}
        onChange={(e) => {
          setGoal(e.target.value);
        }}
        onKeyDown={handleKeyDown}
      />
    </div>
  );
};

export default UserGoalInput;
