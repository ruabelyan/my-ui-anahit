import { typedMemo } from '@/shared/helpers';
import { GlobalStyleProps, sharedStyles } from '@my-ui/core';

const GlobalStyles = (globalStyleProps: GlobalStyleProps) => {
  sharedStyles.generateGlobalStyles(globalStyleProps);
};

export default typedMemo(GlobalStyles);
