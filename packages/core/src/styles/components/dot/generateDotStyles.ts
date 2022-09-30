import { DotProps } from '@core/components-props';
import { coreLibsStore } from '@core/store';
import { changeComponentProps } from '../shared';
import getDotDefaultProps from './getDotDefaultProps';

const generateDotStyles = (dotProps: DotProps) => {
  const { css, cx } = coreLibsStore.getValue();

  const dotDefaultProps = getDotDefaultProps(dotProps);

  dotProps = changeComponentProps({
    componentName: 'Dot',
    componentProps: dotProps,
    componentDefaultProps: dotDefaultProps,
  });

  return {
    Dot: cx(
      css`
        box-sizing: border-box;
      `,
    ),
    dotProps,
  };
};

export default generateDotStyles;
