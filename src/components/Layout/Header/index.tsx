import Link from 'next/link';
import { useRef } from 'react';

import styles from './header.module.scss';
import Search from './Search';

const Header = () => {
  const headerRef = useRef<HTMLElement>(null);

  return (
    <header className={styles.container} ref={headerRef}>
      <Link href='/'>Blog</Link>
      <div className={styles.domain}>
        <Link href='/' passHref>
          leejinyang.dev
        </Link>
      </div>
      <Search />
    </header>
  );
};

export default Header;
