import { DivProps } from '../div';
import { DesignTokens, FocusableDesignTokens } from '../interfaces';

export default interface ProgressProps
  extends DesignTokens,
    FocusableDesignTokens {
  progressBarProps?: Omit<DivProps, 'width'>;
  progress?: number;
  rtl?: boolean;
}
