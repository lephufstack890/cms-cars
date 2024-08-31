import clsx from 'clsx';
import React from 'react';
import { useLocation } from 'react-router-dom';

import { checkIsActive, KTSVG, WithChildren } from '@/_metronic/helpers';
import { useLayout } from '@/_metronic/layout/core';

type Props = {
  title: string;
  to: string;
  fontIcon?: string;
  hasBullet?: boolean;
  icon?: string;
};

const AsideMenuItemWithSub: React.FC<Props & WithChildren> = ({
  children,
  to,
  title,
  icon,
  fontIcon,
  hasBullet,
}) => {
  const { pathname } = useLocation();
  const isActive = checkIsActive(pathname, to);
  const { config } = useLayout();
  const { aside } = config;

  return (
    <div
      className={clsx('menu-item', { 'here show': isActive }, 'menu-accordion')}
      data-kt-menu-trigger="click"
    >
      <span className="menu-link">
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
        <span className="menu-arrow" />
      </span>
      <div className={clsx('menu-sub menu-sub-accordion', { 'menu-active-bg': isActive })}>
        {children}
      </div>
    </div>
  );
};

export { AsideMenuItemWithSub };
