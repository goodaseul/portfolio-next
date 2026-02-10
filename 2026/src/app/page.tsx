import ProjectList from "./_components/ProjectList";
import Tab from "./_components/Tab";
import ProgressBar from "@/components/common/ProgressBar";
import Loading from "@/components/common/Loading";
import { Suspense } from "react";

type SearchParamsProp = {
  way?: string;
};

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<SearchParamsProp>;
}) {
  const sp = await searchParams;
  const tabWay = sp.way ?? "all";

  return (
    <>
      <ProgressBar />
      <section className="p-6 md:p-10">
        <div>
          <Tab current={tabWay} />
          <Suspense fallback={<Loading />}>
            <ProjectList tabWay={tabWay} />
          </Suspense>
        </div>
      </section>
    </>
  );
}
