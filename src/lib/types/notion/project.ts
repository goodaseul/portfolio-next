import type { PageObjectResponse } from "@notionhq/client/build/src/api-endpoints";

export type ProjectPageProperties = {
  Name: { title: { plain_text: string }[] };
  DemoUrl: { url: string | null };
  RepoUrl: { url: string | null };
  TechStack: { multi_select: { name: string }[] };
  Status: { multi_select: { name: string }[] };
  IsVisible: { checkbox: boolean };
  StartDate: { date: { start: string } | null };
  EndDate: { date: { start: string } | null };
  Way: { multi_select: { name: string }[] };
  Background: { rich_text: { plain_text: string }[] };
  Role: { rich_text: { plain_text: string }[] };
  Result: { rich_text: { plain_text: string }[] };
};

export type ProjectPage = Omit<PageObjectResponse, "properties"> & {
  properties: ProjectPageProperties;
};
