import { TooltipCardProps } from '@core/components-props';
import { sharedStyles } from '@core/index';
import { coreLibsStore } from '@core/store';
import { changeComponentProps } from '../shared';
import getTooltipCardDefaultProps from './getTooltipCardDefaultProps';

const generateTooltipCardStyles = (tooltipCardProps: TooltipCardProps) => {
  const { css, cx } = coreLibsStore.getValue();

  const tooltipCardDefaultProps = getTooltipCardDefaultProps();

  tooltipCardProps = changeComponentProps({
    componentName: 'TooltipCard',
    componentProps: tooltipCardProps,
    componentDefaultProps: tooltipCardDefaultProps,
  });

  const { x, y } = tooltipCardProps;

  return {
    TooltipCard: cx(
      css`
        position: fixed;

        ${x && `left: ${x}px`};
        ${y && `top: ${y}px`};

        outline: none;

        ${sharedStyles.generateDesignTokensStyles(tooltipCardProps)}
      `,
    ),

    TooltipCardChildren: css`
      word-break: break-all;
    `,
    tooltipCardPropsWithPresets: tooltipCardProps,
  };
};

export default generateTooltipCardStyles;
