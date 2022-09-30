import { ThemeContext } from '@/index';
import { typedMemo } from '@/shared/helpers';
import { useControlledValue } from '@/shared/hooks';
import { DynamicComponent } from '@/shared/interfaces';
import {
  CheckboxProps as CoreCheckboxProps,
  componentStyles,
} from '@my-ui/core';
import cx from 'classnames';
import React, {
  DetailedHTMLProps,
  InputHTMLAttributes,
  ReactNode,
  useContext,
  useMemo,
} from 'react';
import { Div } from '../div';

export interface CheckboxProps
  extends CoreCheckboxProps,
    DynamicComponent<CoreCheckboxProps> {
  checkedContent?: ReactNode;
  inputProps?: DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >;
}

const Checkbox = ({
  className,
  checkedContent,
  checked,
  defaultChecked,
  disabled,
  contentContainerProps = {},
  inputProps: { onChange, ...inputProps } = {},
  ...checkboxProps
}: CheckboxProps) => {
  const checkboxStyles = useMemo(
    () => componentStyles.generateCheckboxStyles(checkboxProps),
    [checkboxProps],
  );

  const [isCheckboxChecked, setCheckboxChecked] = useControlledValue(
    defaultChecked,
    checked,
  );

  useContext(ThemeContext);

  return (
    // eslint-disable-next-line jsx-a11y/label-has-associated-control
    <label
      className={cx(
        checkboxStyles.Checkbox,
        {
          [checkboxStyles.ActiveCheckbox]: isCheckboxChecked,
          [checkboxStyles.DisabledCheckbox(!!isCheckboxChecked)]: disabled,
        },
        className,
      )}
    >
      <input
        {...inputProps}
        type="checkbox"
        checked={!!isCheckboxChecked}
        disabled={disabled}
        onChange={e => {
          setCheckboxChecked(!isCheckboxChecked);

          onChange?.(e);
        }}
      />
      <Div
        component="span"
        {...contentContainerProps}
        className={checkboxStyles.CheckboxIcon}
      >
        {isCheckboxChecked && checkedContent}
      </Div>
    </label>
  );
};

export default typedMemo(Checkbox);
