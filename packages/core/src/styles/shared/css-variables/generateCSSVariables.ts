import { coreLibsStore, ThemeConfigType } from '@core/store';
import { CSS_VARIABLE_THEMES } from './constants';

const generateCSSVariablesForTheme = ({
  theme,
  themeName,
  CSSVariablesPrefix,
}: {
  CSSVariablesPrefix?: string;
  themeName: string;
  theme: Record<string, string | number>;
}) => `
    ${Object.entries(theme).reduce(
      (prevVariables, [colorKey, colorValue]) => `
          ${prevVariables}
          
          --my-ui-${
            CSSVariablesPrefix || ''
          }${themeName}--${colorKey}: ${colorValue};
        `,
      '',
    )}
    `;

const generateCSSVariables = (themeConfig: ThemeConfigType): void => {
  const { injectGlobal } = coreLibsStore.getValue();
  const { shouldGenerateCSSVariables, CSSVariablesPrefix } = themeConfig;

  if (!shouldGenerateCSSVariables) return;

  // eslint-disable-next-line no-unused-expressions
  injectGlobal`
    :root {
        ${generateCSSVariablesForTheme({
          theme: themeConfig.colors,
          themeName: CSS_VARIABLE_THEMES.color,
          CSSVariablesPrefix,
        })}

        ${generateCSSVariablesForTheme({
          theme: themeConfig.fonts,
          themeName: CSS_VARIABLE_THEMES.font,
          CSSVariablesPrefix,
        })}

        ${generateCSSVariablesForTheme({
          theme: themeConfig.radius,
          themeName: CSS_VARIABLE_THEMES.radius,
          CSSVariablesPrefix,
        })}

        ${generateCSSVariablesForTheme({
          theme: themeConfig.textSizes,
          themeName: CSS_VARIABLE_THEMES.textSize,
          CSSVariablesPrefix,
        })}

        ${generateCSSVariablesForTheme({
          theme: themeConfig.textWeights,
          themeName: CSS_VARIABLE_THEMES.textWeight,
          CSSVariablesPrefix,
        })}

        ${generateCSSVariablesForTheme({
          theme: themeConfig.transition,
          themeName: CSS_VARIABLE_THEMES.transition,
          CSSVariablesPrefix,
        })}
    }
  `;
};

export default generateCSSVariables;
