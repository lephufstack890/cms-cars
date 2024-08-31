import { trans } from '@/utils';

type AvailableType = 'array' | 'boolean' | 'number' | 'object' | 'string';

interface IValidationTranslator {
  matches: (field: string, isTranslateField: boolean) => string;
  required: (field: string, isTranslateField: boolean) => string;
  typeError: (
    field: string,
    type: AvailableType,
    isTranslateField: boolean,
    isTranslateType: boolean
  ) => string;
}

class ValidationTranslator implements IValidationTranslator {
  public matches(field: string, isTranslateField = true): string {
    if (isTranslateField) field = trans(field);

    return trans('VALIDATION.RULES.MATCHES', { field });
  }

  public required(field: string, isTranslateField = true): string {
    if (isTranslateField) field = trans(field);

    return trans('VALIDATION.RULES.REQUIRED', { field });
  }

  public typeError(field: string, type: AvailableType, isTranslateField = true): string {
    const types = {
      array: 'VALIDATION.RULES.TYPE.ARRAY',
      boolean: 'VALIDATION.RULES.TYPE.BOOLEAN',
      number: 'VALIDATION.RULES.TYPE.NUMBER',
      object: 'VALIDATION.RULES.TYPE.OBJECT',
      string: 'VALIDATION.RULES.TYPE.STRING',
    };

    if (isTranslateField) field = trans(field);

    return trans('VALIDATION.RULES.TYPE_ERROR', { field, type: trans(types[type]) });
  }
}

export const vTrans = new ValidationTranslator();
