/**
 * TIP: Replace this style import with rtl styles to enable rtl mode
 *
 * import '@/_metronic/assets/css/style.rtl.css'
 **/
import 'antd/dist/antd.less';
import '@/_metronic/assets/sass/plugins.scss';
import '@/_metronic/assets/sass/style.react.scss';
import '@/_metronic/assets/sass/style.scss';
import '@/assets/style/app.scss';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Chart, registerables } from 'chart.js';
import { createRoot } from 'react-dom/client';
import { ErrorBoundary } from 'react-error-boundary';
import { Provider as ReduxProvider } from 'react-redux';

import { MetronicI18nProvider } from '@/_metronic/i18n/Metronici18n';
import { newAppError } from '@/common/error';
import { ErrorFallback } from '@/modules/errors/ErrorsFallback';
import { AppRoutes } from '@/router/AppRoutes';
import { store } from '@/store';
/**
 * Creates `axios-mock-adapter` instance for provided `axios` instance, add
 * basic Metronic mocks and returns it.
 *
 * @see https://github.com/ctimmerm/axios-mock-adapter
 */
Chart.register(...registerables);

const queryClient = new QueryClient();
const container = document.getElementById('root');
if (container) {
  createRoot(container).render(
    <ErrorBoundary
      FallbackComponent={ErrorFallback}
      onError={(error, _errorInfo) => newAppError(error)}
    >
      <ReduxProvider store={store}>
        <QueryClientProvider client={queryClient}>
          <MetronicI18nProvider>
            <AppRoutes />
          </MetronicI18nProvider>
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </ReduxProvider>
    </ErrorBoundary>
  );
}
