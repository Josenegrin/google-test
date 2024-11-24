import { ErrorType, FakerDataInterface } from "@/lib/faker/types";

export interface UseSearchStoreInterface {
  isLoading: boolean;
  error: ErrorType;
  data: FakerDataInterface[];
  search: string;
  selectedSearch: null | FakerDataInterface;
  setSearch: (value: string) => void;
  clearSearch: () => void;
  setSelectedSearch: (value: FakerDataInterface | null) => void;
  clearSelectedSearch: () => void;
  setIsLoading: (value: boolean) => void;
  setError: (value: ErrorType) => void;
  setData: (value: FakerDataInterface[]) => void;
}