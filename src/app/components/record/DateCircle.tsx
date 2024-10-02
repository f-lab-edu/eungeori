import { circle } from "@/app/styles/record/record.css";

const DateCircle = ({ date }: { date: string }) => {
  return <div className={circle}>{date}</div>;
};

export default DateCircle;
