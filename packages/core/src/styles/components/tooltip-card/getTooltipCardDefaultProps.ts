import { TooltipCardProps } from '@core/components-props';

const getTooltipCardDefaultProps = (): Partial<TooltipCardProps> => ({
  display: 'block',
  color: 'natural-800',

  presets: ['primary', 'md'],
});

export default getTooltipCardDefaultProps;
