import clsx from 'clsx';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import { checkIsActive, KTSVG } from '@/_metronic/helpers';

type Props = {
  title: string;
  to: string;
  fontIcon?: string;
  hasArrow?: boolean;
  hasBullet?: boolean;
  icon?: string;
};

const MenuItem: React.FC<Props> = ({
  to,
  title,
  icon,
  fontIcon,
  hasArrow = false,
  hasBullet = false,
}) => {
  const { pathname } = useLocation();

  return (
    <div className="menu-item me-lg-1">
      <Link
        className={clsx('menu-link py-3', {
          active: checkIsActive(pathname, to),
        })}
        to={to}
      >
        {hasBullet && (
          <span className="menu-bullet">
            <span className="bullet bullet-dot" />
          </span>
        )}

        {icon && (
          <span className="menu-icon">
            <KTSVG className="svg-icon-2" path={icon} />
          </span>
        )}

        {fontIcon && (
          <span className="menu-icon">
            <i className={clsx('bi fs-3', fontIcon)} />
          </span>
        )}

        <span className="menu-title">{title}</span>

        {hasArrow && <span className="menu-arrow" />}
      </Link>
    </div>
  );
};

export { MenuItem };
