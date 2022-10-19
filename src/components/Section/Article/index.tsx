import ReactMarkdown from 'react-markdown';

import styles from './article.module.scss';

interface Props {
  content: string;
}

const Article = ({ content }: Props) => {
  return (
    <article className={styles.container}>
      <h3 className={styles.title}>제목</h3>
      <p className={styles.date}>10.10.2022</p>
      <ReactMarkdown>{content}</ReactMarkdown>
    </article>
  );
};

export default Article;
