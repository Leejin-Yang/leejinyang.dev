import Link from 'next/link';
import useSWR from 'swr';

import type { Post } from '@/types/post';

import Title from '../Title';
import styles from './postList.module.scss';
import PostThumbnail from './PostThumbnail';

const PostList = () => {
  const { data: posts } = useSWR<Post[]>(['posts']);

  return (
    <section className={styles.container}>
      <Title title='Refresh' />
      <ul className={styles.thumbnailList}>
        {posts?.map((post) => (
          <li key={post.slug}>
            <Link href={`/blog/${post?.slug}`} passHref legacyBehavior>
              <a href='replace' className={styles.postLink}>
                <PostThumbnail post={post} />
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default PostList;
