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
        <div className="p-5 mb-10 border-l-2 border-l-point bg-foreground/10 font-bold break-keep">
          안녕하세요. 4년간 웹 퍼블리셔로 다양한 화면을 구현하며 프론트엔드
          개발에 관심을 갖게 되었고, React와 TypeScript를 중심으로 개발 역량을
          확장해왔습니다. <br />
          개인 프로젝트와 협업 프로젝트를 통해 상태 관리, API 연동, 컴포넌트
          설계 등을 직접 구현하며 서비스 단위의 개발 경험을 쌓았습니다. <br />
          문제를 구조적으로 분석하고, 유지보수성과 사용자 경험을 함께 고려하는
          프론트엔드 개발자를 목표로 하고 있습니다.
        </div>
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
