import { themeStore } from '@core/store';

const generateStylesWithCSSVariable = ({
  propertyName,
  propertyValue,
  propertyKey,
  themeName,
  getValueStyles,
}: {
  propertyName: string;
  themeName: string;
  propertyValue?: string | number;
  propertyKey?: string;
  getValueStyles?(pName: string, pValue: string): string;
}) => {
  const { shouldGenerateCSSVariables, CSSVariablesPrefix } =
    themeStore.getValue();

  return `
    ${
      propertyValue &&
      (getValueStyles
        ? `
          ${getValueStyles(propertyName, propertyValue.toString())}
          ${
            shouldGenerateCSSVariables &&
            getValueStyles(
              propertyName,
              `var(--my-ui-${
                CSSVariablesPrefix || ''
              }${themeName}--${propertyKey}, ${propertyValue.toString()})`,
            )
          }
      `
        : `
          ${propertyName}: ${propertyValue};
          ${
            shouldGenerateCSSVariables &&
            `${propertyName}: var(--my-ui-${
              CSSVariablesPrefix || ''
            }${themeName}--${propertyKey}, ${propertyValue.toString()})`
          };
      `)
    };
  `;
};

export default generateStylesWithCSSVariable;
