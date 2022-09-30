import { CardProps } from '@core/components-props';
import { getColorKey } from '@core/design-tokens';
import { calculateRem } from '@core/shared';

const getCardDefaultProps = (): Partial<CardProps> => ({
  cursor: 'default',
  radius: 'xs',
  presets: ['primary', 'xs'],
  minWidth: calculateRem(489),
  maxWidth: calculateRem(728),
  minHeight: calculateRem(67),
  maxHeight: calculateRem(576),
  width: 'fit-content',
  padding: '6',
  bg: 'white',
  borderStyle: 'solid',
  borderColor: getColorKey('neutral', 50),
  borderWidth: calculateRem(1),
});

export default getCardDefaultProps;
