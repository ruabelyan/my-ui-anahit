import { EffectThemeConfig } from './types';

const shadowDefaultValues: EffectThemeConfig = {
  shadow: {
    xs: [
      {
        x: '0px',
        y: '4px',
        blur: '4px',
        spread: '-2px',
      },
      {
        x: '0px',
        y: '2px',
        blur: '4px',
        spread: '-2px',
      },
    ],
    sm: [
      {
        x: '0px',
        y: '8px',
        blur: '8px',
        spread: '-4px',
      },
      {
        x: '0px',
        y: '4px',
        blur: '6px',
        spread: '-4px',
      },
    ],
    md: [
      {
        x: '0px',
        y: '8px',
        blur: '16px',
        spread: '-6px',
      },
      {
        x: '0px',
        y: '6px',
        blur: '8px',
        spread: '-6px',
      },
    ],
    lg: [
      {
        x: '0px',
        y: '8px',
        blur: '24px',
        spread: '-4px',
      },
      {
        x: '0px',
        y: '6px',
        blur: '12px',
        spread: '-6px',
      },
    ],
    xlg: [
      {
        x: '0px',
        y: '10px',
        blur: '32px',
        spread: '-4px',
      },
      {
        x: '0px',
        y: '6px',
        blur: '14px',
        spread: '-6px',
      },
    ],
    'xs-stroke': {
      x: '0px',
      y: '0px',
      blur: '0px',
      spread: '1px',
    },
    'sm-stroke': {
      x: '0px',
      y: '0px',
      blur: '0px',
      spread: '2px',
    },
    'md-stroke': {
      x: '0px',
      y: '0px',
      blur: '0px',
      spread: '3px',
    },
    'lg-stroke': {
      x: '0px',
      y: '0px',
      blur: '0px',
      spread: '4px',
    },
    'xlg-stroke': {
      x: '0px',
      y: '0px',
      blur: '0px',
      spread: '5px',
    },
  },
  blur: {
    backdrop: {
      xs: '2px',
      sm: '4px',
      md: '6px',
      lg: '8px',
      xlg: '10px',
    },
    scene: {
      xs: '2px',
      sm: '4px',
      md: '6px',
      lg: '8px',
      xlg: '10px',
    },
  },
  opacity: {
    xs: 0.8,
    sm: 0.6,
    md: 0.5,
    lg: 0.3,
    xlg: 0.2,
  },
};

export default shadowDefaultValues;
