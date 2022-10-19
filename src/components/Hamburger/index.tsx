import styles from './hamburger.module.scss';

interface Props {
  onClick: () => void;
}

const Hamburger = ({ onClick }: Props) => {
  return (
    <button type='button' className={styles.container} onClick={onClick}>
      Hamburger
    </button>
  );
};

export default Hamburger;
