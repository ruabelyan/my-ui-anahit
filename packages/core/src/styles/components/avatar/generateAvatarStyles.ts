import { AvatarProps } from '@core/components-props';
import { changeComponentProps } from '../shared';
import getAvatarDefaultProps from './getAvatarDefaultProps';

const generateAvatarStyles = (avatarProps: AvatarProps) => {
  const avatarDefaultProps = getAvatarDefaultProps();

  avatarProps = changeComponentProps({
    componentName: 'Avatar',
    componentProps: avatarProps,
    componentDefaultProps: avatarDefaultProps,
  });

  return {
    avatarProps,
  };
};

export default generateAvatarStyles;
