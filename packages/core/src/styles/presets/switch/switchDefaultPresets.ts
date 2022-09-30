import {
  defaultColorNames,
  getColorKey,
  PresetThemeConfig,
} from '@core/design-tokens';
import { calculateRem } from '@core/shared';

const switchDefaultPresets: PresetThemeConfig['Switch'] = {
  xlg: {
    width: calculateRem(38),
    height: calculateRem(20),
    defaultIndicatorWidth: calculateRem(16),
    defaultIndicatorHeight: calculateRem(16),
  },
  lg: {
    width: calculateRem(34),
    height: calculateRem(18),
    defaultIndicatorWidth: calculateRem(14),
    defaultIndicatorHeight: calculateRem(14),
  },
  md: {
    width: calculateRem(32),
    height: calculateRem(16),
    defaultIndicatorWidth: calculateRem(12),
    defaultIndicatorHeight: calculateRem(12),
  },
  sm: {
    width: calculateRem(28),
    height: calculateRem(14),
    defaultIndicatorWidth: calculateRem(10),
    defaultIndicatorHeight: calculateRem(10),
  },
  xs: {
    width: calculateRem(26),
    height: calculateRem(14),
    defaultIndicatorWidth: calculateRem(10),
    defaultIndicatorHeight: calculateRem(10),
  },
  ...defaultColorNames.reduce(
    (acc, color) => ({
      ...acc,
      [color]: {
        checkedBg: getColorKey(color, 300),
        hoverCheckedBg: getColorKey(color, 400),
        activeCheckedBg: getColorKey(color, 500),
      },
    }),
    {},
  ),
};

export default switchDefaultPresets;
