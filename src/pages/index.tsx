import type { GetStaticProps } from 'next';
import { unstable_serialize as unstableSerialize } from 'swr';

import CustomHead from '@/components/CustomHead';
import PostList from '@/components/PostList';
import Title from '@/components/Title';
import { getAllPosts } from '@/lib/posts';

const Home = () => {
  return (
    <>
      <CustomHead />
      <Title title='All Posts' main />
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
