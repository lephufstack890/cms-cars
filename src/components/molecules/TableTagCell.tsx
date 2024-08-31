import clsx from 'clsx';
import * as React from 'react';

import { WithChildren } from '@/_metronic/helpers';

interface IProps extends WithChildren {
  readonly color?:
    | 'primary'
    | 'secondary'
    | 'success'
    | 'danger'
    | 'warning'
    | 'info'
    | 'light'
    | 'dark';
  readonly isLight?: boolean;
}

const TableTagCell: React.FC<IProps> = (props) => {
  if (!props.children) return null;

  return (
    <div
      className={clsx(
        'badge fw-bolder w-85 mx-auto',
        !props.isLight && `badge-${props.color}`,
        props.isLight && `badge-light-${props.color}`
      )}
    >
      {props.children}
    </div>
  );
};

export { TableTagCell };
