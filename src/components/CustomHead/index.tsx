import Head from 'next/head';

import { DOMAIN } from '@/constants/domain';
import type { Post } from '@/types/post';

interface Props {
  post?: Post;
}

const CustomHead = ({ post }: Props) => {
  return post ? (
    <Head>
      <title>{post.data.title} | LeejinYang Blog</title>
      <meta name='description' content={post.data.description} />
      <meta property='og:title' content={`${post.data.title} | LeejinYang Blog`} />
      <meta property='og:description' content={post.data.description} />
      <meta property='og:url' content={`${DOMAIN}/${post.data.slug}`} />
      <meta property='og:site_name' content={`${post.data.title} | LeejinYang Blog`} />
      <meta property='og:type' content='website' />
      <meta property='og:image' content={`${DOMAIN}/${post.data.thumbnail}`} />
      <meta property='og:image:alt' content={post.data.description} />

      <meta name='twitter:card' content='summary_large_image' />
      <meta property='twitter:domain' content={DOMAIN} />
      <meta property='twitter:url' content={`${DOMAIN}/${post.data.slug}`} />
      <meta name='twitter:title' content={`${post.data.title} | LeejinYang Blog`} />
      <meta name='twitter:description' content={post.data.description} />
      <meta name='twitter:image' content={`${DOMAIN}/${post.data.thumbnail}`} />
      <meta name='twitter:image:alt' content={post.data.description} />
      <meta name='article:published_time' content={`${post.data.date}T09:00:00.000Z`} />
    </Head>
  ) : (
    <Head>
      <title>LeejinYang Blog</title>
      <meta name='description' content='양이진 기술 블로그' />
      <meta property='og:title' content='LeejinYang Blog' />
      <meta property='og:description' content='양이진 기술 블로그' />
      <meta property='og:url' content={DOMAIN} />
      <meta property='og:site_name' content='LeejinYang Blog' />
      <meta property='og:type' content='website' />
      <meta property='og:image' content={`${DOMAIN}/og-image.png`} />
      <meta property='og:image:alt' content='양이진 기술 블로그' />

      <meta name='twitter:card' content='summary_large_image' />
      <meta property='twitter:domain' content={DOMAIN} />
      <meta property='twitter:url' content={DOMAIN} />
      <meta name='twitter:title' content='LeejinYang Blog' />
      <meta name='twitter:description' content='양이진 기술 블로그' />
      <meta name='twitter:image' content={`${DOMAIN}/og-image.png`} />
      <meta name='twitter:image:alt' content='양이진 기술 블로그' />
    </Head>
  );
};

export default CustomHead;
