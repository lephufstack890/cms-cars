import clsx from 'clsx';
import { FC } from 'react';
import { Link, useLocation } from 'react-router-dom';

import { checkIsActive, KTSVG, WithChildren } from '@/_metronic/helpers';
import { useLayout } from '@/_metronic/layout/core';

type Props = {
  title: string;
  to: string;
  fontIcon?: string;
  hasBullet?: boolean;
  icon?: string;
};

const AsideMenuItem: FC<Props & WithChildren> = ({
  children,
  to,
  title,
  icon,
  fontIcon,
  hasBullet = false,
}) => {
  const { pathname } = useLocation();
  const isActive = checkIsActive(pathname, to);
  const { config } = useLayout();
  const { aside } = config;

  return (
    <div className="menu-item">
      <Link className={clsx('menu-link without-sub', { active: isActive })} to={to}>
        {hasBullet && (
          <span className="menu-bullet">
            <span className="bullet bullet-dot" />
          </span>
        )}
        {icon && aside.menuIcon === 'svg' && (
          <span className="menu-icon">
            <KTSVG className="svg-icon-2" path={icon} />
          </span>
        )}
        {fontIcon && aside.menuIcon === 'font' && <i className={clsx('bi fs-3', fontIcon)} />}
        <span className="menu-title">{title}</span>
      </Link>
      {children}
    </div>
  );
};

export { AsideMenuItem };
