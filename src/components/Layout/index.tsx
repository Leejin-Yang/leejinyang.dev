import type { ReactNode } from 'react';

import Footer from './Footer';
import Header from './Header';
import styles from './layout.module.scss';

interface Props {
  children: ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <>
      <Header />
      <main className={styles.main}>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
