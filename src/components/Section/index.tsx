// import Title from '../Title';
import type { Post } from '@/types/post';

import Article from '../Article';
import styles from './section.module.scss';

interface Props {
  posts: Post[];
}

const Section = ({ posts }: Props) => {
  return (
    <section className={styles.container}>
      {/* <Title title='Reframe, Rearrange, Repeat' /> */}
      {posts?.map(({ data, content }) => (
        <Article key={data.slug} content={content} />
      ))}
    </section>
  );
};

export default Section;
