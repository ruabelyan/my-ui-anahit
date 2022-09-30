import { BreadcrumbProps } from '@core/components-props';
import { calculateRem } from '@core/shared';

const getBreadcrumbDefaultProps = (): Partial<BreadcrumbProps> => ({
  separatorProps: {
    width: calculateRem(16),
    height: calculateRem(16),
    margin: { r: '4', l: '4' },
  },
  display: 'flex',
  align: 'center',
});

export default getBreadcrumbDefaultProps;
