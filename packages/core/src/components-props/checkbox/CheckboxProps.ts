import { DivProps } from '../div';
import {
  ColorConfigurableComponent,
  ColorType,
  DesignTokens,
  DisplayConfigurableComponent,
  FocusableColorConfigurableComponent,
  FocusableDesignTokens,
  TextConfigurableComponent,
} from '../interfaces';

export default interface CheckboxProps
  extends Omit<
      DesignTokens,
      | keyof TextConfigurableComponent
      | keyof ColorConfigurableComponent
      | keyof DisplayConfigurableComponent
    >,
    Omit<FocusableDesignTokens, keyof FocusableColorConfigurableComponent> {
  contentWidth?: DivProps['width'];
  contentHeight?: DivProps['height'];

  disabled?: boolean;
  disabledCheckedBg?: ColorType;
  disabledBorderColor?: ColorType;

  checked?: boolean;
  defaultChecked?: boolean;

  checkedBg?: ColorType;
  hoverCheckedBg?: ColorType;
  focusCheckedBg?: ColorType;
  activeCheckedBg?: ColorType;

  checkedActiveShadowColor?: string | string[];

  contentContainerProps?: DivProps;
}
