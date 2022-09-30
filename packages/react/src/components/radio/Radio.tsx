/* eslint-disable jsx-a11y/label-has-associated-control */
import { ThemeContext } from '@/index';
import { typedMemo } from '@/shared/helpers';
import { useControlledValue } from '@/shared/hooks';
import { DynamicComponent } from '@/shared/interfaces';
import { componentStyles, RadioProps as CoreRadioProps } from '@my-ui/core';
import cx from 'classnames';
import React, {
  DetailedHTMLProps,
  InputHTMLAttributes,
  ReactNode,
  useContext,
  useMemo,
} from 'react';
import { Div } from '../div';
import { Typography } from '../typography';

export interface RadioProps
  extends CoreRadioProps,
    DynamicComponent<CoreRadioProps> {
  checkedContent?: ReactNode;
  inputProps?: DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >;
  label?: ReactNode;
}

const Radio = ({
  className,
  checkedContent = <Div radius="circle" component="span" />,
  checked,
  defaultChecked,
  disabled,
  label,
  contentContainerProps = {},
  inputProps: { onChange, ...inputProps } = {},
  ...radioProps
}: RadioProps) => {
  const { labelProps, ...radioStyles } = useMemo(
    () => componentStyles.generateRadioStyles(radioProps),
    [radioProps],
  );

  const [isRadioChecked, setRadioChecked] = useControlledValue(
    defaultChecked,
    checked,
  );

  useContext(ThemeContext);

  return (
    <label className={radioStyles.label}>
      <div
        className={cx(
          radioStyles.Radio,
          {
            [radioStyles.ActiveRadio]: isRadioChecked,
            [radioStyles.DisabledRadio]: disabled,
          },
          className,
        )}
      >
        <input
          {...inputProps}
          type="radio"
          checked={!!isRadioChecked}
          disabled={disabled}
          onChange={e => {
            setRadioChecked(!isRadioChecked);

            onChange?.(e);
          }}
        />
        {isRadioChecked && (
          <Div
            component="span"
            {...contentContainerProps}
            className={cx(
              radioStyles.RadioIcon,
              contentContainerProps.className,
            )}
          >
            {checkedContent}
          </Div>
        )}
      </div>
      {label && (
        <Typography component="span" {...(labelProps || {})}>
          {label}
        </Typography>
      )}
    </label>
  );
};

export default typedMemo(Radio);
