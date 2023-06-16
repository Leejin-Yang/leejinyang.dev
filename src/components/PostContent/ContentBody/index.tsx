import ReactMarkdown from 'react-markdown';

import styles from './contentBody.module.scss';
import customComponents from './MarkdownCustom';

interface Props {
  content: string;
}

const ContentBody = ({ content }: Props) => {
  return (
    <article className={styles.container}>
      <ReactMarkdown components={customComponents}>{content}</ReactMarkdown>
    </article>
  );
};

export default ContentBody;
