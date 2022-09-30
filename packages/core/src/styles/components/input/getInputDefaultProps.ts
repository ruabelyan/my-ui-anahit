import { InputProps } from '@core/components-props';
import { getColorKey } from '@core/design-tokens';
import { calculateRem } from '@core/shared';

const getInputDefaultProps = (inputProps: InputProps): Partial<InputProps> => ({
  display: 'flex',
  color: getColorKey('neutral', 800),
  borderWidth: calculateRem(1),
  borderStyle: 'solid',
  radius: 'sm',
  disabledBg: getColorKey('neutral', 200),
  disabledBorderColor: getColorKey('neutral', 200),
  disabledColor: getColorKey('neutral', 400),
  presets: ['primary', 'md'],
  ...(inputProps.startButtonContent
    ? {
        radiusTopLeft: 'none',
        radiusBottomLeft: 'none',
      }
    : {
        radiusTopLeft: 'sm',
        radiusBottomLeft: 'sm',
      }),
  ...(inputProps.endButtonContent
    ? {
        radiusTopRight: 'none',
        radiusBottomRight: 'none',
      }
    : {
        radiusTopRight: 'sm',
        radiusBottomRight: 'sm',
      }),
});

export default getInputDefaultProps;
