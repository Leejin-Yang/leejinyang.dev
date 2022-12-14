/* eslint-disable @next/next/no-img-element */
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { prism } from 'react-syntax-highlighter/dist/cjs/styles/prism';

import styles from './contentBody.module.scss';

interface Props {
  content: string;
}

const customComponents = {
  p(paragraph: any) {
    const { node } = paragraph;

    if (node.children[0].tagName === 'img') {
      const image = node.children[0];

      return (
        <div className={styles.image}>
          <img src={image.properties.src} alt={image.alt} />
        </div>
      );
    }

    return <p>{paragraph.children}</p>;
  },

  a(anchor: any) {
    return (
      <a href={anchor.href} target='_blank' rel='noopener noreferrer'>
        {anchor.children}
      </a>
    );
  },

  code(code: any) {
    const { className, children, ...props } = code;
    const language = /language-(\w+)/.exec(className || ''); // language-tsx => tsx

    return language ? (
      <SyntaxHighlighter style={prism} language={language[1]} {...props}>
        {String(children).replace(/\n$/, '')}
      </SyntaxHighlighter>
    ) : (
      <code>{children}</code>
    );
  },
};

const ContentBody = ({ content }: Props) => {
  return (
    <article className={styles.container}>
      <ReactMarkdown components={customComponents}>{content}</ReactMarkdown>
    </article>
  );
};

export default ContentBody;
