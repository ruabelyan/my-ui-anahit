import { TransitionConfigurableComponent } from '@core/components-props';
import { themeStore } from '@core/store';
import {
  CSS_VARIABLE_THEMES,
  generateStylesWithCSSVariable,
} from '../css-variables';

const generateTransitionStyles = ({
  transition,
}: TransitionConfigurableComponent) => {
  const { transition: transitionTheme } = themeStore.getValue();

  return `
    ${generateStylesWithCSSVariable({
      propertyName: 'transition',
      propertyKey: transition,
      themeName: CSS_VARIABLE_THEMES.transition,
      propertyValue: transition && transitionTheme[transition],
    })};
  `;
};

export default generateTransitionStyles;
