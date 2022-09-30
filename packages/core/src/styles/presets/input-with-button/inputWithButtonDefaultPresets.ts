import {
  defaultColorNames,
  getColorKey,
  PresetThemeConfig,
} from '@core/design-tokens';

const inputWithButtonDefaultPresets: PresetThemeConfig['InputWithButton'] = {
  ...defaultColorNames.reduce(
    (acc, color) => ({
      ...acc,
      [color]: color.includes('success' || 'danger' || 'warning')
        ? {
            color: getColorKey(color, 300),
            borderColor: getColorKey(color, 300),
            hoverBorderColor: getColorKey(color, 300),
            focusBorderColor: getColorKey(color, 300),
            activeBorderColor: getColorKey(color, 300),
          }
        : {
            color: getColorKey(color, 300),
            borderColor: getColorKey('neutral', 300),
            hoverBorderColor: getColorKey(color, 400),
            focusBorderColor: getColorKey(color, 500),
            activeBorderColor: getColorKey(color, 500),
          },
    }),
    {},
  ),
};

export default inputWithButtonDefaultPresets;
