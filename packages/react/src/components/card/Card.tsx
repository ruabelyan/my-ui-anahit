import { Div, ThemeContext } from '@/index';
import { typedMemo } from '@/shared/helpers';
import { DynamicComponent } from '@/shared/interfaces';
import { CardProps as CoreCardProps, componentStyles } from '@my-ui/core';
import cx from 'classnames';
import React, { FC, useContext, useMemo } from 'react';

export interface CardProps
  extends CoreCardProps,
    DynamicComponent<CoreCardProps> {}

const Card: FC<CardProps> = ({ className, children, ...cardProps }) => {
  const cardStyles = useMemo(
    () => componentStyles.generateCardStyles(cardProps),
    [cardProps],
  );

  useContext(ThemeContext);

  return <Div className={cx(cardStyles.Card, className)}>{children}</Div>;
};

export default typedMemo(Card);
