import { CardProps } from '@core/components-props';
import { defaultColorNames, getColorKey } from '@core/design-tokens';

const cardDefaultPresets: Record<string, CardProps> = {
  ...defaultColorNames.reduce(
    (acc, color) => ({
      ...acc,
      [color]: {
        color: getColorKey(color, 400),
        bg: getColorKey(color, 50),
        border: getColorKey(color, 100),
      },
    }),
    {},
  ),
};

export default cardDefaultPresets;
