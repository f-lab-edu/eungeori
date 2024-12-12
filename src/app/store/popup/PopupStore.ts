import { MessageType } from '@/app/types/schemas';
import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

type PopupStore = {
  isPopup: boolean;
  setIsPopup: (state: boolean) => void;

  message: MessageType;
  setMessage: (MessageType: string) => void;
};

export const usePopupStore = create<PopupStore>()(
  immer((set) => ({
    isPopup: false,
    setIsPopup: (state) => {
      set((draft) => {
        draft.isPopup = state;
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
