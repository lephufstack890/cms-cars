export type LimitOption = 10 | 25 | 50 | 100;

export type PaginationState = {
  limit: LimitOption;
  page: number;
  total_pages?: number;
  total_rows?: number;
};

type SortState = {
  column?: string;
  kind?: 'asc' | 'desc';
};

type FilterState<T> = {
  filter?: T;
};

type SearchState = {
  search?: string;
};

export type QueryState<T> = PaginationState & SortState & FilterState<T> & SearchState;
