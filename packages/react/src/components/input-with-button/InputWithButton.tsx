import { Button, ButtonProps } from '@/components/button';
import { Input, ThemeContext } from '@/index';
import { typedMemo } from '@/shared/helpers';
import { DynamicComponent } from '@/shared/interfaces';
import { InputWithButtonProps as CoreInputWithButtonProps } from '@core/components-props';
import { ReactNode, useContext } from 'react';
import { Div } from '../div';
import { InputProps } from '../input';

export interface InputWithButtonProps
  extends CoreInputWithButtonProps,
    DynamicComponent<CoreInputWithButtonProps> {
  startContent?: ReactNode;
  message?: ReactNode;
  label?: ReactNode;
  endContent?: ReactNode;
  endButtonContent?: ReactNode;
  startButtonContent?: ReactNode;

  endButtonProps?: ButtonProps;
  startButtonProps?: ButtonProps;

  inputProps?: InputProps;
}

const InputWithButton = ({
  message,
  blur,
  hoverBlur,
  label,
  backdropBlur,
  hoverBackdropBlur,
  endButtonProps,
  startButtonProps,
  inputProps,
  startButtonContent,
  endButtonContent,
  disabled,
  disabledBg,
  disabledBorderColor,
  disabledColor,
  ...props
}: InputWithButtonProps) => {
  useContext(ThemeContext);

  return (
    <Div component="div" display="flex" align="flex-end" {...props}>
      {startButtonContent && (
        <Button
          radiusTopRight="none"
          radiusBottomRight="none"
          disabled={disabled}
          disabledBg={disabledBg}
          disabledBorderColor={disabledBorderColor}
          disabledColor={disabledColor}
          {...(startButtonProps as ButtonProps)}
        >
          {startButtonContent}
        </Button>
      )}
      <Input
        disabled={disabled}
        disabledBg={disabledBg}
        disabledBorderColor={disabledBorderColor}
        disabledColor={disabledColor}
        blur={blur}
        label={label}
        hoverBlur={hoverBlur}
        backdropBlur={backdropBlur}
        message={message}
        endButtonContent={endButtonContent}
        startButtonContent={startButtonContent}
        hoverBackdropBlur={hoverBackdropBlur}
        {...inputProps}
      />
      {endButtonContent && (
        <Button
          disabled={disabled}
          disabledBg={disabledBg}
          disabledBorderColor={disabledBorderColor}
          disabledColor={disabledColor}
          radiusTopLeft="none"
          radiusBottomLeft="none"
          {...(endButtonProps as ButtonProps)}
        >
          {endButtonContent}
        </Button>
      )}
    </Div>
  );
};

export default typedMemo(InputWithButton);
