const path = require('path');
const buildConfig = require('../build.config.json');
const NodePolyfillPlugin = require('node-polyfill-webpack-plugin');

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-docs',
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/preset-create-react-app',
    '@storybook/addon-viewport',
    '@storybook/addon-storysource',
    '@storybook/addon-a11y',
    '@storybook/addon-backgrounds',
    '@storybook/addon-knobs',
  ],
  framework: '@storybook/react',
  core: {
    builder: 'webpack5',
  },
  typescript: {
    reactDocgenTypescriptOptions: {
      propFilter: prop =>
        prop.type.name !== 'ReactNode' &&
        !prop.type.name.includes('IntrinsicElements'),
    },
  },
  webpackFinal: async config => {
    config.resolve = {
      ...config.resolve,
      alias: Object.entries(buildConfig.alias).reduce(
        (acc, [key, value]) => ({
          ...acc,
          [key]: path.resolve(__dirname, '../', value),
        }),
        {},
      ),
    };

    config.plugins = [...config.plugins, new NodePolyfillPlugin()];

    return config;
  },
};
