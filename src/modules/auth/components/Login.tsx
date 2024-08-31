import { yupResolver } from '@hookform/resolvers/yup';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

import { Button } from '@/components/molecules/Button';
import { FormField } from '@/components/molecules/FormField';
import { InputField } from '@/components/molecules/InputField';
import { getLoginFormSchema, useAuth } from '@/hooks/useAuth';
import { FormLoginModel } from '@/models';
import { trans } from '@/utils';

const defaultValues: FormLoginModel = {
  password: 'lPbtgmKE1aWsBTsb',
  user_name: '0983241111',
};

export function Login() {
  const { login, isLoading } = useAuth();
  const resolver = yupResolver(getLoginFormSchema());
  const formMethods = useForm<FormLoginModel>({ defaultValues, resolver });

  const onSubmit: SubmitHandler<FormLoginModel> = (formData) => {
    login(formData);
  };

  return (
    <FormField className="form w-100" methods={formMethods} onSubmit={onSubmit}>
      <div className="text-center mb-10">
        <h1 className="text-dark mb-3">Sign In to {import.meta.env.VITE_APP_NAME}</h1>
        <div className="text-gray-400 fw-bold fs-4">
          New Here?{' '}
          <Link className="link-primary fw-bolder" to="/auth/register">
            Create an Account
          </Link>
        </div>
      </div>

      <div className="mb-10 bg-light-info p-8 rounded">
        <div className="text-info">
          Use account <strong>{defaultValues.user_name}</strong> and password{' '}
          <strong>{defaultValues.password}</strong> to continue.
        </div>
      </div>

      <InputField
        autoComplete={false}
        control={formMethods.control}
        data-testid="username"
        feedBackTestId="feed-back-username"
        groupClass="mb-5"
        label={<b>Username</b>}
        name="user_name"
        placeholder="Email"
        type="email"
        required
      />

      <InputField
        autoComplete={false}
        control={formMethods.control}
        data-testid="password"
        feedBackTestId="feed-back-password"
        groupClass="mb-5"
        label={<b>Password</b>}
        name="password"
        type="password"
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
