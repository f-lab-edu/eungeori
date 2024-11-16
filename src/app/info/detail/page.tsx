"use client";

import Button from "@/app/components/common/Button";
import Memo from "@/app/components/common/Memo";
import { flexSprinklesFc } from "@/app/components/common/utils/flex";
import { gray300, colors } from "@/app/styles/colors.css";
import { semiBold, heading2, caption } from "@/app/styles/font.css";
import { infoContainer } from "../common/common.css";
import useInfoStore from "@/app/store/info/infoStore";
import { usePopupStore } from "@/app/store/popup/PopupStore";
import DetailPopup from "./components/popup";
import TitleText from "./components/titleText";

const Page = () => {
  const setRecordNoteState = useInfoStore((state) => state.setRecordNote);
  const setDetailPopupState = usePopupStore((state) => state.setIsPopup);
  return (
    <>
      <DetailPopup />
      <article className={infoContainer}>
        <TitleText />

        <Memo onChange={(e) => setRecordNoteState(e.target.value)} />

        <div className={flexSprinklesFc({ gap: "16px", justifyContent: "center" })}>
          <Button
            text="기록 완료"
            width="343px"
            height="59px"
            background={colors.primary}
            color={colors.white}
            borderRadius="10px"
            onClick={() => {
              setDetailPopupState(true);
            }}
          />
        </div>
      </article>
    </>
  );
};

export default Page;
