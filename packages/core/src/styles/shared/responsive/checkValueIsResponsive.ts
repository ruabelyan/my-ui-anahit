import {
  ResponsiveBreakpoints,
  ResponsiveValueType,
} from '@core/components-props';

const checkValueIsResponsive = (
  responsiveValue: ResponsiveValueType<unknown>,
): boolean => {
  if (typeof responsiveValue === 'object' && !Array.isArray(responsiveValue)) {
    const responsiveBreakpoints =
      responsiveValue as unknown as ResponsiveBreakpoints<unknown>;

    return Boolean(
      responsiveBreakpoints.xs ||
        responsiveBreakpoints.sm ||
        responsiveBreakpoints.md ||
        responsiveBreakpoints.lg ||
        responsiveBreakpoints.xlg,
    );
  }

  return false;
};

export default checkValueIsResponsive;
