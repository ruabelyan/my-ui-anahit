import CSS from 'csstype';
import { ResponsiveValueType } from '../types';

export interface PositionConfigurableComponent {
  position?: ResponsiveValueType<CSS.Properties['position']>;
  top?: ResponsiveValueType<CSS.Properties['top']>;
  left?: ResponsiveValueType<CSS.Properties['left']>;
  right?: ResponsiveValueType<CSS.Properties['right']>;
  bottom?: ResponsiveValueType<CSS.Properties['bottom']>;
  transform?: ResponsiveValueType<CSS.Properties['transform']>;
}
