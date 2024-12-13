'use client';

import Button from '@/app/components/common/Button';
import { flexSprinklesFc } from '@/app/components/common/utils/flex';
import { heading2, semiBold } from '@/app/styles/font.css';
import { supabaseClient } from '@/app/lib/supabaseClient';
import { usePathname, useSearchParams } from 'next/navigation';
import { infoContainer } from '@/app/record/(info)/common/common.css';

const DetailEditPage = () => {
  const pathname = usePathname();

  console.log(pathname.split('/'), 'test');

  const updateRecordNote = async (id: string, newNote: string) => {
    try {
      const { data, error } = await supabaseClient
        .from('bowel_attributes')
        .update({ record_note: newNote })
        .eq('id', id);

      if (error) {
        throw error;
      }

      return data;
    } catch (e) {}
  };

  return (
    <article className={infoContainer}>
      <div className={`${flexSprinklesFc({ flexDirection: 'column', gap: '16px' })} `}>
        <h3 className={`${semiBold} ${heading2}`}>
          자유롭게
          <br />
          수정해보세요.
        </h3>
      </div>

      {/* <Memo onChange={(e) => setRecordNoteState(e.target.value)} /> */}

      {/* <div className={flexSprinklesFc({ gap: '16px', justifyContent: 'center' })}>
        <Button
          height="59px"
          text="이전"
          borderRadius="10px"
          onClick={() => {
            // onButtonClick(0);
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
      </div> */}
    </article>
  );
};

export default DetailEditPage;
