import {PropsWithChildren, createContext, useMemo} from 'react';
import layout from '../layout';
import React from 'react';
export type Theme = {
  layout: typeof layout;
};

type Context = Theme & {
  changeTheme: (variant: string) => void;
};

function ThemeProvider({children}: PropsWithChildren) {
  // Current theme variant

  const changeTheme = (_nextVariant: string) => {};

  const theme = useMemo(() => {
    return {
      layout,
    };
  }, []);

  const value = useMemo(() => {
    return {...theme, changeTheme};
  }, [theme]);
  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

export const ThemeContext = createContext<Context | undefined>(undefined);
export default ThemeProvider;
