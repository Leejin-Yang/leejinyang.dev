export const THEMES = {
  LIGHT: 'light',
  DARK: 'dark',
} as const;

export const THEME_VALUES = Object.values(THEMES);

export type ThemeValue = typeof THEME_VALUES[number];
