import { PopUpProps } from '@core/components-props';
import { defaultColorNames, getColorKey } from '@core/design-tokens';
import { calculateRem } from '@core/shared';

const popUpDefaultPresets: Record<string, PopUpProps> = {
  ...defaultColorNames.reduce(
    (acc, color) => ({
      ...acc,
      [color]: {
        bg: getColorKey(color, 300),
      },
    }),
    {},
  ),
  xs: {
    minWidth: calculateRem(200),
    minHeight: calculateRem(156),
    height: 'fit-content',
    width: 'fit-content',
    radius: 'lg',
    padding: { x: '10', y: '10' },
    popUpCloseButtonProps: {
      margin: { t: '2', r: '2' },
      width: calculateRem(20),
      height: calculateRem(20),
    },
    popUpCloseButtonContentProps: {
      width: calculateRem(10),
      height: calculateRem(10),
      textSize: '10px',
    },
  },
  sm: {
    minWidth: calculateRem(238),
    minHeight: calculateRem(206),
    height: 'fit-content',
    width: 'fit-content',
    radius: 'lg',
    padding: { x: '11', y: '11' },
    popUpCloseButtonProps: {
      margin: { t: '3', r: '3' },
      width: calculateRem(20),
      height: calculateRem(20),
    },
    popUpCloseButtonContentProps: {
      width: calculateRem(10),
      height: calculateRem(10),
      textSize: '10px',
    },
  },
  md: {
    minWidth: calculateRem(288),
    minHeight: calculateRem(256),
    height: 'fit-content',
    width: 'fit-content',
    padding: { x: '11', y: '11' },
    popUpCloseButtonProps: {
      margin: { t: '3', r: '3' },
      width: calculateRem(20),
      height: calculateRem(20),
    },
    popUpCloseButtonContentProps: {
      width: calculateRem(10),
      height: calculateRem(10),
      textSize: '10px',
    },
  },
  lg: {
    minWidth: calculateRem(388),
    minHeight: calculateRem(356),
    height: 'fit-content',
    width: 'fit-content',
    radius: 'lg',
    padding: { x: '12', y: '12' },
    popUpCloseButtonProps: {
      width: calculateRem(24),
      height: calculateRem(24),
      margin: { t: '3', r: '3' },
    },
    popUpCloseButtonContentProps: {
      width: calculateRem(12),
      height: calculateRem(12),
      textSize: '12px',
    },
  },
  xl: {
    minWidth: calculateRem(488),
    minHeight: calculateRem(456),
    height: 'fit-content',
    width: 'fit-content',
    radius: 'lg',
    padding: { x: '13', y: '13' },
    popUpCloseButtonProps: {
      width: calculateRem(24),
      height: calculateRem(24),
      margin: { t: '4', r: '4' },
    },
    popUpCloseButtonContentProps: {
      width: calculateRem(12),
      height: calculateRem(12),
      textSize: '12px',
    },
  },
  center: {
    top: '50%',
    right: '50%',
    transform: 'translate(50%,-50%)',
  },
  right: {
    right: calculateRem(40),
    bottom: calculateRem(44),
  },
  left: {
    left: calculateRem(40),
    bottom: calculateRem(44),
  },
  'with-overlay': {
    popUpTransitionOverlayProps: {
      zIndex: '0',
      position: 'fixed',
      width: '100%',
      height: '100%',
      left: '0',
      top: '0',
    },
  },
  'with-blur': {
    popUpTransitionOverlayProps: {
      zIndex: '0',
      position: 'fixed',
      blur: 'md',
      width: '100%',
      height: '100%',
      left: '0',
      top: '0',
    },
  },
};

export default popUpDefaultPresets;
