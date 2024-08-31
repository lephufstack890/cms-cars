import { AnySchema } from 'yup';

import { PaginationState } from '@/models/request';

export type IFunction = (...agrs: any[]) => any;

export type Shape<Fields extends Record<any, any>> = {
  [Key in keyof Fields]: AnySchema;
};

export interface INetworkResponse<Data> {
  data: Data;
  error_info?: { code: string; message: string[] };
}

export interface INetworkError {
  error_info?: { code: string; message: string[] };
}

export interface PaginationResponse<Data> extends PaginationState {
  rows: Data;
}

export type ID = undefined | null | string;
