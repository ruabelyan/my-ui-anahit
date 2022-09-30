import { ThemeContext } from '@/index';
import { typedMemo } from '@/shared/helpers';
import { DynamicComponent } from '@/shared/interfaces';
import { InputProps as CoreInputProps } from '@core/components-props';
import { calculateRem } from '@core/shared';
import { componentStyles, FocusableDesignTokens } from '@my-ui/core';
import cx from 'classnames';
import React, {
  DetailedHTMLProps,
  InputHTMLAttributes,
  ReactNode,
  useContext,
  useMemo,
} from 'react';
import { Div } from '../div';

export interface InputProps
  extends CoreInputProps,
    FocusableDesignTokens,
    DynamicComponent<CoreInputProps> {
  startContent?: ReactNode;
  message?: ReactNode;
  label?: ReactNode;
  endContent?: ReactNode;
  inputProps?: DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >;
  endButtonContent?: ReactNode;
  startButtonContent?: ReactNode;
}

const Input = ({
  className,
  containerProps,
  message,
  inputProps = {},
  blur,
  hoverBlur,
  label,
  backdropBlur,
  disabled,
  hoverBackdropBlur,
  ...props
}: InputProps) => {
  const { endContent, startContent } = props;

  const {
    inputPropsWithPresets: {
      messageContainerProps = {},
      labelContainerProps = {},
      endContentContainerProps = {},
      startContentContainerProps = {},
    },
    ...inputStyles
  } = useMemo(
    () => componentStyles.generateInputStyles(props),
    [startContent, endContent, props],
  );

  useContext(ThemeContext);

  return (
    <Div display="flex" flexDir="column">
      <Div
        {...labelContainerProps}
        className={cx(
          inputStyles.LabelContainer(disabled),
          labelContainerProps?.className,
        )}
      >
        {label}
      </Div>

      <Div component="div" display="flex" cursor="text">
        <Div
          component="label"
          cursor="text"
          blur={blur}
          hoverBlur={hoverBlur}
          backdropBlur={backdropBlur}
          hoverBackdropBlur={hoverBackdropBlur}
          display="flex"
          justify="space-between"
          align="center"
          {...containerProps}
          className={cx(
            inputStyles.InputContainer(disabled),
            containerProps?.className,
          )}
        >
          {startContent && (
            <Div {...startContentContainerProps} display="flex" align="center">
              {startContent}
            </Div>
          )}
          <Div
            component="label"
            width="100%"
            cursor="text"
            padding={{ y: '6', x: '4' }}
          >
            <input
              {...inputProps}
              disabled={disabled}
              className={cx(inputStyles.Input, className)}
            />
          </Div>
          {endContent && (
            <Div
              width={calculateRem(20)}
              height={calculateRem(20)}
              {...endContentContainerProps}
              display="flex"
              align="center"
            >
              {endContent}
            </Div>
          )}
        </Div>
      </Div>
      {message && <Div {...messageContainerProps}>{message}</Div>}
    </Div>
  );
};

export default typedMemo(Input);
