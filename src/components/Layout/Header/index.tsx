import Link from 'next/link';
import { useRef } from 'react';

import styles from './header.module.scss';

const Header = () => {
  const headerRef = useRef<HTMLElement>(null);

  return (
    <header className={styles.container} ref={headerRef}>
      <div className={styles.domain}>
        <Link href='/' passHref>
          leejinyang.dev
        </Link>
      </div>
    </header>
  );
};

export default Header;
