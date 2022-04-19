import { GetStaticPropsContext } from 'next';
import Head from 'next/head';
import { compact } from 'lodash';

import { getPost, getPostContent, getPosts } from '../../lib/api';
import { Page, PostData, PostContent } from '../../types';

import Post from '../../components/Post';

interface Props {
  postData: PostData;
  postContent: PostContent[];
}

const BlogPost = ({ postData, postContent }: Props) => {
  const title = postData.properties.name.title[0].plain_text;
  const subtitle = postData.properties.subtitle.rich_text[0].plain_text;
  const published = postData.properties.published.date.start;
  const tags = postData.properties.tags.multi_select;
  const thumbnail = postData.properties.thumbnail?.files[0]?.external.url;

  return (
    <>
      <Head>
        <title>Blog - {title}</title>
        <meta name="description" content={subtitle} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Post
        title={title}
        subtitle={subtitle}
        published={published}
        tags={tags}
        thumbnail={thumbnail}
        content={postContent}
      />
    </>
  );
};

export default BlogPost;

export async function getStaticProps(context: GetStaticPropsContext) {
  // Grab the slug from the post URL
  const slug: string | string[] | undefined =
    context.params && context.params.slug;
  // Get all posts from the Notion database
  const posts: any = await getPosts();
  // Find the post with a matching slug property
  const matchedPost = posts.results.filter((post: Page) => {
    if (post && post.properties && post.properties.slug) {
      return post.properties.slug.rich_text?.[0].plain_text === slug;
    }
  })[0];

  // Get the Notion page data and all child block data
  const [postData, postContent] = await Promise.all([
    getPost(matchedPost.id),
    getPostContent(matchedPost.id),
  ]);
  // Next.js passes the data to my React template for rendering
  return {
    props: {
      postId: matchedPost.id,
      postData,
      postContent,
    },
    revalidate: 60,
  };
}

export async function getStaticPaths() {
  const posts: any = await getPosts();

  const postSlugs = compact(
    posts.results.map((post: Page) => {
      if (
        post.properties &&
        post.properties.slug &&
        post.properties.slug.rich_text
      ) {
        return `/blog/${post.properties.slug.rich_text[0].plain_text}`;
      }
    }),
  );
  return {
    paths: postSlugs,
    fallback: 'blocking',
  };
}
