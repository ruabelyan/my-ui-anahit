import { calculateRem } from '@core/shared';
import { TextSizesThemeConfig } from './types';

const textSizesDefaultValues: TextSizesThemeConfig = {
  // Display
  display1: calculateRem(40),
  display2: calculateRem(36),
  display3: calculateRem(24),
  display4: calculateRem(20),
  // Text
  text1: calculateRem(18),
  text2: calculateRem(16),
  text3: calculateRem(14),
  text4: calculateRem(12),
  text5: calculateRem(10),
};
export default textSizesDefaultValues;
