import { create } from "zustand";

type ModalType = {
  modal: boolean,
  setModal: (newStatus: boolean) => void
}

export const useModal = create<ModalType>((set) => ({
  modal: false,
  setModal: (newStatus: boolean) => set({modal: newStatus})
}))