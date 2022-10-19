import styles from './article.module.scss';
import ContentBody from './ContentBody';

interface Props {
  content: string;
}

const Article = ({ content }: Props) => {
  return (
    <article className={styles.container}>
      <h3 className={styles.title}>제목</h3>
      <time className={styles.date}>10.10.2022</time>
      <ContentBody content={content} />
    </article>
  );
};

export default Article;
