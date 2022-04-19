import { Button, Col, Container, Grid, Row, Text } from '@nextui-org/react';
import Image from 'next/image';

import { PostContent } from '../types';
import Blocks from './Blocks';

type Tag = {
  name: string;
  color: string;
};

interface Props {
  title: String;
  subtitle?: String;
  published: string;
  tags?: Tag[];
  thumbnail?: string;
  content: PostContent[];
}

const Post = ({
  title,
  subtitle,
  thumbnail,
  published,
  tags,
  content,
}: Props) => {
  return (
    <>
      {thumbnail && (
        <Row
          css={{
            height: '30rem',
            mb: '2rem',
            overflow: 'hidden',
          }}
        >
          <Image
            src={thumbnail}
            alt="Post thumbnail"
            width={200}
            height={200}
            objectFit="cover"
            layout="fill"
          />
        </Row>
      )}
      <Container>
        <Grid.Container gap={2}>
          <Grid xs={0} sm={3} md={2}>
            <Col
              css={{
                position: 'relative',
                top: '0',
                height: 'fit-content',
                my: '2rem',
                '@sm': {
                  position: 'sticky',
                  top: '2rem',
                  height: '15rem',
                },
              }}
            >
              <Text as="span" size={16} color="$accents6">
                Posted
              </Text>
              <Text
                size={24}
                css={{
                  mt: 0,
                }}
              >
                {published}
              </Text>
              <Text
                as="span"
                size={16}
                color="$accents6"
                css={{
                  mt: '1rem',
                }}
              >
                Tagged
              </Text>
              {tags?.length &&
                tags.map((tag) => (
                  <Button
                    key={tag.name}
                    bordered
                    color="gradient"
                    auto
                    ghost
                    css={{
                      my: '0.5rem',
                    }}
                  >
                    {tag.name}
                  </Button>
                ))}
            </Col>
          </Grid>
          <Grid
            xs={12}
            sm={9}
            md={8}
            css={{
              flexDirection: 'column',
              px: 0,
              '@sm': {
                padding: '1.5rem',
              },
            }}
          >
            <Row justify="center">
              <Text
                as="h1"
                css={{
                  lineHeight: 1,
                  mb: '1rem',
                }}
              >
                {title}
              </Text>
            </Row>
            <Row justify="center">
              <Text as="p" color="$accents6">
                {subtitle}
              </Text>
            </Row>
            <Row css={{ mt: '2rem' }}>
              <Blocks content={content} />
            </Row>
          </Grid>
        </Grid.Container>
      </Container>
    </>
  );
};

export default Post;
