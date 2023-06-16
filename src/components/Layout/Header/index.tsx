import Link from 'next/link';
import { useRef } from 'react';

import styles from './header.module.scss';
import ThemeButton from './ThemeButton';

const Header = () => {
  const headerRef = useRef<HTMLElement>(null);

  return (
    <header className={styles.header} ref={headerRef}>
      <div className={styles.container}>
        <Link href='/' passHref>
          leejinyang.dev
        </Link>
        <div className={styles.tabMenus}>
          <Link href='https://leejinyang.com' target='_blank' rel='noopener noreferrer'>
            Portfolio
          </Link>
          <ThemeButton />
        </div>
      </div>
    </header>
  );
};

export default Header;
