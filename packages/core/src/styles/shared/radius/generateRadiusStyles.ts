import { RadiusConfigurableComponent } from '@core/components-props';
import { themeStore } from '@core/store';
import {
  CSS_VARIABLE_THEMES,
  generateStylesWithCSSVariable,
} from '../css-variables';
import { generateResponsiveValue } from '../responsive';

const generateRadiusStyles = ({
  radius,
  radiusBottomLeft,
  radiusBottomRight,
  radiusTopLeft,
  radiusTopRight,
}: RadiusConfigurableComponent) => {
  const { radius: radiusTheme } = themeStore.getValue();

  return `
    ${generateResponsiveValue({
      responsiveValue: radius,
      getValueStyles: value => `
        ${generateStylesWithCSSVariable({
          propertyName: 'border-radius',
          propertyKey: value,
          themeName: CSS_VARIABLE_THEMES.radius,
          propertyValue: value && radiusTheme[value],
        })};
        `,
    })}

    ${generateResponsiveValue({
      responsiveValue: radiusBottomLeft,
      getValueStyles: value => `
        ${generateStylesWithCSSVariable({
          propertyName: 'border-bottom-left-radius',
          propertyKey: value,
          themeName: CSS_VARIABLE_THEMES.radius,
          propertyValue: value && radiusTheme[value],
        })};
        `,
    })}

    ${generateResponsiveValue({
      responsiveValue: radiusBottomRight,
      getValueStyles: value => `
        ${generateStylesWithCSSVariable({
          propertyName: 'border-bottom-right-radius',
          propertyKey: value,
          themeName: CSS_VARIABLE_THEMES.radius,
          propertyValue: value && radiusTheme[value],
        })};
        `,
    })}

    ${generateResponsiveValue({
      responsiveValue: radiusTopLeft,
      getValueStyles: value => `
        ${generateStylesWithCSSVariable({
          propertyName: 'border-top-left-radius',
          propertyKey: value,
          themeName: CSS_VARIABLE_THEMES.radius,
          propertyValue: value && radiusTheme[value],
        })};
        `,
    })}

    ${generateResponsiveValue({
      responsiveValue: radiusTopRight,
      getValueStyles: value => `
        ${generateStylesWithCSSVariable({
          propertyName: 'border-top-right-radius',
          propertyKey: value,
          themeName: CSS_VARIABLE_THEMES.radius,
          propertyValue: value && radiusTheme[value],
        })};
        `,
    })}
  `;
};

export default generateRadiusStyles;
