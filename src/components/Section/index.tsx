import Link from 'next/link';
import useSWR from 'swr';

import type { Post } from '@/types/post';

import styles from './section.module.scss';

const Section = () => {
  const { data: posts } = useSWR<Post[]>(['posts']);

  return (
    <section className={styles.container}>
      {posts?.map((post) => (
        <Link href={`/blog/${post?.slug}`} key={post.slug}>
          {post?.title}
        </Link>
      ))}
    </section>
  );
};

export default Section;
