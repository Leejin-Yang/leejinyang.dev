import Image from 'next/image';

import type { Post } from '@/types/post';

import styles from './postThumbnail.module.scss';

interface Props {
  post: Post;
}

const PostThumbnail = ({ post }: Props) => {
  return (
    <div className={styles.container}>
      <Image src={post.thumbnail} alt={post.title} width={360} height={270} />
      <div className={styles.postData}>
        <div className={styles.metaData}>
          <span>{post.date}</span>
          <span>{post.category}</span>
        </div>
        <p className={styles.title}>{post.title}</p>
        <p className={styles.desc}>{post.description}</p>
      </div>
    </div>
  );
};

export default PostThumbnail;
