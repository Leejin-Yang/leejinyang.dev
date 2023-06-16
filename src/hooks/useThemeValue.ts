import { useContext } from 'react';

import { ThemeValueContext } from '@/contexts/ThemeContext';

const useThemeValue = () => {
  const theme = useContext(ThemeValueContext);

  if (theme === undefined || theme === null) {
    throw new Error('useThemeValue must be used in ThemeProvider');
  }

  return theme;
};

export default useThemeValue;
