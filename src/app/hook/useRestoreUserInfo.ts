"use client";

import { useEffect } from "react";
import { supabase } from "@/app/lib/supabaseClient";
import { useUserInfoStore } from "@/app/store/user/userStore";

export const useRestoreUserInfo = () => {
  const setUserInfo = useUserInfoStore((state) => state.setUserInfo);

  useEffect(() => {
    const restoreUserInfo = async () => {
      const { data: session } = await supabase.auth.getSession();

      if (session?.session?.user) {
        const {
          id,
          user_metadata: { nickname },
        } = session.session.user;

        setUserInfo({ id, nickname });
      }
    };

    restoreUserInfo();
  }, [setUserInfo]);
};
