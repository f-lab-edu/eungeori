import { create } from "zustand";

type State = {
  bowelTime: string;
  setBowelTime: (time: string) => void;

  consistencyLevel: string;
  setConsistencyLevel: (level: string) => void;

  shapeType: string;
  setShapeType: (type: string) => void;

  recordNote: string;
  setRecordNote: (note: string) => void;
};

const useInfoStore = create<State>((set) => ({
  bowelTime: "",
  setBowelTime: (time: string) => set({ bowelTime: time }),

  consistencyLevel: "",
  setConsistencyLevel: (level: string) => set({ consistencyLevel: level }),

  shapeType: "",
  setShapeType: (type) => set({ shapeType: type }),

  recordNote: "",
  setRecordNote: (note: string) => set({ recordNote: note }),
}));

export default useInfoStore;
