import { DivProps } from '../div';
import {
  BlurConfigurableComponent,
  ColorType,
  DesignTokens,
  DisplayConfigurableComponent,
  PositionConfigurableComponent,
} from '../interfaces';

export default interface BaseInputProps extends DesignTokens {
  disabled?: boolean;
  disabledColor?: ColorType;
  disabledBg?: ColorType;
  disabledBorderColor?: ColorType;
  containerProps?: Omit<
    DivProps,
    keyof BlurConfigurableComponent | keyof DisplayConfigurableComponent
  >;
  labelContainerProps?: Omit<
    DivProps,
    keyof BlurConfigurableComponent | keyof DisplayConfigurableComponent
  >;

  startContentContainerProps?: Omit<
    DivProps,
    keyof PositionConfigurableComponent
  >;
  endContentContainerProps?: Omit<
    DivProps,
    keyof PositionConfigurableComponent
  >;
  messageContainerProps?: DivProps;
  endButtonContent?: unknown;
  startButtonContent?: unknown;
}
