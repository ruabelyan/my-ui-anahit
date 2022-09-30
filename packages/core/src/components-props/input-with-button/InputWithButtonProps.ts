import { BaseInputProps, ButtonProps } from '@core/index';

export default interface InputWithButtonProps extends BaseInputProps {
  endButtonProps?: ButtonProps;
  startButtonProps?: ButtonProps;
}
