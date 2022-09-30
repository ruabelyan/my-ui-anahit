import {
  defaultColorNames,
  getColorKey,
  PresetThemeConfig,
} from '@core/design-tokens';
import { calculateRem } from '@core/shared';

const tooltipCardDefaultPresets: PresetThemeConfig['TooltipCard'] = {
  ...defaultColorNames.reduce(
    (acc, color) => ({
      ...acc,
      [color]: {
        tooltipArrowProps: {
          color: getColorKey(color, 300),
        },
        tooltipContentProps: {
          bg: getColorKey(color, 300),
        },
      },
    }),
    {} as PresetThemeConfig['TooltipCard'],
  ),
  xl: {
    tooltipContentProps: {
      minWidth: calculateRem(618),
      minHeight: calculateRem(541),
      padding: '12',
    },
  },
  lg: {
    tooltipContentProps: {
      minWidth: calculateRem(378),
      minHeight: calculateRem(368),
      padding: '11',
    },
  },
  md: {
    tooltipContentProps: {
      minWidth: calculateRem(200),
      minHeight: calculateRem(156),
      padding: '8',
    },
  },
  // TODO: these dimensions will be made later, that's why the comment was made
  // sm: {
  //   tooltipContentProps: {
  //     width: calculateRem(184),
  //     height: calculateRem(72),
  //     padding: { x: '6', y: '4' },
  //   },
  // },
  // xs: {
  //   tooltipContentProps: {
  //     width: calculateRem(73),
  //     height: calculateRem(31),
  //     padding: '4',
  //   },
  //   tooltipArrowProps: {
  //     width: calculateRem(16),
  //     height: calculateRem(10),
  //   },
  // },

  rightBottom: {
    tooltipArrowProps: {
      top: calculateRem(26),
      left: calculateRem(-17),
      transform: 'rotate(-90deg)',
    },
  },
  rightTop: {
    tooltipArrowProps: {
      bottom: calculateRem(26),
      left: calculateRem(-17),
      transform: 'rotate(-90deg)',
    },
  },
  right: {
    tooltipArrowProps: {
      top: '50%',
      transform: 'translate(0px, -50%) rotate(-90deg)',
      left: calculateRem(-17),
    },
  },
  bottom: {
    tooltipArrowProps: {
      top: calculateRem(-11),
      left: '50%',
      transform: 'translate(-50%, 0)',
    },
  },
  bottomLeft: {
    tooltipArrowProps: {
      top: calculateRem(-11),
      right: calculateRem(32),
    },
  },
  bottomRight: {
    tooltipArrowProps: {
      top: calculateRem(-11),
      left: calculateRem(32),
    },
  },

  left: {
    tooltipArrowProps: {
      top: '50%',
      transform: 'translate(0px, -50%) rotate(90deg)',
      right: calculateRem(-17),
    },
  },
  leftBottom: {
    tooltipArrowProps: {
      top: calculateRem(26),
      right: calculateRem(-17),
      transform: 'rotate(90deg)',
    },
  },
  leftTop: {
    tooltipArrowProps: {
      bottom: calculateRem(26),
      right: calculateRem(-17),
      transform: 'rotate(90deg)',
    },
  },
  top: {
    tooltipArrowProps: {
      bottom: 0,
      left: '50%',
      transform: 'translate(-50%, 0) rotate(180deg)',
    },
  },
  topRight: {
    tooltipArrowProps: {
      bottom: calculateRem(-11),
      left: calculateRem(32),
      transform: 'rotate(180deg)',
    },
  },
  topLeft: {
    tooltipArrowProps: {
      bottom: calculateRem(-11),
      right: calculateRem(32),
      transform: 'rotate(180deg)',
    },
  },
};

export default tooltipCardDefaultPresets;
