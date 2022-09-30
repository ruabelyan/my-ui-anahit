import { css, cx, injectGlobal } from '@emotion/css';
import { createStore } from '../shared';

export type CoreLibsConfigType = {
  css: typeof css;
  injectGlobal: typeof injectGlobal;
  cx: typeof cx;
};

const defaultConfig: CoreLibsConfigType = {
  css,
  injectGlobal,
  cx,
};

const coreLibsStore = createStore<CoreLibsConfigType>(defaultConfig);

export default coreLibsStore;
