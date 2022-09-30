import CSS from 'csstype';
import { ResponsiveValueType } from '../types';

export interface SizeConfigurableComponent {
  height?: ResponsiveValueType<CSS.Properties['height']>;
  maxHeight?: ResponsiveValueType<CSS.Properties['maxHeight']>;
  minHeight?: ResponsiveValueType<CSS.Properties['minHeight']>;

  width?: ResponsiveValueType<CSS.Properties['width']>;
  maxWidth?: ResponsiveValueType<CSS.Properties['maxWidth']>;
  minWidth?: ResponsiveValueType<CSS.Properties['minWidth']>;
}
