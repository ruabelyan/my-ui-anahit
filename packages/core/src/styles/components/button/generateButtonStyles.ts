import { ButtonProps, sharedStyles } from '@core/index';
import { coreLibsStore, themeStore } from '@core/store';
import {
  CSS_VARIABLE_THEMES,
  generateStylesWithCSSVariable,
} from '@core/styles/shared';
import { changeComponentProps } from '../shared';
import getButtonDefaultProps from './getButtonDefaultProps';

const generateButtonStyles = (buttonProps: ButtonProps) => {
  const { css, cx } = coreLibsStore.getValue();
  const { colors } = themeStore.getValue();

  const buttonDefaultProps = getButtonDefaultProps();

  buttonProps = changeComponentProps({
    componentName: 'Button',
    componentProps: buttonProps,
    componentDefaultProps: buttonDefaultProps,
  });

  const {
    disabledBg,
    disabledColor,
    disabledBorderColor,
    startContentContainerProps,
    endContentContainerProps,
    startContent,
    endContent,
  } = buttonProps;

  return {
    Button: cx(
      css`
        justify-content: ${startContent || endContent
            ? 'space-between;'
            : 'center;'}
          ${sharedStyles.generateDesignTokensStyles(buttonProps)};

        &:disabled {
          ${generateStylesWithCSSVariable({
            propertyName: 'color',
            propertyKey: disabledColor,
            themeName: CSS_VARIABLE_THEMES.color,
            propertyValue: disabledColor && colors[disabledColor],
          })}

          &:hover {
            cursor: default;
          }

          &:active {
            cursor: default;
            border: none;
            box-shadow: none;
          }

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
      `,
    ),
    startContent,
    endContent,
    startContentContainerProps,
    endContentContainerProps,
  };
};

export default generateButtonStyles;
