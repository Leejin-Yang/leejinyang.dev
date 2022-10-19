import type { GetStaticProps } from 'next';
import { unstable_serialize as unstableSerialize } from 'swr';

import Section from '@/components/Section';
import Title from '@/components/Title';
import { getAllPosts } from '@/lib/posts';

const Home = () => {
  return (
    <>
      <Title title='Dev Blog' main />
      <Section />
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
