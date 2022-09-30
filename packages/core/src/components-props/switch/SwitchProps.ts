import { DivProps } from '../div';
import {
  ColorConfigurableComponent,
  ColorType,
  DesignTokens,
  DisplayConfigurableComponent,
  FocusableColorConfigurableComponent,
  FocusableDesignTokens,
  PositionConfigurableComponent,
  TextConfigurableComponent,
} from '../interfaces';

export default interface SwitchProps
  extends Omit<
      DesignTokens,
      | keyof PositionConfigurableComponent
      | keyof TextConfigurableComponent
      | keyof ColorConfigurableComponent
      | keyof ColorConfigurableComponent
      | keyof DisplayConfigurableComponent
    >,
    Omit<FocusableDesignTokens, keyof FocusableColorConfigurableComponent> {
  defaultIndicatorWidth?: DivProps['width'];
  defaultIndicatorHeight?: DivProps['height'];

  disabled?: boolean;
  disabledBg?: ColorType;

  checked?: boolean;
  defaultChecked?: boolean;

  checkedBg?: ColorType;
  hoverCheckedBg?: ColorType;
  focusCheckedBg?: ColorType;
  activeCheckedBg?: ColorType;

  indicatorContainerProps?: DivProps;
  switchSliderProps?: DivProps;
}
