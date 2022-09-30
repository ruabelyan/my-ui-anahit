import { DivProps } from '@core/index';
import { DesignTokens } from '../interfaces';

export default interface TooltipCardProps extends DesignTokens {
  tooltipArrowProps?: DivProps;
  tooltipContentProps?: DivProps;
  x?: number;
  y?: number;
  children?: unknown;
}
