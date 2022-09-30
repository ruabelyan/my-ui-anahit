import { AdditionalComponentProps } from '@core/components-props';

const generateAdditionalStyles = (
  additionalComponentProps: AdditionalComponentProps,
) => {
  const { cursor, overflow, zIndex, pointerEvents } = additionalComponentProps;

  return `
      ${
        cursor &&
        `
          cursor: ${cursor}
        `
      };

      ${
        zIndex &&
        `
          z-index: ${zIndex}
        `
      };

      ${
        overflow &&
        `
          overflow: ${overflow}
        `
      };

      ${
        pointerEvents &&
        `
          pointer-events: ${pointerEvents}
        `
      };
    `;
};

export default generateAdditionalStyles;
