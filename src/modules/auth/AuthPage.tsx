import { useEffect } from 'react';
import { Navigate, Outlet, Route, Routes } from 'react-router-dom';

import { toAbsoluteUrl } from '@/_metronic/helpers';
import { Login } from '@/modules/auth/components/Login';
import { Profile } from '@/modules/auth/components/profile/Profile';
import { Register } from '@/modules/auth/components/Register';

const AuthLayout = () => {
  useEffect(() => {
    document.body.classList.add('bg-body');
    return () => {
      document.body.classList.remove('bg-body');
    };
  }, []);

  return (
    <div
      className="d-flex flex-column flex-column-fluid bgi-position-y-bottom position-x-center bgi-no-repeat bgi-size-contain bgi-attachment-fixed"
      style={{
        backgroundImage: `url(${toAbsoluteUrl('/media/illustrations/sketchy-1/14.png')})`,
      }}
    >
      {/* begin::Content */}
      <div className="d-flex flex-center flex-column flex-column-fluid p-10 pb-lg-20">
        {/* begin::Logo */}
        <a className="mb-12" href="#">
          <img alt="Logo" className="h-45px" src={toAbsoluteUrl('/media/logos/default1.svg')} />
        </a>
        {/* end::Logo */}
        {/* begin::Wrapper */}
        <div className="w-lg-500px bg-body rounded shadow-sm p-10 p-lg-15 mx-auto">
          <Outlet />
        </div>
        {/* end::Wrapper */}
      </div>
      {/* end::Content */}
      {/* begin::Footer */}
      <div className="d-flex flex-center flex-column-auto p-10">
        <div className="d-flex align-items-center fw-bold fs-6">
          <a className="text-muted text-hover-primary px-2" href="#">
            About
          </a>

          <a className="text-muted text-hover-primary px-2" href="#">
            Contact
          </a>

          <a className="text-muted text-hover-primary px-2" href="#">
            Contact Us
          </a>
        </div>
      </div>
      {/* end::Footer */}
    </div>
  );
};

const AuthPage = () => (
  <Routes>
    <Route element={<AuthLayout />}>
      <Route element={<Profile />} path="profile" />
      <Route element={<Register />} path="register" />
      <Route element={<Login />} path="login" />
      <Route element={<Login />} index />

      {/* Page Not Found */}
      <Route element={<Navigate to="/error/404" />} path="*" />
    </Route>
  </Routes>
);

export { AuthPage };
