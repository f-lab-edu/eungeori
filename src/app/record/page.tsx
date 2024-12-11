"use client";

import { flexSprinklesFc } from "../components/common/utils/flex";
import "react-datepicker/dist/react-datepicker.css";
import RecordCalender from "./components/recordCalender";
import RecordPopup from "./components/popup";
import PlusIcon from "./components/plusIcon";

const Page = () => {
  return (
    <>
      {/* <RecordPopup /> */}
      <section>
        <RecordCalender>
          <RecordCalender.Calender />
        </RecordCalender>

        <article
          className={`${flexSprinklesFc({
            flexDirection: "column",
            gap: "8px",
          })}`}
        >
          {/* 메모 자리 */}
        </article>
        <PlusIcon />
      </section>
    </>
  );
};

export default Page;
