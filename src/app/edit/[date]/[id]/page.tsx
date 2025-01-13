'use client';

import Button from '@/app/_components/common/button';
import { flexSprinklesFc } from '@/app/_components/common/utils/flex';
import { heading2, semiBold } from '@/app/_styles/font.css';

import { usePathname, useRouter } from 'next/navigation';
import { infoContainer } from '@/app/record/(info)/_common/common.css';
import Memo from '@/app/_components/common/memo';
import useInfoStore from '@/app/_store/info/infoStore';
import { colors } from '@/app/_styles/colors.css';
import { usePopupStore } from '@/app/_store/popup/popupStore';
import Popup from '@/app/_components/common/popup';
import useRecordNote from '../../_hook/useRecordNote';

const DetailEditPage = () => {
  const recordNoteState = useInfoStore((state) => state.recordNote);

  const editPopupState = usePopupStore((state) => state.openPopup);
  const setEditPopupState = usePopupStore((state) => state.setOpenPopup);

  const router = useRouter();
  const pathname = usePathname();
  const id = pathname.split('/')[3];

  const { updateRecordNote } = useRecordNote(id);

  return (
    <>
      {editPopupState && (
        <Popup>
          <Button
            text="닫기"
            background={colors.primary}
            color={colors.white}
            onClick={() => {
              setEditPopupState(false);
            }}
          />
        </Popup>
      )}
      <article className={infoContainer}>
        <div className={`${flexSprinklesFc({ flexDirection: 'column', gap: '16px' })} `}>
          <h3 className={`${semiBold} ${heading2}`}>
            자유롭게
            <br />
            수정해보세요.
          </h3>
        </div>

        <Memo text={recordNoteState} />

        <div className={flexSprinklesFc({ gap: '16px', justifyContent: 'center' })}>
          <Button
            height="59px"
            text="이전"
            borderRadius="10px"
            onClick={() => {
              router.push('/record');
            }}
          />
          <Button
            text="기록 완료"
            width="343px"
            height="59px"
            background={colors.primary}
            color={colors.white}
            borderRadius="10px"
            onClick={() => {
              updateRecordNote(id, recordNoteState);
            }}
          />
        </div>
      </article>
    </>
  );
};

export default DetailEditPage;
