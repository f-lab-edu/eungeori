"use client";

import { infoContainer } from "../common/common.css";
import TimePicker from "./components/TimePicker";
import TimeButton from "./components/timeButton";
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
