import { Div, ThemeContext } from '@/index';
import { typedMemo } from '@/shared/helpers';
import { ButtonProps as CoreButtonProps, componentStyles } from '@my-ui/core';
import cx from 'classnames';
import {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  PropsWithChildren,
  ReactNode,
  useContext,
  useMemo,
} from 'react';

export type HTMLAnchorProps = Omit<
  DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>,
  'href'
>;

export type HTMLButtonProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

export type ButtonProps<THref = undefined> = CoreButtonProps<THref> &
  (THref extends string ? HTMLAnchorProps : HTMLButtonProps) & {
    startContent?: ReactNode;
    endContent?: ReactNode;
  };

const Button = <THref,>({
  children,
  className,
  href,
  disabled,
  ...buttonProps
}: PropsWithChildren<ButtonProps<THref>>) => {
  const {
    startContentContainerProps,
    endContentContainerProps,
    ...buttonStyles
  } = useMemo(
    () => componentStyles.generateButtonStyles(buttonProps),
    [buttonProps],
  );

  const { endContent, startContent } = buttonProps;

  useContext(ThemeContext);

  if (typeof href === 'string')
    // eslint-disable-next-line jsx-a11y/anchor-has-content
    return (
      <a
        {...(buttonProps as HTMLAnchorProps)}
        className={cx(buttonStyles.Button, className)}
        style={{
          display: 'flex',
          alignItems: 'center',
        }}
      >
        {startContent && (
          <Div {...startContentContainerProps}>{startContent}</Div>
        )}
        {children && <Div>{children}</Div>}
        {endContent && <Div {...endContentContainerProps}>{endContent}</Div>}
      </a>
    );

  return (
    // eslint-disable-next-line react/button-has-type
    <button
      disabled={disabled}
      {...(buttonProps as HTMLButtonProps)}
      className={cx(buttonStyles.Button, className)}
      style={{
        display: 'flex',
        alignItems: 'center',
      }}
    >
      {startContent && (
        <Div {...startContentContainerProps}>{startContent}</Div>
      )}
      {children && <Div>{children}</Div>}
      {endContent && <Div {...endContentContainerProps}>{endContent}</Div>}
    </button>
  );
};

export default typedMemo(Button);
