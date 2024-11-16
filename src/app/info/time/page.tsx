"use client";

import { infoContainer } from "../common/common.css";
import TimeButton from "./components/timeButton";
import TimePicker from "./components/timePicker";
import TimeTitle from "./components/timeTitle";

const Page = () => {
  return (
    <article className={infoContainer}>
      <TimeTitle />
      <div>
        <TimePicker />
      </div>

      <TimeButton />
    </article>
  );
};

export default Page;
