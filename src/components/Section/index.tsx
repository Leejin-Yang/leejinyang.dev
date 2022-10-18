import Title from '../Title';
import Article from './Article';
import styles from './section.module.scss';

const Section = () => {
  return (
    <section className={styles.container}>
      <Title title='Reframe, Rearrange, Repeat' />
      <Article />
      <Article />
      <Article />
      <Article />
    </section>
  );
};

export default Section;
