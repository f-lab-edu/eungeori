import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ko } from "date-fns/locale/ko";
import { flexSprinklesFc } from "@/app/components/common/utils/flex";
import { gray300 } from "@/app/styles/colors.css";
import { caption2 } from "@/app/styles/font.css";
import { recordDateSection } from "../styles/record.css";

import { datepickerWapper } from "../styles/datepicker.css";
import CalenderDropDown from "./calenderDropDown";
import { useRecordStore } from "@/app/store/record/recordStore";

const RecordCalender = () => {
  const startDateState = useRecordStore((state) => state.startDate);
  const setStartDateState = useRecordStore((state) => state.setStartDate);

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

export default RecordCalender;
