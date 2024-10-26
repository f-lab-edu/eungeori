import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

export type StoolAttributes = {
  consistency: "thin" | "default" | "hard";
  shapeType: "poop-1" | "poop-2" | "poop-3" | "poop-4" | "poop-5" | "poop-6" | "poop-7";
};

type BowelAttributesState = {
  bowelTime: string;
  setBowelTime: (time: string) => void;

  stoolAttributes: StoolAttributes;
  setStoolAttributes: (attributes: Partial<StoolAttributes>) => void;

  recordNote: string;
  setRecordNote: (note: string) => void;
};

export const useInfoStore = create<BowelAttributesState>()(
  immer((set) => ({
    bowelTime: "",
    setBowelTime: (time) =>
      set((draft) => {
        draft.bowelTime = time;
      }),

    stoolAttributes: { consistency: "thin", shapeType: "poop-1" },
    setStoolAttributes: (attributes) =>
      set((draft) => {
        draft.stoolAttributes = { ...draft.stoolAttributes, ...attributes };
      }),

    recordNote: "",
    setRecordNote: (note) =>
      set((draft) => {
        draft.recordNote = note;
      }),
  }))
);

export default useInfoStore;
