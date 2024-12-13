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

const RecordPage = ({ onButtonClick }: { onButtonClick: StepChangeHandler }) => {
  const [isShow, setIsShow] = useState(false);
  const [filterdData, setFilterdData] = useState<BowelAttributes[] | []>([]);

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
          setFilterdData(date);
        }

        if (error) {
          throw error;
        }
      } catch (e) {}
    };
    getMemoData();
  }, [startDate]);

  const onDeleteClick = () => {
    setIsShow(true);
  };

  const onEditClick = (date: Date, idx: number) => {
    const formattedDate = formatYYYYMMDD(date);
    router.push(`detail/${formattedDate}/${idx}`);
  };

  return (
    <>
      {isShow && (
        <RecordPopup
          onClick={() => {
            setIsShow(false);
          }}
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
          {filterdData.map((date) => {
            const dateData = formatDate(new Date(date.bowel_time));
            return <Memo key={date.id} date={dateData} text={date.record_note} height="145px" />;
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
