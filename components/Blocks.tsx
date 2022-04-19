import { Fragment } from 'react';
import { Card, Link, Text } from '@nextui-org/react';
import Image from 'next/image';
import { PostContent } from '../types';

const renderBlock = (block: any) => {
  const { type, id } = block;
  const value = block[type];

  switch (type) {
    case 'paragraph':
      return (
        <Text as="p" css={{ mb: '1rem' }}>
          {value.text.map((item: any, key: number) => {
            if (item.href)
              return (
                <Link href={item.href} style={{ textDecoration: 'underline' }}>
                  {item.plain_text}
                </Link>
              );
            return <Fragment key={key}>{item.plain_text}</Fragment>;
          })}
        </Text>
      );
    case 'heading_1':
      return value.text.map((text: any, key: number) => (
        <Text key={key} as="h1" css={{ my: '0.5rem' }}>
          {text.text.content}
        </Text>
      ));
    case 'heading_2':
      return value.text.map((text: any, key: number) => (
        <Text key={key} as="h2" css={{ my: '0.5rem' }}>
          {text.text.content}
        </Text>
      ));
    case 'heading_3':
      return value.text.map((text: any, key: number) => (
        <Text key={key} as="h3" css={{ my: '0.5rem' }}>
          {text.text.content}
        </Text>
      ));
    case 'numbered_list_item':
    case 'bulleted_list_item':
      return value.text.map((text: any, key: number) => (
        <Text key={key} as="li">
          {text.text.content}
        </Text>
      ));
    // case 'to_do':
    //   return (
    //     <div>
    //       <label htmlFor={id}>
    //         <Checkbox id={id} checked={value.checked} />
    //         <Text>{value.text[0]}</Text>
    //       </label>
    //     </div>
    //   );
    // case 'toggle':
    //   return (
    //     <details>
    //       <summary>
    //         <Text>{value.text[0]}</Text>
    //       </summary>
    //       {value.children?.map((block: any) => (
    //         <Fragment key={block.id}>{renderBlock(block)}</Fragment>
    //       ))}
    //     </details>
    //   );
    case 'image':
      const src =
        value.type === 'external' ? value.external.url : value.file.url;
      const caption = value.caption ? value.caption[0]?.plain_text : '';
      return (
        <Card
          css={{
            position: 'relative',
            height: '25rem',
            boxShadow: '$md',
            mb: '2rem',
          }}
        >
          <figure>
            <Image src={src} alt={caption} layout="fill" objectFit="cover" />
            {caption && (
              <Text as="figcaption" color="$accents6">
                {caption}
              </Text>
            )}
          </figure>
        </Card>
      );
    case 'divider':
      return <hr key={id} />;
    case 'quote':
      return <blockquote key={id}>{value.text[0].plain_text}</blockquote>;
    default:
      return `❌ Unsupported block (${
        type === 'unsupported' ? 'unsupported by Notion API' : type
      })`;
  }
};

interface Props {
  content: PostContent[];
}

const Blocks = ({ content }: Props) => (
  <div>
    {content?.map((block: any) => (
      <Fragment key={block.id}>{renderBlock(block)}</Fragment>
    ))}
  </div>
);

export default Blocks;
