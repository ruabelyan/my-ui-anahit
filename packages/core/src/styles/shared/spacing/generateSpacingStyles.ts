import { SpacingConfigurableComponent } from '@core/components-props';
import { themeStore } from '@core/store';
import { generateResponsiveValue } from '../responsive';

const replaceSpacings = <T>(spacingProp: T, spacing: Record<string, T>): T => {
  if (typeof spacingProp === 'string')
    return spacing[spacingProp] || spacingProp;

  return Object.entries(spacingProp).reduce(
    (acc, [key, value]) => ({
      ...acc,
      [key]:
        typeof value !== 'string'
          ? replaceSpacings(value, spacing)
          : spacing[value] || value,
    }),
    {} as T,
  );
};

const generateSpacingStyles = ({
  margin,
  padding,
}: SpacingConfigurableComponent) => {
  const { spacing } = themeStore.getValue();

  return `
    ${generateResponsiveValue({
      responsiveValue: margin,
      getValueStyles: value => {
        if (value && spacing.outset)
          value = replaceSpacings(value, spacing.outset);

        return value
          ? `
            ${
              typeof value === 'string'
                ? `margin: ${value}`
                : `
                  ${
                    value.x &&
                    `margin-right: ${value.x}; margin-left: ${value.x};`
                  };

                  ${
                    value.y &&
                    `margin-top: ${value.y}; margin-bottom: ${value.y};`
                  };

                  ${value.t && `margin-top: ${value.t};`};
                  ${value.b && `margin-bottom: ${value.b};`};

                  ${value.r && `margin-right: ${value.r};`};
                  ${value.l && `margin-left: ${value.l};`};
                `
            }
          `
          : '';
      },
    })};

    ${generateResponsiveValue({
      responsiveValue: padding,
      getValueStyles: value => {
        if (value && spacing.inset)
          value = replaceSpacings(value, spacing.inset);

        return value
          ? `
            ${
              typeof value === 'string'
                ? `padding: ${value}`
                : `
                  ${
                    value.x &&
                    `padding-right: ${value.x}; padding-left: ${value.x};`
                  };

                  ${
                    value.y &&
                    `padding-top: ${value.y}; padding-bottom: ${value.y};`
                  };

                  ${value.t && `padding-top: ${value.t};`};
                  ${value.b && `padding-bottom: ${value.b};`};

                  ${value.r && `padding-right: ${value.r};`};
                  ${value.l && `padding-left: ${value.l};`};
                `
            }
          `
          : '';
      },
    })};
  `;
};

export default generateSpacingStyles;
