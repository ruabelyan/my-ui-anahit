import { CheckboxProps } from '@core/components-props';
import { sharedStyles } from '@core/index';
import { coreLibsStore, themeStore } from '@core/store';
import {
  CSS_VARIABLE_THEMES,
  generateStylesWithCSSVariable,
} from '@core/styles/shared';
import { generateShadow } from '@core/styles/shared/effect';
import { flex } from '@core/styles/shared/mixins';
import { changeComponentProps } from '../shared';
import getCheckboxDefaultProps from './getCheckboxDefaultProps';

const generateCheckboxStyles = (checkboxProps: CheckboxProps) => {
  const { css, cx } = coreLibsStore.getValue();
  const { colors, effect } = themeStore.getValue();

  const checkboxDefaultProps = getCheckboxDefaultProps();

  checkboxProps = changeComponentProps({
    componentName: 'Checkbox',
    componentProps: checkboxProps,
    componentDefaultProps: checkboxDefaultProps,
  });

  const {
    contentWidth,
    contentHeight,
    checkedBg,
    hoverCheckedBg,
    focusCheckedBg,
    activeCheckedBg,
    checkedActiveShadowColor,
    disabledCheckedBg,
    disabledBorderColor,
    ...restCheckboxProps
  } = checkboxProps;

  const CheckboxIcon = css`
    ${flex()}

    width: ${contentWidth};
    height: ${contentHeight};
  `;

  const CheckboxStyles = css`
    ${flex('center', 'center')};

    ${sharedStyles.generateDesignTokensStyles(restCheckboxProps)};

    input {
      opacity: 0;
      width: 0;
      height: 0;
    }
  `;

  const ActiveCheckbox = css`
    &${`.${CheckboxStyles}`} {
      border-width: 0;

      ${generateStylesWithCSSVariable({
        propertyName: 'background-color',
        propertyKey: checkedBg,
        themeName: CSS_VARIABLE_THEMES.color,
        propertyValue: checkedBg && colors[checkedBg],
      })};

      ${generateStylesWithCSSVariable({
        propertyName: 'background-color',
        propertyKey: hoverCheckedBg,
        themeName: CSS_VARIABLE_THEMES.color,
        propertyValue: hoverCheckedBg && colors[hoverCheckedBg],
        getValueStyles: (pName, pValue) => `
        &:hover {
          ${pName}: ${pValue};
        }
      `,
      })};

      ${generateStylesWithCSSVariable({
        propertyName: 'background-color',
        propertyKey: focusCheckedBg,
        themeName: CSS_VARIABLE_THEMES.color,
        propertyValue: focusCheckedBg && colors[focusCheckedBg],
        getValueStyles: (pName, pValue) => `
        &:focus {
          ${pName}: ${pValue};
        }
      `,
      })};

      ${generateStylesWithCSSVariable({
        propertyName: 'background-color',
        propertyKey: activeCheckedBg,
        themeName: CSS_VARIABLE_THEMES.color,
        propertyValue: activeCheckedBg && colors[activeCheckedBg],
        getValueStyles: (pName, pValue) => `
        &:active {
          ${pName}: ${pValue};
        }
      `,
      })};

      &:active {
        box-shadow: ${generateShadow(
          colors,
          effect.shadow[restCheckboxProps.activeShadow || ''],
          checkedActiveShadowColor,
        )};
      }
    }
  `;

  return {
    Checkbox: cx(CheckboxStyles),
    ActiveCheckbox,
    DisabledCheckbox: (isChecked: boolean) => css`
      &${`.${CheckboxStyles}`}${`.${ActiveCheckbox}`} {
        &,
        &:hover,
        &:active,
        &:focus {
          cursor: not-allowed;
          box-shadow: none;

          ${generateStylesWithCSSVariable({
            propertyName: 'border-color',
            propertyKey: disabledBorderColor,
            themeName: CSS_VARIABLE_THEMES.color,
            propertyValue: disabledBorderColor && colors[disabledBorderColor],
          })};

          ${isChecked &&
          generateStylesWithCSSVariable({
            propertyName: 'background-color',
            propertyKey: disabledCheckedBg,
            themeName: CSS_VARIABLE_THEMES.color,
            propertyValue: disabledCheckedBg && colors[disabledCheckedBg],
          })};
        }
      }
    `,
    CheckboxIcon,
  };
};

export default generateCheckboxStyles;
