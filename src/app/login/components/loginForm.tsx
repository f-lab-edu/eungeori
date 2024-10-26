import { flexSprinklesFc } from "@/app/components/common/utils/flex";
import { gray300, pink80 } from "@/app/styles/colors.css";
import { inputStyle } from "@/app/styles/common/input.css";
import { caption, caption2 } from "@/app/styles/font.css";
import { paddingSprinkles } from "@/app/styles/padding.css";
import { formBox } from "../styles/login.css";
import { useRouter } from "next/navigation";

import { signinSchema } from "@/app/types/signinSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { pointer, buttonOutLine } from "@/app/styles/global.css";

import { useAuth } from "../hook";

const LoginForm = () => {
  const router = useRouter();
  const { onLoginSubmit } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof signinSchema>>({
    resolver: zodResolver(signinSchema),
    mode: "onChange",
    defaultValues: {
      id: "",
      password: "",
    },
  });

  return (
    <>
      <form className={formBox} onSubmit={handleSubmit(onLoginSubmit)}>
        <div className={flexSprinklesFc({ flexDirection: "column", gap: "8px" })} style={{ width: "95%" }}>
          <div>
            <input className={inputStyle} placeholder="아이디" {...register("id")} maxLength={10} />

            <p className={`${paddingSprinkles({ paddingTop: "s4" })} ${caption} ${pink80}`}>
              {errors.id?.message}
            </p>
          </div>

          <div>
            <input
              className={inputStyle}
              placeholder="비밀번호"
              {...register("password")}
              type="password"
              maxLength={12}
            />
            <p className={`${paddingSprinkles({ paddingTop: "s4" })} ${caption} ${pink80}`}>
              {errors.password?.message}
            </p>
          </div>
        </div>
      </form>

      {/*  */}
      <p className={`${gray300} ${caption2}`}>
        <button className={`${pointer} ${buttonOutLine}`} onClick={handleSubmit(onLoginSubmit)}>
          로그인
        </button>{" "}
        |{" "}
        <button
          className={`${pointer} ${buttonOutLine}`}
          onClick={() => {
            router.push("/auth/signup");
          }}
        >
          회원가입
        </button>
      </p>
    </>
  );
};

export default LoginForm;
