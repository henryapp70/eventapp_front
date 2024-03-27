import { create } from "zustand";

export const useEventsStore = create((set) => ({
  filterByCategory: [],
  //Actualizar el estado con la info de react-query
  setCategory: (data) => set({ filterByCategory: data }),
}));
