import useSWR from 'swr';

import type { Post } from '@/types/post';

import ContentBody from './ContentBody';
import styles from './postContent.module.scss';

interface Props {
  slug: string;
}

const PostContent = ({ slug }: Props) => {
  const { data: post } = useSWR<Post>(['posts', slug as string]);

  return (
    <article className={styles.container}>
      <time className={styles.date}>{post?.data.date}</time>
      <ContentBody content={post?.content} />
    </article>
  );
};

export default PostContent;
