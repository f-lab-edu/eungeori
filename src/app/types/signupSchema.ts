import { z } from "zod";

export const passwordSchema = z
  .string()
  .min(8, { message: "최소 8자 이상 입력해주세요." })
  .max(12, { message: "최대 12자 이하로 입력해주세요." })
  .regex(/[A-Z]/, { message: "비밀번호에는 최소 하나의 대문자가 포함되어야 합니다." })
  .regex(/[a-z]/, { message: "비밀번호에는 최소 하나의 소문자가 포함되어야 합니다." })
  .regex(/[0-9]/, { message: "비밀번호에는 최소 하나의 숫자가 포함되어야 합니다." })
  .regex(/[@$!%*?&]/, { message: "비밀번호에는 최소 하나의 특수 문자가 포함되어야 합니다." });

export const signupSchema = z
  .object({
    id: z
      .string()
      .min(6, { message: "최소 6자 이상입니다." })
      .max(10, { message: "최대 10자 이하로 입력해주세요." })
      .regex(/^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z0-9]{6,10}$/, {
        message: "6자 이상 10자 이하의 영문 혹은 영문과 숫자를 조합해주세요.",
      }),
    password: passwordSchema,
    confirmPassword: z.string(),
    nickname: z.string().min(3, { message: "닉네임은 최소 3자 이상입니다." }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "비밀번호가 일치하지 않습니다.",
    path: ["confirmPassword"],
  });
