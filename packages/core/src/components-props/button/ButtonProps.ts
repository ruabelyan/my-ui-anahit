import { DivProps } from '@core/components-props';
import {
  ColorType,
  DesignTokens,
  FocusableDesignTokens,
  PositionConfigurableComponent,
} from '../interfaces';

export default interface ButtonProps<THref = undefined>
  extends DesignTokens,
    FocusableDesignTokens {
  disabledColor?: ColorType;
  disabled?: boolean;
  disabledBg?: ColorType;
  disabledBorderColor?: ColorType;
  endContent?: unknown;
  startContent?: unknown;
  startContentContainerProps?: Omit<
    DivProps,
    keyof PositionConfigurableComponent
  >;
  endContentContainerProps?: Omit<
    DivProps,
    keyof PositionConfigurableComponent
  >;
  href?: THref;
}
