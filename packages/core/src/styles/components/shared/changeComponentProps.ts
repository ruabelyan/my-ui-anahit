import {
  AdditionalComponentProps,
  PresetConfigurableComponent,
} from '@core/components-props';
import { PresetThemeConfig } from '@core/design-tokens';
import { deepMergeFlatten } from '@core/shared';
import { includePresetStyles } from '@core/styles/shared';

const changeComponentProps = <
  T extends PresetConfigurableComponent & AdditionalComponentProps,
>({
  componentName,
  componentProps,
  componentDefaultProps,
}: {
  componentName: keyof PresetThemeConfig;
  componentProps: T;
  componentDefaultProps: Partial<T>;
}) => {
  componentProps = includePresetStyles({
    componentName,
    presets:
      componentProps.disableDefaultStyles ||
      componentProps.presets !== undefined
        ? componentProps.presets
        : componentDefaultProps.presets,
    props: componentProps,
  }) as T;

  if (!componentProps.disableDefaultStyles)
    componentProps = deepMergeFlatten(
      componentDefaultProps,
      componentProps,
    ) as T;

  return componentProps;
};

export default changeComponentProps;
