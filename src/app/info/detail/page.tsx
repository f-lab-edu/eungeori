"use client";

import Button from "@/app/components/common/Button";
import Memo from "@/app/components/common/Memo";
import { flexSprinklesFc } from "@/app/components/common/utils/flex";
import { gray300, colors } from "@/app/styles/colors.css";
import { semiBold, heading2, caption } from "@/app/styles/font.css";
import { useRouter } from "next/navigation";
import { infoContainer } from "../common.css";

const Page = () => {
  const router = useRouter();
  return (
    <article className={infoContainer}>
      <div className={`${flexSprinklesFc({ flexDirection: "column", gap: "16px" })} `}>
        <h3 className={`${semiBold} ${heading2}`}>
          기록 할
          <br />
          내용이 있나요?
        </h3>
        <p className={`${gray300} ${caption}`}>기록하고 싶은 내용이 있다면 적어보세요</p>
      </div>
      <Memo />

      <div className={flexSprinklesFc({ gap: "16px", justifyContent: "center" })}>
        <Button
          text="기록 완료"
          width="343px"
          height="59px"
          background={colors.primary}
          color={colors.white}
          borderRadius="10px"
          onClick={() => {
            router.push("/record");
          }}
        />
      </div>
    </article>
  );
};

export default Page;
