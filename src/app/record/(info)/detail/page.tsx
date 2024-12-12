'use client';

import Button from '@/app/components/common/Button';
import Memo from '@/app/components/common/Memo';
import { flexSprinklesFc } from '@/app/components/common/utils/flex';
import { colors } from '@/app/styles/colors.css';

import useInfoStore from '@/app/store/info/infoStore';
import { usePopupStore } from '@/app/store/popup/PopupStore';
import DetailPopup from './components/popup';
import TitleText from './components/titleText';
import { infoContainer } from '../common/common.css';
import { StepChangeHandler } from '../../page';

const DetailPage = ({ onButtonClick }: { onButtonClick: StepChangeHandler }) => {
  const setRecordNoteState = useInfoStore((state) => state.setRecordNote);
  const setDetailPopupState = usePopupStore((state) => state.setIsPopup);
  const saveRecord = useInfoStore((state) => state.saveRecord);
  const recordNoteState = useInfoStore((state) => state.recordNote);

  const onClick = () => {
    if (recordNoteState.length < 3) {
      return setDetailPopupState(true);
    } else {
      setDetailPopupState(true);
      saveRecord();
      onButtonClick(0);
    }
  };
  return (
    <>
      <DetailPopup />
      <article className={infoContainer}>
        <TitleText />

        <Memo onChange={(e) => setRecordNoteState(e.target.value)} />

        <div className={flexSprinklesFc({ gap: '16px', justifyContent: 'center' })}>
          <Button
            text="기록 완료"
            width="343px"
            height="59px"
            background={colors.primary}
            color={colors.white}
            borderRadius="10px"
            onClick={onClick}
          />
        </div>
      </article>
    </>
  );
};

export default DetailPage;
