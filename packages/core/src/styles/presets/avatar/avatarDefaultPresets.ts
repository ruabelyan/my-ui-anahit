import {
  defaultColorNames,
  getColorKey,
  PresetThemeConfig,
} from '@core/design-tokens';
import { calculateRem } from '@core/shared';

const avatarDefaultPresets: PresetThemeConfig['Avatar'] = {
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
    width: calculateRem(24),
    height: calculateRem(24),
    typography: 'text5-regular',
    padding: { x: '2', y: '2' },
  },
  sm: {
    width: calculateRem(32),
    height: calculateRem(32),
    typography: 'text5-regular',
    padding: { x: '4', y: '4' },
  },
  md: {
    width: calculateRem(40),
    height: calculateRem(40),
    typography: 'text4-regular',
    padding: { x: '5', y: '5' },
  },
  lg: {
    width: calculateRem(48),
    height: calculateRem(48),
    typography: 'text2-regular',
    padding: { x: '5', y: '6' },
  },
  xlg: {
    width: calculateRem(56),
    height: calculateRem(56),
    typography: 'display3-regular',
    padding: { x: '4', y: '5' },
  },
};

export default avatarDefaultPresets;
