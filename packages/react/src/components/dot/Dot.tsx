import { Div, ThemeContext } from '@/index';
import { typedMemo } from '@/shared/helpers';
import { DynamicComponent } from '@/shared/interfaces';
import { componentStyles, DotProps as CoreDotProps } from '@my-ui/core';
import cx from 'classnames';
import React, { FC, PropsWithChildren, useContext, useMemo } from 'react';

export interface DotProps
  extends CoreDotProps,
    DynamicComponent<CoreDotProps> {}

const Dot: FC<PropsWithChildren<DotProps>> = ({ className, ...dotProps }) => {
  const { children } = dotProps;

  const { dotProps: dotPropsModified, ...dotStyles } = useMemo(
    () => componentStyles.generateDotStyles(dotProps),
    [dotProps],
  );

  useContext(ThemeContext);

  return (
    <Div
      component="span"
      {...(dotPropsModified || {})}
      className={cx(dotStyles.Dot, className)}
    >
      {children}
    </Div>
  );
};

export default typedMemo(Dot);
