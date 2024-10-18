"use client";

import Button from "@/app/components/common/Button";
import { flexSprinklesFc } from "@/app/components/common/utils/flex";
import { colors, gray300, primary, white } from "@/app/styles/colors.css";
import { heading2, semiBold } from "@/app/styles/font.css";
import { pointer } from "@/app/styles/global.css";
import { shapeContentBox, shapeContentBoxWrapper, shapeContentBoxText } from "@/app/styles/info/shape.css";
import { paddingSprinkles } from "@/app/styles/padding.css";
import Image, { ImageProps } from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

type ContentBoxProps = {
  src: string;
  text: string;
  width: ImageProps["width"];
  height: ImageProps["height"];
  active?: boolean;
  onClick: (label: string) => void;
};

const ContentBox = ({ src, text, width, height, active, onClick }: ContentBoxProps) => {
  return (
    <div className={shapeContentBoxWrapper} onClick={() => onClick(text)}>
      <div className={`${shapeContentBox} ${pointer}`}>
        <Image src={src} alt={text} width={width} height={height} />
      </div>
      <p className={`${shapeContentBoxText} ${active ? primary : gray300}`}>{text}</p>
    </div>
  );
};

const page = () => {
  const router = useRouter();
  const [stoolAttributes, setStoolAttributes] = useState({
    consistency: "thin",
    shapeType: "poop-1",
  });

  const onConsistencyChange = (consistency: string) => {
    setStoolAttributes((prev) => ({ ...prev, consistency: consistency }));
  };

  const onShapeChange = (shape: string) => {
    setStoolAttributes((prev) => ({ ...prev, shapeType: shape }));
  };

  const getConsistencyImageSrc = (label: string) => {
    return stoolAttributes.consistency === label
      ? `/svgs/poop/thin/active-${label}.svg`
      : `/svgs/poop/thin/${label}.svg`;
  };

  const getShapeTypeImageSrc = (level: number) => {
    return stoolAttributes.shapeType === `poop-${level}`
      ? `/svgs/poop/active-poop-${level}.svg`
      : `/svgs/poop/poop-${level}.svg`;
  };

  const consistencyOption = [
    { label: "묽음", consistency: "thin" },
    { label: "정상", consistency: "default" },
    { label: "딱딱", consistency: "hard" },
  ];

  const shapeTypeOption =
    //
    [
      { label: "단단한 덩어리", width: 71, height: 31, shape: "poop-1" },
      { label: "단단한 소시지", width: 63, height: 30, shape: "poop-2" },
      { label: "표면에 균열 있는 소시지", width: 67, height: 25, shape: "poop-3" },
      { label: "매끈한 소시지", width: 70, height: 14, shape: "poop-4" },
      { label: "부드러운 덩어리", width: 59, height: 31, shape: "poop-5" },
      { label: "흐물흐물한 덩어리", width: 69, height: 33, shape: "poop-6" },
      { label: "완전한 액체", width: 68, height: 90, shape: "poop-7" },
    ];

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
            {consistencyOption.map((image) => {
              return (
                <ContentBox
                  key={image.label}
                  src={getConsistencyImageSrc(image.consistency)}
                  text={image.label}
                  width={42.5}
                  height={42.5}
                  onClick={() => onConsistencyChange(image.consistency)}
                  active={stoolAttributes.consistency === image.consistency}
                />
              );
            })}
          </div>
        </div>

        <div className={paddingSprinkles({ paddingBottom: "s68" })}>
          <p className={`${semiBold} ${paddingSprinkles({ paddingBottom: "s24" })}`}>변의 모양</p>

          <div className={`${flexSprinklesFc({ gap: "16px", flexWrap: "wrap" })}`}>
            {shapeTypeOption.map((image, idx) => {
              return (
                <ContentBox
                  key={image.label}
                  src={getShapeTypeImageSrc(idx + 1)}
                  text={image.label}
                  width={image.width}
                  height={image.height}
                  onClick={() => onShapeChange(image.shape)}
                  active={stoolAttributes.shapeType === image.shape}
                />
              );
            })}
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

export default page;
