import { yupResolver } from '@hookform/resolvers/yup';
import { SubmitHandler, useForm } from 'react-hook-form';

import { Button } from '@/components/molecules/Button';
import { FormField } from '@/components/molecules/FormField';
import { InputDateField } from '@/components/molecules/InputDateField';
import { InputField } from '@/components/molecules/InputField';
import { UploadField } from '@/components/molecules/UploadField';
import { TIME_FORMAT } from '@/constants';
import { getLoginFormSchema, useAuth } from '@/hooks/useAuth';
import { FormDeclarationProfileModel } from '@/modules/auth/models/profile';
import { trans } from '@/utils';

const defaultValues: FormDeclarationProfileModel = {
  expiration_time: '',
  image_fifth: {},
  image_first: {},
  image_fourth: {},
  image_second: {},
  image_sixth: {},
  image_third: {},
  issuance_time: '',
  name: '',
};

export function Declaration() {
  const { isLoading } = useAuth();
  const resolver = yupResolver(getLoginFormSchema());
  const formMethods = useForm<FormDeclarationProfileModel>({ defaultValues, resolver });

  const onSubmit: SubmitHandler<FormDeclarationProfileModel> = (formData) => {
    console.log(formData);
  };

  return (
    <FormField className="form w-100" methods={formMethods} onSubmit={onSubmit}>
      <UploadField
        accept={{ 'image/*': [] }}
        control={formMethods.control}
        groupClass="fv-row mb-7"
        label={<b>{trans('VALIDATION.FIELD.EMPLOYEE.IMAGE_FIRST')}</b>}
        name={'image_first'}
        type="avatar"
        isOutlineAvatar
        required
      />

      <UploadField
        accept={{ 'image/*': [] }}
        control={formMethods.control}
        groupClass="fv-row mb-7"
        label={<b>{trans('VALIDATION.FIELD.EMPLOYEE.IMAGE_SECOND')}</b>}
        name={'image_second'}
        type="avatar"
        isOutlineAvatar
        required
      />

      <UploadField
        accept={{ 'image/*': [] }}
        control={formMethods.control}
        groupClass="fv-row mb-7"
        label={<b>{trans('VALIDATION.FIELD.EMPLOYEE.IMAGE_THIRD')}</b>}
        name={'image_third'}
        type="avatar"
        isOutlineAvatar
        required
      />

      <UploadField
        accept={{ 'image/*': [] }}
        control={formMethods.control}
        groupClass="fv-row mb-7"
        label={<b>{trans('VALIDATION.FIELD.EMPLOYEE.IMAGE_FOURTH')}</b>}
        name={'image_fourth'}
        type="avatar"
        isOutlineAvatar
        required
      />

      <UploadField
        accept={{ 'image/*': [] }}
        control={formMethods.control}
        groupClass="fv-row mb-7"
        label={<b>{trans('VALIDATION.FIELD.EMPLOYEE.IMAGE_FIFTH')}</b>}
        name={'image_fifth'}
        type="avatar"
        isOutlineAvatar
        required
      />

      <UploadField
        accept={{ 'image/*': [] }}
        control={formMethods.control}
        groupClass="fv-row mb-7"
        label={<b>{trans('VALIDATION.FIELD.EMPLOYEE.IMAGE_SIXTH')}</b>}
        name={'image_sixth'}
        type="avatar"
        isOutlineAvatar
        required
      />

      <InputField
        control={formMethods.control}
        groupClass="mb-5"
        label={<b>{trans('VALIDATION.FIELD.EMPLOYEE.NAME')}</b>}
        name="name"
        placeholder="name"
        required
      />

      <InputDateField
        className="w-100"
        control={formMethods.control}
        formatValue={TIME_FORMAT.BE.DATE}
        groupClass="mb-7 fv-row"
        label={<b>{trans('VALIDATION.FIELD.EMPLOYEE.ISSUANCE_TIME')}</b>}
        name="issuance_time"
        required
      />

      <InputDateField
        className="w-100"
        control={formMethods.control}
        formatValue={TIME_FORMAT.BE.DATE}
        groupClass="mb-7 fv-row"
        label={<b>{trans('VALIDATION.FIELD.EMPLOYEE.EXPIRATION_TIME')}</b>}
        name="expiration_time"
        required
      />

      <div className="text-center">
        <Button
          className="my-5 w-100"
          data-testid="button-login"
          isLoading={isLoading}
          type="submit"
          variant="primary"
        >
          {trans('AUTH.GENERAL.CONTINUE_BUTTON')}
        </Button>
      </div>
    </FormField>
  );
}
