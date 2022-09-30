import {
  defaultColorNames,
  getColorKey,
  PresetThemeConfig,
} from '@core/design-tokens';
import { calculateRem } from '@core/shared';

const stepDefaultPresets: PresetThemeConfig['Step'] = {
  ...defaultColorNames.reduce(
    (acc, color) => ({
      ...acc,
      [color]: props => ({
        filledBg: getColorKey(color, 300),
        hoverFilledBg: getColorKey(color, 400),
        filledShadowColor: getColorKey(color, 200),
        disabledBg: getColorKey(color, 200),
        bgColor: getColorKey(color, 300),
        hoverBg: getColorKey(color, 400),
        ...(props.clickable
          ? {
              activeShadow: 'sm-stroke',
              activeShadowColor: getColorKey(color, 200),
              cursor: 'pointer',
            }
          : {}),
      }),
      [`outlined-${color}`]: props => ({
        borderStyle: 'solid',
        borderColor: getColorKey(color, 300),
        borderWidth: calculateRem(1),
        color: getColorKey(color, 300),
        hoverColor: getColorKey(color, 400),
        hoverBorderColor: getColorKey(color, 400),
        ...(props.clickable
          ? {
              activeShadow: 'sm-stroke',
              activeColor: getColorKey(color, 300),
              activeShadowColor: getColorKey(color, 200),
              cursor: 'pointer',
            }
          : {}),
      }),
    }),
    {} as PresetThemeConfig['Step'],
  ),
  horizontal: {
    titleProps: {
      margin: { t: '2' },
      display: 'inline-block',
    },
    containerProps: {
      display: 'flex',
      justify: 'center',
      align: 'center',
      flexDir: 'column',
      width: 'fit-content',
    },
  },
  vertical: {
    titleProps: {
      margin: { l: '6' },
    },
    descriptionProps: {
      margin: { l: '6' },
    },
    containerProps: {
      display: 'flex',
      align: 'center',
      flexDir: 'row',
      width: 'fit-content',
    },
  },
  disabled: {
    pointerEvents: 'none',
    containerProps: {
      opacity: 'sm',
    },
  },
};

export default stepDefaultPresets;
