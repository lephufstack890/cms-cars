import { yupResolver } from '@hookform/resolvers/yup';
import { SubmitHandler, useForm } from 'react-hook-form';

import { Button } from '@/components/molecules/Button';
import { FormField } from '@/components/molecules/FormField';
import { InputDateField } from '@/components/molecules/InputDateField';
import { InputField } from '@/components/molecules/InputField';
import { SelectField } from '@/components/molecules/SelectField';
import { UploadField } from '@/components/molecules/UploadField';
import { TIME_FORMAT } from '@/constants';
import { getLoginFormSchema, useAuth } from '@/hooks/useAuth';
import { FormIdentityCardProfileModel } from '@/modules/auth/models/profile';
import { trans } from '@/utils';

const defaultValues: FormIdentityCardProfileModel = {
  address: '',
  district_id: '',
  identity_card: '',
  image_back: {},
  image_front: {},
  place: '',
  province_id: '',
  time: '',
  ward_id: '',
};

export function IdentityCard() {
  const { isLoading } = useAuth();
  const resolver = yupResolver(getLoginFormSchema());
  const formMethods = useForm<FormIdentityCardProfileModel>({ defaultValues, resolver });

  const onSubmit: SubmitHandler<FormIdentityCardProfileModel> = (formData) => {
    console.log(formData);
  };

  return (
    <FormField className="form w-100" methods={formMethods} onSubmit={onSubmit}>
      <UploadField
        accept={{ 'image/*': [] }}
        control={formMethods.control}
        groupClass="fv-row mb-7"
        label={<b>{trans('VALIDATION.FIELD.EMPLOYEE.IMAGE_FRONT')}</b>}
        name={'image_front'}
        type="avatar"
        isOutlineAvatar
        required
      />

      <UploadField
        accept={{ 'image/*': [] }}
        control={formMethods.control}
        groupClass="fv-row mb-7"
        label={<b>{trans('VALIDATION.FIELD.EMPLOYEE.IMAGE_BACK')}</b>}
        name={'image_back'}
        type="avatar"
        isOutlineAvatar
        required
      />

      <InputField
        control={formMethods.control}
        groupClass="mb-5"
        label={<b>{trans('VALIDATION.FIELD.EMPLOYEE.IDENTITY_CARD')}</b>}
        name="identity_card"
        placeholder="identity_card"
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

      <InputField
        control={formMethods.control}
        groupClass="mb-5"
        label={<b>{trans('VALIDATION.FIELD.EMPLOYEE.PLACE')}</b>}
        name="place"
        placeholder="place"
        required
      />

      <InputField
        control={formMethods.control}
        groupClass="mb-5"
        label={<b>{trans('VALIDATION.FIELD.EMPLOYEE.ADDRESS')}</b>}
        name="address"
        placeholder="address"
        required
      />

      <SelectField
        control={formMethods.control}
        // getOptionLabel={(option) => option.name}
        // getOptionValue={(option) => option.code}
        groupClass="mb-7 fv-row"
        label={<b>{trans('VALIDATION.FIELD.EMPLOYEE.WARD_ID')}</b>}
        name="ward_id"
        options={[]}
        required
      />

      <SelectField
        control={formMethods.control}
        // getOptionLabel={(option) => option.name}
        // getOptionValue={(option) => option.code}
        groupClass="mb-7 fv-row"
        label={<b>{trans('VALIDATION.FIELD.EMPLOYEE.DISTRICT_ID')}</b>}
        name="district_id"
        options={[]}
        required
      />

      <SelectField
        control={formMethods.control}
        // getOptionLabel={(option) => option.name}
        // getOptionValue={(option) => option.code}
        groupClass="mb-7 fv-row"
        label={<b>{trans('VALIDATION.FIELD.EMPLOYEE.PROVINCE_ID')}</b>}
        name="province_id"
        options={[]}
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
