"use client";

import { flexSprinklesFc } from "@/app/components/common/utils/flex";
import { signupContainer, signupWrapper } from "./signup.css";
import { inputStyle } from "@/app/styles/common/input.css";
import { caption, heading2, regular, semiBold } from "@/app/styles/font.css";
import { paddingSprinkles } from "@/app/styles/padding.css";
import { colors, gray300, pink80 } from "@/app/styles/colors.css";
import Image from "next/image";
import { pointer } from "@/app/styles/global.css";
import { useRouter } from "next/navigation";
import Button from "@/app/components/common/Button";

const page = () => {
  const router = useRouter();

  return (
    <section className={signupWrapper}>
      <article className={signupContainer}>
        <div className={`${paddingSprinkles({ paddingBottom: "s32" })} ${pointer}`}>
          <Image
            src="/svgs/prev.svg"
            alt="back"
            width={17}
            height={21}
            onClick={() => {
              router.push("/");
            }}
          />
        </div>

        <div className={paddingSprinkles({ paddingBottom: "s32" })}>
          <h3 className={`${semiBold} ${heading2}`}>
            회원가입을
            <br /> 시작 할까요?
          </h3>
        </div>

        <div>
          <div className={flexSprinklesFc({ flexDirection: "column", gap: "16px" })}>
            <div>
              <p className={`${caption} ${regular} ${paddingSprinkles({ paddingBottom: "s4" })}`}>
                아이디<span className={`${pink80}`}>*</span>
              </p>
              <input placeholder="아이디" className={inputStyle} />
            </div>

            <div>
              <p className={`${caption} ${regular} ${paddingSprinkles({ paddingBottom: "s4" })}`}>
                비밀번호<span className={`${pink80}`}>*</span>
              </p>
              <input placeholder="비밀번호" className={inputStyle} />
            </div>

            <div>
              <p className={`${caption} ${regular} ${paddingSprinkles({ paddingBottom: "s4" })}`}>
                비밀번호 확인<span className={`${pink80}`}>*</span>
              </p>
              <input placeholder="비밀번호 확인" className={inputStyle} />
            </div>
          </div>
        </div>
      </article>

      <Button text="가입하기" width="100%" background={colors.point} color={colors.white} fontSize="12px" />
    </section>
  );
};

export default page;
