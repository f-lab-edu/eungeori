import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

type RecordStore = {
  startDate: Date;
  setStartDate: (state: Date) => void;
};

export const useRecordStore = create<RecordStore>()(
  immer((set) => ({
    startDate: new Date(),
    setStartDate: (state) => {
      set((draft) => {
        draft.startDate = state;
      });
    },
  }))
);
