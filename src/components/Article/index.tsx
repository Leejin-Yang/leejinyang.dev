import useSWR from 'swr';

import type { Post } from '@/types/post';

import styles from './article.module.scss';
import ContentBody from './ContentBody';

interface Props {
  slug: string;
}

const Article = ({ slug }: Props) => {
  const { data: post } = useSWR<Post>(['posts', slug as string]);

  return (
    <article className={styles.container}>
      <time className={styles.date}>{post?.data.date}</time>
      <ContentBody content={post?.content} />
    </article>
  );
};

export default Article;
