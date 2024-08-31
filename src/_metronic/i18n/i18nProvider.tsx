import '@formatjs/intl-relativetimeformat/polyfill';
import '@formatjs/intl-relativetimeformat/locale-data/en';
import '@formatjs/intl-relativetimeformat/locale-data/de';
import '@formatjs/intl-relativetimeformat/locale-data/es';
import '@formatjs/intl-relativetimeformat/locale-data/fr';
import '@formatjs/intl-relativetimeformat/locale-data/ja';
import '@formatjs/intl-relativetimeformat/locale-data/zh';
import '@formatjs/intl-relativetimeformat/locale-data/vi';

import { ConfigProvider } from 'antd';
import deDE from 'antd/es/locale/de_DE';
import enUS from 'antd/es/locale/en_US';
import esES from 'antd/es/locale/es_ES';
import frFR from 'antd/es/locale/fr_FR';
import jaJP from 'antd/es/locale/ja_JP';
import viVN from 'antd/es/locale/vi_VN';
import zhCN from 'antd/es/locale/zh_CN';
import { FC } from 'react';
import { IntlProvider } from 'react-intl';

import { WithChildren } from '@/_metronic/helpers';
import deMessages from '@/_metronic/i18n/messages/de.json';
import enMessages from '@/_metronic/i18n/messages/en.json';
import esMessages from '@/_metronic/i18n/messages/es.json';
import frMessages from '@/_metronic/i18n/messages/fr.json';
import jaMessages from '@/_metronic/i18n/messages/ja.json';
import viMessages from '@/_metronic/i18n/messages/vi.json';
import zhMessages from '@/_metronic/i18n/messages/zh.json';
import { useLang } from '@/_metronic/i18n/Metronici18n';

const allMessages = {
  de: { messages: deMessages, theme: deDE },
  en: { messages: enMessages, theme: enUS },
  es: { messages: esMessages, theme: esES },
  fr: { messages: frMessages, theme: frFR },
  ja: { messages: jaMessages, theme: jaJP },
  vi: { messages: viMessages, theme: viVN },
  zh: { messages: zhMessages, theme: zhCN },
};

const I18nProvider: FC<WithChildren> = ({ children }) => {
  const locale = useLang();
  const { messages, theme } = allMessages[locale];

  return (
    <IntlProvider locale={locale} messages={messages}>
      <ConfigProvider locale={theme}>{children}</ConfigProvider>
    </IntlProvider>
  );
};

export { I18nProvider };
