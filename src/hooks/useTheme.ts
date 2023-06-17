import type { MouseEventHandler } from 'react';
import { useEffect } from 'react';

import { THEMES } from '@/constants/theme';

import useThemeAction from './useThemeAction';
import useThemeValue from './useThemeValue';

const useTheme = () => {
  const theme = useThemeValue();
  const setTheme = useThemeAction();

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const changeTheme: MouseEventHandler<HTMLButtonElement> = ({ currentTarget: { value } }) => {
    setTheme(value === THEMES.LIGHT ? THEMES.DARK : THEMES.LIGHT);
  };

  return { theme, changeTheme };
};

export default useTheme;
