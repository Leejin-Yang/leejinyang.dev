import React from 'react';

import { DarkModeIcon, LightModeIcon } from '@/assets/svgs';
import { THEMES } from '@/constants/theme';
import useTheme from '@/hooks/useTheme';

import styles from './themeButton.module.scss';

export const themeOptions = {
  light: {
    value: THEMES.LIGHT,
    icon: <LightModeIcon />,
  },
  dark: {
    value: THEMES.DARK,
    icon: <DarkModeIcon />,
  },
} as const;

const ThemeButton = () => {
  const { theme, changeTheme } = useTheme();

  return (
    <button
      type='button'
      className={styles.button}
      value={themeOptions[theme].value}
      onClick={changeTheme}
    >
      {themeOptions[theme].icon}
    </button>
  );
};

export default ThemeButton;
