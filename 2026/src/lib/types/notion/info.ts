import type { PageObjectResponse } from "@notionhq/client/build/src/api-endpoints";

export type InfoPageProperties = {
  Title: {
    title: { plain_text: string }[];
  };
  Info: {
    rich_text: { plain_text: string }[];
  };
};

export type InfoPage = Omit<PageObjectResponse, "properties"> & {
  properties: InfoPageProperties;
};
