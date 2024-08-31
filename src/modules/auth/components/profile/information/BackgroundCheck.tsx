import { yupResolver } from '@hookform/resolvers/yup';
import { SubmitHandler, useForm } from 'react-hook-form';

import { Button } from '@/components/molecules/Button';
import { FormField } from '@/components/molecules/FormField';
import { InputDateField } from '@/components/molecules/InputDateField';
import { SelectField } from '@/components/molecules/SelectField';
import { UploadField } from '@/components/molecules/UploadField';
import { TIME_FORMAT } from '@/constants';
import { getLoginFormSchema, useAuth } from '@/hooks/useAuth';
import { FormBackgroundCheckProfileModel } from '@/modules/auth/models/profile';
import { trans } from '@/utils';

const defaultValues: FormBackgroundCheckProfileModel = {
  image_first: {},
  image_fourth: {},
  image_second: {},
  image_third: {},
  time: '',
  type: '',
};

export function BackgroundCheck() {
  const { isLoading } = useAuth();
  const resolver = yupResolver(getLoginFormSchema());
  const formMethods = useForm<FormBackgroundCheckProfileModel>({ defaultValues, resolver });

  const onSubmit: SubmitHandler<FormBackgroundCheckProfileModel> = (formData) => {
    console.log(formData);
  };

  return (
    <FormField className="form w-100" methods={formMethods} onSubmit={onSubmit}>
      <SelectField
        control={formMethods.control}
        // getOptionLabel={(option) => option.name}
        // getOptionValue={(option) => option.code}
        groupClass="mb-7 fv-row"
        label={<b>{trans('VALIDATION.FIELD.EMPLOYEE.TYPE')}</b>}
        name="type"
        options={[]}
        required
      />

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

      <InputDateField
        className="w-100"
        control={formMethods.control}
        formatValue={TIME_FORMAT.BE.DATE}
        groupClass="mb-7 fv-row"
        label={<b>{trans('VALIDATION.FIELD.EMPLOYEE.TIME')}</b>}
        name="time"
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
