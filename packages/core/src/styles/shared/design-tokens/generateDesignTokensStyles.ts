import { DesignTokens, FocusableDesignTokens } from '@core/components-props';
import sharedStyles from '..';

const generateDesignTokensStyles = (
  allComponentProps: DesignTokens & FocusableDesignTokens,
): string => `
  ${sharedStyles.generateAdditionalStyles(allComponentProps)}

  ${sharedStyles.generateColorStyles(allComponentProps)}

  ${sharedStyles.generateBackgroundStyles(allComponentProps)}

  ${sharedStyles.generateBorderStyles(allComponentProps)}

  ${sharedStyles.generateDisplayStyles(allComponentProps)}

  ${sharedStyles.generateRadiusStyles(allComponentProps)}

  ${sharedStyles.generateEffectStyles(allComponentProps)}

  ${sharedStyles.generateSizeStyles(allComponentProps)}

  ${sharedStyles.generateSpacingStyles(allComponentProps)}

  ${sharedStyles.generateTextStyles(allComponentProps)}

  ${sharedStyles.generateTransitionStyles(allComponentProps)}

  ${sharedStyles.generatePositionStyles(allComponentProps)}
`;

export default generateDesignTokensStyles;
