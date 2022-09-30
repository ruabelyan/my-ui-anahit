import { BadgeProps } from '@core/components-props';
import { coreLibsStore } from '@core/store';
import { changeComponentProps } from '../shared';
import getBadgeDefaultProps from './getBadgeDefaultProps';

const generateBadgeStyles = (badgeProps: BadgeProps) => {
  const { css } = coreLibsStore.getValue();

  const badgeDefaultProps = getBadgeDefaultProps();

  badgeProps = changeComponentProps({
    componentName: 'Badge',
    componentProps: badgeProps,
    componentDefaultProps: badgeDefaultProps,
  });

  const { badgeContentProps } = badgeProps;

  return {
    Badge: css`
      position: relative;
    `,
    BadgeContent: css`
      font-size: 0;
    `,
    badgeContentProps,
    badgeProps,
  };
};

export default generateBadgeStyles;
