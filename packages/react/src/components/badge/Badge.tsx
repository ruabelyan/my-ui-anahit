import { ThemeContext } from '@/index';
import { typedMemo } from '@/shared/helpers';
import { DynamicComponent } from '@/shared/interfaces';
import {
  BadgeProps as CoreBadgeProps,
  componentStyles,
  DivProps,
} from '@my-ui/core';
import cx from 'classnames';
import React, { ReactNode, useContext, useMemo } from 'react';
import { Div } from '../div';

export interface BadgeProps
  extends CoreBadgeProps,
    DynamicComponent<CoreBadgeProps> {
  badgeContent?: ReactNode;
  children?: ReactNode;
  badgeContentProps?: DivProps;
}

const Badge = ({
  className,
  badgeContent,
  children,
  ...badgePropsWithoutCore
}: BadgeProps) => {
  const { badgeContentProps, badgeProps, ...badgeStyles } = useMemo(
    () => componentStyles.generateBadgeStyles(badgePropsWithoutCore),
    [badgePropsWithoutCore],
  );

  useContext(ThemeContext);

  return (
    <Div {...badgeProps} className={cx(badgeStyles.Badge, className)}>
      <Div
        component="span"
        {...(badgeContentProps || {})}
        className={cx(badgeStyles.BadgeContent)}
      >
        {badgeContent}
      </Div>

      {children}
    </Div>
  );
};

export default typedMemo(Badge);
