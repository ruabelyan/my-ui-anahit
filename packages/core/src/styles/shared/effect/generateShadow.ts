import { ColorsThemeConfig, ShadowThemeConfigValue } from '@core/design-tokens';

const generateShadow = (
  colorTheme: ColorsThemeConfig,
  shadow: ShadowThemeConfigValue | ShadowThemeConfigValue[] = [],
  color: string | string[] = '',
) => {
  const shadowArray = Array.isArray(shadow) ? shadow : [shadow];

  return shadowArray.reduce(
    (prevShadow, shadowConfig, shadowIndex) =>
      `${prevShadow} ${shadowConfig.x} ${shadowConfig.y} ${shadowConfig.blur} ${
        shadowConfig.spread
      } ${
        typeof color === 'string'
          ? colorTheme[color] || ''
          : colorTheme[color[shadowIndex]] || ''
      }${shadowIndex !== shadowArray.length - 1 ? ', ' : ''}`,
    '',
  );
};

export default generateShadow;
