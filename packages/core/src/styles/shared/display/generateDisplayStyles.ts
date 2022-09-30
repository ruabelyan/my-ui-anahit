import { DisplayConfigurableComponent } from '@core/components-props';
import { generateResponsiveValue } from '../responsive';

const generateDisplayStyles = ({
  display,
  align,
  flexDir,
  flexGrow,
  flexWrap,
  justify,
  order,
}: DisplayConfigurableComponent) => `
      ${
        display &&
        `
        display: ${display};
      `
      };

      ${generateResponsiveValue({
        propertyName: 'align-items',
        responsiveValue: align,
      })};

      ${generateResponsiveValue({
        propertyName: 'flex-direction',
        responsiveValue: flexDir,
      })};

      ${generateResponsiveValue({
        propertyName: 'flex-grow',
        responsiveValue: flexGrow,
      })};

      ${generateResponsiveValue({
        propertyName: 'flex-wrap',
        responsiveValue: flexWrap,
      })};

      ${generateResponsiveValue({
        propertyName: 'justify-content',
        responsiveValue: justify,
      })};

      ${generateResponsiveValue({
        propertyName: 'flex-order',
        responsiveValue: order,
      })};
    `;

export default generateDisplayStyles;
