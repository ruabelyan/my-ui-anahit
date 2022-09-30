import { ProgressProps } from '@core/components-props';
import { coreLibsStore } from '@core/store';
import { changeComponentProps } from '../shared';
import getProgressDefaultProps from './getProgressDefaultProps';

const generateProgressStyles = ({ rtl, ...progressProps }: ProgressProps) => {
  const { css, cx } = coreLibsStore.getValue();
  const progressDefaultProps = getProgressDefaultProps();

  progressProps = changeComponentProps({
    componentName: 'Progress',
    componentProps: progressProps,
    componentDefaultProps: progressDefaultProps,
  });

  return {
    Progress: cx(
      css`
        ${rtl && 'direction: rtl;'}
      `,
    ),
    progressPropsWithPresets: progressProps,
  };
};

export default generateProgressStyles;
