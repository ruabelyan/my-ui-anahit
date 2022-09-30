import { ThemeContext } from '@/index';
import { typedMemo } from '@/shared/helpers';
import {
  componentStyles,
  TooltipCardProps as CoreTooltipCardProps,
} from '@my-ui/core';
import React, { forwardRef, ReactNode, useContext, useMemo } from 'react';
import { Div } from '../div';

export interface TooltipCardProps extends CoreTooltipCardProps {
  children?: ReactNode;
}

const TooltipCard = forwardRef<HTMLDivElement, TooltipCardProps>(
  ({ children, radius, bg, ...tooltipCardProps }, ref) => {
    const {
      tooltipCardPropsWithPresets: { tooltipArrowProps, tooltipContentProps },
      ...tooltipCardStyles
    } = useMemo(
      () => componentStyles.generateTooltipCardStyles(tooltipCardProps),
      [tooltipCardProps],
    );

    useContext(ThemeContext);

    return (
      <Div position="fixed" ref={ref} className={tooltipCardStyles.TooltipCard}>
        <Div
          radius={radius}
          padding="32px"
          {...tooltipContentProps}
          className={tooltipCardStyles.TooltipCardChildren}
        >
          {children}
        </Div>
        <Div position="absolute" width="24px" {...tooltipArrowProps}>
          {/* TODO: Should change after iconography */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 11"
            fill="none"
          >
            <path
              d="M14.1213 1.12132C12.9497 -0.0502517 11.0503 -0.0502526 9.87868 1.12132L0 11L24 11L14.1213 1.12132Z"
              fill="currentColor"
            />
          </svg>
        </Div>
      </Div>
    );
  },
);

export default typedMemo(TooltipCard);
