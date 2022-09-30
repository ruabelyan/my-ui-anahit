import { InputProps } from '@core/components-props';
import { sharedStyles } from '@core/index';
import { coreLibsStore, themeStore } from '@core/store';
import {
  CSS_VARIABLE_THEMES,
  generateStylesWithCSSVariable,
} from '@core/styles/shared';
import { changeComponentProps } from '../shared';
import getInputDefaultProps from './getInputDefaultProps';

const generateInputStyles = (inputProps: InputProps) => {
  const { css } = coreLibsStore.getValue();
  const { colors } = themeStore.getValue();

  const inputDefaultProps = getInputDefaultProps(inputProps);

  inputProps = changeComponentProps({
    componentName: 'Input',
    componentProps: inputProps,
    componentDefaultProps: inputDefaultProps,
  });

  const { disabledBg, disabledColor, disabledBorderColor } = inputProps;

  return {
    InputContainer: (disabled?: boolean) => css`
      ${sharedStyles.generateDesignTokensStyles(inputProps)}

      cursor: auto;

      ${disabled &&
      `
      ${generateStylesWithCSSVariable({
        propertyName: 'color',
        propertyKey: disabledColor,
        themeName: CSS_VARIABLE_THEMES.color,
        propertyValue: disabledColor && colors[disabledColor],
      })}

      ${generateStylesWithCSSVariable({
        propertyName: 'background-color',
        propertyKey: disabledBg,
        themeName: CSS_VARIABLE_THEMES.color,
        propertyValue: disabledBg && colors[disabledBg],
      })}

      ${generateStylesWithCSSVariable({
        propertyName: 'border-color',
        propertyKey: disabledBorderColor,
        themeName: CSS_VARIABLE_THEMES.color,
        propertyValue: disabledBorderColor && colors[disabledBorderColor],
      })}

      :hover, :active {
        cursor:default;

        ${generateStylesWithCSSVariable({
          propertyName: 'color',
          propertyKey: disabledColor,
          themeName: CSS_VARIABLE_THEMES.color,
          propertyValue: disabledColor && colors[disabledColor],
        })}

        ${generateStylesWithCSSVariable({
          propertyName: 'background-color',
          propertyKey: disabledBg,
          themeName: CSS_VARIABLE_THEMES.color,
          propertyValue: disabledBg && colors[disabledBg],
        })}
  
        ${generateStylesWithCSSVariable({
          propertyName: 'border-color',
          propertyKey: disabledBorderColor,
          themeName: CSS_VARIABLE_THEMES.color,
          propertyValue: disabledBorderColor && colors[disabledBorderColor],
        })}
      }
    `};
    `,
    Input: css`
      padding: 0;
      border: none;
      outline: none;
      width: 100%;
    `,
    EndButton: css`
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
    `,
    StartButton: css`
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
    `,
    LabelContainer: (disabled?: boolean) => css`
      ${disabled &&
      `
        ${generateStylesWithCSSVariable({
          propertyName: 'color',
          propertyKey: disabledColor,
          themeName: CSS_VARIABLE_THEMES.color,
          propertyValue: disabledColor && colors[disabledColor],
        })}
      `}
    `,
    inputPropsWithPresets: inputProps,
  };
};

export default generateInputStyles;
