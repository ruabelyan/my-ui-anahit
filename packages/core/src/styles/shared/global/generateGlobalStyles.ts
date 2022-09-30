import { FontType } from '@core/components-props';
import { coreLibsStore, themeStore } from '@core/store';

export interface GlobalStyleProps {
  defaultFont?: FontType;
  additionalGlobalStyles?: string;
  shouldAddDefaultFontImport?: boolean;
}

const generateGlobalStyles = ({
  defaultFont = 'default',
  shouldAddDefaultFontImport = true,
  additionalGlobalStyles,
}: GlobalStyleProps) => {
  const { injectGlobal } = coreLibsStore.getValue();
  const { fonts } = themeStore.getValue();

  return injectGlobal`
        ${additionalGlobalStyles}

        ${
          shouldAddDefaultFontImport &&
          `
            @import url('https://fonts.googleapis.com/css2?family=Mulish:ital,wght@0,200;0,300;0,400;0,600;0,700;1,200;1,300;1,400;1,600;1,700&family=Radio+Canada:wght@300;400;500;600;700&display=swap');
          `
        }

        body {
          ${
            defaultFont &&
            fonts[defaultFont] &&
            `font-family: ${fonts[defaultFont]}`
          };
        }
    `;
};

export default generateGlobalStyles;
