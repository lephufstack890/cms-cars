import {
  ColumnDef,
  ColumnResizeMode,
  getCoreRowModel,
  getSortedRowModel,
  OnChangeFn,
  RowSelectionState,
  SortingState,
  Table as ReactTable,
  useReactTable,
} from '@tanstack/react-table';
import clsx from 'clsx';
import { cloneDeep } from 'lodash-es';
import { useEffect } from 'react';
import { Table as BootstrapTable } from 'react-bootstrap';

import { Pagination } from '@/components/molecules/Pagination';
import { TableBodyRows } from '@/components/molecules/TableBodyRows';
import { TableEntry } from '@/components/molecules/TableEntry';
import { TableFooterRows } from '@/components/molecules/TableFooterRows';
import { TableHeaderRows } from '@/components/molecules/TableHeaderRows';
import { TableLoading } from '@/components/molecules/TableLoading';
import { LimitOption } from '@/models/request';

interface IProps<TData extends object> {
  readonly data: TData[];
  readonly className?: string;
  readonly columnResizeMode?: ColumnResizeMode;
  readonly columns?: ColumnDef<TData, any>[];
  readonly currentPage?: number | string;
  readonly isLoading?: boolean;
  readonly isVisibleEntry?: boolean;
  readonly isVisibleFooter?: boolean;
  readonly isVisiblePagination?: boolean;
  readonly limit?: number | string;
  readonly onLimitChange?: (limit: LimitOption) => void;
  readonly onPageChange?: (page?: number) => void;
  readonly onRowClick?: (data: TData) => void;
  readonly onRowSelectionChange?: OnChangeFn<RowSelectionState>;
  readonly onSortingChange?: OnChangeFn<SortingState>;
  readonly onUpdateTable?: (table: ReactTable<TData>) => void;
  readonly rowSelection?: RowSelectionState;
  readonly sorting?: SortingState;
  readonly total?: number | string;
}

const Table = <TData extends object>(props: IProps<TData>) => {
  const isDevelopment = import.meta.env.NODE_ENV === 'development';

  const table = useReactTable({
    columnResizeMode: props.columnResizeMode,
    columns: props.columns || [],
    data: props.data,
    debugAll: isDevelopment,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    onRowSelectionChange: props.onRowSelectionChange,
    onSortingChange: props.onSortingChange,
    state: { rowSelection: props.rowSelection, sorting: props.sorting },
  });

  useEffect(() => {
    props.onUpdateTable?.(cloneDeep(table));
  }, [JSON.stringify(table)]);

  // on data change => remove rows selected
  useEffect(() => {
    table.toggleAllRowsSelected(false);
  }, [props.data]);

  return (
    <section className={clsx('react__table table-resizable', props.className)}>
      <BootstrapTable
        className="table table-nowrap-content align-middle table-row-dashed table-column-dashed fs-6 gy-4 no-footer border"
        bordered
        hover
        responsive
      >
        <thead>
          <TableHeaderRows
            className="text-white bg-primary"
            columnResizeMode={props.columnResizeMode}
            headerGroups={table.getHeaderGroups()}
          />
        </thead>

        <tbody className="text-gray-900">
          <TableBodyRows
            columnsCount={table.getFlatHeaders().length}
            onClick={props.onRowClick}
            rows={table.getRowModel().rows}
          />
        </tbody>

        {props.isVisibleFooter && (
          <tfoot>
            <TableFooterRows footerGroups={table.getFooterGroups()} />
          </tfoot>
        )}
      </BootstrapTable>

      <div className="row mt-3">
        {props.isVisibleEntry && (
          <div className="col-12 col-md-6">
            <TableEntry
              currentPage={Number(props.currentPage)}
              limit={Number(props.limit)}
              onChange={props.onLimitChange}
              total={Number(props.total)}
            />
          </div>
        )}
        {props.isVisiblePagination && (
          <div className="col-12 col-md-6">
            <Pagination
              className="justify-content-end"
              currentPage={Number(props.currentPage)}
              limit={Number(props.limit)}
              onChange={props.onPageChange}
              total={Number(props.total)}
            />
          </div>
        )}
      </div>
      <TableLoading className={clsx(!props.isLoading && 'd-none')} />
    </section>
  );
};

Table.defaultProps = {
  columnResizeMode: 'onChange',
  columns: [],
  data: [],
  isVisibleEntry: true,
  isVisibleFooter: false,
  isVisiblePagination: true,
  sorting: [],
};

export { Table };
