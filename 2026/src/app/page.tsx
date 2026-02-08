import ProjectList from "@/components/project/ProjectList";
import Tab from "@/components/project/Tab";
import { getProjects } from "@/lib/queries/getProjects";

type SearchParamsProp = {
  way?: string;
};

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<SearchParamsProp>;
}) {
  const sp = await searchParams;
  const projects = await getProjects();
  const tabWay = sp.way ?? "all";
  const filteredProjects =
    tabWay === "all"
      ? projects
      : projects.filter((project) => project.way.includes(tabWay));

  return (
    <section className="p-6 md:p-10">
      <div>
        <Tab current={tabWay} />
        <ProjectList projects={filteredProjects} />
      </div>
    </section>
  );
}
