import type { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import useSWR, { unstable_serialize as unstableSerialize } from 'swr';

import Navbar from '@/components/Navbar';
import PostContent from '@/components/PostContent';
import Title from '@/components/Title';
import { getPostByFileName, getPostFileNames } from '@/lib/posts';
import type { Post } from '@/types/post';

const PostPage = () => {
  const router = useRouter();
  const { slug } = router.query;

  const { data: post } = useSWR<Post>(['posts', slug as string]);

  return (
    <>
      <Navbar category={post?.data.category} title={post?.data.title} />
      <Title title={post?.data.title} />
      <PostContent slug={slug as string} />
    </>
  );
};

export default PostPage;

export const getStaticProps: GetStaticProps = async (context) => {
  const { slug } = context.params || {};

  if (typeof slug !== 'string') {
    return {
      props: {},
    };
  }

  const post = getPostByFileName(slug, ['content', 'data']);

  return {
    props: {
      fallback: { [unstableSerialize(['posts', slug])]: post },
    },
  };
};

export const getStaticPaths: GetStaticPaths = () => {
  const fileNames = getPostFileNames();
  const getSlug = (fileName: string) => `${fileName.split('.')[0]}`;

  const paths = fileNames.map((fileName) => ({ params: { slug: getSlug(fileName) } }));

  return {
    paths,
    fallback: false,
  };
};
