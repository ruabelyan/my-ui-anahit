export type ShadowThemeConfigValue = {
  x: string;
  y: string;
  blur: string;
  spread: string;
};

export type ShadowThemeConfig = Record<
  string,
  ShadowThemeConfigValue | ShadowThemeConfigValue[]
>;

export type BlurConfig = {
  backdrop: Record<string, string>;
  scene: Record<string, string>;
};

export type OpacityConfig = Record<string, string | number>;

export type EffectThemeConfig = {
  shadow: ShadowThemeConfig;
  blur: BlurConfig;
  opacity: OpacityConfig;
};
