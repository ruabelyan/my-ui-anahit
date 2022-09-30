import { ResponsiveValueType } from '../types';

export interface RadiusConfigurableComponent {
  radius?: ResponsiveValueType<string>;
  radiusTopRight?: ResponsiveValueType<string>;
  radiusTopLeft?: ResponsiveValueType<string>;
  radiusBottomRight?: ResponsiveValueType<string>;
  radiusBottomLeft?: ResponsiveValueType<string>;
}
