import { TooltipProps } from '@core/components-props';
import { getColorKey } from '@core/design-tokens';

const getTooltipDefaultProps = (): Partial<TooltipProps> => ({
  tooltipCardProps: {
    radius: 'md',
    bg: getColorKey('primary', 300),
  },
});

export default getTooltipDefaultProps;
