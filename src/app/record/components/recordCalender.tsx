import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ko } from "date-fns/locale/ko";
import { flexSprinklesFc } from "@/app/components/common/utils/flex";
import { gray300 } from "@/app/styles/colors.css";
import { caption2 } from "@/app/styles/font.css";
import { recordDateSection } from "../styles/record.css";

import { datepickerWapper } from "../styles/datepicker.css";

import { createContext, Dispatch, SetStateAction, useContext, useState } from "react";
import CalenderDropDown from "./calenderDropDown";
import useInfoStore from "@/app/store/info/infoStore";

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

  if (!context) throw new Error("recordCalender 내에서 사용하기");

  return context;
};

const Calender = () => {
  const { startDateState, setStartDateState } = useCalenderContext();

  const startOfYear = new Date(startDateState.getFullYear(), 0, 1);
  return (
    <>
      <article
        className={`${flexSprinklesFc({
          alignItems: "center",
          justifyContent: "space-between",
        })} ${recordDateSection}`}
      >
        <CalenderDropDown />
        <p className={`${caption2} ${gray300}`}>오늘 하루를 기록해 볼까요?</p>
      </article>
      <DatePicker
        className={datepickerWapper}
        locale={ko}
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
      />
    </>
  );
};

RecordCalender.Calender = Calender;

export default RecordCalender;
