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
import { LocalStorage, LocalStorageSchema } from "../types/localStorageSchema";
import { formatDate, formatYYYYMMDD } from "../common/utils/date";
import { useEffect, useState } from "react";

type RecordData = LocalStorageSchema["recordData"];

const Page = () => {
  const [isShow, setIsShow] = useState(false);
  const [filterdData, setFilterdData] = useState<RecordData>([]);

  const router = useRouter();
  const startDate = useInfoStore((state) => state.startDate);

  useEffect(() => {
    const recordData = new LocalStorage("recordData");
    const data = recordData.get();

    const filtered = data?.filter(
      (item) => formatDate(new Date(item.date)) === formatDate(new Date(startDate))
    );

    setFilterdData(filtered || []);
  }, [startDate]);

  const onDeleteClick = () => {
    setIsShow(true);
  };

  const onEditClick = (date: Date, idx: number) => {
    const formattedDate = formatYYYYMMDD(date);
    router.push(`detail/${formattedDate}/${idx}`);
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
          {filterdData?.map((data, idx) => (
            <Memo
              key={idx}
              date={formatDate(new Date(data.date))}
              text={data.recordNote}
              edit
              onEditClick={() => {
                onEditClick(new Date(data.date), idx);
              }}
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
