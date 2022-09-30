import {
  EffectConfigurableComponent,
  FocusableEffectConfigurableComponent,
} from '@core/components-props';
import { themeStore } from '@core/store';
import generateShadow from './generateShadow';

const generateBackdropBlur = ({
  blurTheme,
  value,
  getStyles,
}: {
  blurTheme: Record<string, string>;
  value: string | undefined;
  getStyles?(styles: string): string;
}) => {
  const styles =
    value &&
    blurTheme[value] &&
    `
      position: relative;
      overflow: hidden;

      &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        z-index: 1;
        display: block;
        width: 100%;
        height: 100%;
        overflow: hidden;
        border-radius: inherit;
        backdrop-filter: blur(${blurTheme[value]});
      }
    `;

  return styles && (getStyles ? getStyles(styles) : styles);
};

const generateEffectStyles = ({
  activeShadow: activeShadowProp,
  focusShadow: focusShadowProp,
  hoverShadow: hoverShadowProp,
  shadow: shadowProp,
  shadowColor,
  hoverShadowColor,
  activeShadowColor,
  focusShadowColor,
  activeBlur,
  activeOpacity,
  blur,
  focusBlur,
  focusOpacity,
  hoverBlur,
  hoverOpacity,
  opacity,
  activeBackdropBlur,
  backdropBlur,
  focusBackdropBlur,
  hoverBackdropBlur,
}: EffectConfigurableComponent & FocusableEffectConfigurableComponent) => {
  const { effect, colors } = themeStore.getValue();

  const shadow = generateShadow(
    colors,
    effect.shadow[shadowProp || ''],
    shadowColor,
  );

  const hoverShadow = generateShadow(
    colors,
    effect.shadow[hoverShadowProp || ''],
    hoverShadowColor,
  );

  const focusShadow = generateShadow(
    colors,
    effect.shadow[focusShadowProp || ''],
    focusShadowColor,
  );

  const activeShadow = generateShadow(
    colors,
    effect.shadow[activeShadowProp || ''],
    activeShadowColor,
  );

  return `
    ${shadow && `box-shadow: ${shadow}`};
    ${
      opacity &&
      effect.opacity[opacity] &&
      `opacity: ${effect.opacity[opacity]}`
    };
    ${
      blur &&
      effect.blur.scene[blur] &&
      `filter: blur(${effect.blur.scene[blur]})`
    };
    ${generateBackdropBlur({
      blurTheme: effect.blur.backdrop,
      value: backdropBlur,
    })};

    ${
      hoverShadow &&
      `&:hover {
        box-shadow: ${hoverShadow}
      }`
    };
    ${
      hoverOpacity &&
      effect.opacity[hoverOpacity] &&
      `&:hover {
        opacity: ${effect.opacity[hoverOpacity]}
      }`
    };
    ${
      hoverBlur &&
      effect.blur.scene[hoverBlur] &&
      `
        &:hover {
          filter: blur(${effect.blur.scene[hoverBlur]})
        }
      `
    };
    ${generateBackdropBlur({
      blurTheme: effect.blur.backdrop,
      value: hoverBackdropBlur,
      getStyles: styles => `
        &:hover {
          ${styles}
        }
      `,
    })};

    ${
      focusShadow &&
      `&:focus {
        box-shadow: ${focusShadow}
      }`
    };
    ${
      focusOpacity &&
      effect.opacity[focusOpacity] &&
      `&:focus {
        opacity: ${effect.opacity[focusOpacity]}
      }`
    };
    ${
      focusBlur &&
      effect.blur.scene[focusBlur] &&
      `
        &:focus {
          filter: blur(${effect.blur.scene[focusBlur]})
        }
      `
    };
    ${generateBackdropBlur({
      blurTheme: effect.blur.backdrop,
      value: focusBackdropBlur,
      getStyles: styles => `
        &:focus {
          ${styles}
        }
      `,
    })};

    ${
      activeShadow &&
      `&:active {
        box-shadow: ${activeShadow}
      }`
    };
    ${
      activeOpacity &&
      effect.opacity[activeOpacity] &&
      `&:active {
        opacity: ${effect.opacity[activeOpacity]}
      }`
    };
    ${
      activeBlur &&
      effect.blur.scene[activeBlur] &&
      `
        &:active {
          filter: blur(${effect.blur.scene[activeBlur]})
        }
      `
    };
    ${generateBackdropBlur({
      blurTheme: effect.blur.backdrop,
      value: activeBackdropBlur,
      getStyles: styles => `
        &:active {
          ${styles}
        }
      `,
    })};
  `;
};

export default generateEffectStyles;
