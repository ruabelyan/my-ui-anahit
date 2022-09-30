import { ThemeContext } from '@/index';
import { typedMemo } from '@/shared/helpers';
import { DynamicComponent } from '@/shared/interfaces';
import {
  componentStyles,
  TypographyProps as CoreTypographyProps,
} from '@my-ui/core';
import cx from 'classnames';
import React, { FC, useContext, useMemo } from 'react';

export interface TypographyProps
  extends CoreTypographyProps,
    DynamicComponent<CoreTypographyProps> {}

const Typography: FC<TypographyProps> = ({
  children,
  component: Component = 'p',
  className,
  ...typographyProps
}) => {
  const typographyStyles = useMemo(
    () => componentStyles.generateTypographyStyles(typographyProps),
    [typographyProps],
  );

  useContext(ThemeContext);

  return (
    <Component className={cx(typographyStyles.Typography, className)}>
      {children}
    </Component>
  );
};

export default typedMemo(Typography);
