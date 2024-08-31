import { toAbsoluteUrl } from '@/_metronic/helpers';

export const TOKEN = 'cabx-token';

export const REFRESH_TOKEN = 'cabx-refresh-token';

export const SEARCH_DEBOUNCE_TIME = 300; // ms

export const BLANK_IMG = toAbsoluteUrl('/media/svg/avatars/blank.svg');

export const APP_COLOR = ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'dark'];

export const PHONE_RULE_REGEX = /^(84|0[3|5|7|8|9])+([0-9]{8})\b$/;

export const PHONE_RULE_REGEX_NULLABLE = /^$|^(84|0[3|5|7|8|9])+([0-9]{8})\b$/;
