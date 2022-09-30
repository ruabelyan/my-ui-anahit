import {
  defaultColorNames,
  getColorKey,
  PresetThemeConfig,
} from '@core/design-tokens';

const tooltipDefaultPresets: PresetThemeConfig['Tooltip'] = {
  ...defaultColorNames.reduce(
    (acc, color) => ({
      ...acc,
      [color]: {
        borderColor: ['primary', 'secondary1', 'secondary2'].includes(color)
          ? getColorKey('neutral', 300)
          : getColorKey(color, 300),
        hoverBorderColor: getColorKey(color, 400),
        focusBorderColor: getColorKey(color, 500),
        activeBorderColor: getColorKey(color, 500),
      },
    }),
    {},
  ),
};

export default tooltipDefaultPresets;
