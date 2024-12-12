import Button from '@/app/components/common/Button';
import Popup from '@/app/components/common/Popup';
import useInfoStore from '@/app/store/info/infoStore';
import { usePopupStore } from '@/app/store/popup/PopupStore';
import { colors } from '@/app/styles/colors.css';
import { useRouter } from 'next/navigation';

const DetailPopup = () => {
  const router = useRouter();
  const detailPopupState = usePopupStore((state) => state.isPopup);
  const setDetailPopupState = usePopupStore((state) => state.setIsPopup);

  const recordNoteState = useInfoStore((state) => state.recordNote);
  const setRecordNoteState = useInfoStore((state) => state.setRecordNote);

  const onClick = () => {
    if (recordNoteState.length < 3) {
      setDetailPopupState(false);
    } else {
      setDetailPopupState(false);
      router.push('/record');
      setRecordNoteState('');
    }
  };

  const popupText =
    recordNoteState.length === 0 ? '세 글자 이상 입력해 주세요.' : '기록 되었습니다.';

  return (
    <>
      {detailPopupState && (
        <Popup text={popupText}>
          <Button text="닫기" background={colors.primary} color={colors.white} onClick={onClick} />
        </Popup>
      )}
    </>
  );
};

export default DetailPopup;
