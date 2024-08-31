import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { I18nProvider } from '@/_metronic/i18n/i18nProvider';
import { LayoutProvider, LayoutSplashScreen } from '@/_metronic/layout/core';
import { MasterInit } from '@/_metronic/layout/MasterInit';
import { Toast } from '@/components/molecules/Toast';
import { AuthInit } from '@/modules/auth';
import { MenuInit } from '@/modules/menu/core/Menu';

const App = () => {
  return (
    <Suspense fallback={<LayoutSplashScreen />}>
      <I18nProvider>
        <LayoutProvider>
          <AuthInit>
            <Outlet />
            <MenuInit />
            <MasterInit />
            <Toast />
          </AuthInit>
        </LayoutProvider>
      </I18nProvider>
    </Suspense>
  );
};

export { App };
