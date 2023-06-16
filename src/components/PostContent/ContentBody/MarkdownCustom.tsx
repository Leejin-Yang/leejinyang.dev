/* eslint-disable @next/next/no-img-element */
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { prism, tomorrow } from 'react-syntax-highlighter/dist/cjs/styles/prism';

import useThemeValue from '@/hooks/useThemeValue';

import styles from './contentBody.module.scss';

const CustomParagraph = (paragraph: any) => {
  const { node, children } = paragraph;

  if (node.children[0].tagName === 'img') {
    const image = node.children[0];

    return (
      <div className={styles.image}>
        <img src={image.properties.src} alt={image.alt} />
      </div>
    );
  }

  return <p>{children}</p>;
};

const CustomAnchor = (anchor: any) => {
  const { children, href } = anchor;

  return (
    <a href={href} target='_blank' rel='noopener noreferrer'>
      {children}
    </a>
  );
};

const CustomCode = (code: any) => {
  const theme = useThemeValue();
  const { className, children, ...props } = code;

  const codeStyle = theme === 'light' ? prism : tomorrow;
  const language = /language-(\w+)/.exec(className || ''); // language-tsx => tsx

  return language ? (
    <SyntaxHighlighter style={codeStyle} language={language[1]} {...props}>
      {String(children).replace(/\n$/, '')}
    </SyntaxHighlighter>
  ) : (
    <code>{children}</code>
  );
};

const customComponents = {
  p: CustomParagraph,
  a: CustomAnchor,
  code: CustomCode,
};

export default customComponents;
