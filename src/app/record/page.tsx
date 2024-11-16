"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { flexSprinklesFc } from "../components/common/utils/flex";
import { plusIconBox, plusIcon } from "./styles/record.css";
import "react-datepicker/dist/react-datepicker.css";
import RecordCalender from "./components/recordCalender";
import RecordPopup from "./components/popup";

const Page = () => {
  const router = useRouter();

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

        <div
          className={plusIconBox}
          onClick={() => {
            router.push("/info/time");
          }}
        >
          <div className={plusIcon}>
            <Image src="/svgs/plus.svg" alt="add" width={10} height={10} />
          </div>
        </div>
      </section>
    </>
  );
};

export default Page;
