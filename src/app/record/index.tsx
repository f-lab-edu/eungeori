import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import { formatDate, formatYYYYMMDD } from '../_common/utils/date';
import Memo from '../_components/common/memo';
import { flexSprinklesFc } from '../_components/common/utils/flex';
import useInfoStore from '../_store/info/infoStore';

import { plusIconBox, plusIcon } from './_styles/record.css';
import Image from 'next/image';
import { Step, StepChangeHandler } from './page';
import { supabaseClient } from '../_lib/supabaseClient';
import { BowelAttributes } from '../_types/bowelAttributesSchema';
import { useUserInfoStore } from '../_store/user/userStore';
import { usePopupStore } from '../_store/popup/popupStore';

import RecordPopup from './_components/recordPopup';
import RecordCalender from './_components/recordCalender';
import { fetchFilteredData, handleDelete } from './_utils/memoUtils';

const RecordPage = ({ onButtonClick }: { onButtonClick: StepChangeHandler }) => {
  const [filteredData, setFilteredData] = useState<BowelAttributes[] | []>([]);
  const [deleteTargetId, setDeleteTargetId] = useState<string | null>(null);

  const message = usePopupStore((state) => state.message);
  const setMessage = usePopupStore((state) => state.setMessage);
  const openPopup = usePopupStore((state) => state.openPopup);
  const setOpenPopup = usePopupStore((state) => state.setOpenPopup);

  const userInfo = useUserInfoStore((state) => state.userInfo);

  const router = useRouter();
  const startDate = useInfoStore((state) => state.startDate);

  useEffect(() => {
    const getMemoData = async () => {
      const filtered = await fetchFilteredData(startDate);
      setFilteredData(filtered);
    };
    getMemoData();
  }, [startDate]);

  const onDeleteClick = async (id: string) => {
    setMessage('내용을 삭제하시겠습니까?');
    setDeleteTargetId(id);
    setOpenPopup(true);
  };

  const handleConfirmDelete = async () => {
    if (!deleteTargetId) return;

    await handleDelete(deleteTargetId, userInfo.id, setFilteredData);
    setDeleteTargetId(null);
  };

  const handleClosePopup = () => {
    setOpenPopup(false);
    setMessage('');
    setDeleteTargetId(null);
  };

  const onEditClick = (date: Date, id: string) => {
    const formattedDate = formatYYYYMMDD(date);
    const url = `/edit/${formattedDate}/${id}`;
    router.push(url);
  };

  return (
    <>
      {openPopup && (
        <RecordPopup
          message={message ?? ''}
          onClose={handleClosePopup}
          onConfirm={
            message === '내용을 삭제하시겠습니까?' ? handleConfirmDelete : handleClosePopup
          }
        />
      )}

      <section>
        <RecordCalender>
          <RecordCalender.Calender />
        </RecordCalender>

        <article
          className={`${flexSprinklesFc({
            flexDirection: 'column',
            gap: '8px',
          })}`}
        >
          {filteredData.map((date) => {
            const dateData = formatDate(new Date(date.bowel_time));
            return (
              <Memo
                key={date.id}
                date={dateData}
                text={date.record_note}
                height="145px"
                edit
                onEditClick={() => {
                  onEditClick(new Date(date.bowel_time), date.id);
                }}
                onDeleteClick={() => {
                  onDeleteClick(date.id);
                }}
                isReadOnly
              />
            );
          })}
        </article>

        <div
          className={plusIconBox}
          role="button"
          tabIndex={0}
          onClick={() => {
            onButtonClick(Step.STEP2);
          }}
        >
          <div className={plusIcon}>
            <Image src="/svgs/plus.svg" alt="add" width={10} height={10} />
          </div>
        </div>
      </section>
    </>
  );
};

export default RecordPage;
