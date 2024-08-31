import { yupResolver } from '@hookform/resolvers/yup';
import { SubmitHandler, useForm } from 'react-hook-form';

import { Button } from '@/components/molecules/Button';
import { FormField } from '@/components/molecules/FormField';
import { InputField } from '@/components/molecules/InputField';
import { SelectField } from '@/components/molecules/SelectField';
import { getLoginFormSchema, useAuth } from '@/hooks/useAuth';
import { FormEmergencyContactProfileModel } from '@/modules/auth/models/profile';
import { trans } from '@/utils';

const defaultValues: FormEmergencyContactProfileModel = {
  address: '',
  district_id: '',
  name: '',
  phone_number: '',
  province_id: '',
  relationship: '',
  ward_id: '',
};

export function EmergencyContact() {
  const { isLoading } = useAuth();
  const resolver = yupResolver(getLoginFormSchema());
  const formMethods = useForm<FormEmergencyContactProfileModel>({ defaultValues, resolver });

  const onSubmit: SubmitHandler<FormEmergencyContactProfileModel> = (formData) => {
    console.log(formData);
  };

  return (
    <FormField className="form w-100" methods={formMethods} onSubmit={onSubmit}>
      <InputField
        control={formMethods.control}
        groupClass="mb-5"
        label={<b>{trans('VALIDATION.FIELD.EMPLOYEE.NAME')}</b>}
        name="name"
        placeholder="name"
        required
      />

      <SelectField
        control={formMethods.control}
        // getOptionLabel={(option) => option.name}
        // getOptionValue={(option) => option.code}
        groupClass="mb-7 fv-row"
        label={<b>{trans('VALIDATION.FIELD.EMPLOYEE.RELATIONSHIP')}</b>}
        name="relationship"
        options={[]}
        required
      />

      <InputField
        control={formMethods.control}
        groupClass="mb-5"
        label={<b>{trans('VALIDATION.FIELD.EMPLOYEE.PHONE_NUMBER')}</b>}
        name="phone_number"
        placeholder="phone_number"
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
