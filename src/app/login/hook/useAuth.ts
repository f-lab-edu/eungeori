import { useLoginStore } from "@/app/store/login/loginStore";
import { localStorageGetItem, localStorageSetItem } from "@/app/types/localStorageSchema";
import { signinSchema } from "@/app/types/signinSchema";
import { useRouter } from "next/navigation";
import { z } from "zod";

export const useAuth = () => {
  const router = useRouter();

  const { setLoginMessage, setLoginPopup } = useLoginStore();

  const onLoginSubmit = (data: z.infer<typeof signinSchema>) => {
    if (data) {
      const getAuthInfo = localStorageGetItem("signin");

      if (getAuthInfo) {
        if (getAuthInfo.id !== data.id || getAuthInfo.password !== data.password) {
          setLoginMessage("아이디, 비밀번호를 확인해주세요.");
          setLoginPopup(true);
        }

        if (getAuthInfo.id === data.id && getAuthInfo.password === data.password) {
          router.push("/record");
          localStorageSetItem("signin", data);
        }
      }
    } else {
      setLoginMessage("가입된 정보를 확인해주세요.");
      setLoginPopup(true);
    }
  };

  return { onLoginSubmit };
};
