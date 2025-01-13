import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { flexSprinklesFc } from '@/app/_components/common/utils/flex';
import { gray300 } from '@/app/_styles/colors.css';
import { caption2 } from '@/app/_styles/font.css';
import { recordDateSection } from '../_styles/record.css';

import { datepickerWrapper } from '../_styles/datepicker.css';

import { createContext, Dispatch, SetStateAction, useContext, useState } from 'react';
import useInfoStore from '@/app/_store/info/infoStore';
import CalenderDropDown from './calenderDropDown';

type CalenderContext = {
  isShow: boolean;
  setIsShow: Dispatch<SetStateAction<boolean>>;
  startDateState: Date;
  setStartDateState: (state: Date) => void;
};

const CalenderContext = createContext<CalenderContext | undefined>(undefined);

const RecordCalender = ({ children }: { children: React.ReactNode }) => {
  const [isShow, setIsShow] = useState(false);
  const startDateState = useInfoStore((state) => state.startDate);
  const setStartDateState = useInfoStore((state) => state.setStartDate);

  return (
    <CalenderContext.Provider value={{ isShow, setIsShow, startDateState, setStartDateState }}>
      <>{children}</>
    </CalenderContext.Provider>
  );
};

export const useCalenderContext = () => {
  const context = useContext(CalenderContext);

  if (!context) throw new Error('recordCalender 내에서 사용하기');

  return context;
};

const Calender = () => {
  const { startDateState, setStartDateState } = useCalenderContext();

  const startOfYear = new Date(startDateState.getFullYear(), 0, 1);
  const days = ['일', '월', '화', '수', '목', '금', '토'];
  return (
    <>
      <article
        className={`${flexSprinklesFc({
          alignItems: 'center',
          justifyContent: 'space-between',
        })} ${recordDateSection}`}
      >
        <CalenderDropDown />
        <p className={`${caption2} ${gray300}`}>오늘 하루를 기록해 볼까요?</p>
      </article>
      <DatePicker
        className={datepickerWrapper}
        selected={startDateState}
        onChange={(date) => {
          if (date !== null) {
            setStartDateState(date);
          }
        }}
        inline
        minDate={startOfYear}
        maxDate={new Date()}
        renderCustomHeader={() => <></>}
        formatWeekDay={(nameOfDay) => {
          const dayIndex = [
            'Sunday',
            'Monday',
            'Tuesday',
            'Wednesday',
            'Thursday',
            'Friday',
            'Saturday',
          ].indexOf(nameOfDay);
          return days[dayIndex];
        }}
      />
    </>
  );
};

RecordCalender.Calender = Calender;

export default RecordCalender;
