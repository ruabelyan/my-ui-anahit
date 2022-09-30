import { SwitchProps } from '@core/components-props';
import { getColorKey } from '@core/design-tokens';

const getSwitchDefaultProps = (): Partial<SwitchProps> => ({
  bg: getColorKey('neutral', 300),
  hoverBg: getColorKey('neutral', 400),
  activeBg: getColorKey('neutral', 500),
  radius: 'md',
  transition: 'default',
  disabledBg: getColorKey('neutral', 200),
  presets: ['md', 'primary'],
});

export default getSwitchDefaultProps;
