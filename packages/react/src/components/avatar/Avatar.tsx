import { typedMemo } from '@/shared/helpers';
import { DynamicComponent } from '@/shared/interfaces';
import { AvatarProps as CoreAvatarProps, componentStyles } from '@my-ui/core';
import React, {
  DetailedHTMLProps,
  FC,
  InputHTMLAttributes,
  PropsWithChildren,
  ReactNode,
  useMemo,
} from 'react';
import { Div } from '../div';

export interface AvatarProps
  extends CoreAvatarProps,
    DynamicComponent<CoreAvatarProps> {
  checkedContent?: ReactNode;
  inputProps?: DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >;
  children?: ReactNode;
}

const Avatar: FC<PropsWithChildren<AvatarProps>> = ({
  children,
  ...avatarProps
}) => {
  const { avatarProps: avatarPropsWithPresets } = useMemo(
    () => componentStyles.generateAvatarStyles(avatarProps),
    [avatarProps],
  );

  return <Div {...avatarPropsWithPresets}>{children}</Div>;
};

export default typedMemo(Avatar);
