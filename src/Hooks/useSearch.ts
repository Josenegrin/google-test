import { useRouter } from "next/navigation";
import { useSearchStore } from "@/store/useSearchStore";
import { useCallback, useEffect } from "react";
import { FakerDataInterface } from "@/lib/faker/types";
import fakerData from "@/lib/faker";
import { ErrorType } from "@/lib/faker/types";

export const useSearch = () => {
  const { search, setSearch, clearSearch,error, isLoading, setIsLoading, setError, setData } = useSearchStore();
  const { push } = useRouter();

  const filterResults = useCallback((): FakerDataInterface[] => {
    if (!search) return [];

    const lowerCaseQuery = search.toLowerCase();
    return fakerData.filter((result) => {
      const matchesType = result.type.toLowerCase().includes(lowerCaseQuery);
      const matchesTitle = result.title.toLowerCase().includes(lowerCaseQuery);
      return matchesType || matchesTitle;
    });
  }, [search]);

  const handlerError = useCallback((data: FakerDataInterface[]) => {
      if (!data.length) {
        if (search) {
          setError(ErrorType.NO_RESULTS);
        } else {
          setError(ErrorType.NO_SEARCH_TERM);
        }
      } else if (data.length && error !== ErrorType.NO_ERROR) {
        setError(ErrorType.NO_ERROR);
      }
    }, [error, search, setError]);

  useEffect(() => {
    if (isLoading) {
      const timeout = setTimeout(() => {
        const filteredData = filterResults();
        handlerError(filteredData);
        setData(filteredData);
        setIsLoading(false);
      }, 2000);

      return () => clearTimeout(timeout);
    }
  }, [filterResults, handlerError, isLoading, setData, setIsLoading]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const handleSearch = () => {
    setIsLoading(true);
    push(`/results?query=${encodeURIComponent(search)}`);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleSearch();
  };

  const handleClear = () => clearSearch();

  return {
    handleSearch,
    handleSubmit,
    handleClear,
    handleInputChange
  };
};
