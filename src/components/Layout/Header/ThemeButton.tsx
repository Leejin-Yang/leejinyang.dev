import React from 'react';

import useTheme from '@/hooks/useTheme';

const THEME_OPTION = {
  light: {
    value: 'light',
    label: '라이트모드',
  },
  dark: {
    value: 'dark',
    label: '다크모드',
  },
} as const;

const ThemeButton = () => {
  const { theme, changeTheme } = useTheme();

  return (
    <button type='button' value={THEME_OPTION[theme].value} onClick={changeTheme}>
      {THEME_OPTION[theme].label}
    </button>
  );
};

export default ThemeButton;
