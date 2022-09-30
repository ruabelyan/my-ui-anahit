import { BreadcrumbItemProps } from '@core/components-props';
import { getColorKey } from '@core/design-tokens';
import { calculateRem } from '@core/shared';

const getBreadcrumbItemDefaultProps = (): Partial<BreadcrumbItemProps> => ({
  typography: 'text4-regular',
  hoverColor: getColorKey('primary', 300),
  disabledColor: getColorKey('neutral', 400),
  startContentProps: {
    display: 'flex',
    align: 'center',
    justify: 'center',
    width: calculateRem(20),
    height: calculateRem(20),
    margin: { r: '4' },
  },
  endContentProps: {
    display: 'flex',
    align: 'center',
    justify: 'center',
    width: calculateRem(20),
    height: calculateRem(20),
    margin: { l: '4' },
  },
  presets: ['neutral'],
});

export default getBreadcrumbItemDefaultProps;
