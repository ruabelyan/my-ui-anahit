import {
  AvatarProps,
  BadgeProps,
  BreadcrumbItemProps,
  BreadcrumbProps,
  ButtonProps,
  CardProps,
  CheckboxProps,
  DivProps,
  DotProps,
  InputProps,
  InputWithButtonProps,
  PopUpProps,
  ProgressProps,
  RadioProps,
  StepProps,
  SwitchProps,
  TooltipCardProps,
  TooltipProps,
  TypographyProps,
} from '@core/components-props';

export type PresetThemeConfig = {
  PopUp?: Record<
    string,
    PopUpProps | ((props: PopUpProps) => Partial<PopUpProps>)
  >;
  Div?: Record<string, DivProps | ((props: DivProps) => Partial<DivProps>)>;
  Button?: Record<
    string,
    ButtonProps | ((props: ButtonProps) => Partial<ButtonProps>)
  >;
  Input?: Record<
    string,
    InputProps | ((props: InputProps) => Partial<InputProps>)
  >;
  Typography?: Record<
    string,
    TypographyProps | ((props: TypographyProps) => Partial<TypographyProps>)
  >;
  Switch?: Record<
    string,
    SwitchProps | ((props: SwitchProps) => Partial<SwitchProps>)
  >;
  Checkbox?: Record<
    string,
    CheckboxProps | ((props: CheckboxProps) => Partial<CheckboxProps>)
  >;
  Badge?: Record<
    string,
    BadgeProps | ((props: BadgeProps) => Partial<BadgeProps>)
  >;
  Card?: Record<string, CardProps | ((props: CardProps) => Partial<CardProps>)>;
  Progress?: Record<
    string,
    ProgressProps | ((props: ProgressProps) => Partial<ProgressProps>)
  >;
  Breadcrumb?: Record<
    string,
    BreadcrumbProps | ((props: BreadcrumbProps) => Partial<BreadcrumbProps>)
  >;
  BreadcrumbItem?: Record<
    string,
    | BreadcrumbItemProps
    | ((props: BreadcrumbItemProps) => Partial<BreadcrumbItemProps>)
  >;
  TooltipCard?: Record<
    string,
    TooltipCardProps | ((props: TooltipCardProps) => Partial<TooltipCardProps>)
  >;
  Tooltip?: Record<
    string,
    TooltipProps | ((props: TooltipProps) => Partial<TooltipProps>)
  >;
  Dot?: Record<string, DotProps | ((props: DotProps) => Partial<DotProps>)>;
  Radio?: Record<
    string,
    RadioProps | ((props: RadioProps) => Partial<RadioProps>)
  >;
  InputWithButton?: Record<
    string,
    | InputWithButtonProps
    | ((props: InputWithButtonProps) => Partial<InputWithButtonProps>)
  >;
  Avatar?: Record<
    string,
    AvatarProps | ((props: AvatarProps) => Partial<AvatarProps>)
  >;
  Step?: Record<string, StepProps | ((props: StepProps) => Partial<StepProps>)>;
};
