"use client";

import Button from "@/app/components/common/Button";
import { flexSprinklesFc } from "@/app/components/common/utils/flex";
import { colors, gray300, primary, white } from "@/app/styles/colors.css";
import { heading2, semiBold } from "@/app/styles/font.css";
import { paddingSprinkles } from "@/app/styles/padding.css";
import Image, { ImageProps } from "next/image";
import { useRouter } from "next/navigation";
import { shapeContentBoxWrapper, shapeContentBox, shapeContentBoxText } from "./shape.css";

type ContentBoxProps = {
  src: string;
  text: string;
  width: ImageProps["width"];
  height: ImageProps["height"];
  active?: boolean;
};

const ContentBox = ({ src, text, width, height, active }: ContentBoxProps) => {
  return (
    <div className={shapeContentBoxWrapper}>
      <div className={shapeContentBox}>
        <Image src={src} alt={text} width={width} height={height} />
      </div>
      <p className={`${shapeContentBoxText} ${active ? primary : gray300}`}>{text}</p>
    </div>
  );
};

const Page = () => {
  const router = useRouter();

  return (
    <article>
      <div className={`${flexSprinklesFc({ flexDirection: "column", gap: "16px" })} `}>
        <h3 className={`${semiBold} ${heading2} ${paddingSprinkles({ paddingBottom: "s60" })}`}>
          묽기 및 모양을
          <br />
          선택해주세요
        </h3>
      </div>
      <div className={`${flexSprinklesFc({ flexDirection: "column" })}`}>
        <div className={paddingSprinkles({ paddingBottom: "s60" })}>
          <p className={`${semiBold} ${paddingSprinkles({ paddingBottom: "s24" })}`}>묽음 정도</p>

          <div className={`${flexSprinklesFc({ gap: "16px" })}`}>
            <ContentBox src="/svgs/poop/thin/thin.svg" width={42.5} height={42.5} text="묽음" />
            <ContentBox src="/svgs/poop/thin/default.svg" width={42.5} height={42.5} text="정상" />
            <ContentBox src="/svgs/poop/thin/crackle.svg" width={42.5} height={42.5} text="딱딱" />
          </div>
        </div>

        <div className={paddingSprinkles({ paddingBottom: "s68" })}>
          <p className={`${semiBold} ${paddingSprinkles({ paddingBottom: "s24" })}`}>묽음 정도</p>

          <div className={`${flexSprinklesFc({ gap: "16px", flexWrap: "wrap" })}`}>
            <ContentBox src="/svgs/poop/poop-1.svg" width={71} height={31} text="단단한 덩어리" />
            <ContentBox src="/svgs/poop/poop-2.svg" width={63} height={30} text="단단한 소시지" />
            <ContentBox
              src="/svgs/poop/poop-3.svg"
              width={67}
              height={25}
              text="표면에 균열 있는
소시지"
            />
            <ContentBox src="/svgs/poop/poop-4.svg" width={70} height={14} text="매끈한 소시지" />
            <ContentBox
              src="/svgs/poop/poop-5.svg"
              width={59}
              height={31}
              text="부드러운 
덩어리"
            />
            <ContentBox
              src="/svgs/poop/poop-6.svg"
              width={69}
              height={33}
              text="흐물흐물한
덩어리"
            />
            <ContentBox src="/svgs/poop/poop-7.svg" width={68} height={94} text="완전한 액체" />
          </div>
        </div>
      </div>

      <div className={flexSprinklesFc({ gap: "16px", justifyContent: "center" })}>
        <Button
          text="취소"
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
            router.push("/info/detail");
          }}
        />
      </div>
    </article>
  );
};

export default Page;
