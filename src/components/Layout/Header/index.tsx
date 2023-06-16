import Link from 'next/link';
import { useRef } from 'react';

import styles from './header.module.scss';

const Header = () => {
  const headerRef = useRef<HTMLElement>(null);

  return (
    <header className={styles.header} ref={headerRef}>
      <div className={styles.container}>
        <Link href='/' passHref>
          leejinyang.dev
        </Link>
        <div className={styles.tabMenus}>
          <button type='button'>다크모드</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
