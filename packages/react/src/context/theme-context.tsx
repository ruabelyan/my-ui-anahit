import {
  defaultThemeConfig,
  generateCSSVariables,
  getThemeStore,
  ThemeConfigType,
  themeStore,
} from '@my-ui/core';
import { createContext, FC, useEffect, useMemo, useState } from 'react';

export const ThemeContext = createContext<ThemeConfigType>(defaultThemeConfig);

ThemeContext.displayName = 'ThemeContext';

export const ThemeProvider: FC<{ theme: Partial<ThemeConfigType> }> = ({
  children,
  theme,
}) => {
  const [isThemeGenerated, setThemeGenerated] = useState(false);

  const localThemeStore = useMemo(() => getThemeStore(), []);

  const themeConfig = useMemo(
    () => localThemeStore.getUpdatedValue(theme),
    [theme],
  );

  useEffect(() => {
    if (isThemeGenerated) generateCSSVariables(themeConfig);
  }, [themeConfig, isThemeGenerated]);

  useEffect(() => {
    themeStore.getValue = () => themeConfig;

    setThemeGenerated(true);
  }, []);

  if (!isThemeGenerated) return null;

  return (
    <ThemeContext.Provider value={themeConfig}>
      {children}
    </ThemeContext.Provider>
  );
};
