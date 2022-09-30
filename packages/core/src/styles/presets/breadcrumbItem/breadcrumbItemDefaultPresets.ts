import {
  defaultColorNames,
  getColorKey,
  PresetThemeConfig,
} from '@core/design-tokens';

const breadcrumbItemDefaultPresets: PresetThemeConfig['BreadcrumbItem'] = {
  ...defaultColorNames.reduce(
    (acc, color) => ({
      ...acc,
      [color]: {
        color: getColorKey(color, 600),
        hoverColor: getColorKey(color, 300),
        disabledColor: getColorKey(color, 400),
        lastItemColor: getColorKey('success', 400),
      },
    }),
    {},
  ),
};

export default breadcrumbItemDefaultPresets;
