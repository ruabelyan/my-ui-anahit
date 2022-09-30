import { DivProps } from '../div';
import { DesignTokens, FocusableDesignTokens } from '../interfaces';

export default interface BadgeProps
  extends DesignTokens,
    FocusableDesignTokens {
  badgeContentProps?: DivProps;
}
