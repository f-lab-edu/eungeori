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
import { RecordSchema } from '../types/recordSchema';

type RecordData = RecordSchema['recordData'];

const RecordPage = ({ onButtonClick }: { onButtonClick: StepChangeHandler }) => {
  const [isShow, setIsShow] = useState(false);
  const [filterdData, setFilterdData] = useState<RecordData>([]);

  const router = useRouter();
  const startDate = useInfoStore((state) => state.startDate);

  // useEffect(() => {
  //   const recordData = new LocalStorage('recordData');
  //   const data = recordData.get();

  //   const filtered = data?.filter(
  //     (item) => formatDate(new Date(item.date)) === formatDate(new Date(startDate)),
  //   );

  //   setFilterdData(filtered || []);
  // }, [startDate]);

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
          {filterdData?.map((data, idx) => (
            <Memo
              key={idx}
              date={formatDate(new Date(data.date))}
              text={data.recordNote}
              edit
              onEditClick={() => {
                onEditClick(new Date(data.date), idx);
              }}
              onDeleteClick={onDeleteClick}
            />
          ))}
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
