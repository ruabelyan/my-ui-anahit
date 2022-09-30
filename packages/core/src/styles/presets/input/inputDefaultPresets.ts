import {
  defaultColorNames,
  defaultStateColorNames,
  getColorKey,
  PresetThemeConfig,
} from '@core/design-tokens';
import { calculateRem } from '@core/shared';

const inputDefaultPresets: PresetThemeConfig['Input'] = {
  ...defaultColorNames.reduce(
    (acc, color) => ({
      ...acc,
      [color]: defaultStateColorNames.includes(color)
        ? {
            color: getColorKey(color, 300),
            borderColor: getColorKey(color, 300),
            hoverBorderColor: getColorKey(color, 300),
            focusWithinBorderColor: getColorKey(color, 300),
            activeBorderColor: getColorKey(color, 300),
            disabledBg: getColorKey('neutral', 200),
            disabledBorderColor: getColorKey('neutral', 200),
            disabledColor: getColorKey('neutral', 400),
          }
        : {
            color: getColorKey(color, 300),
            borderColor: getColorKey('neutral', 300),
            hoverBorderColor: getColorKey(color, 400),
            focusWithinBorderColor: getColorKey(color, 500),
            activeBorderColor: getColorKey(color, 500),
            disabledBg: getColorKey('neutral', 200),
            disabledBorderColor: getColorKey('neutral', 200),
            disabledColor: getColorKey('neutral', 400),
          },
    }),
    {},
  ),
  xs: {
    width: calculateRem(280),
    height: calculateRem(28),
    minWidth: calculateRem(280),
    typography: 'text4-regular',
    messageContainerProps: {
      textWeight: 'semibold',
      textSize: 'text5',
    },
    labelContainerProps: {
      textWeight: 'semibold',
      textSize: 'text5',
    },
    startContentContainerProps: {
      width: calculateRem(16),
      margin: { l: '4' },
      height: calculateRem(16),
    },
    endContentContainerProps: {
      margin: { r: '4' },
      width: calculateRem(16),
      height: calculateRem(16),
    },
  },
  sm: {
    width: calculateRem(280),
    height: calculateRem(32),
    minWidth: calculateRem(280),
    typography: 'text4-regular',
    messageContainerProps: {
      textSize: 'text5',
      textWeight: 'semibold',
    },
    labelContainerProps: {
      textWeight: 'semibold',
      textSize: 'text5',
    },
    startContentContainerProps: {
      margin: { l: '4' },
      width: calculateRem(20),
      height: calculateRem(20),
    },
    endContentContainerProps: {
      margin: { r: '4' },
      width: calculateRem(20),
      height: calculateRem(20),
    },
  },
  md: {
    minWidth: calculateRem(280),
    width: calculateRem(280),
    height: calculateRem(36),
    typography: 'text4-regular',
    messageContainerProps: {
      textWeight: 'semibold',
      textSize: 'text4',
    },
    labelContainerProps: {
      textWeight: 'semibold',
      textSize: 'text5',
    },
    startContentContainerProps: {
      margin: { l: '4' },
      width: calculateRem(20),
      height: calculateRem(20),
    },
    endContentContainerProps: {
      margin: { r: '4' },
      width: calculateRem(20),
      height: calculateRem(20),
    },
  },
  lg: {
    minWidth: calculateRem(280),
    height: calculateRem(40),
    width: calculateRem(280),
    typography: 'text3-regular',
    messageContainerProps: {
      textWeight: 'semibold',
      textSize: 'text3',
    },
    labelContainerProps: {
      textWeight: 'semibold',
      textSize: 'text4',
    },
    startContentContainerProps: {
      margin: { l: '4' },
      width: calculateRem(24),
      height: calculateRem(24),
    },
    endContentContainerProps: {
      margin: { r: '4' },
      width: calculateRem(24),
      height: calculateRem(24),
    },
  },
  xl: {
    minWidth: calculateRem(280),
    width: calculateRem(280),
    height: calculateRem(48),
    typography: 'text3-regular',
    messageContainerProps: {
      textWeight: 'semibold',
      textSize: 'text3',
    },
    labelContainerProps: {
      textWeight: 'semibold',
      textSize: 'text3',
    },
    startContentContainerProps: {
      margin: { l: '4' },
      width: calculateRem(24),
      height: calculateRem(24),
    },
    endContentContainerProps: {
      margin: { r: '4' },
      width: calculateRem(24),
      height: calculateRem(24),
    },
  },
};

export default inputDefaultPresets;
