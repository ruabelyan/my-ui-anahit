import {
  defaultColorNames,
  getColorKey,
  PresetThemeConfig,
} from '@core/design-tokens';
import { calculateRem } from '@core/shared';

const buttonDefaultPresets: PresetThemeConfig['Button'] = {
  ...defaultColorNames.reduce(
    (acc, color) => ({
      ...acc,
      [color]: {
        bg: getColorKey(color, 300),
        hoverBg: getColorKey(color, 400),
        activeBg: getColorKey(color, 500),
        disabledBg: getColorKey(color, 100),
        activeShadowColor: getColorKey(color, 200),
        activeShadow: 'xs-stroke',
      },
      [`primary-${color}`]: {
        bg: getColorKey(color, 300),
        hoverBg: getColorKey(color, 400),
        activeBg: getColorKey(color, 500),
        disabledBg: getColorKey(color, 100),
        activeShadowColor: getColorKey(color, 200),
        activeShadow: 'xs-stroke',
      },
      [`stroke-${color}`]: {
        borderColor: getColorKey(color, 300),
        color: getColorKey(color, 300),
        hoverBorderColor: getColorKey(color, 400),
        hoverColor: getColorKey(color, 400),
        activeBorderColor: getColorKey(color, 500),
        activeColor: getColorKey(color, 500),
        activeShadowColor: getColorKey(color, 200),
        activeShadow: 'xs-stroke',

        bg: 'white',
        hoverBg: 'white',
        activeBg: 'white',
        borderWidth: calculateRem(1),
        borderStyle: 'solid',
      },
      [`outlined-${color}`]: {
        borderColor: getColorKey(color, 300),
        color: getColorKey(color, 300),
        hoverBorderColor: getColorKey(color, 400),
        hoverColor: getColorKey(color, 400),
        activeBorderColor: getColorKey(color, 500),
        activeColor: getColorKey(color, 500),

        activeShadowColor: getColorKey(color, 200),
        activeShadow: 'xs-stroke',

        bg: 'transparent',
        hoverBg: 'transparent',
        activeBg: 'transparent',
        borderWidth: calculateRem(1),
        borderStyle: 'solid',
      },
      [`dashed-${color}`]: {
        borderColor: getColorKey(color, 300),
        color: getColorKey(color, 300),
        hoverBorderColor: getColorKey(color, 400),
        hoverColor: getColorKey(color, 400),
        activeBorderColor: getColorKey(color, 500),
        activeColor: getColorKey(color, 500),
        activeShadowColor: getColorKey(color, 200),

        bg: getColorKey(color, 100),
        hoverBg: getColorKey(color, 100),
        activeBg: getColorKey(color, 100),
        borderWidth: calculateRem(1),
        borderStyle: 'dashed',
      },
      [`transparent-${color}`]: {
        color: getColorKey(color, 300),
        hoverColor: getColorKey(color, 400),
        activeColor: getColorKey(color, 500),

        bg: 'transparent',
        hoverBg: getColorKey(color, 100),
      },
    }),
    {},
  ),
  xs: {
    minWidth: calculateRem(72),
    height: calculateRem(28),
    typography: 'text5-regular',
    padding: { x: '5' },
    startContentContainerProps: {
      width: calculateRem(14),
      height: calculateRem(14),
      padding: '1',
      margin: { r: '2' },
    },
    endContentContainerProps: {
      width: calculateRem(14),
      height: calculateRem(14),
      padding: '1',
      margin: { l: '2' },
    },
  },
  sm: {
    minWidth: calculateRem(86),
    height: calculateRem(32),
    typography: 'text5-regular',
    padding: { x: '6' },

    startContentContainerProps: {
      width: calculateRem(14),
      height: calculateRem(14),
      padding: '1',
      margin: { r: '3' },
    },
    endContentContainerProps: {
      width: calculateRem(14),
      height: calculateRem(14),
      padding: '1',
      margin: { l: '3' },
    },
  },
  md: {
    minWidth: calculateRem(92),
    height: calculateRem(37),
    typography: 'text4-regular',
    padding: { x: '7' },
    startContentContainerProps: {
      width: calculateRem(18),
      height: calculateRem(18),
      padding: '2',
      margin: { r: '6' },
    },
    endContentContainerProps: {
      width: calculateRem(18),
      height: calculateRem(18),
      padding: '2',
      margin: { l: '6' },
    },
  },
  lg: {
    minWidth: calculateRem(118),
    height: calculateRem(40),
    typography: 'text3-regular',
    padding: { x: '9' },
    startContentContainerProps: {
      width: calculateRem(18),
      height: calculateRem(18),
      padding: '2',
      margin: { r: '5' },
    },
    endContentContainerProps: {
      width: calculateRem(18),
      height: calculateRem(18),
      padding: '2',
      margin: { l: '5' },
    },
  },
  xl: {
    minWidth: calculateRem(134),
    height: calculateRem(48),
    typography: 'text2-regular',
    padding: { x: '10' },
    startContentContainerProps: {
      width: calculateRem(20),
      height: calculateRem(20),
      padding: '2',
      margin: { r: '2' },
    },
    endContentContainerProps: {
      width: calculateRem(20),
      height: calculateRem(20),
      padding: '2',
      margin: { l: '2' },
    },
  },
};

export default buttonDefaultPresets;
