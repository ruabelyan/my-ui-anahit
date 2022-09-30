import { calculateRem } from '@core/shared';
import { SpacingThemeConfig } from './types';

const spacingDefaultValues: SpacingThemeConfig = {
  inset: {
    1: calculateRem(2),
    2: calculateRem(4),
    3: calculateRem(6),
    4: calculateRem(8),
    5: calculateRem(10),
    6: calculateRem(12),
    7: calculateRem(14),
    8: calculateRem(16),
    9: calculateRem(18),
    10: calculateRem(20),
    11: calculateRem(24),
    12: calculateRem(28),
    13: calculateRem(32),
    14: calculateRem(40),
    15: calculateRem(48),
    16: calculateRem(64),
    17: calculateRem(80),
    18: calculateRem(96),
  },
  outset: {
    1: calculateRem(2),
    2: calculateRem(4),
    3: calculateRem(6),
    4: calculateRem(8),
    5: calculateRem(10),
    6: calculateRem(12),
    7: calculateRem(14),
    8: calculateRem(16),
    9: calculateRem(18),
    10: calculateRem(20),
    11: calculateRem(24),
    12: calculateRem(32),
    13: calculateRem(40),
    14: calculateRem(48),
    15: calculateRem(64),
    16: calculateRem(80),
    17: calculateRem(96),
  },
};

export default spacingDefaultValues;
