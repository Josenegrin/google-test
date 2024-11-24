import { create } from "zustand";
import { UseSearchStoreInterface } from "./types";
import { FakerDataInterface, ErrorType } from "@/lib/faker/types";

export const useSearchStore = create<UseSearchStoreInterface>((set) => ({
  isLoading: false,
  error: ErrorType.NO_ERROR,
  data: [],
  search: '',
  selectedSearch: null,
  setSearch: (value: string) => set({ search: value }),
  clearSearch: () => set({ search: '' }),
  setSelectedSearch: (value: FakerDataInterface | null) => set({ selectedSearch: value }),
  clearSelectedSearch: () => set({ selectedSearch: null }),
  setIsLoading: (value: boolean) => set({ isLoading: value }),
  setError: (value: ErrorType) => set({ error: value }),
  setData: (value: FakerDataInterface[]) => set({ data: value }),
}));
