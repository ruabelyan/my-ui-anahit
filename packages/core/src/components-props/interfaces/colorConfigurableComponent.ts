import { ColorType } from '../types';

export interface ColorConfigurableComponent {
  color?: ColorType;
  hoverColor?: ColorType;
}

export interface FocusableColorConfigurableComponent {
  focusColor?: ColorType;
  activeColor?: ColorType;
}
