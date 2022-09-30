import { SpacingConfigObject } from '@core/components-props';

export type SpacingThemeConfig = {
  inset: Record<string, string | SpacingConfigObject>;
  outset: Record<string, string | SpacingConfigObject>;
};
