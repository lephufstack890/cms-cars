import clsx from 'clsx';
import { FC } from 'react';

import { KTSVG } from '@/_metronic/helpers';
import { useLayout } from '@/_metronic/layout/core';
import {
  HeaderNotificationsMenu,
  HeaderUserMenu,
  Search,
  ThemeModeSwitcher,
} from '@/_metronic/partials';
import { Image } from '@/components/molecules/Image';
import { useAuth } from '@/hooks/useAuth';

const toolbarButtonMarginClass = 'ms-1 ms-lg-3',
  toolbarButtonHeightClass = 'w-30px h-30px w-md-40px h-md-40px',
  toolbarUserAvatarHeightClass = 'symbol-30px symbol-md-40px',
  toolbarButtonIconSizeClass = 'svg-icon-1';

const Topbar: FC = () => {
  const { config } = useLayout();
  const { currentUser } = useAuth();

  return (
    <div className="d-flex align-items-stretch flex-shrink-0">
      {/* Search */}
      <div className={clsx('d-none d-flex align-items-stretch', toolbarButtonMarginClass)}>
        <Search />
      </div>

      {/* NOTIFICATIONS */}
      <div className={clsx('d-none d-flex align-items-center', toolbarButtonMarginClass)}>
        {/* begin::Menu- wrapper */}
        <div
          className={clsx(
            'btn btn-icon btn-active-light-primary btn-custom',
            toolbarButtonHeightClass
          )}
          data-kt-menu-attach="parent"
          data-kt-menu-flip="bottom"
          data-kt-menu-placement="bottom-end"
          data-kt-menu-trigger="click"
        >
          <KTSVG
            className={toolbarButtonIconSizeClass}
            path="/media/icons/duotune/general/gen022.svg"
          />
        </div>
        <HeaderNotificationsMenu />
        {/* end::Menu wrapper */}
      </div>

      {/* begin::Theme mode */}
      <div className={clsx('d-flex align-items-center', toolbarButtonMarginClass)}>
        <ThemeModeSwitcher
          toggleBtnClass={clsx('btn-active-light-primary btn-custom', toolbarButtonHeightClass)}
        />
      </div>
      {/* end::Theme mode */}

      {/* begin::User */}
      <div
        className={clsx('d-flex align-items-center', toolbarButtonMarginClass)}
        id="kt_header_user_menu_toggle"
      >
        {/* begin::Toggle */}
        <div
          className={clsx('cursor-pointer symbol', toolbarUserAvatarHeightClass)}
          data-kt-menu-attach="parent"
          data-kt-menu-flip="bottom"
          data-kt-menu-placement="bottom-end"
          data-kt-menu-trigger="click"
        >
          <Image
            alt="avatar"
            className="border rounded"
            height={40}
            src={currentUser?.avatar}
            width={40}
          />
        </div>
        <HeaderUserMenu />
        {/* end::Toggle */}
      </div>
      {/* end::User */}

      {/* begin::Aside Toggler */}
      {config.header.left === 'menu' && (
        <div className="d-flex align-items-center d-lg-none ms-2 me-n3" title="Show header menu">
          <div
            className="btn btn-icon btn-active-light-primary w-30px h-30px w-md-40px h-md-40px"
            id="kt_header_menu_mobile_toggle"
          >
            <KTSVG className="svg-icon-1" path="/media/icons/duotune/text/txt001.svg" />
          </div>
        </div>
      )}
    </div>
  );
};

export { Topbar };
