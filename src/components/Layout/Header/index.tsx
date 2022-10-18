import Link from 'next/link';

import styles from './header.module.scss';
import Search from './Search';

const Header = () => {
  return (
    <header className={styles.container}>
      <p>Blog</p>
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
