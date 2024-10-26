"use client";

import Button from "@/app/components/common/Button";
import { flexSprinklesFc } from "@/app/components/common/utils/flex";
import TimePicker from "@/app/info/time/TimePicker";
import { colors, gray300 } from "@/app/styles/colors.css";
import { caption, heading2, semiBold } from "@/app/styles/font.css";
import { useRouter } from "next/navigation";
import { infoContainer } from "../common/common.css";

const Page = () => {
  const router = useRouter();

  return (
    <article className={infoContainer}>
      <div className={`${flexSprinklesFc({ flexDirection: "column", gap: "16px" })} `}>
        <h3 className={`${semiBold} ${heading2}`}>
          몇 시에
          <br />
          다녀오셨나요?
        </h3>
        <p className={`${gray300} ${caption}`}>배변을 시작한 시간부터 적어주면 좋아요</p>
      </div>
      <div>
        <TimePicker />
      </div>

      <div className={flexSprinklesFc({ gap: "16px", justifyContent: "center" })}>
        <Button
          text="이전"
          height="59px"
          borderRadius="10px"
          onClick={() => {
            router.push("/record");
          }}
        />
        <Button
          text="다음"
          width="226px"
          height="59px"
          background={colors.primary}
          color={colors.white}
          borderRadius="10px"
          onClick={() => {
            router.push("/info/shape");
          }}
        />
      </div>
    </article>
  );
};

export default Page;
