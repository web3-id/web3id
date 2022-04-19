export type Page = {
  database_id: string;
  properties: {
    slug: {
      rich_text: {
        plain_text: string;
      }[];
    };
  };
};

export type PostData = {
  id: string;
  properties: {
    name: {
      title: {
        plain_text: string;
      }[];
    };
    subtitle: {
      rich_text: {
        plain_text: string;
      }[];
    };
    slug: {
      rich_text: {
        plain_text: string;
      }[];
    };
    published: {
      date: {
        start: string;
      };
    };
    highlighted: {
      checkbox: boolean;
    };
    tags: {
      multi_select: {
        name: string;
        color: string;
      }[];
    };
    thumbnail: {
      files: {
        external: {
          url: string;
        };
      }[];
    };
  };
};

export type PostContent = {
  type: string;
  paragraph?: {
    text: {
      text: {
        content: string;
      };
    }[];
  };
};
