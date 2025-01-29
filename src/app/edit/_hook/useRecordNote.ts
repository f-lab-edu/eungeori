import { supabaseClient } from '@/app/_lib/supabaseClient';
import useInfoStore from '@/app/_store/info/infoStore';
import { usePopupStore } from '@/app/_store/popup/popupStore';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const useRecordNote = (id: string) => {
  const router = useRouter();

  const setEditPopupState = usePopupStore((state) => state.setOpenPopup);
  const setRecordNoteState = useInfoStore((state) => state.setRecordNote);
  const setEditPopupMessageState = usePopupStore((state) => state.setMessage);

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
      console.error(e);
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
      } catch (e) {
        console.error(e);
      }
    };

    getRecordData();
  }, []);

  return { updateRecordNote };
};

export default useRecordNote;
