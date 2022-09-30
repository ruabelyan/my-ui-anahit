import { DivProps } from '../div';
import {
  ColorType,
  DesignTokens,
  FocusableColorConfigurableComponent,
  FocusableDesignTokens,
} from '../interfaces';

export default interface BreadcrumbItemProps
  extends DesignTokens,
    Omit<FocusableDesignTokens, keyof FocusableColorConfigurableComponent> {
  startContent?: unknown;
  endContent?: unknown;
  endContentProps?: DivProps;
  startContentProps?: DivProps;
  hoverColor?: ColorType;
  color?: ColorType;
  disabled?: boolean;
  disabledColor?: ColorType;
}
