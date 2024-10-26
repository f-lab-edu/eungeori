import { z } from "zod";
import { passwordSchema } from "./signupSchema";

export const signinSchema = z.object({
  id: z
    .string()
    .min(6, { message: "최소 6자 이상입니다." })
    .max(10, { message: "최대 10자 이하로 입력해주세요." })
    .regex(/^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z0-9]{6,10}$/, {
      message: "6자 이상 10자 이하의 영문 혹은 영문과 숫자를 조합해주세요.",
    }),
  password: passwordSchema,
});
