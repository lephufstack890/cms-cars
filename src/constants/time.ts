export type DateTimeFormat =
  | 'YYYY-MM-DD'
  | 'YYYY-MM-DD HH:mm:ss'
  | 'DD/MM/YYYY'
  | 'DD/MM/YYYY HH:mm:ss'
  | 'HH:mm:ss'
  | 'HH:mm';

export const TIME_FORMAT = {
  BE: {
    DATE: 'YYYY-MM-DD' as const,
    FULL_DATE_TIME: 'YYYY-MM-DD HH:mm:ss' as const,
    FULL_TIME: 'HH:mm:ss' as const,
    TIME: 'HH:mm' as const,
  },
  FE: {
    DATE: 'DD/MM/YYYY' as const,
    FULL_DATE_TIME: 'DD/MM/YYYY HH:mm:ss' as const,
    FULL_TIME: 'HH:mm:ss' as const,
    TIME: 'HH:mm' as const,
  },
};
