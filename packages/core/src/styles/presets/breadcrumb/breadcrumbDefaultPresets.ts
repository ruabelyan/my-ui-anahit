import { defaultColorNames, PresetThemeConfig } from '@core/design-tokens';

const breadcrumbDefaultPresets: PresetThemeConfig['Breadcrumb'] = {
  ...defaultColorNames.reduce(
    (acc, color) => ({
      ...acc,
      [color]: {},
    }),
    {},
  ),
};

export default breadcrumbDefaultPresets;
