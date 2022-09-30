/* eslint-disable jsx-a11y/control-has-associated-label */
import { Div, ThemeContext } from '@/index';
import { detectOutClick, typedMemo } from '@/shared/helpers';
import { DynamicComponent } from '@/shared/interfaces';
import { componentStyles, PopUpProps as CorePopUpProps } from '@my-ui/core';
import cx from 'classnames';
import React, {
  FC,
  ReactNode,
  useContext,
  useMemo,
  useRef,
  useState,
} from 'react';
import { CSSTransition } from 'react-transition-group';

export interface PopUpProps
  extends CorePopUpProps,
    DynamicComponent<CorePopUpProps> {
  closeButton: ReactNode;
  popUpButton: ReactNode;
}

const PopUp: FC<PopUpProps> = ({
  children,
  className,
  isOutClick,
  closeButton,
  animationDuration,
  opened,
  defaultOpened,
  zIndex = 1000,
  onClose,
  backgroundEffectColor,
  ...popUpProps
}) => {
  const {
    popupPropsWithPresets: {
      popUpCloseButtonProps = {},
      popUpCloseButtonContentProps = {},
      popUpTransitionOverlayProps = {},
    },
    ...popUpStyles
  } = useMemo(
    () => componentStyles.generatePopUpStyles(popUpProps),
    [popUpProps],
  );

  const popupOpenedState = useState(defaultOpened);
  let popUpOpened = popupOpenedState[0];
  const setPopUpOpened = popupOpenedState[1];

  if (opened !== undefined) popUpOpened = opened;

  const ref = useRef(null);

  detectOutClick(ref, isOutClick, onClose, setPopUpOpened);

  useContext(ThemeContext);

  return (
    <>
      <CSSTransition
        in={popUpOpened}
        timeout={animationDuration}
        unmountOnExit
        classNames={{
          enter: popUpStyles.popUpWithOverlayEnter,
          enterDone: popUpStyles.popUpWithOverlayEnterActive,
          exit: popUpStyles.popUpWithOverlayExit,
          exitDone: popUpStyles.popUpWithOverlayExitActive,
        }}
      >
        <Div bg={backgroundEffectColor} {...popUpTransitionOverlayProps} />
      </CSSTransition>

      <div className={cx(popUpStyles.popUpAnimationContainer)} ref={ref}>
        <CSSTransition
          in={popUpOpened}
          timeout={animationDuration}
          unmountOnExit
          classNames={{
            enter: popUpStyles.popUpAnimation,
            enterDone: popUpStyles.popUpEnterActive,
            exit: popUpStyles.popUpAnimation,
            exitDone: popUpStyles.popUpAnimation,
          }}
        >
          <Div
            position="fixed"
            zIndex={zIndex}
            className={cx(popUpStyles.PopUp, className)}
            {...popUpProps}
          >
            <Div {...popUpCloseButtonProps}>
              {/* TODO: change button to Button */}

              {closeButton && (
                <button
                  type="button"
                  onClick={onClose}
                  {...popUpCloseButtonContentProps}
                >
                  {closeButton}
                </button>
              )}
            </Div>
            {children}
          </Div>
        </CSSTransition>
      </div>
    </>
  );
};

export default typedMemo(PopUp);
