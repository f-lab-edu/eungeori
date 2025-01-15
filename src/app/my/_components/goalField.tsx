import { inputStyle } from '@/app/_components/common/input.css';
import { caption, regular } from '@/app/_styles/font.css';
import { paddingSprinkles } from '@/app/_styles/padding.css';
import { myTargetContainer } from '../_my.css';
import { useEffect, useState } from 'react';
import { usePopupStore } from '@/app/_store/popup/popupStore';
import { supabaseClient } from '@/app/_lib/supabaseClient';
import { useUserInfoStore } from '@/app/_store/user/userStore';
import { fetchUserGoal, saveUserGoal } from '../_utils/goalUtils';

const GoalField = () => {
  const [goal, setGoal] = useState<string>('');

  const setOpenPopup = usePopupStore((state) => state.setOpenPopup);
  const setMessageState = usePopupStore((state) => state.setMessage);

  const userInfo = useUserInfoStore((state) => state.userInfo);

  const onGoalSave = async (goal: string) => {
    try {
      const message = await saveUserGoal(userInfo.id, userInfo.nickname, goal);
      setMessageState(message);
    } catch (e) {
      console.error(e);
      setMessageState('알 수 없는 오류가 발생했습니다.');
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
        const goal = await fetchUserGoal(userInfo.id);
        setGoal(goal);
      } catch (e) {
        console.error(e);
      }
    };

    getGoalData();
  }, [userInfo]);

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

export default GoalField;
