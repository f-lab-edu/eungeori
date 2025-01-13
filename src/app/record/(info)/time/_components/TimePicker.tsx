import { flexSprinklesFc } from '@/app/_components/common/utils/flex';
import { semiBold } from '@/app/_styles/font.css';
import { amPmText, hourText } from '../_styles/timePicker.css';
import { gray300 } from '@/app/_styles/colors.css';
import { useEffect, useState } from 'react';
import useInfoStore from '@/app/_store/info/infoStore';
import useDebounce from '@/app/_hook/useDebounce';

const TimePicker = () => {
  const now = new Date();

  let initialHour = now.getHours();
  let initialMinute = Math.ceil(now.getMinutes() / 10) * 10;

  if (initialMinute === 60) {
    initialHour = initialHour === 23 ? 0 : initialHour + 1;
    initialMinute = 0;
  }

  const setBowelTimeState = useInfoStore((state) => state.setBowelTime);

  const [hour, setHour] = useState(initialHour);
  const [minute, setMinute] = useState(initialMinute);
  const [amPm, setAmPm] = useState<string>(hour >= 12 ? '오후' : '오전');

  const debouncedHour = useDebounce(hour, 500); // 500ms 지연
  const debouncedMinute = useDebounce(minute, 500);

  const getHour = (hour: number) => (hour > 12 ? hour % 12 : hour === 0 ? 12 : hour);
  const getMinute = (minute: number) => (minute < 10 ? `0${minute}` : minute);

  useEffect(() => {
    setBowelTimeState({ hour: debouncedHour, minute: debouncedMinute });
  }, [debouncedHour, debouncedMinute]);

  const onHourWheel = (e: React.WheelEvent) => {
    setHour((prev) => (e.deltaY < 0 ? (prev === 1 ? 12 : prev - 1) : prev === 12 ? 1 : prev + 1));
  };

  const onMinuteWheel = (e: React.WheelEvent) => {
    setMinute((prev) => (e.deltaY < 0 ? (prev + 10) % 60 : (prev - 10 + 60) % 60));
  };

  const onAmPmWheel = () => {
    setAmPm((prev) => (prev === '오전' ? '오후' : '오전'));
    setHour((prev) => {
      if (amPm === '오전' && prev < 12) return prev + 12; // 오전 -> 오후
      if (amPm === '오후' && prev >= 12) return prev - 12; // 오후 -> 오전
      return prev;
    });
  };

  return (
    <div
      className={flexSprinklesFc({ gap: '8px', alignItems: 'center', justifyContent: 'center' })}
    >
      <p className={`${semiBold} ${hourText}`} onWheel={onHourWheel}>
        {getHour(hour)}
      </p>
      <p className={`${semiBold} ${hourText}`}>:</p>
      <p className={`${semiBold} ${hourText}`} onWheel={onMinuteWheel}>
        {getMinute(minute)}
      </p>
      <div onWheel={onAmPmWheel}>
        <p className={`${gray300} ${amPmText}`}>{amPm}</p>
      </div>
    </div>
  );
};

export default TimePicker;
