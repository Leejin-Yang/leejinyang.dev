import styles from './footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.container}>
      <p>© {new Date().getFullYear()} Leejin Yang all rights reserved</p>
    </footer>
  );
};

export default Footer;
