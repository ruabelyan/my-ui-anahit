import { TooltipCardProps } from '@core/index';
import { DesignTokens } from '../interfaces';

export default interface TooltipProps extends DesignTokens {
  defaultShowed?: boolean;
  tooltipCardProps?: TooltipCardProps;
  children?: unknown;
  placement?:
    | 'top'
    | 'topRight'
    | 'topLeft'
    | 'bottom'
    | 'bottomRight'
    | 'bottomLeft'
    | 'leftTop'
    | 'left'
    | 'leftBottom'
    | 'rightTop'
    | 'right'
    | 'rightBottom';
  spacing?: number;
  cornerSpacing?: number;
  eventForShow?: 'hover' | 'click';
  animationDuration?: number;
}
