import { PopUpProps } from '@core/components-props';
import { sharedStyles } from '@core/index';
import { coreLibsStore } from '@core/store';
import { changeComponentProps } from '../shared';
import getPopUpDefaultProps from './getPopUpDefaultProps';

const generatePopUpStyles = (popUpProps: PopUpProps) => {
  const { css, cx } = coreLibsStore.getValue();

  const popUpDefaultProps = getPopUpDefaultProps();

  popUpProps = changeComponentProps({
    componentName: 'PopUp',
    componentProps: popUpProps,
    componentDefaultProps: popUpDefaultProps,
  });

  return {
    PopUp: cx(
      css`
        word-break: break-all;
        box-sizing: border-box;
        ${sharedStyles.generateDesignTokensStyles(popUpProps)};
      `,
    ),

    popUpAnimation: css`
      transition: opacity 300ms;
      opacity: 0;
      z-index: '1000';
      position: 'fixed';
    `,

    popUpEnterActive: css`
      transition: opacity 300ms;
      opacity: 1;
      z-index: '1000';
      position: 'fixed';
    `,
    popUpWithOverlayEnter: css`
      transition: opacity 300ms;
      opacity: 0;
      display: block;
    `,
    popUpWithOverlayEnterActive: css`
      transition: opacity 300ms;
      opacity: 1;
      display: block;
    `,
    popUpWithOverlayExit: css`
      transition: opacity 300ms;
      opacity: 0;
      display: none;
    `,
    popUpWithOverlayExitActive: css`
      opacity: 1;
      display: block;
      transition: opacity 300ms;
    `,
    popUpAnimationContainer: css`
      display: inline-block;
    `,

    popupPropsWithPresets: popUpProps,
  };
};
export default generatePopUpStyles;
