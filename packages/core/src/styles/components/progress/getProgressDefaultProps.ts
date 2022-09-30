import { ProgressProps } from '@core/components-props';
import { getColorKey } from '@core/design-tokens';
import { calculateRem } from '@core/shared';

const getProgressDefaultProps = (): Partial<ProgressProps> => ({
  radius: 'xs',
  bg: getColorKey('neutral', 50),
  height: calculateRem(4),
  progressBarProps: {
    bg: getColorKey('neutral', 300),
    radius: 'xs',
    height: calculateRem(4),
    transition: 'default',
  },
});

export default getProgressDefaultProps;
