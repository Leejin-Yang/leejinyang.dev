import cx from 'classnames';

import styles from './title.module.scss';

interface Props {
  main?: true;
  title: string;
}

const Title = ({ main, title }: Props) => {
  if (main) {
    return <h1 className={cx(styles.title, styles.main)}>{title}</h1>;
  }

  return <h2 className={styles.title}>{title}</h2>;
};

export default Title;
