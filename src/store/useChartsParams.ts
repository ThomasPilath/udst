import { create } from "zustand";

type ChartsParamsType = {
  subject: string,
  setSubject: (newSubject: string) => void
}

export const useChartsParams = create<ChartsParamsType>((set) => ({
  subject: "",
  setSubject: (newSubject: string) => set({subject: newSubject})
}))