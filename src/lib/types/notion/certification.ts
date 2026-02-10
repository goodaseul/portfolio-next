import type { PageObjectResponse } from "@notionhq/client/build/src/api-endpoints";

export type CertificationPageProperties = {
  Title: {
    title: { plain_text: string }[];
  };
  Date: {
    rich_text: { plain_text: string }[];
  };
  Located: {
    rich_text: { plain_text: string }[];
  };
  Description: {
    rich_text: { plain_text: string }[];
  };
};

export type CertificationPage = Omit<PageObjectResponse, "properties"> & {
  properties: CertificationPageProperties;
};
