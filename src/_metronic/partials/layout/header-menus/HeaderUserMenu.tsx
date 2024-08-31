import { FC } from 'react';

import { Languages } from '@/_metronic/partials/layout/header-menus/Languages';
import { Image } from '@/components/molecules/Image';
import { useAuth } from '@/hooks/useAuth';
import { trans } from '@/utils';

const HeaderUserMenu: FC = () => {
  const { currentUser, logout } = useAuth();

  return (
    <div
      className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg menu-state-primary fw-bold py-4 fs-6 w-275px"
      data-kt-menu="true"
    >
      <div className="menu-item px-3">
        <div className="menu-content d-flex align-items-center px-3">
          <div className="symbol symbol-50px me-5">
            <Image
              alt="avatar"
              className="border rounded"
              height={40}
              src={currentUser?.avatar}
              width={40}
            />
          </div>

          <div className="d-flex flex-column">
            <div className="fw-bolder d-flex align-items-center fs-5">
              {currentUser?.full_name}
              <span className="badge badge-light-success fw-bolder fs-8 px-2 py-1 ms-2">
                {currentUser?.user_type}
              </span>
            </div>
            <a className="fw-bold text-muted text-hover-primary fs-7" href="#">
              {currentUser?.email}
            </a>
          </div>
        </div>
      </div>

      <div className="separator my-2" />

      <div className="menu-item px-5">
        <a className="menu-link px-5" href="#">
          <span className="menu-text">{trans('AUTH.PROFILE')}</span>
          <span className="menu-badge">
            <span className="badge badge-light-danger badge-circle fw-bolder fs-7">3</span>
          </span>
        </a>
      </div>

      <div className="separator my-2" />

      <Languages />

      <div className="menu-item px-5">
        <button className="menu-link px-5 fake-link" onClick={logout}>
          {trans('AUTH.LOGOUT')}
        </button>
      </div>
    </div>
  );
};

export { HeaderUserMenu };
