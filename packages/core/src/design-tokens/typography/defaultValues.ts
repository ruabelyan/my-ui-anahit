import { calculateEm } from '@core/shared';
import { TypographyThemeConfig } from './types';

const typographyDefaultValues: TypographyThemeConfig = {
  'display1-bold': {
    textSize: 'display1',
    lineHeight: calculateEm(60, 40),
    textWeight: 'bold',
    letterSpacing: `-${calculateEm(0.8, 40)}`,
  },
  'display1-semibold': {
    textSize: 'display1',
    lineHeight: calculateEm(60, 40),
    textWeight: 'semibold',
    letterSpacing: `-${calculateEm(0.8, 40)}`,
  },
  'display1-regular': {
    textSize: 'display1',
    lineHeight: calculateEm(60, 40),
    textWeight: 'regular',
    letterSpacing: `-${calculateEm(0.8, 40)}`,
  },
  'display2-bold': {
    textSize: 'display2',
    lineHeight: calculateEm(54, 36),
    textWeight: 'bold',
    letterSpacing: `-${calculateEm(0.72, 36)}`,
  },
  'display2-semibold': {
    textSize: 'display2',
    lineHeight: calculateEm(54, 36),
    textWeight: 'semibold',
    letterSpacing: `-${calculateEm(0.72, 36)}`,
  },
  'display2-regular': {
    textSize: 'display2',
    lineHeight: calculateEm(54, 36),
    textWeight: 'regular',
    letterSpacing: `-${calculateEm(0.72, 36)}`,
  },
  'display3-bold': {
    textSize: 'display3',
    lineHeight: calculateEm(36, 24),
    textWeight: 'bold',
  },
  'display3-semibold': {
    textSize: 'display3',
    lineHeight: calculateEm(36, 24),
    textWeight: 'semibold',
  },
  'display3-regular': {
    textSize: 'display3',
    lineHeight: calculateEm(36, 24),
    textWeight: 'regular',
  },
  'display4-bold': {
    textSize: 'display4',
    lineHeight: calculateEm(30, 20),
    textWeight: 'bold',
  },
  'display4-semibold': {
    textSize: 'display4',
    lineHeight: calculateEm(30, 20),
    textWeight: 'semibold',
  },
  'display4-regular': {
    textSize: 'display4',
    lineHeight: calculateEm(30, 20),
    textWeight: 'regular',
  },
  'text1-bold': {
    textSize: 'text1',
    lineHeight: calculateEm(27, 18),
    textWeight: 'bold',
  },
  'text1-semibold': {
    textSize: 'text1',
    lineHeight: calculateEm(27, 18),
    textWeight: 'semibold',
  },
  'text1-regular': {
    textSize: 'text1',
    lineHeight: calculateEm(27, 18),
    textWeight: 'regular',
  },
  'text1-light': {
    textSize: 'text1',
    lineHeight: calculateEm(27, 18),
    textWeight: 'light',
  },
  'text1-extralight': {
    textSize: 'text1',
    lineHeight: calculateEm(27, 18),
    textWeight: 'extralight',
  },
  'text2-bold': {
    textSize: 'text2',
    lineHeight: calculateEm(24, 16),
    textWeight: 'bold',
  },
  'text2-semibold': {
    textSize: 'text2',
    lineHeight: calculateEm(24, 16),
    textWeight: 'semibold',
  },
  'text2-regular': {
    textSize: 'text2',
    lineHeight: calculateEm(24, 16),
    textWeight: 'regular',
  },
  'text2-light': {
    textSize: 'text2',
    lineHeight: calculateEm(24, 16),
    textWeight: 'light',
  },
  'text2-extralight': {
    textSize: 'text2',
    lineHeight: calculateEm(24, 16),
    textWeight: 'extralight',
  },
  'text3-bold': {
    textSize: 'text3',
    lineHeight: calculateEm(20, 14),
    textWeight: 'bold',
  },
  'text3-semibold': {
    textSize: 'text3',
    lineHeight: calculateEm(20, 14),
    textWeight: 'semibold',
  },
  'text3-regular': {
    textSize: 'text3',
    lineHeight: calculateEm(20, 14),
    textWeight: 'regular',
  },
  'text3-light': {
    textSize: 'text3',
    lineHeight: calculateEm(20, 14),
    textWeight: 'light',
  },
  'text3-extralight': {
    textSize: 'text3',
    lineHeight: calculateEm(20, 14),
    textWeight: 'extralight',
  },
  'text4-bold': {
    textSize: 'text4',
    lineHeight: calculateEm(21, 12),
    textWeight: 'bold',
  },
  'text4-semibold': {
    textSize: 'text4',
    lineHeight: calculateEm(21, 12),
    textWeight: 'semibold',
  },
  'text4-regular': {
    textSize: 'text4',
    lineHeight: calculateEm(21, 12),
    textWeight: 'regular',
  },
  'text5-bold': {
    textSize: 'text5',
    lineHeight: calculateEm(15, 10),
    textWeight: 'bold',
  },
  'text5-semibold': {
    textSize: 'text5',
    lineHeight: calculateEm(15, 10),
    textWeight: 'semibold',
  },
  'text5-regular': {
    textSize: 'text5',
    lineHeight: calculateEm(15, 10),
    textWeight: 'regular',
  },
};

export default typographyDefaultValues;
