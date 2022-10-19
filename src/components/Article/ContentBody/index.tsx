import Image from 'next/image';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { cb } from 'react-syntax-highlighter/dist/cjs/styles/prism';

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
          <Image src={image.properties.src} alt={image.alt} width={600} height={600} />
        </div>
      );
    }

    return <p>{paragraph.children}</p>;
  },

  code(code: any) {
    const { className, children, ...props } = code;
    const language = /language-(\w+)/.exec(className || ''); // language-tsx => tsx

    return language ? (
      <SyntaxHighlighter style={cb} language={language[1]} {...props}>
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
