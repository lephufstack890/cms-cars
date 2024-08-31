import { yupResolver } from '@hookform/resolvers/yup';
import { SubmitHandler, useForm } from 'react-hook-form';

import { Button } from '@/components/molecules/Button';
import { FormField } from '@/components/molecules/FormField';
import { InputField } from '@/components/molecules/InputField';
import { SelectField } from '@/components/molecules/SelectField';
import { UploadField } from '@/components/molecules/UploadField';
import { getLoginFormSchema, useAuth } from '@/hooks/useAuth';
import { FormDrivingLicenseProfileModel } from '@/modules/auth/models/profile';
import { trans } from '@/utils';

const defaultValues: FormDrivingLicenseProfileModel = {
  image_back: {},
  image_front: {},
  license_class: '',
  license_number: '',
};

export function DrivingLicense() {
  const { isLoading } = useAuth();
  const resolver = yupResolver(getLoginFormSchema());
  const formMethods = useForm<FormDrivingLicenseProfileModel>({ defaultValues, resolver });

  const onSubmit: SubmitHandler<FormDrivingLicenseProfileModel> = (formData) => {
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
        label={<b>{trans('VALIDATION.FIELD.EMPLOYEE.LICENSE_NUMBER')}</b>}
        name="license_number"
        placeholder="license_number"
        required
      />

      <SelectField
        control={formMethods.control}
        // getOptionLabel={(option) => option.name}
        // getOptionValue={(option) => option.code}
        groupClass="mb-7 fv-row"
        label={<b>{trans('VALIDATION.FIELD.EMPLOYEE.LICENSE_CLASS')}</b>}
        name="license_class"
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
