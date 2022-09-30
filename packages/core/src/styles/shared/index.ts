import * as additionalStylesStyles from './additional';
import * as backgroundStyles from './background';
import * as borderStyles from './border';
import * as colorStyles from './color';
import * as designTokenStyles from './design-tokens';
import * as displayStyles from './display';
import * as effectStyles from './effect';
import * as globalStyles from './global';
import * as positionStyles from './position';
import * as radiusStyles from './radius';
import * as resetStyles from './reset';
import * as sizeStyles from './size';
import * as spacingStyles from './spacing';
import * as textStyles from './text';
import * as transitionStyles from './transition';

const sharedStyles = {
  ...colorStyles,
  ...additionalStylesStyles,
  ...backgroundStyles,
  ...borderStyles,
  ...displayStyles,
  ...positionStyles,
  ...radiusStyles,
  ...effectStyles,
  ...sizeStyles,
  ...spacingStyles,
  ...textStyles,
  ...transitionStyles,
  ...resetStyles,
  ...globalStyles,
  ...designTokenStyles,
};

export default sharedStyles;

export * from './css-variables';
export * from './global';
export * from './preset';
