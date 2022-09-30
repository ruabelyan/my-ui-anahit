import {
  ColorConfigurableComponent,
  FocusableColorConfigurableComponent,
} from '@core/components-props';
import { themeStore } from '@core/store';
import {
  CSS_VARIABLE_THEMES,
  generateStylesWithCSSVariable,
} from '../css-variables';

const generateColorStyles = ({
  color,
  hoverColor,
  activeColor,
  focusColor,
}: ColorConfigurableComponent & FocusableColorConfigurableComponent) => {
  const { colors } = themeStore.getValue();

  return `
      ${generateStylesWithCSSVariable({
        propertyName: 'color',
        propertyKey: color,
        themeName: CSS_VARIABLE_THEMES.color,
        propertyValue: color && colors[color],
      })};

      ${generateStylesWithCSSVariable({
        propertyName: 'color',
        propertyKey: hoverColor,
        themeName: CSS_VARIABLE_THEMES.color,
        propertyValue: hoverColor && colors[hoverColor],
        getValueStyles: (pName, pValue) => `
          &:hover {
              ${pName}: ${pValue};
          }
        `,
      })};

      ${generateStylesWithCSSVariable({
        propertyName: 'color',
        propertyKey: activeColor,
        themeName: CSS_VARIABLE_THEMES.color,
        propertyValue: activeColor && colors[activeColor],
        getValueStyles: (pName, pValue) => `
          &:active {
              ${pName}: ${pValue};
          }
        `,
      })};

      ${generateStylesWithCSSVariable({
        propertyName: 'color',
        propertyKey: focusColor,
        themeName: CSS_VARIABLE_THEMES.color,
        propertyValue: focusColor && colors[focusColor],
        getValueStyles: (pName, pValue) => `
          &:focus {
              ${pName}: ${pValue};
          }
        `,
      })};
    `;
};

export default generateColorStyles;
