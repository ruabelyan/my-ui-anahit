import { DivProps } from '../div';
import {
  ColorConfigurableComponent,
  ColorType,
  DesignTokens,
  DisplayConfigurableComponent,
  FocusableColorConfigurableComponent,
  FocusableDesignTokens,
} from '../interfaces';

export default interface RadioProps
  extends Omit<
      DesignTokens,
      keyof ColorConfigurableComponent | keyof DisplayConfigurableComponent
    >,
    Omit<FocusableDesignTokens, keyof FocusableColorConfigurableComponent> {
  contentWidth?: DivProps['width'];
  contentHeight?: DivProps['height'];
  contentBgColor?: ColorType;

  disabled?: boolean;
  disabledBorderColor?: ColorType;
  disabledBg?: ColorType;
  disabledColor?: ColorType;
  checked?: boolean;
  defaultChecked?: boolean;
  checkedBg?: ColorType;
  hoverCheckedBg?: ColorType;
  focusCheckedBg?: ColorType;
  checkedBorderColor?: ColorType;
  checkedActiveShadowColor?: string | string[];
  contentContainerProps?: DivProps;
  labelProps?: DivProps;
}
