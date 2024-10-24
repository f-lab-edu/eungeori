import { create } from "zustand";

type LoginStore = {
  loginPopup: boolean;
  setLoginPopup: (state: boolean) => void;

  loginMessage: null | string;
  setLoginMessage: (state: string) => void;
};

export const useLoginStore = create<LoginStore>((set) => ({
  loginPopup: false,
  setLoginPopup: (state) => {
    set(() => ({ loginPopup: state }));
  },
  loginMessage: null,
  setLoginMessage: (state) => {
    set(() => ({ loginMessage: state }));
  },
}));
