import { BadgeProps } from '@core/components-props';

const getBadgeDefaultProps = (): Partial<BadgeProps> => ({
  display: 'inline-block',
  presets: ['top-right'],
});

export default getBadgeDefaultProps;
