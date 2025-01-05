import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import { formatDate, formatYYYYMMDD } from '../common/utils/date';
import Memo from '../components/common/Memo';
import { flexSprinklesFc } from '../components/common/utils/flex';
import useInfoStore from '../store/info/infoStore';

import RecordPopup from './components/popup';
import RecordCalender from './components/recordCalender';
import { plusIconBox, plusIcon } from './styles/record.css';
import Image from 'next/image';
import { StepChangeHandler } from './page';
import { supabaseClient } from '../lib/supabaseClient';
import { BowelAttributes } from '../types/bowelAttributesSchema';
import { useUserInfoStore } from '../store/user/userStore';

const RecordPage = ({ onButtonClick }: { onButtonClick: StepChangeHandler }) => {
  const [filteredData, setFilteredData] = useState<BowelAttributes[] | []>([]);
  const [isShowPopup, setIsShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState('');
  const [deleteTargetId, setDeleteTargetId] = useState<string | null>(null);
  const userInfo = useUserInfoStore((state) => state.userInfo);

  const router = useRouter();
  const startDate = useInfoStore((state) => state.startDate);

  useEffect(() => {
    const getMemoData = async () => {
      try {
        const { data, error } = await supabaseClient.from('bowel_attributes').select('*');

        if (data) {
          const date = data.filter(
            (date) => formatYYYYMMDD(new Date(date.bowel_time)) === formatYYYYMMDD(startDate),
          );
          setFilteredData(date);
        }

        if (error) {
          throw error;
        }
      } catch (e) {}
    };
    getMemoData();
  }, [startDate]);

  const onDeleteClick = async (id: string) => {
    setPopupMessage('내용을 삭제하시겠습니까?');
    setDeleteTargetId(id);
    setIsShowPopup(true);
  };

  const handleConfirmDelete = async () => {
    if (!deleteTargetId) return;

    try {
      const { data, error } = await supabaseClient
        .from('bowel_attributes')
        .delete()
        .eq('id', deleteTargetId)
        .eq('user_id', userInfo.id);

      if (error) throw error;

      setPopupMessage('삭제되었습니다.');
      setFilteredData((prevData) => prevData.filter((item) => item.id !== deleteTargetId));
      setDeleteTargetId(null);
    } catch (e) {
      setPopupMessage('삭제에 실패했습니다.');
    }
  };

  const handleClosePopup = () => {
    setIsShowPopup(false);
    setPopupMessage('');
    setDeleteTargetId(null);
  };

  const onEditClick = (date: Date, id: string) => {
    const formattedDate = formatYYYYMMDD(date);
    const url = `/edit/${formattedDate}/${id}`;
    router.push(url);
  };

  return (
    <>
      {isShowPopup && (
        <RecordPopup
          message={popupMessage}
          onClose={handleClosePopup}
          onConfirm={
            popupMessage === '내용을 삭제하시겠습니까?' ? handleConfirmDelete : handleClosePopup
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
              />
            );
          })}
        </article>

        <div
          className={plusIconBox}
          onClick={() => {
            onButtonClick(1);
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
