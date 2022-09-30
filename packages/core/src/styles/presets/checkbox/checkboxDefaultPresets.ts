import {
  defaultColorNames,
  getColorKey,
  PresetThemeConfig,
} from '@core/design-tokens';
import { calculateRem } from '@core/shared';

const checkboxDefaultPresets: PresetThemeConfig['Checkbox'] = {
  ...defaultColorNames.reduce(
    (acc, color) => ({
      ...acc,
      [color]: {
        checkedBg: getColorKey(color, 300),
        hoverCheckedBg: getColorKey(color, 400),
        activeCheckedBg: getColorKey(color, 300),
        checkedActiveShadowColor: getColorKey(color, 200),
      },
    }),
    {},
  ),
  xs: {
    width: calculateRem(16),
    height: calculateRem(16),
    contentWidth: calculateRem(8),
    contentHeight: calculateRem(8),
  },
  sm: {
    width: calculateRem(18),
    height: calculateRem(18),
    contentWidth: calculateRem(10),
    contentHeight: calculateRem(10),
  },
  md: {
    width: calculateRem(20),
    height: calculateRem(20),
    contentWidth: calculateRem(12),
    contentHeight: calculateRem(12),
  },
  lg: {
    width: calculateRem(22),
    height: calculateRem(22),
    contentWidth: calculateRem(14),
    contentHeight: calculateRem(14),
  },
  xlg: {
    width: calculateRem(24),
    height: calculateRem(24),
    contentWidth: calculateRem(16),
    contentHeight: calculateRem(16),
  },
};

export default checkboxDefaultPresets;
