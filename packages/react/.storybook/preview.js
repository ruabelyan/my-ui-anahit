import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { GlobalStyles, StyleReset, ThemeProvider } from '../src';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      date: /Date$/,
    },
  },
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
};

export const decorators = [
  Story => (
    <ThemeProvider
      theme={{
        remSize: 16,
      }}
    >
      <GlobalStyles />
      <StyleReset />

      <Story />
    </ThemeProvider>
  ),
];
