import { IAppAxiosError } from '@/common/error';
import { APP_COLOR } from '@/constants';

export const isTokenExpired = (appError: IAppAxiosError) => {
  const statusCode = appError.getError().code;
  const message = appError.getMessage();
  return statusCode === '401' && message === 'Token is expired';
};

export const removeUTF8Chars = (str: string, toLowerCase = true) => {
  const space = ' ';
  // remove accents
  const from = 'àáãảạăằắẳẵặâầấẩẫậèéẻẽẹêềếểễệđùúủũụưừứửữựòóỏõọôồốổỗộơờớởỡợìíỉĩịäëïîöüûñçýỳỹỵỷ',
    to = 'aaaaaaaaaaaaaaaaaeeeeeeeeeeeduuuuuuuuuuuoooooooooooooooooiiiiiaeiiouuncyyyyy';
  for (let i = 0, l = from.length; i < l; i++) {
    str = String(str).replace(RegExp(from[i], 'gi'), to[i]);
  }

  str = str
    .trim()
    .replace(/[^a-z0-9-]/g, '-')
    .replace(/-+/g, space);

  return toLowerCase ? str.toLowerCase() : str;
};

export const getRandomAppColor = (): string => {
  return APP_COLOR[Math.floor(Math.random() * APP_COLOR.length)];
};

export const isFalse = (value: any): value is false => {
  return value === false;
};
