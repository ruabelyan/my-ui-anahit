import { StepProps } from '@core/components-props';
import { calculateRem } from '@core/shared';

const getStepDefaultProps = (): Partial<StepProps> => ({
  width: calculateRem(32),
  height: calculateRem(32),
  color: 'white',
  radius: 'circle',
  presets: ['success', 'horizontal'],
  descriptionProps: {
    color: 'neutral-600',
    typography: 'text3-regular',
  },
  titleProps: {
    typography: 'text2-regular',
  },
  typography: 'text4-regular',
});

export default getStepDefaultProps;
