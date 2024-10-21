import { flexSprinklesFc } from "@/app/components/common/utils/flex";
import { semiBold } from "@/app/styles/font.css";
import { amPmText, hourText } from "./timePicker.css";
import { gray300 } from "@/app/styles/colors.css";
import { useState } from "react";

const TimePicker = () => {
  const now = new Date();

  const [hour, setHour] = useState(now.getHours());
  const [minute, setMinute] = useState(Math.ceil(now.getMinutes() / 10) * 10);
  const [amPm, setAmPm] = useState<string>(hour >= 12 ? "오후" : "오전");

  const getHour = (hour: number) => {
    if (hour > 12) {
      return hour % 12;
    }

    return hour < 10 ? `0${hour}` : hour;
  };

  const getMinute = (minute: number) => {
    return minute < 10 ? `0${minute}` : minute;
  };

  const onHourWheel = (e: React.WheelEvent) => {
    if (e.deltaY < 0) {
      setHour((prev) => (prev === 1 ? 12 : prev - 1));
    } else {
      setHour((prev) => (prev === 12 ? 1 : prev + 1));
    }
  };

  const onMinuteWheel = (e: React.WheelEvent) => {
    if (e.deltaY < 0) {
      setMinute((prev) => (prev + 10) % 60);
    } else {
      setMinute((prev) => (prev - 10 + 60) % 60);
    }
  };

  const onAmPmWheel = (e: React.WheelEvent) => {
    if (e.deltaY < 0) {
      setAmPm((prev) => (prev === "오전" ? "오후" : "오전"));
    } else {
      setAmPm((prev) => (prev === "오전" ? "오후" : "오전"));
    }
  };

  return (
    <div className={flexSprinklesFc({ gap: "8px", alignItems: "center", justifyContent: "center" })}>
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
