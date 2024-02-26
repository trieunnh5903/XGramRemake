import { PropsWithChildren, createContext, useMemo } from 'react';
import layout from '../layout';
import React from 'react';
import { Appearance, ColorSchemeName, useColorScheme } from 'react-native';
import { DarkColors, LightColors } from '../colors';

export type Theme = {
  layout: typeof layout;
  colors: typeof DarkColors & typeof LightColors;
};

type Context = Theme & {
  changeTheme: (scheme: ColorSchemeName) => void;
};

export const ThemeContext = createContext<Context | undefined>(undefined);

function ThemeProvider({ children }: PropsWithChildren) {
  // Current theme variant
  const changeTheme = (scheme: ColorSchemeName) => {
    Appearance.setColorScheme(scheme);
  };
  const isDark = useColorScheme() === 'dark';
  const theme = useMemo(() => {
    return {
      layout,
      colors: isDark ? DarkColors : LightColors,
    };
  }, [isDark]);

  const value = useMemo(() => {
    return { ...theme, changeTheme };
  }, [theme]);

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

export default ThemeProvider;
