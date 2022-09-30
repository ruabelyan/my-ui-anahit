import {
  defaultColorNames,
  getColorKey,
  PresetThemeConfig,
} from '@core/design-tokens';
import { calculateRem } from '@core/shared';

const dotDefaultPresets: PresetThemeConfig['Dot'] = {
  ...defaultColorNames.reduce(
    (acc, color) => ({
      ...acc,
      [color]: {
        bg: getColorKey(color, 300),
      },
    }),
    {},
  ),
  xs: {
    minWidth: calculateRem(4),
    minHeight: calculateRem(4),
  },
  sm: {
    minWidth: calculateRem(6),
    minHeight: calculateRem(6),
  },
  md: {
    minWidth: calculateRem(8),
    minHeight: calculateRem(8),
  },
  lg: {
    minWidth: calculateRem(10),
    minHeight: calculateRem(10),
  },
  xlg: {
    minWidth: calculateRem(12),
    minHeight: calculateRem(12),
  },
};

export default dotDefaultPresets;
