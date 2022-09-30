import { PopUpProps } from '@core/components-props';
import { calculateRem } from '@core/shared';

const getPopUpDefaultProps = (): Partial<PopUpProps> => ({
  color: 'white',
  width: calculateRem(112),
  height: calculateRem(48),
  cursor: 'default',
  radius: 'lg',
  presets: ['white', 'md', 'center'],
});

export default getPopUpDefaultProps;
