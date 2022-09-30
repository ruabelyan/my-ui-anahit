import {
  BackgroundConfigurableComponent,
  FocusableBackgroundConfigurableComponent,
} from '@core/components-props';
import { themeStore } from '@core/store';
import {
  CSS_VARIABLE_THEMES,
  generateStylesWithCSSVariable,
} from '../css-variables';
import { generateResponsiveValue } from '../responsive';

const generateBackgroundStyles = ({
  activeBg,
  bg,
  bgImg,
  bgPos,
  bgSize,
  focusBg,
  hoverBg,
}: BackgroundConfigurableComponent &
  FocusableBackgroundConfigurableComponent) => {
  const { colors } = themeStore.getValue();

  return `
    ${
      bgImg &&
      `
        background-image: ${bgImg};
      `
    };

    ${generateResponsiveValue({
      propertyName: 'background-position',
      responsiveValue: bgPos,
    })};

    ${generateResponsiveValue({
      propertyName: 'background-size',
      responsiveValue: bgSize,
    })};

    ${generateStylesWithCSSVariable({
      propertyName: 'background-color',
      propertyKey: bg,
      themeName: CSS_VARIABLE_THEMES.color,
      propertyValue: bg && colors[bg],
    })};

    ${generateStylesWithCSSVariable({
      propertyName: 'background-color',
      propertyKey: hoverBg,
      themeName: CSS_VARIABLE_THEMES.color,
      propertyValue: hoverBg && colors[hoverBg],
      getValueStyles: (pName, pValue) => `
        &:hover {
            ${pName}: ${pValue};
        }
      `,
    })};

    ${generateStylesWithCSSVariable({
      propertyName: 'background-color',
      propertyKey: activeBg,
      themeName: CSS_VARIABLE_THEMES.color,
      propertyValue: activeBg && colors[activeBg],
      getValueStyles: (pName, pValue) => `
        &:active {
            ${pName}: ${pValue};
        }
      `,
    })};

    ${generateStylesWithCSSVariable({
      propertyName: 'background-color',
      propertyKey: focusBg,
      themeName: CSS_VARIABLE_THEMES.color,
      propertyValue: focusBg && colors[focusBg],
      getValueStyles: (pName, pValue) => `
        &:focus {
            ${pName}: ${pValue};
        }
      `,
    })};
  `;
};

export default generateBackgroundStyles;
