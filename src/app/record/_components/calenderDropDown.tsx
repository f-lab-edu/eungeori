import { useRef, useEffect } from 'react';
import { dropDownButton, dropDownUL, dropDownList } from '../_styles/datepicker.css';
import { useCalenderContext } from './recordCalender';

const CalenderDropDown = () => {
  const { startDateState, setStartDateState, isShow, setIsShow } = useCalenderContext();

  const dropDownRef = useRef<HTMLDivElement>(null);

  const currentYear = new Date().getFullYear();
  const currentMonth = new Date().getMonth();

  const months = Array.from({ length: currentMonth + 1 }, (_, i) => ({
    value: i,
    label: `${currentYear}.${String(i + 1).padStart(2, '0')}`,
  }));

  const onClickDate = (month: number) => {
    setIsShow(false);
    setStartDateState(new Date(currentYear, month, 1));
  };

  useEffect(() => {
    const onClickOutside = (event: MouseEvent) => {
      if (dropDownRef.current && !dropDownRef.current.contains(event.target as Node)) {
        setIsShow(false);
      }
    };

    document.addEventListener('mousedown', onClickOutside);
    return () => {
      document.removeEventListener('mousedown', onClickOutside);
    };
  }, []);

  return (
    <div ref={dropDownRef}>
      <button className={dropDownButton} onClick={() => setIsShow((state) => !state)}>
        {`${startDateState.getFullYear()}.${String(startDateState.getMonth() + 1).padStart(2, '0')}`}
      </button>
      {isShow && (
        <ul className={dropDownUL}>
          {months.map((month) => (
            <li key={month.label}>
              <button
                className={dropDownList}
                onClick={() => {
                  onClickDate(month.value);
                }}
              >
                {month.label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CalenderDropDown;
