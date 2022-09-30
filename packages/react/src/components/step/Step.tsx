import { ThemeContext } from '@/index';
import { typedMemo } from '@/shared/helpers';
import { DynamicComponent } from '@/shared/interfaces';
import { componentStyles, StepProps as CoreStepProps } from '@my-ui/core';
import cx from 'classnames';
import React, { ReactNode, useContext, useMemo } from 'react';
import { Div } from '../div';

export interface StepProps
  extends CoreStepProps,
    DynamicComponent<CoreStepProps> {
  checkedContent?: ReactNode;
  children?: ReactNode;
}

const Step = ({
  className,
  children,
  title,
  description = undefined,
  ...stepProps
}: StepProps) => {
  const { titleProps, descriptionProps, containerProps, ...stepStyles } =
    useMemo(() => componentStyles.generateStepStyles(stepProps), [stepProps]);

  useContext(ThemeContext);

  return (
    <Div {...(containerProps || {})}>
      <Div className={cx(stepStyles.Step, className)}>{children}</Div>

      <Div>
        {title && (
          <Div {...(titleProps || {})} className={cx(titleProps?.className)}>
            {title}
          </Div>
        )}

        {description && (
          <Div
            {...(descriptionProps || {})}
            className={cx(stepStyles.Description, descriptionProps?.className)}
          >
            {description}
          </Div>
        )}
      </Div>
    </Div>
  );
};

export default typedMemo(Step);
