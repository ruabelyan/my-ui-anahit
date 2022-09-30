import { typedMemo } from '@/shared/helpers';
import { sharedStyles } from '@my-ui/core';

const StyleReset = () => {
  sharedStyles.generateResetStyles();
};

export default typedMemo(StyleReset);
