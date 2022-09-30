import { CardProps } from '@core/components-props';
import { sharedStyles } from '@core/index';
import { coreLibsStore } from '@core/store';
import { changeComponentProps } from '../shared';
import getCardDefaultProps from './getCardDefaultProps';

const generateCardStyles = (cardProps: CardProps) => {
  const { css, cx } = coreLibsStore.getValue();

  const cardDefaultProps = getCardDefaultProps();

  cardProps = changeComponentProps({
    componentName: 'Card',
    componentProps: cardProps,
    componentDefaultProps: cardDefaultProps,
  });

  return {
    Card: cx(
      css`
        ${sharedStyles.generateDesignTokensStyles(cardProps)};

        word-break: break-word;
      `,
    ),
  };
};

export default generateCardStyles;
