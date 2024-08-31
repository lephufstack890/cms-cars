import { yupResolver } from '@hookform/resolvers/yup';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

import { Button } from '@/components/molecules/Button';
import { FormField } from '@/components/molecules/FormField';
import { InputField } from '@/components/molecules/InputField';
import { SelectField } from '@/components/molecules/SelectField';
import { getLoginFormSchema, useAuth } from '@/hooks/useAuth';
import { FormRegisterModel } from '@/models';
import { trans } from '@/utils';

const defaultValues: FormRegisterModel = {
  first_name: '',
  last_name: '',
  phone_number: '',
  province_id: '',
  referral_code: '',
  service_id: '',
};

export function VehicleRegistrationCertificate() {
  const { isLoading } = useAuth();
  const resolver = yupResolver(getLoginFormSchema());
  const formMethods = useForm<FormRegisterModel>({ defaultValues, resolver });

  const onSubmit: SubmitHandler<FormRegisterModel> = (formData) => {
    console.log(formData);
  };

  return (
    <FormField className="form w-100" methods={formMethods} onSubmit={onSubmit}>
      <div className="text-center mb-10">
        <h1 className="text-dark mb-3">Sign In to {import.meta.env.VITE_APP_NAME}</h1>
        <div className="text-gray-400 fw-bold fs-4">
          Already have an account?{' '}
          <Link className="link-primary fw-bolder" to="/auth/login">
            Login here
          </Link>
        </div>
      </div>

      <SelectField
        control={formMethods.control}
        // getOptionLabel={(option) => option.name}
        // getOptionValue={(option) => option.code}
        groupClass="mb-7 fv-row"
        label={<b>{trans('VALIDATION.FIELD.EMPLOYEE.EMPLOYEE_TYPE_CODE')}</b>}
        name="province_id"
        options={[]}
        required
      />

      <SelectField
        control={formMethods.control}
        // getOptionLabel={(option) => option.name}
        // getOptionValue={(option) => option.code}
        groupClass="mb-7 fv-row"
        label={<b>{trans('VALIDATION.FIELD.EMPLOYEE.EMPLOYEE_TYPE_CODE')}</b>}
        name="service_id"
        options={[]}
        required
      />

      <InputField
        control={formMethods.control}
        groupClass="mb-5"
        label={<b>first_name</b>}
        name="first_name"
        placeholder="first_name"
        required
      />

      <InputField
        control={formMethods.control}
        groupClass="mb-5"
        label={<b>last_name</b>}
        name="last_name"
        placeholder="last_name"
        required
      />

      <InputField
        control={formMethods.control}
        groupClass="mb-5"
        label={<b>phone_number</b>}
        name="phone_number"
        placeholder="phone_number"
        type="tel"
        required
      />

      <InputField
        control={formMethods.control}
        groupClass="mb-5"
        label={<b>referral_code</b>}
        name="referral_code"
        placeholder="referral_code"
        type="tel"
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
