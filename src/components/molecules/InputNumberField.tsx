import { InputNumber } from 'antd';
import { SizeType } from 'antd/lib/config-provider/SizeContext';
import { valueType } from 'antd/lib/statistic/utils';
import clsx from 'clsx';
import {
  FocusEventHandler,
  KeyboardEventHandler,
  MouseEventHandler,
  ReactNode,
  useId,
} from 'react';
import { Form } from 'react-bootstrap';
import { Control, Path, useController } from 'react-hook-form';

type IProps<IForm extends object> = {
  readonly name: Path<IForm>;
  readonly addonAfter?: ReactNode;
  readonly addonBefore?: ReactNode;
  readonly autoComplete?: boolean;
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
  readonly max?: number;
  readonly maxLength?: number;
  readonly min?: number;
  readonly onBlur?: FocusEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  readonly onChange?: (value: number) => void;
  readonly onClick?: MouseEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  readonly onFocus?: FocusEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  readonly onInput?: (text: string) => void;
  readonly onPressEnter?: KeyboardEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  onStep?: (
    value: number,
    info: {
      offset: valueType;
      type: 'up' | 'down';
    }
  ) => void;
  readonly pattern?: string;
  readonly placeholder?: string;
  readonly prefix?: ReactNode;
  readonly readOnly?: boolean;
  readonly required?: boolean;
  readonly size?: SizeType;
  readonly value?: number;
};

const InputNumberField = <IForm extends object>(props: IProps<IForm>) => {
  const controlId = useId();

  const { field, formState } = props.control
    ? useController({ control: props.control, name: props.name })
    : { field: undefined, formState: undefined };
  const errorMessage = (formState?.errors[props.name]?.message as string) || '';

  return (
    <Form.Group className={clsx(props.groupClass)} controlId={controlId}>
      <Form.Label
        className={clsx(!props.label && 'd-none', props.required && 'required', props.labelClass)}
      >
        {props.label}
      </Form.Label>

      <InputNumber
        {...field}
        addonAfter={props.addonAfter}
        addonBefore={props.addonBefore}
        autoComplete={props.autoComplete ? 'on' : 'off'}
        autoFocus={props.autofocus}
        className={clsx(!!errorMessage && 'is-invalid', props.className)}
        disabled={props.disabled}
        id={props.id}
        max={props.max}
        maxLength={props.maxLength}
        min={props.min}
        onBlur={(e) => {
          field?.onBlur();
          props.onBlur?.(e);
        }}
        onChange={(value) => {
          field?.onChange(value);
          props.onChange?.(value);
        }}
        onClick={props.onClick}
        onFocus={props.onFocus}
        onInput={props.onInput}
        onPressEnter={props.onPressEnter}
        onStep={props.onStep}
        pattern={props.pattern}
        placeholder={props.placeholder}
        prefix={props.prefix}
        readOnly={props.readOnly}
        size={props.size}
        status={errorMessage ? 'error' : ''}
        type="number"
        value={field?.value || props.value}
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

InputNumberField.defaultProps = {
  allowClear: true,
  autoComplete: true,
  size: 'large',
  type: 'text',
  visibilityToggle: true,
};

export { InputNumberField };
