import { FC, Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import TopBarProgress from 'react-topbar-progress-indicator';

import { getCSSVariableValue } from '@/_metronic/assets/ts/_utils';
import { WithChildren } from '@/_metronic/helpers';
import { MasterLayout } from '@/_metronic/layout/MasterLayout';
import { DashboardWrapper } from '@/pages/dashboard/DashboardWrapper';

const PrivateRoutes = () => {
  return (
    <Routes>
      <Route element={<MasterLayout />}>
        {/* Redirect to Dashboard after success login/registartion */}
        <Route element={<Navigate to="/dashboard" />} path="auth/*" />
        {/* Pages */}
        <Route element={<DashboardWrapper />} path="dashboard" />
        {/* Lazy Modules */}
        {/* <Route
          element={
            <SuspensedView>
              <EmployeePage />
            </SuspensedView>
          }
          path="employees/*"
        />
        <Route
          element={
            <SuspensedView>
              <DriverPage />
            </SuspensedView>
          }
          path="drivers/*"
        />
        <Route
          element={
            <SuspensedView>
              <CustomerPage />
            </SuspensedView>
          }
          path="customers/*"
        />
        <Route
          element={
            <SuspensedView>
              <CatalogueServicePage />
            </SuspensedView>
          }
          path="catalogues/services/*"
        /> */}
        {/* Page Not Found */}
        <Route element={<Navigate to="/error/404" />} path="*" />
      </Route>
    </Routes>
  );
};

const SuspensedView: FC<WithChildren> = ({ children }) => {
  const baseColor = getCSSVariableValue('--kt-primary');
  TopBarProgress.config({
    barColors: {
      '0': baseColor,
    },
    barThickness: 1,
    shadowBlur: 5,
  });
  return <Suspense fallback={<TopBarProgress />}>{children}</Suspense>;
};

console.log(SuspensedView);

export { PrivateRoutes };
