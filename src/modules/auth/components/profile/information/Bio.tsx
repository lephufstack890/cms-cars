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
import { FormBioProfileModel } from '@/modules/auth/models/profile';
import { trans } from '@/utils';

const defaultValues: FormBioProfileModel = {
  date_of_birth: '',
  gender: '',
  image: {},
  note: '',
  occupation: '',
  type: '',
};

export function Bio() {
  const { isLoading } = useAuth();
  const resolver = yupResolver(getLoginFormSchema());
  const formMethods = useForm<FormBioProfileModel>({ defaultValues, resolver });

  const onSubmit: SubmitHandler<FormBioProfileModel> = (formData) => {
    console.log(formData);
  };

  return (
    <FormField className="form w-100" methods={formMethods} onSubmit={onSubmit}>
      <UploadField
        accept={{ 'image/*': [] }}
        control={formMethods.control}
        groupClass="fv-row mb-7"
        label={<b>{trans('VALIDATION.FIELD.EMPLOYEE.IMAGE')}</b>}
        name={'image'}
        type="avatar"
        isOutlineAvatar
        required
      />

      <InputDateField
        className="w-100"
        control={formMethods.control}
        formatValue={TIME_FORMAT.BE.DATE}
        groupClass="mb-7 fv-row"
        label={<b>{trans('VALIDATION.FIELD.EMPLOYEE.DATE_OF_BIRTH')}</b>}
        name="date_of_birth"
        required
      />

      <SelectField
        control={formMethods.control}
        // getOptionLabel={(option) => option.name}
        // getOptionValue={(option) => option.code}
        groupClass="mb-7 fv-row"
        label={<b>{trans('VALIDATION.FIELD.EMPLOYEE.GENDER')}</b>}
        name="gender"
        options={[]}
        required
      />

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

      <SelectField
        control={formMethods.control}
        // getOptionLabel={(option) => option.name}
        // getOptionValue={(option) => option.code}
        groupClass="mb-7 fv-row"
        label={<b>{trans('VALIDATION.FIELD.EMPLOYEE.OCCUPATION')}</b>}
        name="occupation"
        options={[]}
        required
      />

      <InputField
        control={formMethods.control}
        groupClass="mb-5"
        label={<b>{trans('VALIDATION.FIELD.EMPLOYEE.NOTE')}</b>}
        name="note"
        placeholder="note"
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
