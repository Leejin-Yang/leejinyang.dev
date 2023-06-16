import React from 'react';

import { DarkModeIcon, LightModeIcon } from '@/assets/svgs';
import useTheme from '@/hooks/useTheme';

const THEME_OPTION = {
  light: {
    value: 'light',
    icon: <LightModeIcon />,
  },
  dark: {
    value: 'dark',
    icon: <DarkModeIcon />,
  },
} as const;

const ThemeButton = () => {
  const { theme, changeTheme } = useTheme();

  return (
    <button type='button' value={THEME_OPTION[theme].value} onClick={changeTheme}>
      {THEME_OPTION[theme].icon}
    </button>
  );
};

export default ThemeButton;
