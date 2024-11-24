export interface FakerDataInterface {
  type: string,
  id: number,
  url: string,
  title: string,
  description: string,
  image: string
}

export enum ErrorType {
  NO_SEARCH_TERM = 'NO_SEARCH_TERM',
  NO_RESULTS = 'NO_RESULTS',
  NO_ERROR = ''
}