import { Div, ThemeContext } from '@/index';
import { typedMemo } from '@/shared/helpers';
import { DynamicComponent } from '@/shared/interfaces';
import {
  componentStyles,
  ProgressProps as CoreProgressProps,
} from '@my-ui/core';
import cx from 'classnames';
import React, { useContext, useMemo } from 'react';

export interface ProgressProps
  extends CoreProgressProps,
    DynamicComponent<CoreProgressProps> {}

const Progress = ({
  component: Component = 'div',
  className,
  progress = 0,
  ...progressProps
}: ProgressProps) => {
  const {
    progressPropsWithPresets: { progressBarProps = {} },
    ...progressStyles
  } = useMemo(
    () => componentStyles.generateProgressStyles(progressProps),
    [progressProps],
  );

  useContext(ThemeContext);

  return (
    <Div
      component={Component}
      className={cx(progressStyles.Progress, className)}
      {...progressProps}
    >
      <Div {...progressBarProps} width={`${progress}%`} />
    </Div>
  );
};

export default typedMemo(Progress);
