import { CheckboxProps } from '@core/components-props';
import { getColorKey } from '@core/design-tokens';
import { calculateRem } from '@core/shared';

const getCheckboxDefaultProps = (): Partial<CheckboxProps> => ({
  position: 'relative',
  cursor: 'pointer',
  borderWidth: calculateRem(1),
  borderStyle: 'solid',
  radius: 'xs',
  borderColor: getColorKey('neutral', 400),
  hoverBorderColor: getColorKey('neutral', 500),
  activeBorderColor: getColorKey('neutral', 400),
  activeShadow: 'xs-stroke',
  activeShadowColor: getColorKey('neutral', 200),
  disabledCheckedBg: getColorKey('neutral', 300),
  disabledBorderColor: getColorKey('neutral', 300),
  presets: ['md', 'primary'],
  transition: 'default',
});

export default getCheckboxDefaultProps;
