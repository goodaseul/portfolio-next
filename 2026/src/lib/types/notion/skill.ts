import type { PageObjectResponse } from "@notionhq/client/build/src/api-endpoints";

export type SkillPageProperties = {
  Title: { title: { plain_text: string }[] };
  Order: { number: number | null };
  IsVisible: { checkbox: boolean };
};

export type SkillPage = Omit<PageObjectResponse, "properties"> & {
  properties: SkillPageProperties;
};
