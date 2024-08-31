import clsx from 'clsx';
import { Form } from 'react-bootstrap';
import { FieldErrors, FormProvider, UseFormReturn } from 'react-hook-form';

import { WithChildren } from '@/_metronic/helpers';

interface IProps<IForm extends object> extends WithChildren {
  readonly methods: UseFormReturn<IForm, object>;
  readonly onSubmit: (data: IForm, event?: React.BaseSyntheticEvent) => void;
  readonly className?: string;
  readonly disabled?: boolean;
  readonly onInvalid?: (errors: FieldErrors<IForm>, event?: React.BaseSyntheticEvent) => void;
}

const FormField = <IForm extends object>(props: IProps<IForm>) => {
  return (
    <FormProvider {...props.methods}>
      <Form
        className={clsx(props.className)}
        onSubmit={props.methods.handleSubmit(props.onSubmit, props.onInvalid)}
        noValidate
      >
        <fieldset disabled={props.disabled}>{props.children}</fieldset>
      </Form>
    </FormProvider>
  );
};

export { FormField };
