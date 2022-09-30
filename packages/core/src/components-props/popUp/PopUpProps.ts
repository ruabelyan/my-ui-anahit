import { DivProps } from '@core/index';
import { ColorType, DesignTokens, FocusableDesignTokens } from '../interfaces';

export default interface PopUpProps
  extends DesignTokens,
    FocusableDesignTokens {
  defaultOpened?: boolean;
  isOutClick?: boolean;
  animationDuration?: number;
  opened?: boolean;
  popUpCloseButtonProps?: DivProps;
  popUpCloseButtonContentProps?: DivProps;
  popUpTransitionOverlayProps?: DivProps;
  zIndex?: number;
  onClose?(): void;
  onChange?(): void;
  backgroundEffectColor?: ColorType;
}
