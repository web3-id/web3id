import { Client } from '@notionhq/client';

const notion = new Client({
  auth: process.env.NEXT_PUBLIC_NOTION_TOKEN,
});

// Get all posts 
export const getPosts = async () => {
  // Grab all blog posts from the Notion database
  const query = {
    database_id: process.env.NEXT_PUBLIC_NOTION_DATABASE_ID,
    // sorts: [
    //   {
    //     property: 'published',
    //     direction: 'descending',
    //   },
    // ],
  };
  // @ts-ignore
  return await notion.databases.query(query);
};

// Get a Notion database page by ID
export const getPost = async (id: string) => {
  return await notion.pages.retrieve({ page_id: id })
}

// Get all child blocks given a parent page ID
export const getPostContent = async (id: string) => {
  const baseQuery = {
    block_id: id,
    page_size: 100,
  };
  let results = [];
  let postContent = await notion.blocks.children.list(baseQuery);
  results = [...postContent.results];
  while (postContent.has_more) {
    postContent = await notion.blocks.children.list({
      ...baseQuery,
      // @ts-ignore
      start_cursor: postContent.next_cursor,
    });
    results = [...results, ...postContent.results];
  }
  return results;
};