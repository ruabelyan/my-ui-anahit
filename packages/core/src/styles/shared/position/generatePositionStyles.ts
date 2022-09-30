import { PositionConfigurableComponent } from '@core/components-props';
import { generateResponsiveValue } from '../responsive';

const includePresetStyles = ({
  bottom,
  left,
  position,
  right,
  top,
  transform,
}: PositionConfigurableComponent) => `
  ${generateResponsiveValue({
    propertyName: 'bottom',
    responsiveValue: bottom,
  })};

  ${generateResponsiveValue({
    propertyName: 'left',
    responsiveValue: left,
  })};

  ${generateResponsiveValue({
    propertyName: 'position',
    responsiveValue: position,
  })};

  ${generateResponsiveValue({
    propertyName: 'right',
    responsiveValue: right,
  })};

  ${generateResponsiveValue({
    propertyName: 'top',
    responsiveValue: top,
  })};

  ${generateResponsiveValue({
    propertyName: 'transform',
    responsiveValue: transform,
  })};
`;

export default includePresetStyles;
