import { RadioProps } from '@core/components-props';
import { defaultColorNames, getColorKey } from '@core/design-tokens';
import { calculateRem } from '@core/shared';

const radioDefaultPresets: Record<string, RadioProps> = {
  ...defaultColorNames.reduce(
    (acc, color) => ({
      ...acc,
      [color]: {
        checkedBg: getColorKey(color, 300),
        hoverCheckedBg: getColorKey(color, 400),
        checkedBorderColor: getColorKey(color, 300),
        checkedActiveShadowColor: getColorKey(color, 200),
        contentBgColor: getColorKey(color, 300),
      },
    }),
    {},
  ),
  xs: {
    width: calculateRem(14),
    height: calculateRem(14),
    contentWidth: calculateRem(6),
    contentHeight: calculateRem(6),
  },
  sm: {
    width: calculateRem(16),
    height: calculateRem(16),
    contentWidth: calculateRem(8),
    contentHeight: calculateRem(8),
  },
  md: {
    width: calculateRem(20),
    height: calculateRem(20),
    contentWidth: calculateRem(8),
    contentHeight: calculateRem(8),
  },
  lg: {
    width: calculateRem(22),
    height: calculateRem(22),
    contentWidth: calculateRem(10),
    contentHeight: calculateRem(10),
  },
  xlg: {
    width: calculateRem(24),
    height: calculateRem(24),
    contentWidth: calculateRem(12),
    contentHeight: calculateRem(12),
  },
};

export default radioDefaultPresets;
