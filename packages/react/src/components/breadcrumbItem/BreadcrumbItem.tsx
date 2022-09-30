/* eslint-disable jsx-a11y/click-events-have-key-events */
import { ThemeContext } from '@/index';
import { typedMemo } from '@/shared/helpers';
import {
  BreadcrumbItemProps as CoreBreadcrumbItemProps,
  componentStyles,
} from '@my-ui/core';
import cx from 'classnames';
import React, { ReactNode, useContext, useMemo } from 'react';
import { Div, DivProps } from '../div';

export interface BreadcrumbItemProps extends CoreBreadcrumbItemProps, DivProps {
  startContent?: ReactNode;
  endContent?: ReactNode;
  children: ReactNode;
}

const BreadcrumbItem = ({
  className,
  startContent,
  endContent,
  children,
  disabled,
  ...breadcrumbItemProps
}: BreadcrumbItemProps) => {
  const { startContentProps, endContentProps, ...breadcrumbItemStyles } =
    useMemo(
      () => componentStyles.generateBreadcrumbItemStyles(breadcrumbItemProps),
      [breadcrumbItemProps],
    );

  useContext(ThemeContext);

  return (
    <Div
      className={cx(
        breadcrumbItemStyles.Breadcrumb,
        {
          [breadcrumbItemStyles.DisabledBreadcrumb]: disabled,
        },
        className,
      )}
      {...breadcrumbItemProps}
    >
      {startContent && <Div {...(startContentProps || {})}>{startContent}</Div>}

      <Div className={cx(className)}>{children}</Div>

      {endContent && <Div {...endContentProps}>{endContent}</Div>}
    </Div>
  );
};

export default typedMemo(BreadcrumbItem);
