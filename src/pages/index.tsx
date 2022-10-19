import type { GetStaticProps } from 'next';

import Section from '@/components/Section';
import Title from '@/components/Title';
import { getAllPosts } from '@/lib/posts';
import type { Post } from '@/types/post';

interface Props {
  posts: Post[];
}

const Home = ({ posts }: Props) => {
  return (
    <>
      <Title title='Dev Blog' main />
      <Section posts={posts} />
    </>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const posts = getAllPosts(['content', 'data']);

  return {
    props: {
      posts,
    },
  };
};
