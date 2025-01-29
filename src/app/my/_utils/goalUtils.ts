import { supabaseClient } from '@/app/_lib/supabaseClient';

export const saveUserGoal = async (userId: string, goal: string, nickname: string) => {
  if (!userId || !goal.trim()) {
    return '유효하지 않은 입력값입니다.';
  }

  const { error } = await supabaseClient
    .from('user_profile')
    .upsert({ id: userId, nickname: nickname, goal }, { onConflict: 'id' });

  if (error) {
    throw error;
  }

  return '저장 되었습니다.';
};

export const fetchUserGoal = async (userId: string) => {
  if (!userId) return;

  const { data, error } = await supabaseClient
    .from('user_profile')
    .select('goal')
    .eq('id', userId)
    .single();

  if (error) {
    throw error;
  }

  return data.goal || '';
};
