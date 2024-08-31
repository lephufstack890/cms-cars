import {
  FormatXMLElementFn,
  Options as IntlMessageFormatOptions,
  PrimitiveType,
} from 'intl-messageformat';
import { useIntl } from 'react-intl';

/**
 * Use in the body of function or class components
 * Don't use in nested functions of function or class components
 */
export function trans(
  key: string,
  values?: Record<string, PrimitiveType | FormatXMLElementFn<string, string>> | undefined,
  opts?: IntlMessageFormatOptions | undefined
): string {
  const intl = useIntl();
  return intl.formatMessage({ id: key }, values, opts);
}
