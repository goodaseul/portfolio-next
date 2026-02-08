// lib/menu/getMenu.ts
import notion from "../notion";
import type { NotionMenuItem, MenuPage } from "../types";

export async function getMenus(): Promise<NotionMenuItem[]> {
  try {
    const response = await notion.databases.query({
      database_id: process.env.NOTION_DATABASE_MENU_ID!,
      sorts: [{ property: "Order", direction: "ascending" }],
    });

    const pages = response.results as MenuPage[];

    return pages.map((page) => ({
      id: page.id,
      name: page.properties["Name"]?.title?.[0]?.plain_text ?? "",
      order: page.properties["Order"]?.number ?? 0,
      slug: page.properties["Slug"]?.rich_text?.[0]?.plain_text ?? "/",
      isVisible: page.properties["IsVisible"]?.checkbox ?? false,
    }));
  } catch (error) {
    console.error("Failed to fetch menu:", error);
    return [];
  }
}
