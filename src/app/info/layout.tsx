"use client";

import { useRouter } from "next/navigation";
import { infoWrapper } from "../styles/info/common.css";
import Image from "next/image";
import { pointer } from "../styles/global.css";
import { flexSprinklesFc } from "../components/common/utils/flex";
import { colors } from "../styles/colors.css";
import Button from "../components/common/Button";
import { paddingSprinkles } from "../styles/padding.css";

export default function Layout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  return (
    <section className={infoWrapper}>
      <div className={`${paddingSprinkles({ paddingBottom: "s32" })} ${pointer}`}>
        <Image src="/svgs/prev.svg" alt="back" width={17} height={21} onClick={router.back} />
      </div>

      {children}

      <div className={flexSprinklesFc({ gap: "16px", justifyContent: "center" })}>
        <Button text="취소" height="59px" borderRadius="10px" onClick={router.back} />
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
    </section>
  );
}
