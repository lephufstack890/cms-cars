import { isEmpty } from 'lodash-es';
import qs from 'qs';

import { QueryState } from '@/models/request';

/**
 * It takes a query state object and returns a query string
 * Example: page=1&limit=10&sort=id&order=desc&search=a&filter_name=a&filter_online=false
 * @param {QueryState} state - QueryState
 * @returns A function that takes a QueryState object and returns a string.
 */
export const stringifyRequestQuery = <T>(state: QueryState<T>): string => {
  const pagination = qs.stringify(state, { filter: ['page', 'limit'], skipNulls: true });
  const sort = qs.stringify(state, { filter: ['column', 'kind'], skipNulls: true });
  const search = !isEmpty(state.search)
    ? qs.stringify(state, { filter: ['search'], skipNulls: true })
    : '';

  const filter = state.filter
    ? Object.entries(state.filter as any)
        .filter((obj) => !isEmpty(obj[1]))
        .map((obj) => {
          return `filter_${obj[0]}=${obj[1]}`;
        })
        .join('&')
    : '';

  return [pagination, sort, search, filter]
    .filter((f) => f)
    .join('&')
    .toLowerCase();
};

export function parseRequestQuery<T>(query: string): QueryState<T> {
  const cache: unknown = qs.parse(query);
  return cache as QueryState<T>;
}
