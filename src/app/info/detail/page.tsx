"use client";

import Button from "@/app/components/common/Button";
import Memo from "@/app/components/common/Memo";
import Popup from "@/app/components/common/Popup";
import { flexSprinklesFc } from "@/app/components/common/utils/flex";
import { gray300, colors } from "@/app/styles/colors.css";
import { semiBold, heading2, caption } from "@/app/styles/font.css";
import { useRouter } from "next/navigation";
import { infoContainer } from "../common.css";
import useInfoStore from "@/app/store/info/infoStore";

const Page = () => {
  const router = useRouter();
  const { recordNote, setRecordNote } = useInfoStore();

  return (
    <>
      {showPopup && (
        <Popup text="기록 되었습니다">
          <Button
            text="닫기"
            background={colors.primary}
            color={colors.white}
            onClick={() => {
              localStorage.setItem("recordNote", recordNote);
              router.push("/record");
            }}
          />
        </Popup>
      )}
      <article className={infoContainer}>
        <div className={`${flexSprinklesFc({ flexDirection: "column", gap: "16px" })} `}>
          <h3 className={`${semiBold} ${heading2}`}>
            기록 할
            <br />
            내용이 있나요?
          </h3>
          <p className={`${gray300} ${caption}`}>(선택) 기록하고 싶은 내용이 있다면 적어보세요</p>
        </div>
        <Memo onChange={(e) => setRecordNote(e.target.value)} />

        <div className={flexSprinklesFc({ gap: "16px", justifyContent: "center" })}>
          <Button
            text="기록 완료"
            width="343px"
            height="59px"
            background={colors.primary}
            color={colors.white}
            borderRadius="10px"
            onClick={() => {
              setShowPopup(true);
            }}
          />
        </div>
      </article>
    </>
  );
};

export default Page;
