import { ThemeContext } from '@/index';
import { typedMemo } from '@/shared/helpers';
import { DynamicComponent } from '@/shared/interfaces';
import {
  BreadcrumbProps as CoreBreadcrumbProps,
  componentStyles,
} from '@my-ui/core';
import cx from 'classnames';
import React, {
  Children,
  PropsWithChildren,
  ReactNode,
  useContext,
  useMemo,
} from 'react';
import { Div } from '../div';

export interface BreadcrumbProps
  extends CoreBreadcrumbProps,
    DynamicComponent<CoreBreadcrumbProps> {
  separator?: ReactNode;
}

const Breadcrumb = ({
  children,
  separator,
  ...breadcrumbProps
}: PropsWithChildren<BreadcrumbProps>) => {
  const childrenArray = useMemo(() => Children.toArray(children), [children]);

  const {
    breadcrumbPropsWithPresets: {
      separatorProps,
      ...breadcrumbPropsWithPresets
    },
  } = useMemo(
    () => componentStyles.generateBreadcrumbStyles(breadcrumbProps),
    [breadcrumbProps],
  );

  useContext(ThemeContext);

  return (
    <Div {...breadcrumbPropsWithPresets}>
      {childrenArray.map((child, index) => {
        const childrenWithKey = child as unknown as { key: string };

        return (
          <React.Fragment key={childrenWithKey.key}>
            {child}

            {index !== childrenArray.length - 1 && (
              <Div
                {...(separatorProps || {})}
                className={cx(separatorProps?.className)}
              >
                {separator}
              </Div>
            )}
          </React.Fragment>
        );
      })}
    </Div>
  );
};

export default typedMemo(Breadcrumb);
