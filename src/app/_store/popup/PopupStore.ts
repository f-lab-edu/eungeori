import { MessageType } from '@/app/_types/schemas';
import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

type PopupStore = {
  openPopup: boolean;
  setOpenPopup: (state: boolean) => void;

  message: MessageType;
  setMessage: (MessageType: string) => void;
};

export const usePopupStore = create<PopupStore>()(
  immer((set) => ({
    openPopup: false,
    setOpenPopup: (state) => {
      set((draft) => {
        draft.openPopup = state;
      });
    },
    message: null,
    setMessage: (state) => {
      set((draft) => {
        draft.message = state;
      });
    },
  })),
);
