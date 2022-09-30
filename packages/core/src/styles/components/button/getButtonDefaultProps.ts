import { ButtonProps } from '@core/components-props';
import { getColorKey } from '@core/design-tokens';
import { calculateRem } from '@core/shared';

const getButtonDefaultProps = (): Partial<ButtonProps> => ({
  color: 'white',
  minWidth: calculateRem(112),
  cursor: 'pointer',
  radius: 'xs',
  disabledBg: getColorKey('neutral', 200),
  disabledColor: getColorKey('neutral', 400),
  disabledBorderColor: getColorKey('neutral', 200),
  presets: 'primary',
});

export default getButtonDefaultProps;
