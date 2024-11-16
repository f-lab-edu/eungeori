"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { flexSprinklesFc } from "../components/common/utils/flex";
import { plusIconBox, plusIcon } from "./styles/record.css";
import "react-datepicker/dist/react-datepicker.css";
import RecordCalender from "./components/recordCalender";
import RecordPopup from "./components/popup";
import useInfoStore from "../store/info/infoStore";
import Memo from "../components/common/Memo";
import { LocalStorage } from "../types/localStorageSchema";
import { formatDate } from "../common/utils/date";
import { useState } from "react";

const Page = () => {
  const [isShow, setIsShow] = useState(false);
  const router = useRouter();
  const startDate = useInfoStore((state) => state.startDate);
  const recordData = new LocalStorage("recordData");

  const filterdData = recordData
    .get()
    ?.filter((data) => formatDate(new Date(data.date)) === formatDate(new Date(startDate)));

  const onDeleteClick = () => {
    setIsShow(true);
  };

  return (
    <>
      {isShow && (
        <RecordPopup
          onClick={() => {
            setIsShow(false);
          }}
        />
      )}

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
          {filterdData?.map((data) => (
            <Memo
              key={data.date.toString()}
              date={formatDate(new Date(data.date))}
              text={data.recordNote}
              edit
              onDeleteClick={onDeleteClick}
            />
          ))}
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
