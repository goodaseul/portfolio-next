import type { PageObjectResponse } from "@notionhq/client/build/src/api-endpoints";

export type EducationPageProperties = {
  Title: {
    title: { plain_text: string }[];
  };
  Date: {
    rich_text: { plain_text: string }[];
  };
  Description: {
    rich_text: { plain_text: string }[];
  };
};

export type EducationPage = Omit<PageObjectResponse, "properties"> & {
  properties: EducationPageProperties;
};
