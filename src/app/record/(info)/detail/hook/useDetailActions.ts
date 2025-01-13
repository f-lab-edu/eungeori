import { formatToLocalISOString, formatToLocalYYYYMMDD } from '@/app/_common/utils/date';
import { supabaseClient } from '@/app/_lib/supabaseClient';
import { Step, StepChangeHandler } from '@/app/record/page';
import useInfoStore from '@/app/_store/info/infoStore';
import { usePopupStore } from '@/app/_store/popup/PopupStore';
import { useUserInfoStore } from '@/app/_store/user/userStore';

const useDetailActions = (onButtonClick: StepChangeHandler) => {
  const { recordNote, setRecordNote, stoolAttributes, bowelTime, startDate } = useInfoStore();

  const setDetailPopupState = usePopupStore((state) => state.setOpenPopup);
  const setDetailPopupMessageState = usePopupStore((state) => state.setMessage);

  const userId = useUserInfoStore((state) => state.userInfo.id);

  const time = formatToLocalISOString(bowelTime, formatToLocalYYYYMMDD(startDate));

  const handleSaveData = async () => {
    try {
      const { data, error } = await supabaseClient
        .from('bowel_attributes')
        .insert([
          {
            bowel_time: time,
            stool_attributes: stoolAttributes,
            record_note: recordNote,
            user_id: userId,
          },
        ])
        .select('record_note');

      if (error) {
        throw error;
      }

      if (data) {
        return true;
      }
    } catch (e) {
      setDetailPopupState(true);
      setDetailPopupMessageState('기록에 실패했습니다.');
      return false;
    }
  };

  const onSaveClick = async () => {
    if (recordNote.length < 3) {
      setDetailPopupState(true);
      setDetailPopupMessageState('세 글자 이상 입력해 주세요.');
      return;
    }

    if (recordNote.length > 250) {
      setDetailPopupState(true);
      setDetailPopupMessageState('최대 글자 수는 250자를 넘을 수 없습니다.');
      return;
    }

    const saveSuccess = await handleSaveData();

    if (saveSuccess) {
      setDetailPopupState(true);
      setDetailPopupMessageState('기록 되었습니다.');

      setTimeout(() => {
        onButtonClick(Step.STEP1);
      }, 1000); // 팝업을 닫지 않아도 이동되게
    } else {
      setDetailPopupState(true);
      setDetailPopupMessageState('기록에 실패했습니다. 다시 시도해 주세요.');
    }
    setRecordNote('');
  };

  return {
    onSaveClick,
  };
};

export default useDetailActions;
