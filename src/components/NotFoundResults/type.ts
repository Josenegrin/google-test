import { ErrorType } from "@/lib/faker/types";

export interface NotFoundResultsInterface {
  searchQuery: string;
  errorType: ErrorType;
}