import { ProgressProps } from '@core/components-props';
import { defaultColorNames, getColorKey } from '@core/design-tokens';
import { calculateRem } from '@core/shared';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const progressDefaultPresets: Record<string, ProgressProps> = {
  ...defaultColorNames.reduce(
    (acc, color) => ({
      ...acc,
      [color]: {
        bg: getColorKey(color, 300),
        hoverBg: getColorKey(color, 400),
        focusBg: getColorKey(color, 500),
        disabledBg: getColorKey(color, 100),
        progressBarProps: {
          bg: getColorKey(color, 300),
        },
      },
    }),
    {},
  ),
  sm: {
    minWidth: calculateRem(50),
    minHeight: calculateRem(20),
    padding: { x: calculateRem(10) },
  },
};

export default progressDefaultPresets;
