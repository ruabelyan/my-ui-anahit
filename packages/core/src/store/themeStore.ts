import { generateCSSVariables } from '@core/styles/shared';
import {
  colorsDefaultValues,
  ColorsThemeConfig,
  effectDefaultValues,
  EffectThemeConfig,
  fontsDefaultValues,
  FontsThemeConfig,
  gridDefaultValues,
  GridThemeConfig,
  presetDefaultValues,
  PresetThemeConfig,
  radiusDefaultValues,
  RadiusThemeConfig,
  responsiveDefaultValues,
  ResponsiveThemeConfig,
  spacingDefaultValues,
  SpacingThemeConfig,
  textSizesDefaultValues,
  TextSizesThemeConfig,
  textWeightsDefaultValues,
  TextWeightsThemeConfig,
  transitionDefaultValues,
  TransitionThemeConfig,
  typographyDefaultValues,
  TypographyThemeConfig,
} from '../design-tokens';
import { createStore } from '../shared';

export type ThemeConfigType = {
  fonts: FontsThemeConfig;
  textSizes: TextSizesThemeConfig;
  textWeights: TextWeightsThemeConfig;
  typography: TypographyThemeConfig;
  colors: ColorsThemeConfig;
  radius: RadiusThemeConfig;
  grid: GridThemeConfig;
  responsive: ResponsiveThemeConfig;
  transition: TransitionThemeConfig;
  presets: PresetThemeConfig;
  spacing: Partial<SpacingThemeConfig>;
  effect: EffectThemeConfig;
  remSize: number;
  shouldGenerateCSSVariables?: boolean;
  CSSVariablesPrefix?: string;
};

export const defaultThemeConfig: ThemeConfigType = {
  textSizes: textSizesDefaultValues,
  fonts: fontsDefaultValues,
  textWeights: textWeightsDefaultValues,
  typography: typographyDefaultValues,
  colors: colorsDefaultValues,
  radius: radiusDefaultValues,
  effect: effectDefaultValues,
  grid: gridDefaultValues,
  responsive: responsiveDefaultValues,
  transition: transitionDefaultValues,
  presets: presetDefaultValues,
  remSize: 16,
  shouldGenerateCSSVariables: true,
  spacing: spacingDefaultValues,
};

export const getThemeStore = () =>
  createStore<ThemeConfigType>(defaultThemeConfig, generateCSSVariables);

const themeStore = getThemeStore();

export default themeStore;
