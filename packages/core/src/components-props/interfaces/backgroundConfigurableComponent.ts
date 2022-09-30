import CSS from 'csstype';
import { ColorType, ResponsiveValueType } from '../types';

export interface BackgroundConfigurableComponent {
  bg?: ColorType;
  hoverBg?: ColorType;

  bgImg?: CSS.Properties['backgroundImage'];
  bgPos?: ResponsiveValueType<CSS.Properties['backgroundPosition']>;
  bgSize?: ResponsiveValueType<CSS.Properties['backgroundSize']>;
}

export interface FocusableBackgroundConfigurableComponent {
  focusBg?: ColorType;
  activeBg?: ColorType;
}
