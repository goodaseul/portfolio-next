import type { PageObjectResponse } from "@notionhq/client/build/src/api-endpoints";

export type MenuPageProperties = {
  Name: { title: { plain_text: string }[] };
  Order: { number: number | null };
  Slug: { rich_text: { plain_text: string }[] };
  IsVisible: { checkbox: boolean };
};

export type MenuPage = Omit<PageObjectResponse, "properties"> & {
  properties: MenuPageProperties;
};
