import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

type LoginStore = {
  isLoginPopup: boolean;
  setIsLoginPopup: (state: boolean) => void;

  loginMessage: null | string;
  setLoginMessage: (state: string) => void;
};

export const useLoginStore = create<LoginStore>()(
  immer((set) => ({
    isLoginPopup: false,
    setIsLoginPopup: (state) => {
      set((draft) => {
        draft.isLoginPopup = state;
      });
    },
    loginMessage: null,
    setLoginMessage: (state) => {
      set((draft) => {
        draft.loginMessage = state;
      });
    },
  }))
);
