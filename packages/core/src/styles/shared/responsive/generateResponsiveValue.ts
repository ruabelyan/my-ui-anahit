import {
  ResponsiveBreakpoints,
  ResponsiveValueType,
} from '@core/components-props';
import { responsiveBreakpoints } from '@core/design-tokens';
import { themeStore } from '@core/store';
import checkValueIsResponsive from './checkValueIsResponsive';

const generateResponsiveValue = <T>({
  propertyName,
  responsiveValue,
  getValueStyles,
}: {
  propertyName?: string;
  responsiveValue: ResponsiveValueType<T>;
  getValueStyles?(value: T): string;
}) => {
  if (!responsiveValue) return '';

  const { responsive } = themeStore.getValue();

  if (!checkValueIsResponsive(responsiveValue))
    return getValueStyles
      ? getValueStyles(responsiveValue as T)
      : `${propertyName}: ${responsiveValue};`;

  const responsiveBreakpointsValues =
    responsiveValue as ResponsiveBreakpoints<T>;

  return `
    ${responsiveBreakpoints.reduce((previousStyles, breakpoint) => {
      const typedBreakpoint =
        breakpoint as unknown as keyof ResponsiveBreakpoints<T>;

      if (!responsiveBreakpointsValues[typedBreakpoint]) return previousStyles;

      return `
          ${previousStyles}
  
          @media screen and (min-width: ${responsive[typedBreakpoint]}) {
              ${
                getValueStyles
                  ? getValueStyles(
                      responsiveBreakpointsValues[typedBreakpoint] as T,
                    )
                  : `${propertyName}: ${responsiveBreakpointsValues[typedBreakpoint]};`
              }
          }
        `;
    }, '')}
  `;
};

export default generateResponsiveValue;
