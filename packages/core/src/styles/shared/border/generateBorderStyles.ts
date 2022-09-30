import {
  BorderConfigurableComponent,
  FocusableBorderConfigurableComponent,
} from '@core/components-props';
import { themeStore } from '@core/store';
import {
  CSS_VARIABLE_THEMES,
  generateStylesWithCSSVariable,
} from '../css-variables';
import { generateResponsiveValue } from '../responsive';

const generateBorderStyles = ({
  activeBorderColor,
  borderStyle,
  borderColor,
  borderWidth,
  focusBorderColor,
  hoverBorderColor,
  activeBorderWidth,
  focusBorderWidth,
  hoverBorderWidth,
  focusWithinBorderWidth,
  focusWithinBorderColor,
}: BorderConfigurableComponent & FocusableBorderConfigurableComponent) => {
  const { colors } = themeStore.getValue();

  return `
      ${generateResponsiveValue({
        propertyName: 'border-style',
        responsiveValue: borderStyle,
      })};

      ${generateResponsiveValue({
        propertyName: 'border-width',
        responsiveValue: borderWidth,
      })};

      ${generateResponsiveValue({
        responsiveValue: hoverBorderWidth,
        getValueStyles: value => `
          &:hover {
            border-width: ${value};
          }
        `,
      })};

      ${generateResponsiveValue({
        responsiveValue: focusBorderWidth,
        getValueStyles: value => `
          &:focus {
            border-width: ${value};
          }
        `,
      })};

      ${generateResponsiveValue({
        responsiveValue: activeBorderWidth,
        getValueStyles: value => `
          &:active {
            border-width: ${value};
          }
        `,
      })};

      ${generateResponsiveValue({
        responsiveValue: focusWithinBorderWidth,
        getValueStyles: value => `
          &:focus-within {
            border-width: ${value};
          }
        `,
      })};

      ${generateStylesWithCSSVariable({
        propertyName: 'border-color',
        propertyKey: borderColor,
        themeName: CSS_VARIABLE_THEMES.color,
        propertyValue: borderColor && colors[borderColor],
      })};

      ${generateStylesWithCSSVariable({
        propertyName: 'border-color',
        propertyKey: hoverBorderColor,
        themeName: CSS_VARIABLE_THEMES.color,
        propertyValue: hoverBorderColor && colors[hoverBorderColor],
        getValueStyles: (pName, pValue) => `
          &:hover {
              ${pName}: ${pValue};
          }
        `,
      })};

      ${generateStylesWithCSSVariable({
        propertyName: 'border-color',
        propertyKey: activeBorderColor,
        themeName: CSS_VARIABLE_THEMES.color,
        propertyValue: activeBorderColor && colors[activeBorderColor],
        getValueStyles: (pName, pValue) => `
          &:active {
              ${pName}: ${pValue};
          }
        `,
      })};

      ${generateStylesWithCSSVariable({
        propertyName: 'border-color',
        propertyKey: focusBorderColor,
        themeName: CSS_VARIABLE_THEMES.color,
        propertyValue: focusBorderColor && colors[focusBorderColor],
        getValueStyles: (pName, pValue) => `
          &:focus {
              ${pName}: ${pValue};
          }
        `,
      })};

      ${generateStylesWithCSSVariable({
        propertyName: 'border-color',
        propertyKey: focusWithinBorderColor,
        themeName: CSS_VARIABLE_THEMES.color,
        propertyValue: focusWithinBorderColor && colors[focusWithinBorderColor],
        getValueStyles: (pName, pValue) => `
          &:focus-within {
              ${pName}: ${pValue};
          }
        `,
      })};

    `;
};

export default generateBorderStyles;
