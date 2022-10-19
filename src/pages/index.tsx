import type { GetStaticProps } from 'next';
import { unstable_serialize as unstableSerialize } from 'swr';

import PostList from '@/components/PostList';
import Title from '@/components/Title';
import { getAllPosts } from '@/lib/posts';

const Home = () => {
  return (
    <>
      <Title title='Dev Blog' main />
      <PostList />
    </>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const posts = getAllPosts(['content', 'data']);
  const postData = posts.map((post) => post.data);

  return {
    props: {
      fallback: { [unstableSerialize(['posts'])]: postData },
    },
  };
};
