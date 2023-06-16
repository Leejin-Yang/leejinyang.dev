import type { PropsWithChildren } from 'react';
import { createContext, useCallback, useState } from 'react';

type ThemeValue = 'light' | 'dark';
type ThemeAction = (newTheme: ThemeValue) => void;

const initialThemeValue = 'light';

export const ThemeValueContext = createContext<ThemeValue>(initialThemeValue);
export const ThemeActionContext = createContext<ThemeAction | null>(null);

const ThemeProvider = ({ children }: PropsWithChildren) => {
  const [theme, setTheme] = useState<ThemeValue>('light');

  const toggleTheme = useCallback((newTheme: ThemeValue) => {
    setTheme(newTheme);
  }, []);

  return (
    <ThemeActionContext.Provider value={toggleTheme}>
      <ThemeValueContext.Provider value={theme}>{children}</ThemeValueContext.Provider>
    </ThemeActionContext.Provider>
  );
};

export default ThemeProvider;
