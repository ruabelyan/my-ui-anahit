import { ThemeContext } from '@/index';
import { typedMemo } from '@/shared/helpers';
import { useControlledValue } from '@/shared/hooks';
import { DynamicComponent } from '@/shared/interfaces';
import { componentStyles, SwitchProps as CoreSwitchProps } from '@my-ui/core';
import cx from 'classnames';
import {
  DetailedHTMLProps,
  InputHTMLAttributes,
  ReactNode,
  useContext,
  useMemo,
} from 'react';
import { Div } from '../div';

export interface SwitchProps
  extends CoreSwitchProps,
    DynamicComponent<CoreSwitchProps> {
  switchIndicator?: ReactNode;
  checkedSwitchIndicator?: ReactNode;
  inputProps?: DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >;
}

const Switch = ({
  className,
  switchIndicator,
  checkedSwitchIndicator,
  checked,
  defaultChecked,
  switchSliderProps = {},
  indicatorContainerProps = {},
  disabled,
  inputProps: { onChange, ...inputProps } = {},
  ...switchProps
}: SwitchProps) => {
  const [isSwitchChecked, setSwitchChecked] = useControlledValue(
    defaultChecked,
    checked,
  );

  const {
    DefaultIndicator: { defaultIndicatorWidth, defaultIndicatorHeight },
    ...switchStyles
  } = useMemo(() => componentStyles.generateSwitchStyles(switchProps), []);

  const defaultIndicator = useMemo(
    () => (
      <Div
        display="block"
        component="span"
        bg="white"
        width={defaultIndicatorWidth}
        height={defaultIndicatorHeight}
        radius="circle"
      />
    ),
    [defaultIndicatorWidth, defaultIndicatorHeight],
  );

  useContext(ThemeContext);

  return (
    // eslint-disable-next-line jsx-a11y/label-has-associated-control
    <label className={cx(switchStyles.Switch, className)}>
      <input
        {...inputProps}
        type="checkbox"
        checked={!!isSwitchChecked}
        disabled={disabled}
        onChange={e => {
          setSwitchChecked(!isSwitchChecked);

          onChange?.(e);
        }}
      />
      <Div
        component="span"
        {...switchSliderProps}
        className={cx(switchStyles.SwitchSlider, switchSliderProps.className)}
      >
        <Div
          component="span"
          padding={{ x: '1' }}
          {...indicatorContainerProps}
          display="flex"
          align="center"
          height="100%"
          className={cx(
            switchStyles.Indicator,
            indicatorContainerProps.className,
          )}
        >
          {(isSwitchChecked ? checkedSwitchIndicator : switchIndicator) ||
            defaultIndicator}
        </Div>
      </Div>
    </label>
  );
};

export default typedMemo(Switch);
