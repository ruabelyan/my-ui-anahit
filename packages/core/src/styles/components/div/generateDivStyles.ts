import { DivProps } from '@core/components-props';
import { sharedStyles } from '@core/index';
import { coreLibsStore } from '@core/store';
import { changeComponentProps } from '../shared';
import getDivDefaultProps from './getDivDefaultProps';

const generateDivStyles = (divProps: DivProps) => {
  const { css, cx } = coreLibsStore.getValue();

  const divDefaultProps = getDivDefaultProps();

  divProps = changeComponentProps({
    componentName: 'Div',
    componentDefaultProps: divDefaultProps,
    componentProps: divProps,
  });

  return {
    Div: cx(
      css`
        ${sharedStyles.generateDesignTokensStyles(divProps)}
      `,
    ),
  };
};

export default generateDivStyles;
