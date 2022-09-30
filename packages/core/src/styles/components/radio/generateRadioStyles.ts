import { RadioProps } from '@core/components-props';
import { sharedStyles } from '@core/index';
import { coreLibsStore, themeStore } from '@core/store';
import {
  CSS_VARIABLE_THEMES,
  generateStylesWithCSSVariable,
} from '@core/styles/shared';
import { generateShadow } from '@core/styles/shared/effect';
import { flex } from '@core/styles/shared/mixins';
import { changeComponentProps } from '../shared';
import getRadioDefaultProps from './getRadioDefaultProps';

const generateRadioStyles = (radioProps: RadioProps) => {
  const { css, cx } = coreLibsStore.getValue();
  const { colors, effect } = themeStore.getValue();

  const radioDefaultProps = getRadioDefaultProps();

  radioProps = changeComponentProps({
    componentName: 'Radio',
    componentProps: radioProps,
    componentDefaultProps: radioDefaultProps,
  });

  const {
    contentWidth,
    contentHeight,
    checkedBorderColor,
    checkedActiveShadowColor,
    disabledColor,
    contentBgColor,
    hoverCheckedBg,
    labelProps,
    ...restRadioProps
  } = radioProps;

  const RadioStyles = css`
    ${flex('center', 'center')};
    ${sharedStyles.generateDesignTokensStyles(restRadioProps)};
    input {
      opacity: 0;
      width: 0;
      height: 0;
    }
    background-color: white;
  `;

  const RadioIcon = css`
    display: flex;
    & > *:first-child {
      width: ${contentWidth};
      height: ${contentHeight};
      ${generateStylesWithCSSVariable({
        propertyName: 'background-color',
        propertyKey: contentBgColor,
        themeName: CSS_VARIABLE_THEMES.color,
        propertyValue: contentBgColor && colors[contentBgColor],
      })};
      ${sharedStyles.generateTransitionStyles({
        transition: restRadioProps.transition,
      })};
    }
  `;

  const ActiveRadio = css`
    &${`.${RadioStyles}`} {
      ${generateStylesWithCSSVariable({
        propertyName: 'border-color',
        propertyKey: checkedBorderColor,
        themeName: CSS_VARIABLE_THEMES.color,
        propertyValue: checkedBorderColor && colors[checkedBorderColor],
      })};

      ${generateStylesWithCSSVariable({
        propertyName: 'border-color',
        propertyKey: hoverCheckedBg,
        themeName: CSS_VARIABLE_THEMES.color,
        propertyValue: hoverCheckedBg && colors[hoverCheckedBg],
        getValueStyles: (pName, pValue) => `
          &:hover {
            ${pName}: ${pValue};
            ${`.${RadioIcon}`} > *:first-child {
              ${generateStylesWithCSSVariable({
                propertyName: 'background-color',
                propertyKey: hoverCheckedBg,
                themeName: CSS_VARIABLE_THEMES.color,
                propertyValue: hoverCheckedBg && colors[hoverCheckedBg],
                getValueStyles: (iconPName, iconPValue) => `
                  ${iconPName}: ${iconPValue};
                `,
              })};
            }
          }
        `,
      })};

      &:active {
        box-shadow: ${generateShadow(
          colors,
          effect.shadow[restRadioProps.activeShadow || ''],
          checkedActiveShadowColor,
        )};
      }
    }
  `;

  return {
    Radio: cx(RadioStyles),

    ActiveRadio,

    DisabledRadio: css`
      &,
      &${`.${ActiveRadio}`} {
        &,
        &:hover,
        &:active,
        &:focus {
          cursor: not-allowed;
          box-shadow: none;

          ${generateStylesWithCSSVariable({
            propertyName: 'border-color',
            propertyKey: disabledColor,
            themeName: CSS_VARIABLE_THEMES.color,
            propertyValue: disabledColor && colors[disabledColor],
          })};

          ${`.${RadioIcon}`} > *:first-child {
            ${generateStylesWithCSSVariable({
              propertyName: 'background-color',
              propertyKey: disabledColor,
              themeName: CSS_VARIABLE_THEMES.color,
              propertyValue: disabledColor && colors[disabledColor],
            })};
          }
        }
      }
    `,
    RadioIcon,
    label: css`
      display: inline-flex;
    `,
    labelProps,
  };
};

export default generateRadioStyles;
