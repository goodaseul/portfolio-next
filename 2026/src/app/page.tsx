import { getProjects } from "@/lib/queries/getProjects";
import ProjectList from "./_components/ProjectList";
import Tab from "./_components/Tab";
import ProgressBar from "@/components/common/ProgressBar";

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
    <>
      <ProgressBar />
      <section className="p-6 md:p-10">
        <div>
          <Tab current={tabWay} />
          <ProjectList projects={filteredProjects} />
        </div>
      </section>
    </>
  );
}
