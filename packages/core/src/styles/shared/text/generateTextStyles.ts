import { TextConfigurableComponent } from '@core/components-props';
import { themeStore } from '@core/store';
import {
  CSS_VARIABLE_THEMES,
  generateStylesWithCSSVariable,
} from '../css-variables';
import { generateResponsiveValue } from '../responsive';

const generateTextStyles = ({
  typography: typographyProp,
  ...ovverrideProps
}: TextConfigurableComponent) => {
  const { textSizes, textWeights, typography, fonts } = themeStore.getValue();

  if (typographyProp && typography[typographyProp])
    ovverrideProps = {
      ...typography[typographyProp],
      ...ovverrideProps,
    };

  const {
    textAlign,
    textDecor,
    textSize,
    textStyle,
    textTransform,
    textWeight,
    letterSpacing,
    lineHeight,
    fontFamily,
  } = ovverrideProps;

  return `
    ${generateStylesWithCSSVariable({
      propertyName: 'font-family',
      propertyKey: fontFamily,
      themeName: CSS_VARIABLE_THEMES.font,
      propertyValue: fontFamily && fonts[fontFamily],
    })};

    ${generateStylesWithCSSVariable({
      propertyName: 'font-weight',
      propertyKey: textWeight,
      themeName: CSS_VARIABLE_THEMES.textWeight,
      propertyValue: textWeight && textWeights[textWeight],
    })};

    ${generateResponsiveValue({
      propertyName: 'text-align',
      responsiveValue: textAlign,
    })};

    ${generateResponsiveValue({
      responsiveValue: textSize,
      getValueStyles: value => `
        ${generateStylesWithCSSVariable({
          propertyName: 'font-size',
          propertyKey: value,
          themeName: CSS_VARIABLE_THEMES.textSize,
          propertyValue: value && textSizes[value],
        })};
      `,
    })};

    ${
      textDecor &&
      `
        text-decoration: ${textDecor};
      `
    };

    ${
      textStyle &&
      `
        font-style: ${textStyle};
      `
    };

    ${
      letterSpacing &&
      `
        letter-spacing: ${letterSpacing};
      `
    };

    ${
      lineHeight &&
      `
        line-height: ${lineHeight};
      `
    };

    ${
      textTransform &&
      `
        text-transform: ${textTransform};
      `
    };
  `;
};

export default generateTextStyles;
