import { RadioProps } from '@core/components-props';
import { getColorKey } from '@core/design-tokens';
import { calculateRem } from '@core/shared';

const getRadioDefaultProps = (): Partial<RadioProps> => ({
  position: 'relative',
  cursor: 'pointer',
  borderWidth: calculateRem(1),
  borderStyle: 'solid',
  radius: 'circle',
  borderColor: getColorKey('neutral', 400),
  hoverBorderColor: getColorKey('neutral', 500),
  activeBorderColor: getColorKey('neutral', 400),
  activeShadow: 'sm-stroke',
  activeShadowColor: getColorKey('neutral', 200),
  disabledBorderColor: getColorKey('neutral', 300),
  disabledColor: getColorKey('neutral', 300),
  presets: ['md', 'primary'],
  transition: 'default',
  labelProps: {
    typography: 'text4-regular',
    color: getColorKey('neutral', 500),
    cursor: 'pointer',
    margin: { l: '4' },
  },
});

export default getRadioDefaultProps;
