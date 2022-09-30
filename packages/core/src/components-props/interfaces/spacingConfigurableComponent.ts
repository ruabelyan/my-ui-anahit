import { ResponsiveValueType } from '../types';

export type SpacingConfigObject = {
  x?: ResponsiveValueType<string>;
  y?: ResponsiveValueType<string>;
  l?: ResponsiveValueType<string>;
  r?: ResponsiveValueType<string>;
  t?: ResponsiveValueType<string>;
  b?: ResponsiveValueType<string>;
};
export interface SpacingConfigurableComponent {
  margin?: ResponsiveValueType<string | SpacingConfigObject>;

  padding?: ResponsiveValueType<string | SpacingConfigObject>;
}
