import { useState } from "react";
import { dropDownButton } from "../styles/datepicker.css";

const CalenderDropDown = () => {
  const [isShow, setShow] = useState(false);

  const currentYear = new Date().getFullYear();
  const currentMonth = new Date().getMonth();

  const defaultMonth = `${currentYear}.${String(currentMonth + 1).padStart(2, "0")}`;

  const months = Array.from({ length: currentMonth + 1 }, (_, i) => ({
    value: i,
    label: `${currentYear}.${String(i + 1).padStart(2, "0")}`,
  }));

  return (
    <>
      <button className={dropDownButton} onClick={() => setShow(true)}>
        {defaultMonth}
      </button>
      {isShow && (
        <ul>
          {months.map((month) => (
            <li key={month.label}>{month.label}</li>
          ))}
        </ul>
      )}
    </>
  );
};

export default CalenderDropDown;
