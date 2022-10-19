import styles from './navbar.module.scss';

interface Props {
  category: string;
  title: string;
}

const Navbar = ({ category, title }: Props) => {
  return (
    <nav className={styles.container}>
      <p>{category}</p>
      <p>&gt;</p>
      <p>{title}</p>
    </nav>
  );
};

export default Navbar;
