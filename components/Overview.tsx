import NextLink from 'next/link';
import { Grid, Text } from '@nextui-org/react';
import styled from '@emotion/styled';

import { PostData } from '../types';
import Image from 'next/image';
import { formatDate } from '../helpers/formatDate';

interface Props {
  posts: PostData[];
}

const Overview = ({ posts }: Props) => {
  const highlightedPost = posts.filter(
    (post) => post.properties.highlighted.checkbox,
  )[0] as PostData;
  const otherPosts = posts.filter(
    (post) => !post.properties.highlighted.checkbox,
  );
  return (
    <>
      <NextLink
        href={`/blog/${highlightedPost.properties.slug.rich_text[0].plain_text}`}
        passHref
      >
        <HighLightedPost>
          <HighLightedPostImage>
            {highlightedPost.properties.thumbnail?.files[0]?.external?.url && (
              <Image
                src={
                  highlightedPost.properties.thumbnail?.files[0]?.external?.url
                }
                alt={highlightedPost.properties.name.title[0].plain_text}
                layout="fill"
                objectFit="cover"
              />
            )}
          </HighLightedPostImage>
          <HighLightedPostContent>
            <Text
              color="$accents6"
              css={{
                mt: '1rem',
              }}
            >
              {formatDate(highlightedPost.properties.published.date.start)}
            </Text>
            <Text
              h2
              css={{
                lineHeight: 1,
                my: '1rem',
                '@sm': {
                  fontSize: '3.5rem',
                },
              }}
            >
              {highlightedPost.properties.name.title[0].plain_text}
            </Text>
            <Text color="$accents6">
              {highlightedPost.properties.subtitle.rich_text[0].plain_text}
            </Text>
          </HighLightedPostContent>
        </HighLightedPost>
      </NextLink>
      <Grid.Container
        gap={2}
        justify="space-between"
        css={{
          marginTop: '0',
          paddingTop: '1rem',

          '@sm': {
            marginTop: '2rem',
            paddingTop: '1.5rem',
          },
        }}
      >
        {otherPosts.map((post: PostData) => (
          <Grid key={post.id} xs={12} md={6} lg={4}>
            <NextLink
              href={`/blog/${post.properties.slug.rich_text[0].plain_text}`}
              passHref
            >
              <a
                style={{
                  width: '100%',
                }}
              >
                <>
                  <PostImage>
                    {post.properties.thumbnail?.files[0]?.external?.url && (
                      <Image
                        src={post.properties.thumbnail?.files[0]?.external?.url}
                        alt={post.properties.name.title[0].plain_text}
                        layout="fill"
                        objectFit="cover"
                      />
                    )}
                  </PostImage>
                  <Text
                    color="$accents6"
                    css={{
                      mt: '1rem',
                    }}
                  >
                    {formatDate(post.properties.published.date.start)}
                  </Text>
                  <Text
                    h2
                    css={{
                      lineHeight: 1,
                      my: '1rem',
                    }}
                  >
                    {post.properties.name.title[0].plain_text}
                  </Text>
                  <Text color="$accents6">
                    {post.properties.subtitle.rich_text[0].plain_text}
                  </Text>
                </>
              </a>
            </NextLink>
          </Grid>
        ))}
      </Grid.Container>
    </>
  );
};

export default Overview;

const HighLightedPost = styled.a`
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  padding: 0 1rem;

  @media (min-width: 960px) {
    height: 30rem;
    padding: 1.5rem;
    flex-direction: row;
  }
`;

const HighLightedPostImage = styled.div`
  position: relative;
  height: 15rem;
  width: 100%;
  overflow: hidden;
  border-radius: 0.5rem;

  @media (min-width: 960px) {
    height: 100%;
  }
`;

const HighLightedPostContent = styled.div`
  width: 100%;
  height: 100%;
  padding: 0;

  @media (min-width: 960px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 1rem;
    width: 40rem;
  }
`;

const PostImage = styled.div`
  position: relative;
  height: 15rem;
  width: 100%;
  overflow: hidden;
  border-radius: 0.5rem;
`;
