'use client';

import Button from '@/app/_components/common/Button';
import Memo from '@/app/_components/common/Memo';
import { flexSprinklesFc } from '@/app/_components/common/utils/flex';
import { colors } from '@/app/_styles/colors.css';

import useInfoStore from '@/app/_store/info/infoStore';
import { usePopupStore } from '@/app/_store/popup/PopupStore';
import DetailPopup from './components/popup';
import TitleText from './components/titleText';
import { infoContainer } from '../_common/common.css';
import { Step, StepChangeHandler } from '../../page';
import useDetailActions from './hook/useDetailActions';

const DetailPage = ({ onButtonClick }: { onButtonClick: StepChangeHandler }) => {
  const detailPopupState = usePopupStore((state) => state.openPopup);
  const recordNoteState = useInfoStore((state) => state.recordNote);
  const { onSaveClick } = useDetailActions(onButtonClick);

  return (
    <>
      {detailPopupState && <DetailPopup />}
      <article className={infoContainer}>
        <TitleText />

        <Memo text={recordNoteState} />

        <div className={flexSprinklesFc({ gap: '16px', justifyContent: 'center' })}>
          <Button
            height="59px"
            text="이전"
            borderRadius="10px"
            onClick={() => {
              onButtonClick(Step.STEP1);
            }}
          />
          <Button
            text="기록 완료"
            width="343px"
            height="59px"
            background={colors.primary}
            color={colors.white}
            borderRadius="10px"
            onClick={onSaveClick}
          />
        </div>
      </article>
    </>
  );
};

export default DetailPage;
