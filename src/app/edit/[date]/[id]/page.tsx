'use client';

import Button from '@/app/components/common/Button';
import { flexSprinklesFc } from '@/app/components/common/utils/flex';
import { heading2, semiBold } from '@/app/styles/font.css';
import { supabaseClient } from '@/app/lib/supabaseClient';
import { usePathname, useRouter } from 'next/navigation';
import { infoContainer } from '@/app/record/(info)/common/common.css';
import Memo from '@/app/components/common/Memo';
import useInfoStore from '@/app/store/info/infoStore';
import { colors } from '@/app/styles/colors.css';
import { useEffect } from 'react';
import { usePopupStore } from '@/app/store/popup/PopupStore';
import Popup from '@/app/components/common/Popup';

const DetailEditPage = () => {
  const recordNoteState = useInfoStore((state) => state.recordNote);
  const setRecordNoteState = useInfoStore((state) => state.setRecordNote);

  const editPopupState = usePopupStore((state) => state.openPopup);
  const setEditPopupState = usePopupStore((state) => state.setOpenPopup);
  const setEditPopupMessageState = usePopupStore((state) => state.setMessage);

  const router = useRouter();
  const pathname = usePathname();
  const id = pathname.split('/')[3];

  const updateRecordNote = async (id: string, newNote: string) => {
    try {
      const { data, error } = await supabaseClient
        .from('bowel_attributes')
        .update({ record_note: newNote })
        .eq('id', id)
        .select('record_note');

      if (data) {
        setEditPopupState(true);
        setEditPopupMessageState('수정 되었습니다.');
        setRecordNoteState('');

        setTimeout(() => {
          router.push('/record');
        }, 2000);
      }

      if (error) {
        throw error;
      }
    } catch (e) {
      setEditPopupState(true);
      setEditPopupMessageState('수정에 실패했습니다.');
    }
  };

  useEffect(() => {
    const getRecordData = async () => {
      try {
        const { data, error } = await supabaseClient
          .from('bowel_attributes')
          .select('*')
          .eq('id', id)
          .single();

        if (data) {
          setRecordNoteState(data.record_note);
        }

        if (error) {
          throw error;
        }
      } catch (e) {}
    };

    getRecordData();
  }, []);

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
