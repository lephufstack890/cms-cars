import { Switch } from 'antd';
import clsx from 'clsx';
import { MouseEvent, ReactNode, useId } from 'react';
import { Form } from 'react-bootstrap';
import { Control, Path, useController } from 'react-hook-form';

interface IProps<IForm extends object> {
  readonly name: Path<IForm>;
  readonly autofocus?: boolean;
  readonly className?: string;
  readonly control?: Control<IForm, object>;
  readonly disabled?: boolean;
  readonly errorClass?: string;
  readonly feedBackTestId?: string;
  readonly groupClass?: string;
  readonly hint?: ReactNode;
  readonly hintClass?: string;
  readonly id?: string;
  readonly label?: ReactNode;
  readonly labelClass?: string;
  readonly loading?: boolean;
  readonly onChange?: (checked: boolean, event: MouseEvent<HTMLButtonElement>) => void;
  readonly onClick?: (checked: boolean, event: MouseEvent<HTMLButtonElement>) => void;
  readonly required?: boolean;
  readonly size?: 'small' | 'default';
  readonly value?: boolean;
}

const SwitchField = <IForm extends object>(props: IProps<IForm>) => {
  const controlId = useId();

  const { field, formState } = props.control
    ? useController({ control: props.control, name: props.name })
    : { field: undefined, formState: undefined };
  console.log(formState?.errors[props.name]);

  const errorMessage = (formState?.errors[props.name]?.message as string) || '';

  return (
    <Form.Group className={clsx(props.groupClass)} controlId={controlId}>
      <Form.Label
        className={clsx(!props.label && 'd-none', props.required && 'required', props.labelClass)}
      >
        {props.label}
      </Form.Label>
      <Switch
        {...field}
        autoFocus={props.autofocus}
        checked={field?.value || props.value}
        className={clsx(!!errorMessage && 'is-invalid', props.className)}
        disabled={props.disabled}
        id={props.id}
        loading={props.loading}
        onChange={(checked, event) => {
          field?.onChange(checked, event);
          props.onChange?.(checked, event);
        }}
        onClick={props.onClick}
        size={props.size}
      />
      <Form.Text className={clsx('text-muted', props.hintClass)}>{props.hint}</Form.Text>
      <Form.Control.Feedback
        className={clsx(props.errorClass)}
        data-testid={props.feedBackTestId}
        type="invalid"
      >
        {errorMessage}
      </Form.Control.Feedback>
    </Form.Group>
  );
};

SwitchField.defaultProps = { size: 'default' };

export { SwitchField };
