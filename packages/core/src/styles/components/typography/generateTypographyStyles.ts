import { TypographyProps } from '@core/components-props';
import { sharedStyles } from '@core/index';
import { deepMergeFlatten } from '@core/shared';
import { coreLibsStore } from '@core/store';
import { changeComponentProps } from '../shared';
import getTypographyDefaultProps from './getTypographyDefaultProps';

const generateTypographyStyles = (typographyProps: TypographyProps) => {
  const { css, cx } = coreLibsStore.getValue();

  const typographyDefaultProps = getTypographyDefaultProps();

  typographyProps = changeComponentProps({
    componentName: 'Typography',
    componentDefaultProps: typographyDefaultProps,
    componentProps: typographyProps,
  });

  if (!typographyProps.disableDefaultStyles)
    typographyProps = deepMergeFlatten(typographyDefaultProps, typographyProps);

  return {
    Typography: cx(
      css`
        ${sharedStyles.generateDesignTokensStyles(typographyProps)};
      `,
    ),
  };
};

export default generateTypographyStyles;
