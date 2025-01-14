import { formatYYYYMMDD } from '@/app/_common/utils/date';
import { supabaseClient } from '@/app/_lib/supabaseClient';
import { usePopupStore } from '@/app/_store/popup/popupStore';
import { BowelAttributes } from '@/app/_types/bowelAttributesSchema';
import { SetStateAction } from 'react';

export const fetchFilteredData = async (filterDate: Date) => {
  try {
    const { data, error } = await supabaseClient.from('bowel_attributes').select('*');

    if (error) {
      throw error;
    }

    return data.filter(
      (item) => formatYYYYMMDD(new Date(item.bowel_time)) === formatYYYYMMDD(filterDate),
    );
  } catch (e) {
    return [];
  }
};

export const handleDelete = async (
  deleteTargetId: string,
  userId: string,
  setFilteredData: (value: SetStateAction<[] | BowelAttributes[]>) => void,
) => {
  const setMessage = usePopupStore((state) => state.setMessage);

  try {
    const { data, error } = await supabaseClient
      .from('bowel_attributes')
      .delete()
      .eq('id', deleteTargetId)
      .eq('user_id', userId);

    if (error) throw error;

    setMessage('삭제되었습니다.');
    setFilteredData((prevData) => prevData.filter((item) => item.id !== deleteTargetId));
  } catch (e) {
    setMessage('삭제에 실패했습니다.');
  }
};
