"use client";

import { flexSprinklesFc } from "@/app/components/common/utils/flex";
import { signupContainer, signupWrapper } from "./signup.css";
import { inputStyle } from "@/app/styles/common/input.css";
import { caption, heading2, regular, semiBold } from "@/app/styles/font.css";
import { paddingSprinkles } from "@/app/styles/padding.css";
import { colors, pink80 } from "@/app/styles/colors.css";
import Image from "next/image";
import { pointer } from "@/app/styles/global.css";
import { useRouter } from "next/navigation";
import Button from "@/app/components/common/Button";
import { useForm } from "react-hook-form";
import { signupSchema } from "@/app/types/signupSchema";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import Popup from "@/app/components/common/Popup";

const Page = () => {
  const router = useRouter();
  const [submit, setSubmit] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<z.infer<typeof signupSchema>>({
    resolver: zodResolver(signupSchema),
    mode: "onChange",
    defaultValues: {
      id: "",
      password: "",
      confirmPassword: "",
      nickname: "",
    },
  });

  const onSubmit = (data: z.infer<typeof signupSchema>) => {
    if (data) {
      setSubmit(true);
      localStorage.setItem("auth", JSON.stringify(data));
    }
  };

  return (
    <>
      {submit && (
        <Popup text="회원가입이 완료되었습니다.">
          <Button
            width="115px"
            text="확인"
            onClick={() => {
              router.push("/");
            }}
            color={colors.white}
            background={colors.primary}
          />
        </Popup>
      )}
      <section className={signupWrapper}>
        <article className={signupContainer}>
          <div>
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
          </div>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className={flexSprinklesFc({ flexDirection: "column", gap: "32px" })}
          >
            <div className={flexSprinklesFc({ flexDirection: "column", gap: "8px" })}>
              <div>
                <p className={`${caption} ${regular} ${paddingSprinkles({ paddingBottom: "s4" })}`}>
                  아이디<span className={`${pink80}`}>*</span>
                </p>
                <input placeholder="아이디" className={inputStyle} {...register("id")} maxLength={10} />

                <p className={`${paddingSprinkles({ paddingTop: "s4" })} ${caption} ${pink80}`}>
                  {errors.id?.message}
                </p>
              </div>

              <div>
                <p className={`${caption} ${regular} ${paddingSprinkles({ paddingBottom: "s4" })}`}>
                  비밀번호<span className={`${pink80}`}>*</span>
                </p>
                <input
                  type="password"
                  placeholder="비밀번호"
                  className={inputStyle}
                  {...register("password")}
                  maxLength={12}
                />

                <p className={`${paddingSprinkles({ paddingTop: "s4" })} ${caption} ${pink80}`}>
                  {errors.password?.message}
                </p>
              </div>

              <div>
                <p className={`${caption} ${regular} ${paddingSprinkles({ paddingBottom: "s4" })}`}>
                  비밀번호 확인<span className={`${pink80}`}>*</span>
                </p>
                <input
                  type="password"
                  placeholder="비밀번호 확인"
                  className={inputStyle}
                  {...register("confirmPassword")}
                  maxLength={12}
                />

                <p className={`${paddingSprinkles({ paddingTop: "s4" })} ${caption} ${pink80}`}>
                  {errors.confirmPassword?.message}
                </p>
              </div>

              <div>
                <p className={`${caption} ${regular} ${paddingSprinkles({ paddingBottom: "s4" })}`}>
                  닉네임<span className={`${pink80}`}>*</span>
                </p>
                <input placeholder="닉네임" className={inputStyle} {...register("nickname")} />

                <p className={`${paddingSprinkles({ paddingTop: "s4" })} ${caption} ${pink80}`}>
                  {errors.nickname?.message}
                </p>
              </div>
            </div>

            <div>
              <Button
                text="가입하기"
                width="100%"
                background={isValid ? colors.point : colors.gray200}
                color={colors.white}
                fontSize="12px"
                disabled={!isValid}
              />
            </div>
          </form>
        </article>
      </section>
    </>
  );
};

export default Page;
