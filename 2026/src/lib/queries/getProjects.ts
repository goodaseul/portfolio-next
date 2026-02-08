import notion from "../notion";
import { ProjectItem } from "../types/models";
import { ProjectPage } from "../types/notion";

export async function getProjects(): Promise<ProjectItem[]> {
  try {
    const response = await notion.databases.query({
      database_id: process.env.NOTION_DATABASE_PROJECT_ID!,
      sorts: [
        {
          property: "StartDate",
          direction: "descending",
        },
      ],
    });

    const pages = response.results as ProjectPage[];

    const projects = pages.map((page) => ({
      id: page.id,
      name: page.properties["Name"]?.title?.[0]?.plain_text ?? "",
      demoUrl: page.properties["DemoUrl"]?.url ?? "",
      repoUrl: page.properties["RepoUrl"]?.url ?? "",
      techStack:
        page.properties["TechStack"]?.multi_select?.map(
          (type: { name: string }) => type.name,
        ) ?? [],
      status:
        page.properties["Status"]?.multi_select?.map(
          (type: { name: string }) => type.name,
        ) ?? [],
      startDate: page.properties["StartDate"]?.date?.start ?? "",
      endDate: page.properties["EndDate"]?.date?.start ?? "",
      isVisible: page.properties["IsVisible"]?.checkbox ?? false,
      way:
        page.properties["Way"]?.multi_select?.map(
          (type: { name: string }) => type.name,
        ) ?? [],
      background:
        page.properties["Background"]?.rich_text?.[0]?.plain_text ?? "",
      role: page.properties["Role"]?.rich_text?.[0]?.plain_text ?? "",
      result: page.properties["Result"]?.rich_text?.[0]?.plain_text ?? "",
    }));

    return projects.filter((project) => project.isVisible);
  } catch (error) {
    console.error("Failed to fetch projects:", error);
    return [];
  }
}
