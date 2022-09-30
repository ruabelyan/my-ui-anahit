import { BlurType, OpacityType, ShadowType } from '../types';

export interface BlurConfigurableComponent {
  blur?: BlurType;
  hoverBlur?: ShadowType;

  backdropBlur?: BlurType;
  hoverBackdropBlur?: ShadowType;
}

export interface FocusableBlurConfigurableComponent {
  focusBlur?: BlurType;
  activeBlur?: BlurType;

  focusBackdropBlur?: BlurType;
  activeBackdropBlur?: BlurType;
}

export interface ShadowConfigurableComponent {
  shadow?: ShadowType;
  shadowColor?: string | string[];

  hoverShadow?: ShadowType;
  hoverShadowColor?: string | string[];
}

export interface FocusableShadowConfigurableComponent {
  focusShadow?: ShadowType;
  focusShadowColor?: string | string[];

  activeShadow?: ShadowType;
  activeShadowColor?: string | string[];
}

export interface OpacityConfigurableComponent {
  opacity?: OpacityType;
  hoverOpacity?: OpacityType;
}

export interface FocusableOpacityConfigurableComponent {
  focusOpacity?: OpacityType;
  activeOpacity?: OpacityType;
}

export interface EffectConfigurableComponent
  extends BlurConfigurableComponent,
    ShadowConfigurableComponent,
    OpacityConfigurableComponent {}

export interface FocusableEffectConfigurableComponent
  extends FocusableOpacityConfigurableComponent,
    FocusableShadowConfigurableComponent,
    FocusableBlurConfigurableComponent {}
