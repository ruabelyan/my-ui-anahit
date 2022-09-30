import { PresetThemeConfig } from '@core/design-tokens';
import { calculateRem } from '@core/shared';

const badgeDefaultPresets: PresetThemeConfig['Badge'] = {
  'top-left': {
    badgeContentProps: {
      position: 'absolute',
      top: calculateRem(0),
      left: calculateRem(0),
    },
  },
  'top-right': {
    badgeContentProps: {
      position: 'absolute',
      top: calculateRem(0),
      right: calculateRem(0),
    },
  },
  'bottom-left': {
    badgeContentProps: {
      position: 'absolute',
      bottom: calculateRem(0),
      left: calculateRem(0),
    },
  },
  'bottom-right': {
    badgeContentProps: {
      position: 'absolute',
      bottom: calculateRem(0),
      right: calculateRem(0),
    },
  },
};

export default badgeDefaultPresets;
