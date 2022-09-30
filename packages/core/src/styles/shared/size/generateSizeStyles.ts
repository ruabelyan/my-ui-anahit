import { SizeConfigurableComponent } from '@core/components-props';
import { generateResponsiveValue } from '../responsive';

const generateSizeStyles = ({
  height,
  maxHeight,
  maxWidth,
  minHeight,
  minWidth,
  width,
}: SizeConfigurableComponent) => `
  ${generateResponsiveValue({
    responsiveValue: height,
    propertyName: 'height',
  })};

  ${generateResponsiveValue({
    responsiveValue: maxHeight,
    propertyName: 'max-height',
  })};

  ${generateResponsiveValue({
    responsiveValue: maxWidth,
    propertyName: 'max-width',
  })};

  ${generateResponsiveValue({
    responsiveValue: minHeight,
    propertyName: 'min-height',
  })};

  ${generateResponsiveValue({
    responsiveValue: minWidth,
    propertyName: 'min-width',
  })};

  ${generateResponsiveValue({
    responsiveValue: width,
    propertyName: 'width',
  })};
`;

export default generateSizeStyles;
