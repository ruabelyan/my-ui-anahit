import { ThemeContext } from '@/index';
import { typedMemo } from '@/shared/helpers';
import { DynamicComponent } from '@/shared/interfaces';
import { DivProps as CoreDivProps } from '@core/components-props';
import { componentStyles } from '@my-ui/core';
import cx from 'classnames';
import React, {
  forwardRef,
  PropsWithChildren,
  useContext,
  useMemo,
} from 'react';

export interface DivProps
  extends CoreDivProps,
    DynamicComponent<CoreDivProps> {}

const Div = forwardRef<any, PropsWithChildren<DivProps>>(
  ({ children, component: Component = 'div', className, ...divProps }, ref) => {
    const divStyles = useMemo(
      () => componentStyles.generateDivStyles(divProps),
      [divProps],
    );

    useContext(ThemeContext);

    return (
      // @ts-expect-error TODO: Should investigated to solving the issue
      <Component className={cx(divStyles.Div, className)} ref={ref}>
        {children}
      </Component>
    );
  },
);

export default typedMemo(Div);
