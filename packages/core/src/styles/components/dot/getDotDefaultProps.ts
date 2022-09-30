import { DotProps } from '@core/components-props';
import { getColorKey } from '@core/design-tokens';
import { calculateRem } from '@core/shared';

const getDotDefaultProps = (
  dotProps: Partial<DotProps>,
): Partial<DotProps> => ({
  display: 'inline-block',
  radius: 'sm',
  bg: getColorKey('danger', 400),
  typography: 'text5-regular',
  color: 'white',
  padding: dotProps.children ? { x: calculateRem(6) } : undefined,
});

export default getDotDefaultProps;
