import Link from 'next/link';
import { useRef } from 'react';

import styles from './header.module.scss';
import Search from './Search';

const Header = () => {
  const headerRef = useRef<HTMLElement>(null);

  return (
    <header className={styles.container} ref={headerRef}>
      <Link href='/blog'>Blog</Link>
      <Link href='/' passHref>
        <a href='replace' className={styles.domain}>
          Domain
        </a>
      </Link>
      <Search />
    </header>
  );
};

export default Header;
