import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
import { ko } from "date-fns/locale/ko";
import { flexSprinklesFc } from "@/app/components/common/utils/flex";
import { gray300 } from "@/app/styles/colors.css";
import { caption2 } from "@/app/styles/font.css";
import { recordDateSection } from "../styles/record.css";

import { datepickerWapper } from "../styles/datepicker.css";
import CalenderDropDown from "./calenderdropDown";

const RecordCalender = () => {
  const [startDate, setStartDate] = useState(new Date());

  const startOfYear = new Date(new Date().getFullYear(), 0, 1);
  const endOfCurrentMonth = new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0);

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
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        inline
        minDate={startOfYear}
        maxDate={endOfCurrentMonth}
        renderCustomHeader={() => <></>}
      />
    </>
  );
};

export default RecordCalender;
