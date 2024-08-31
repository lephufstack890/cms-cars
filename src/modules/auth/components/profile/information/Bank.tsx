import { yupResolver } from '@hookform/resolvers/yup';
import { SubmitHandler, useForm } from 'react-hook-form';

import { Button } from '@/components/molecules/Button';
import { FormField } from '@/components/molecules/FormField';
import { InputField } from '@/components/molecules/InputField';
import { SelectField } from '@/components/molecules/SelectField';
import { getLoginFormSchema, useAuth } from '@/hooks/useAuth';
import { FormBankProfileModel } from '@/modules/auth/models/profile';
import { trans } from '@/utils';

const defaultValues: FormBankProfileModel = {
  account_number: '',
  bank_code: '',
  bank_name: '',
  bank_number_1: '',
  bank_number_2: '',
  owner_name: '',
};

export function Bank() {
  const { isLoading } = useAuth();
  const resolver = yupResolver(getLoginFormSchema());
  const formMethods = useForm<FormBankProfileModel>({ defaultValues, resolver });

  const onSubmit: SubmitHandler<FormBankProfileModel> = (formData) => {
    console.log(formData);
  };

  return (
    <FormField className="form w-100" methods={formMethods} onSubmit={onSubmit}>
      <InputField
        control={formMethods.control}
        groupClass="mb-5"
        label={<b>{trans('VALIDATION.FIELD.EMPLOYEE.owner_name')}</b>}
        name="owner_name"
        placeholder="owner_name"
        required
      />

      <InputField
        control={formMethods.control}
        groupClass="mb-5"
        label={<b>{trans('VALIDATION.FIELD.EMPLOYEE.account_number')}</b>}
        name="account_number"
        placeholder="account_number"
        required
      />

      <SelectField
        control={formMethods.control}
        // getOptionLabel={(option) => option.name}
        // getOptionValue={(option) => option.code}
        groupClass="mb-7 fv-row"
        label={<b>{trans('VALIDATION.FIELD.EMPLOYEE.bank_name')}</b>}
        name="bank_name"
        options={[]}
        required
      />

      <InputField
        control={formMethods.control}
        groupClass="mb-5"
        label={<b>{trans('VALIDATION.FIELD.EMPLOYEE.bank_code')}</b>}
        name="bank_code"
        placeholder="bank_code"
        required
      />

      <InputField
        control={formMethods.control}
        groupClass="mb-5"
        label={<b>{trans('VALIDATION.FIELD.EMPLOYEE.bank_number_1')}</b>}
        name="bank_number_1"
        placeholder="bank_number_1"
        required
      />

      <InputField
        control={formMethods.control}
        groupClass="mb-5"
        label={<b>{trans('VALIDATION.FIELD.EMPLOYEE.bank_number_2')}</b>}
        name="bank_number_2"
        placeholder="bank_number_2"
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
