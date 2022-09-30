import { StepProps } from '@core/components-props';
import { sharedStyles } from '@core/index';
import { coreLibsStore, themeStore } from '@core/store';
import {
  CSS_VARIABLE_THEMES,
  generateStylesWithCSSVariable,
} from '@core/styles/shared';
import { flex } from '@core/styles/shared/mixins';
import { changeComponentProps } from '../shared';
import getStepDefaultProps from './getStepDefaultProps';

const generateStepStyles = (stepProps: StepProps) => {
  const { css } = coreLibsStore.getValue();
  const { colors } = themeStore.getValue();

  const stepDefaultProps = getStepDefaultProps();

  stepProps = changeComponentProps({
    componentName: 'Step',
    componentProps: stepProps,
    componentDefaultProps: stepDefaultProps,
  });

  const {
    filledBg,
    titleProps,
    descriptionProps,
    containerProps,
    ...restStepProps
  } = stepProps;

  const Step = css`
    ${flex('center', 'center')};

    ${sharedStyles.generateDesignTokensStyles(restStepProps)};

    ${generateStylesWithCSSVariable({
      propertyName: 'background-color',
      propertyKey: filledBg,
      themeName: CSS_VARIABLE_THEMES.color,
      propertyValue: filledBg && colors[filledBg],
    })};
  `;

  const Description = css`
    ${flex('center', 'center')};

    flex-direction: column;
  `;

  return {
    Step,
    Description,
    titleProps,
    descriptionProps,
    containerProps,
  };
};

export default generateStepStyles;
