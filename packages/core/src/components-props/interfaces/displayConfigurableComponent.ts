import CSS from 'csstype';
import { ResponsiveValueType } from '../types';

export interface DisplayConfigurableComponent {
  display?: CSS.Properties['display'];

  // if display = 'flex'
  justify?: ResponsiveValueType<CSS.Properties['justifyContent']>;
  align?: ResponsiveValueType<CSS.Properties['alignItems']>;
  flexDir?: ResponsiveValueType<CSS.Properties['flexDirection']>;
  flexGrow?: ResponsiveValueType<CSS.Properties['flexGrow']>;
  flexWrap?: ResponsiveValueType<CSS.Properties['flexWrap']>;
  order?: ResponsiveValueType<CSS.Properties['order']>;
}
