import { SortingState } from '@tanstack/react-table';
import { useEffect, useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import { QueryState } from '@/models/request';
import { parseRequestQuery, stringifyRequestQuery } from '@/utils';

function useQueryRequest<T>(isSyncQueryStringToUrl = true) {
  const [searchParams, setSearchParams] = useSearchParams();
  const [queryState, setQueryState] = useState<QueryState<T>>(getInitialQueryState);
  const [queryString, setQueryString] = useState<string>(stringifyRequestQuery(queryState));
  const updatedQuery = useMemo(() => stringifyRequestQuery(queryState), [queryState]);

  useEffect(() => {
    if (queryString === updatedQuery) return;
    setQueryString(updatedQuery);
    isSyncQueryStringToUrl && syncQueryStringToUrl();
  }, [updatedQuery]);

  function getInitialQueryState<T>(): QueryState<T> {
    return searchParams.toString()
      ? parseRequestQuery(searchParams.toString())
      : { limit: 10, page: 1 };
  }

  function updateState(updates: Partial<QueryState<T>>) {
    const updatedState = { ...queryState, ...updates } as QueryState<T>;
    setQueryState(updatedState);
  }

  function syncQueryStringToUrl() {
    setSearchParams(updatedQuery, { replace: true });
  }

  function updateSortStateByTableSort(sorting: SortingState) {
    if (!sorting.length) {
      return updateState({ column: undefined, kind: undefined });
    }

    const { id, desc } = sorting[sorting.length - 1];
    updateState({ column: id, kind: desc ? 'desc' : 'asc' });
  }

  function getTableSortState(): SortingState {
    return !queryState.column ? [] : [{ desc: queryState.kind === 'desc', id: queryState.column }];
  }

  return {
    getTableSortState,
    queryState,
    queryString,
    searchParams,
    updateSortStateByTableSort,
    updateState,
    updatedQuery,
  };
}

export { useQueryRequest };
