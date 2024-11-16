import { circle } from "@/app/record/styles/record.css";

const DateCircle = ({ date }: { date: string }) => {
  return <div className={circle}>{date}</div>;
};

export default DateCircle;
