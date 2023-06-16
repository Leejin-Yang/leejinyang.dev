import { useContext } from 'react';

import { ThemeActionContext } from '@/contexts/ThemeContext';

const useThemeAction = () => {
  const setTheme = useContext(ThemeActionContext);

  if (setTheme === undefined || setTheme === null) {
    throw new Error('useThemeAction must be used in ThemeProvider');
  }

  return setTheme;
};

export default useThemeAction;
