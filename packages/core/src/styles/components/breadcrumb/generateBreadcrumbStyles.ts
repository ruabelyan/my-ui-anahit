import { BreadcrumbProps } from '@core/components-props';
import { changeComponentProps } from '../shared';
import getBreadcrumbDefaultProps from './getBreadcrumbDefaultProps';

const generateBreadcrumbStyles = (breadcrumbProps: BreadcrumbProps) => {
  const breadcrumbDefaultProps = getBreadcrumbDefaultProps();

  breadcrumbProps = changeComponentProps({
    componentName: 'Breadcrumb',
    componentProps: breadcrumbProps,
    componentDefaultProps: breadcrumbDefaultProps,
  });

  return {
    breadcrumbPropsWithPresets: breadcrumbProps,
  };
};

export default generateBreadcrumbStyles;
