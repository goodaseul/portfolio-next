import type { PageObjectResponse } from "@notionhq/client/build/src/api-endpoints";

export interface NotionMenuItem {
  id: string;
  name: string;
  order: number;
  slug: string;
  isVisible: boolean;
}

type MenuPageProperties = {
  Name: {
    title: { plain_text: string }[];
  };
  Order: {
    number: number | null;
  };
  Slug: {
    rich_text: { plain_text: string }[];
  };
  IsVisible: {
    checkbox: boolean;
  };
};

export type MenuPage = Omit<PageObjectResponse, "properties"> & {
  properties: MenuPageProperties;
};

export interface NotionProjectItem {
  id: string;
  name: string;
  demoUrl: string;
  repoUrl: string;
  techStack: string[];
  status: string[];
  isVisible: boolean;
  startDate: string;
  endDate: string;
  way: string[];
  background: string;
  role: string;
  result: string;
}

type ProjectPageProperties = {
  Name: {
    title: { plain_text: string }[];
  };
  DemoUrl: {
    url: string | null;
  };
  RepoUrl: {
    url: string | null;
  };
  TechStack: {
    multi_select: { name: string }[];
  };
  Status: {
    multi_select: { name: string }[];
  };
  IsVisible: {
    checkbox: boolean;
  };
  StartDate: {
    date: {
      start: string;
    } | null;
  };
  EndDate: {
    date: {
      start: string;
    } | null;
  };
  Way: {
    multi_select: { name: string }[];
  };
  Background: {
    rich_text: { plain_text: string }[];
  };
  Role: {
    rich_text: { plain_text: string }[];
  };
  Result: {
    rich_text: { plain_text: string }[];
  };
};

export type ProjectPage = Omit<PageObjectResponse, "properties"> & {
  properties: ProjectPageProperties;
};
