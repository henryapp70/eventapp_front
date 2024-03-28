import { create } from "zustand";

export const useStore = create((set) => ({
  originalEvents: [], // Estado para almacenar los eventos originales
  setOriginalEvents: (originalEvents) => set({ originalEvents }), // Función para establecer los eventos
}));
