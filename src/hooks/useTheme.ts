import type { MouseEventHandler } from 'react';
import { useEffect } from 'react';

import useThemeAction from './useThemeAction';
import useThemeValue from './useThemeValue';

const useTheme = () => {
  const theme = useThemeValue();
  const setTheme = useThemeAction();

  useEffect(() => {
    document.documentElement.setAttribute('background-theme', theme);
  }, [theme]);

  const changeTheme: MouseEventHandler<HTMLButtonElement> = ({ currentTarget: { value } }) => {
    setTheme(value === 'light' ? 'dark' : 'light');
  };

  return { theme, changeTheme };
};

export default useTheme;
