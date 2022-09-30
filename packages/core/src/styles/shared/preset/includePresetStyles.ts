import { PresetThemeConfig } from '@core/design-tokens';
import { deepMergeFlatten } from '@core/shared';
import { themeStore } from '@core/store';

const includePresetStyles = <T extends keyof PresetThemeConfig>({
  componentName,
  presets,
  props,
}: {
  props: Required<PresetThemeConfig>[T][keyof PresetThemeConfig[T]];
  presets?: string | string[];
  componentName: T;
}) => {
  const { presets: presetsTheme } = themeStore.getValue();

  if (
    !presets ||
    !presetsTheme[componentName] ||
    (typeof presets !== 'string' && !Array.isArray(presets))
  )
    return props;

  const presetProps = (
    typeof presets === 'string' ? [presets] : presets
  ).reduce((acc, preset) => {
    const componentPresets = presetsTheme[componentName];

    return componentPresets &&
      componentPresets[preset] &&
      typeof componentPresets[preset] !== 'function'
      ? deepMergeFlatten(acc, componentPresets[preset])
      : acc;
  }, {});

  const presetFunctionProps = (
    typeof presets === 'string' ? [presets] : presets
  ).reduce((acc, preset) => {
    const componentPresets = presetsTheme[componentName];

    return componentPresets &&
      componentPresets[preset] &&
      typeof componentPresets[preset] === 'function'
      ? deepMergeFlatten(acc, {
          ...(
            componentPresets[preset] as unknown as (
              prevProps: typeof props,
            ) => typeof props
          )({
            ...acc,
            ...props,
          }),
        })
      : acc;
  }, {});

  return {
    ...presetProps,
    ...presetFunctionProps,
    ...props,
  };
};

export default includePresetStyles;
