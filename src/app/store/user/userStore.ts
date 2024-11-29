import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

type UserInfo = {
  id: string;
  nickname: string;
};

type UserInfoStore = {
  userInfo: UserInfo;
  setUserInfo: (state: UserInfo) => void;
  resetUserInfo: () => void;
};

export const useUserInfoStore = create<UserInfoStore>()(
  immer((set) => ({
    userInfo: { nickname: "", id: "" },
    setUserInfo: (state) => {
      set((draft) => {
        draft.userInfo = state;
      });
    },
    resetUserInfo: () => {
      set((draft) => {
        draft.userInfo = { nickname: "", id: "" };
      });
    },
  }))
);
