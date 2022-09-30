import { DivProps } from '../div';
import {
  ColorType,
  DesignTokens,
  FocusableColorConfigurableComponent,
  FocusableDesignTokens,
} from '../interfaces';

export default interface StepProps
  extends DesignTokens,
    Omit<FocusableDesignTokens, keyof FocusableColorConfigurableComponent> {
  filledBg?: ColorType;
  disabled?: boolean;
  description?: string;
  title?: string;
  titleProps?: DivProps;
  descriptionProps?: DivProps;
  containerProps?: DivProps;
  clickable?: boolean;
}
