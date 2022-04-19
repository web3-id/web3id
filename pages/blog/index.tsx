import Head from 'next/head';
import { Container, Text } from '@nextui-org/react';

import { getPosts } from '../../lib/api';
import Overview from '../../components/Overview';

const BlogOverview = ({ posts = [] }: any) => {
  return (
    <div>
      <Head>
        <title>Blog - a Next.js app using NextUI as a react UI library</title>
        <meta
          name="description"
          content="a Next.js app using NextUI as a react UI library"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container
        as="main"
        css={{
          maxW: '75rem',
          marginTop: '2rem',
        }}
      >
        <Overview posts={posts.results} />
      </Container>
    </div>
  );
};

export default BlogOverview;

export async function getStaticProps() {
  // Get all posts from the Notion database
  const posts: any = await getPosts();

  return {
    props: {
      posts,
    },
    revalidate: 60,
  };
}
