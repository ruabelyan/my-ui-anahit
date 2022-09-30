import { ThemeContext, TooltipCard } from '@/index';
import Portal from '@/shared/helpers/Portal';
import { componentStyles, TooltipProps as CoreTooltipProps } from '@my-ui/core';
import cx from 'classnames';
import React, {
  cloneElement,
  FC,
  isValidElement,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import { CSSTransition } from 'react-transition-group';
import getTooltipPosition from './getTooltipPosition';

export interface TooltipProps extends CoreTooltipProps {
  tooltipContent?: ReactNode;
  children?: ReactNode;
}
const Tooltip: FC<TooltipProps> = ({
  children,
  eventForShow = 'hover',
  tooltipContent,
  placement = 'bottom',
  spacing = 15,
  cornerSpacing = 45,
  animationDuration = 300,
  tooltipCardProps,
  ...tooltipProps
}) => {
  const { ...tooltipStyles } = useMemo(
    () => componentStyles.generateTooltipStyles(tooltipProps),
    [tooltipProps],
  );

  const tooltipRef = useRef<HTMLDivElement>(null);
  const elementRef = useRef<HTMLElement | null>(null);

  const [tooltipPosition, setTooltipPosition] = useState({
    x: 0,
    y: 0,
  });

  useContext(ThemeContext);

  const [isShowedTooltip, setShowedTooltip] = useState(false);

  const showTooltip = useCallback((e: Event) => {
    if (!e.currentTarget) return;

    elementRef.current = e.currentTarget as HTMLElement;

    setShowedTooltip(true);
  }, []);

  const hideTooltip = useCallback(() => setShowedTooltip(false), []);

  useEffect(() => {
    const element = elementRef.current;

    const tooltipElement = tooltipRef.current;

    if (!isShowedTooltip || !element || !tooltipElement) return;

    const { x, y } = getTooltipPosition({
      spacing,
      placement,
      element,
      tooltipElement,
      cornerSpacing,
    });

    if (x && y)
      setTooltipPosition({
        x,
        y,
      });
  }, [isShowedTooltip, tooltipRef, elementRef, placement, cornerSpacing]);

  return (
    <>
      {children &&
        isValidElement(children) &&
        cloneElement(
          children,
          eventForShow === 'click'
            ? {
                onMouseDown: showTooltip,
                onMouseUp: hideTooltip,
              }
            : {
                onMouseOver: showTooltip,
                onMouseOut: hideTooltip,
              },
        )}

      <CSSTransition
        in={isShowedTooltip}
        timeout={animationDuration}
        unmountOnExit
        classNames={{
          enter: cx(tooltipStyles.tooltipTransitionAnimation),
          enterDone: cx(tooltipStyles.tooltipEnterActive),
          exit: cx(tooltipStyles.tooltipTransitionAnimation),
          exitDone: cx(tooltipStyles.tooltipTransitionAnimation),
        }}
      >
        <Portal>
          <TooltipCard
            {...tooltipCardProps}
            presets={[
              ...(typeof tooltipCardProps?.presets === 'string'
                ? [tooltipCardProps?.presets]
                : [...(tooltipCardProps?.presets || []), placement]),
            ]}
            ref={tooltipRef}
            x={tooltipPosition.x}
            y={tooltipPosition.y}
          >
            {tooltipContent}
          </TooltipCard>
        </Portal>
      </CSSTransition>
    </>
  );
};
export default Tooltip;
