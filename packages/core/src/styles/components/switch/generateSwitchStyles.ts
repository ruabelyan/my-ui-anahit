import { SwitchProps } from '@core/components-props';
import { sharedStyles } from '@core/index';
import { coreLibsStore, themeStore } from '@core/store';
import {
  CSS_VARIABLE_THEMES,
  generateStylesWithCSSVariable,
} from '@core/styles/shared';
import { resetPosition } from '@core/styles/shared/mixins';
import { changeComponentProps } from '../shared';
import getSwitchDefaultProps from './getSwitchDefaultProps';

const generateSwitchStyles = (switchProps: SwitchProps) => {
  const { css, cx } = coreLibsStore.getValue();
  const { colors } = themeStore.getValue();

  const switchDefaultProps = getSwitchDefaultProps();

  switchProps = changeComponentProps({
    componentName: 'Switch',
    componentDefaultProps: switchDefaultProps,
    componentProps: switchProps,
  });

  const {
    disabledBg,
    checkedBg,
    activeCheckedBg,
    focusCheckedBg,
    hoverCheckedBg,
    transition,
    defaultIndicatorWidth,
    defaultIndicatorHeight,
    width,
    maxWidth,
    minWidth,
    height,
    maxHeight,
    minHeight,
    margin,
    padding,
    ...restSwitchProps
  } = switchProps;

  const SwitchSlider = css`
    width: inherit;
    height: inherit;

    cursor: pointer;
    border-radius: inherit;
    background-color: inherit;

    ${sharedStyles.generateDesignTokensStyles(restSwitchProps)}

    ${resetPosition()};
  `;

  const Indicator = css`
    ${resetPosition()};

    width: fit-content;

    position: absolute;
    top: 50%;
    transform: translate(0%, -50%);

    ${sharedStyles.generateTransitionStyles({ transition })}
  `;

  return {
    Switch: cx(
      css`
        display: inline-block;
        position: relative;

        ${sharedStyles.generateSizeStyles({
          width,
          maxWidth,
          minWidth,
          height,
          maxHeight,
          minHeight,
        })};

        ${sharedStyles.generateSpacingStyles({
          margin,
          padding,
        })};

        input {
          opacity: 0;
          width: 0;
          height: 0;

          &:checked + ${`.${SwitchSlider}`} {
            ${generateStylesWithCSSVariable({
              propertyName: 'background-color',
              propertyKey: checkedBg,
              themeName: CSS_VARIABLE_THEMES.color,
              propertyValue: checkedBg && colors[checkedBg],
            })}
          }

          &:checked + ${`.${SwitchSlider}`}:hover {
            ${generateStylesWithCSSVariable({
              propertyName: 'background-color',
              propertyKey: hoverCheckedBg,
              themeName: CSS_VARIABLE_THEMES.color,
              propertyValue: hoverCheckedBg && colors[hoverCheckedBg],
            })}
          }

          &:checked + ${`.${SwitchSlider}`}:active {
            ${generateStylesWithCSSVariable({
              propertyName: 'background-color',
              propertyKey: activeCheckedBg,
              themeName: CSS_VARIABLE_THEMES.color,
              propertyValue: activeCheckedBg && colors[activeCheckedBg],
            })}
          }

          &:checked + ${`.${SwitchSlider}`}:focus {
            ${generateStylesWithCSSVariable({
              propertyName: 'background-color',
              propertyKey: focusCheckedBg,
              themeName: CSS_VARIABLE_THEMES.color,
              propertyValue: focusCheckedBg && colors[focusCheckedBg],
            })}
          }

          &:checked + ${`.${SwitchSlider}`} ${`.${Indicator}`} {
            left: 100%;
            transform: translate(-100%, -50%);
          }

          &:disabled + ${`.${SwitchSlider}`} {
            cursor: not-allowed;

            &,
            &:hover {
              ${generateStylesWithCSSVariable({
                propertyName: 'background-color',
                propertyKey: disabledBg,
                themeName: CSS_VARIABLE_THEMES.color,
                propertyValue: disabledBg && colors[disabledBg],
              })}
            }
          }
        }
      `,
    ),
    SwitchSlider,
    Indicator,
    DefaultIndicator: {
      defaultIndicatorWidth,
      defaultIndicatorHeight,
    },
  };
};

export default generateSwitchStyles;
