import { AvatarProps } from '@core/components-props';
import { getColorKey } from '@core/design-tokens';

const getAvatarDefaultProps = (): Partial<AvatarProps> => ({
  radius: 'circle',
  bg: getColorKey('primary', 200),
  color: getColorKey('secondary1', 800),
  presets: ['xlg'],
});

export default getAvatarDefaultProps;
