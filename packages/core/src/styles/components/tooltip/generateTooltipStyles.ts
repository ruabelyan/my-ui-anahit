import { TooltipProps } from '@core/components-props';
import { sharedStyles } from '@core/index';
import { coreLibsStore } from '@core/store';
import { changeComponentProps } from '../shared';
import getTooltipDefaultProps from './getTooltipDefaultProps';

const generateTooltipStyles = (tooltipProps: TooltipProps) => {
  const { css, cx } = coreLibsStore.getValue();

  const tooltipDefaultProps = getTooltipDefaultProps();

  tooltipProps = changeComponentProps({
    componentName: 'Tooltip',
    componentProps: tooltipProps,
    componentDefaultProps: tooltipDefaultProps,
  });

  return {
    Tooltip: cx(
      css`
        outline: none;

        ${sharedStyles.generateDesignTokensStyles(tooltipProps)}
      `,
    ),
    tooltipTransitionAnimation: css`
      transition: opacity 300ms, transform 300ms;
      opacity: 0;
    `,
    tooltipEnterActive: css`
      transition: opacity 300ms, transform 300ms;
      opacity: 1;
    `,
    tooltipPropsWithPresets: tooltipProps,
  };
};

export default generateTooltipStyles;
