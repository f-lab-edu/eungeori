import { useEffect, useRef, useState } from "react";
import { dropDownButton, dropDownList, dropDownUL } from "../styles/datepicker.css";
import { useRecordStore } from "@/app/store/record/recordStore";

const CalenderDropDown = () => {
  const [isShow, setShow] = useState(false);
  const dropDownRef = useRef<HTMLDivElement>(null);

  const startDateState = useRecordStore((state) => state.startDate);
  const setStartDateState = useRecordStore((state) => state.setStartDate);

  const currentYear = new Date().getFullYear();
  const currentMonth = new Date().getMonth();

  const months = Array.from({ length: currentMonth + 1 }, (_, i) => ({
    value: i,
    label: `${currentYear}.${String(i + 1).padStart(2, "0")}`,
  }));

  const onClickDate = (month: number) => {
    setShow(false);
    setStartDateState(new Date(currentYear, month, 1));
  };

  useEffect(() => {
    const onClickOutside = (event: MouseEvent) => {
      if (dropDownRef.current && !dropDownRef.current.contains(event.target as Node)) {
        setShow(false);
      }
    };

    document.addEventListener("mousedown", onClickOutside);
    return () => {
      document.removeEventListener("mousedown", onClickOutside);
    };
  }, []);

  return (
    <div ref={dropDownRef}>
      <button className={dropDownButton} onClick={() => setShow((state) => !state)}>
        {`${startDateState.getFullYear()}.${String(startDateState.getMonth() + 1).padStart(2, "0")}`}
      </button>
      {isShow && (
        <ul className={dropDownUL}>
          {months.map((month) => (
            <li
              key={month.label}
              className={dropDownList}
              onClick={() => {
                onClickDate(month.value);
              }}
            >
              {month.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CalenderDropDown;
