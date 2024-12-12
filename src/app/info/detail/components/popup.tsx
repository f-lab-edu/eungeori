import Button from '@/app/components/common/Button';
import Popup from '@/app/components/common/Popup';
import useInfoStore from '@/app/store/info/infoStore';
import { usePopupStore } from '@/app/store/popup/PopupStore';
import { colors } from '@/app/styles/colors.css';
import { LocalStorage } from '@/app/types/localStorageSchema';
import { useRouter } from 'next/navigation';

const DetailPopup = () => {
  const router = useRouter();
  const detailPopupState = usePopupStore((state) => state.isPopup);
  const setDetailPopupState = usePopupStore((state) => state.setIsPopup);

  const recordNoteState = useInfoStore((state) => state.recordNote);
  const setRecordNoteState = useInfoStore((state) => state.setRecordNote);

  const detailStorage = new LocalStorage('recordNote');

  const onClick = () => {
    if (recordNoteState === '') {
      setDetailPopupState(false);
      detailStorage.set('');
      router.push('/record');
    } else {
      setDetailPopupState(false);
      detailStorage.set(recordNoteState);
      router.push('/record');
      setRecordNoteState('');
    }
  };
  return (
    <>
      {detailPopupState && (
        <Popup text="기록 되었습니다.">
          <Button text="닫기" background={colors.primary} color={colors.white} onClick={onClick} />
        </Popup>
      )}
    </>
  );
};

export default DetailPopup;
