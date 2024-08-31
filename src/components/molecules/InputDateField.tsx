import { DatePicker } from 'antd';
import { SizeType } from 'antd/lib/config-provider/SizeContext';
import clsx from 'clsx';
import moment from 'moment';
import { FocusEventHandler, MouseEventHandler, ReactNode, useId, useMemo } from 'react';
import { Form } from 'react-bootstrap';
import { Control, Path, useController } from 'react-hook-form';

import { DateTimeFormat } from '@/constants';

interface IProps<IForm extends object> {
  readonly name: Path<IForm>;
  readonly autoComplete?: boolean;
  readonly autofocus?: boolean;
  readonly className?: string;
  readonly control?: Control<IForm, object>;
  readonly disabled?: boolean;
  readonly errorClass?: string;
  readonly feedBackTestId?: string;
  readonly format?: string;
  readonly formatValue?: DateTimeFormat;
  readonly groupClass?: string;
  readonly hint?: ReactNode;
  readonly hintClass?: string;
  readonly id?: string;
  readonly label?: ReactNode;
  readonly labelClass?: string;
  readonly onBlur?: FocusEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  readonly onChange?: (date: string) => void;
  readonly onClick?: MouseEventHandler<HTMLDivElement>;
  readonly onFocus?: FocusEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  readonly placeholder?: string;
  readonly required?: boolean;
  readonly size?: SizeType;
  readonly value?: string;
}

const InputDateField = <IForm extends object>(props: IProps<IForm>) => {
  const controlId = useId();

  const { field, formState } = props.control
    ? useController({ control: props.control, name: props.name })
    : { field: undefined, formState: undefined };

  const errorMessage = (formState?.errors[props.name]?.message as string) || '';
  const value = useMemo(() => field?.value || props.value, [field?.value, props.value]);

  return (
    <Form.Group className={clsx(props.groupClass)} controlId={controlId}>
      <Form.Label
        className={clsx(!props.label && 'd-none', props.required && 'required', props.labelClass)}
      >
        {props.label}
      </Form.Label>
      <DatePicker
        {...field}
        autoComplete={props.autoComplete ? 'on' : 'off'}
        autoFocus={props.autofocus}
        className={clsx(!!errorMessage && 'is-invalid', props.className)}
        disabled={props.disabled}
        format={props.format}
        id={props.id}
        onBlur={(e) => {
          field?.onBlur();
          props.onBlur?.(e);
        }}
        onChange={(date) => {
          const newDate = date?.format(props.formatValue);
          field?.onChange(newDate);
          props.onChange?.(newDate as string);
        }}
        onClick={props.onClick}
        onFocus={props.onFocus}
        placeholder={props.placeholder}
        size={props.size}
        status={errorMessage ? 'error' : ''}
        value={value ? moment(value, props.formatValue) : null}
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

InputDateField.defaultProps = { autoComplete: true, size: 'large' };

export { InputDateField };
